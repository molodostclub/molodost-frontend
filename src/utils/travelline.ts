export const TRAVELLINE_CONTEXT_ID = 'TL-INT-molodost-club_2025-04-29';

/** Container id for the full booking form on /booking. */
export const BOOKING_FORM_CONTAINER_ID = 'tl-booking-form';

/** Selector used by TravelLine for its floating booking button. */
export const SEARCH_FORM_BUTTON_SELECTOR = '.tl-search-form-button';

const LOADER_HOSTS = ['ru-ibe.tlintegration.ru', 'ibe.tlintegration.ru', 'ibe.tlintegration.com'];

/** Early bootstrap: queue booking form before React mounts its container. */
export const TRAVELLINE_ENTRY_WIDGET_BOOTSTRAP = `(function(w){
	var q=[
		["setContext", "${TRAVELLINE_CONTEXT_ID}", "ru"],
		["embed", "booking-form", { container: "${BOOKING_FORM_CONTAINER_ID}" }],
		["embed", "search-form-button", {}]
	];
	var h=${JSON.stringify(LOADER_HOSTS)};
	var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});
	ti.__cq=ti.__cq?ti.__cq.concat(q):q;
	if(!ti.__loader){
		ti.__loader=true;
		var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
		(function l(i){
			if(i===h.length)return;var s=d.createElement("script");
			s.type="text/javascript";s.async=!0;s.setAttribute("data-travelline-loader","true");
			s.src="https://"+h[i]+"/integration/loader.js";
			s.onerror=function(){s.parentNode&&s.parentNode.removeChild(s);l(i+1)};c.appendChild(s)
		})(0);
	}
})(window);`;

type EmbedOptions = {
	container?: string;
};

type QueueCommand = [string, ...unknown[]];

type TravellineIntegration = {
	__cq?: unknown;
	__loader?: boolean;
	loaded?: boolean;
	embed?: (widget: string, options?: { container?: string }) => void;
};

const MOUNT_RETRY_INTERVAL_MS = 500;

function getIntegration(): TravellineIntegration {
	const w = window;
	const t = (w.travelline = w.travelline || {});
	return (t.integration = t.integration || {});
}

function getQueue(): QueueCommand[] | undefined {
	const ti = getIntegration();
	if (Array.isArray(ti.__cq)) {
		return ti.__cq as QueueCommand[];
	}

	// Client-only fallback for isolated page renders without the document
	// bootstrap. Once loader.js consumes __cq, it must never be recreated.
	if (!ti.__loader && ti.__cq === undefined) {
		ti.__cq = [];
		return ti.__cq as QueueCommand[];
	}

	return undefined;
}

function hasQueuedEmbed(queue: QueueCommand[], widget: string, options: EmbedOptions): boolean {
	return queue.some((cmd) => cmd[0] === 'embed' && cmd[1] === widget && (cmd[2] as EmbedOptions | undefined)?.container === options.container);
}

function isIntegrationReady(): boolean {
	const ti = getIntegration();
	return Boolean(window.TL && typeof ti.embed === 'function');
}

function embedViaApi(widget: string, options: EmbedOptions): boolean {
	if (!isIntegrationReady()) return false;

	try {
		getIntegration().embed!(widget, options);
		return true;
	} catch {
		return false;
	}
}

function hasLoaderScriptInDom(): boolean {
	return Boolean(document.querySelector('script[src*="tlintegration"]'));
}

function appendLoaderScript(): void {
	const d = window.document;
	const head = d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0];

	const tryHost = (hosts: string[]) => {
		if (hosts.length === 0) return;

		const script = d.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.dataset.travellineLoader = 'true';
		script.src = `https://${hosts[0]}/integration/loader.js`;

		script.onerror = () => {
			script.remove();
			tryHost(hosts.slice(1));
		};

		head.appendChild(script);
	};

	tryHost(LOADER_HOSTS);
}

function ensureLoader(): void {
	const ti = getIntegration();
	if (ti.__loader) return;

	ti.__loader = true;

	if (!hasLoaderScriptInDom()) {
		appendLoaderScript();
	}
}

function queueEmbed(widget: string, options: EmbedOptions = {}): void {
	if (embedViaApi(widget, options)) {
		return;
	}

	// loader.js replaces __cq while it initializes. Never recreate it at that
	// point: doing so disconnects the live loader from the commands it received.
	const queue = getQueue();
	if (!queue) return;

	if (hasQueuedEmbed(queue, widget, options)) {
		ensureLoader();
		return;
	}

	if (!queue.some((cmd) => cmd[0] === 'setContext')) {
		queue.unshift(['setContext', TRAVELLINE_CONTEXT_ID, 'ru']);
	}

	queue.push(['embed', widget, options]);
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

	queueEmbed('booking-form', { container: containerId });
}

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

		if (!cancelled && !isRendered(containerId)) {
			retryTimer = window.setTimeout(attempt, MOUNT_RETRY_INTERVAL_MS);
		}
	};

	attempt();
	return () => {
		cancelled = true;
		if (retryTimer) window.clearTimeout(retryTimer);
	};
}

export function mountTravellineBookingForm(containerId: string): () => void {
	return mountTravellineWidget(bootTravellineBookingForm, containerId, isBookingRendered);
}
