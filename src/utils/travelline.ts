export const TRAVELLINE_CONTEXT_ID = 'TL-INT-molodost-club_2025-04-29';

/** Container id for the full booking form on /booking. */
export const BOOKING_FORM_CONTAINER_ID = 'tl-booking-form';

const LOADER_HOSTS = [
	'ru-ibe.tlintegration.ru',
	'ibe.tlintegration.ru',
	'ibe.tlintegration.com',
];

/** Early bootstrap: queue booking form before React mounts its container. */
export const TRAVELLINE_ENTRY_WIDGET_BOOTSTRAP = `(function(w){
	var q=[
		["setContext", "${TRAVELLINE_CONTEXT_ID}", "ru"],
		["embed", "booking-form", { container: "${BOOKING_FORM_CONTAINER_ID}" }]
	];
	var h=${JSON.stringify(LOADER_HOSTS)};
	var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});
	ti.__cq=ti.__cq?ti.__cq.concat(q):q;
	if(!ti.__loader){
		ti.__loader=true;
		var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
		function e(s,f){return function(){w.TL||(c.removeChild(s),f())}}
		(function l(h){
			if(0===h.length)return;var s=d.createElement("script");
			s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
			s.onerror=s.onload=e(s,function(){l(h.slice(1))});c.appendChild(s)
		})(h);
	}
})(window);`;

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

function ensureLoader(): void {
	const ti = getIntegration();
	if (ti.__loader) return;
	ti.__loader = true;
	appendLoaderScript();
}

function queueEmbed(widget: string, containerId: string): void {
	// After loader.js runs, __cq is no longer an array. Prefer the live API, but
	// booking-form still needs the pre-loader queue on first paint of /booking.
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

function isBookingRendered(containerId: string): boolean {
	const el = document.getElementById(containerId);
	if (!el) return false;
	if (el.childElementCount > 0) return true;
	return Boolean(el.querySelector('.x-tl-booking-widget-container, iframe, form'));
}

function bootTravellineBookingForm(containerId: string): void {
	if (typeof window === 'undefined') return;

	const container = document.getElementById(containerId);
	if (!container || isBookingRendered(containerId)) return;

	queueEmbed('booking-form', containerId);
}

function mountTravellineWidget(
	boot: (containerId: string) => void,
	containerId: string,
	isRendered: (containerId: string) => boolean,
): () => void {
	let cancelled = false;
	let retryTimer: number | undefined;

	const attempt = () => {
		if (cancelled) return;
		boot(containerId);
	};

	attempt();

	retryTimer = window.setTimeout(() => {
		if (cancelled || isRendered(containerId)) return;
		attempt();
	}, 1500);

	return () => {
		cancelled = true;
		if (retryTimer) window.clearTimeout(retryTimer);
	};
}

export function mountTravellineBookingForm(containerId: string): () => void {
	return mountTravellineWidget(bootTravellineBookingForm, containerId, isBookingRendered);
}
