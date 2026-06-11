const TRAVELLINE_CONTEXT_ID = 'TL-INT-molodost-club_2025-04-29';

const LOADER_HOSTS = [
	'ru-ibe.tlintegration.ru',
	'ibe.tlintegration.ru',
	'ibe.tlintegration.com',
];

function setBookingQueue(containerId: string): void {
	const queue = [
		['setContext', TRAVELLINE_CONTEXT_ID, 'ru'],
		['embed', 'booking-form', { container: containerId }],
	];

	const w = window;
	const t = (w.travelline = w.travelline || {});
	const ti = (t.integration = t.integration || {});
	ti.__cq = queue;
}

function isBookingRendered(containerId: string): boolean {
	const el = document.getElementById(containerId);
	if (!el) return false;
	if (el.childElementCount > 0) return true;
	// Fallback на случай, если TravelLine рендерит отложенно через вложенные контейнеры.
	return Boolean(el.querySelector('.x-tl-booking-widget-container, iframe, form'));
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

function bootTravellineBookingForm(containerId: string): void {
	if (typeof window === 'undefined') return;

	const container = document.getElementById(containerId);
	if (!container || isBookingRendered(containerId)) return;

	setBookingQueue(containerId);

	const ti = window.travelline?.integration;

	if (!ti) return;
	if (ti.__loader) return;
	ti.__loader = true;
	appendLoaderScript();
}

export function mountTravellineBookingForm(containerId: string): () => void {
	let cancelled = false;
	let retryTimer: number | undefined;

	const attempt = () => {
		if (cancelled) return;
		bootTravellineBookingForm(containerId);
	};

	attempt();

	// Проверяем после первой попытки и делаем единственный retry только если виджет не построился.
	retryTimer = window.setTimeout(() => {
		if (cancelled || isBookingRendered(containerId)) return;
		attempt();
	}, 1500);

	return () => {
		cancelled = true;
		if (retryTimer) window.clearTimeout(retryTimer);
	};
}
