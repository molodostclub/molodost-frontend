export const TRAVELLINE_CONTEXT_ID = 'TL-INT-molodost-club_2025-04-29';

/** Container id for the full booking form on /booking. */
export const BOOKING_FORM_CONTAINER_ID = 'tl-booking-form';

const LOADER_HOSTS = [
	'ru-ibe.tlintegration.ru',
	'ibe.tlintegration.ru',
	'ibe.tlintegration.com',
];

export const TRAVELLINE_LOADER_URL = `https://${LOADER_HOSTS[0]}/integration/loader.js`;

type QueueCommand = [string, ...unknown[]];

type TravellineIntegration = {
	__cq?: unknown;
	__loader?: boolean;
	loaded?: boolean;
	embed?: (widget: string, options?: { container?: string }) => void;
};

function getIntegration(): TravellineIntegration {
	const w = window;
	const t = (w.travelline = w.travelline || {});
	return (t.integration = t.integration || {});
}

function getOrCreateQueue(): QueueCommand[] {
	const ti = getIntegration();
	if (!Array.isArray(ti.__cq)) {
		ti.__cq = [];
	}
	return ti.__cq as QueueCommand[];
}

function hasQueuedEmbed(queue: QueueCommand[], widget: string, containerId: string): boolean {
	return queue.some(
		(cmd) =>
			cmd[0] === 'embed' &&
			cmd[1] === widget &&
			(cmd[2] as { container?: string } | undefined)?.container === containerId,
	);
}

function isIntegrationReady(): boolean {
	const ti = getIntegration();
	return Boolean(window.TL && typeof ti.embed === 'function');
}

function embedViaApi(widget: string, containerId: string): boolean {
	if (!isIntegrationReady()) return false;

	try {
		getIntegration().embed!(widget, { container: containerId });
		return true;
	} catch {
		return false;
	}
}

function hasLoaderScriptInDom(): boolean {
	return Boolean(document.querySelector('script[src*="tlintegration"]'));
}

function appendLoaderScript(): void {
	const w = window;
	const d = w.document;
	const head = d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0];

	const tryHost = (hosts: string[]) => {
		if (hosts.length === 0) return;

		const script = d.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = `https://${hosts[0]}/integration/loader.js`;

		const onDone = () => {
			if (!w.TL) {
				head.removeChild(script);
				tryHost(hosts.slice(1));
			}
		};

		script.onerror = onDone;
		script.onload = onDone;
		head.appendChild(script);
	};

	tryHost(LOADER_HOSTS);
}

/** Ensures loader.js is present. Skips duplicate injection when Next.js Script already added the tag. */
function ensureLoader(): void {
	const ti = getIntegration();
	if (ti.__loader) return;

	ti.__loader = true;

	if (!hasLoaderScriptInDom()) {
		appendLoaderScript();
	}
}

function queueEmbed(widget: string, containerId: string): void {
	if (embedViaApi(widget, containerId)) {
		return;
	}

	const queue = getOrCreateQueue();

	if (hasQueuedEmbed(queue, widget, containerId)) {
		ensureLoader();
		return;
	}

	if (!queue.some((cmd) => cmd[0] === 'setContext')) {
		queue.unshift(['setContext', TRAVELLINE_CONTEXT_ID, 'ru']);
	}

	queue.push(['embed', widget, { container: containerId }]);
	ensureLoader();
}

export function isBookingRendered(containerId: string): boolean {
	const el = document.getElementById(containerId);
	if (!el) return false;
	if (el.childElementCount > 0) return true;
	return Boolean(el.querySelector('.x-tl-booking-widget-container, iframe, form'));
}

function bootTravellineBookingForm(containerId: string): void {
	if (typeof window === 'undefined') return;

	const container = document.getElementById(containerId);
	if (!container?.isConnected || isBookingRendered(containerId)) return;

	queueEmbed('booking-form', containerId);
}

const MOUNT_RETRY_INTERVAL_MS = 500;
const MOUNT_MAX_ATTEMPTS = 20;

function mountTravellineWidget(
	boot: (containerId: string) => void,
	containerId: string,
	isRendered: (containerId: string) => boolean,
): () => void {
	let cancelled = false;
	let retryTimer: number | undefined;
	let attempts = 0;

	const attempt = () => {
		if (cancelled || isRendered(containerId)) return;

		boot(containerId);

		if (isRendered(containerId) || attempts >= MOUNT_MAX_ATTEMPTS) {
			return;
		}

		attempts += 1;
		retryTimer = window.setTimeout(attempt, MOUNT_RETRY_INTERVAL_MS);
	};

	attempt();

	return () => {
		cancelled = true;
		if (retryTimer) window.clearTimeout(retryTimer);
	};
}

/** Called from Next.js Script onLoad on /booking — retry embed once loader is ready. */
export function onTravellineLoaderReady(containerId: string): void {
	bootTravellineBookingForm(containerId);
}

export function mountTravellineBookingForm(containerId: string): () => void {
	return mountTravellineWidget(bootTravellineBookingForm, containerId, isBookingRendered);
}
