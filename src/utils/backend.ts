import axios from 'axios';
import { HouseModel, MediaUploadFormat, MediaUploadModel, TripModel } from '@shared/types';

/** Прод Strapi: API и медиа всегда с этого origin (игнорируем BACKEND_URL / NEXT_PUBLIC_* для единообразия на всех стендах). */
const PUBLIC_BACKEND_URL = 'https://admin.molodost.club';

export const getBaseUrl = (): string => PUBLIC_BACKEND_URL;

/** То же, что getBaseUrl: ссылки на /uploads и медиа из Strapi. */
export const getPublicBaseUrl = (): string => PUBLIC_BACKEND_URL;

function resolveMediaUrl(pathOrUrl: string, publicBase: string): string {
	if (!pathOrUrl || !publicBase) return '';
	const base = publicBase.replace(/\/$/, '');
	if (/^https?:\/\//i.test(pathOrUrl)) {
		try {
			const { pathname, search, hash } = new URL(pathOrUrl);
			return `${base}${pathname}${search}${hash}`;
		} catch {
			return pathOrUrl;
		}
	}
	return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

// Для обратной совместимости
export const BASE_URL = getBaseUrl();

export const getMediaLink = (path: string): string => {
	return resolveMediaUrl(path, getPublicBaseUrl());
};

export const getMediaLinkFromModel = (model: MediaUploadModel | MediaUploadModel['attributes'], size?: MediaUploadFormat): string => {
	const data = 'url' in model ? model : model.attributes;
	const publicBase = getPublicBaseUrl();

	if (!data?.url || !publicBase) return '';

	let url: string;
	if (!size) {
		url = data.url;
	} else {
		url = data.formats?.[size]?.url || data.url;
	}

	return resolveMediaUrl(url, publicBase);
};

// Создаем axios instance с динамическим baseURL.
// Strapi с populate=* на houses/trips может отвечать долго — таймаут щедрый.
export const backendApi = axios.create({
	timeout: 60_000,
	headers: { Accept: 'application/json' },
	validateStatus: (s) => s < 500,
});

// Interceptor для установки правильного baseURL перед каждым запросом
backendApi.interceptors.request.use((config) => {
	const baseUrl = getBaseUrl();
	config.baseURL = `${baseUrl}/api/`;
	return config;
});

export interface HousesSplit {
	individual: HouseModel[];
	inHouse: HouseModel[];
	/** Дома-люкспинг (блок на странице Байкала) */
	luxiping: HouseModel[];
}

// Кэш для хранения результатов запроса
let housesCache: HousesSplit | null = null;
let housesCacheTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 часа кэширования

// Механизм single-flight для предотвращения "штурма" кэша
let housesPromise: Promise<HousesSplit> | null = null;
let tripsPromise: Promise<TripsSplit> | null = null;

export const getHousesSplit = async (): Promise<HousesSplit> => {
	const now = Date.now();
	if (housesCache && (now - housesCacheTime) < CACHE_DURATION) {
		return housesCache;
	}
	if (housesPromise) {
		return housesPromise;
	}
	housesPromise = (async () => {
		try {
			const { data } = await backendApi.get(`houses`, {
				params: { populate: '*' },
			});
			const houses: HouseModel[] = data?.data || [];
			const result = {
				luxiping: houses.filter((h) => h.attributes.isLuxiping === true),
				individual: houses.filter((h) => h.attributes.isIndividual && !h.attributes.isLuxiping),
				inHouse: houses.filter((h) => !h.attributes.isIndividual && !h.attributes.isLuxiping),
			};
			housesCache = result;
			housesCacheTime = now;
			return result;
		} catch (err) {
			const isTimeout =
				axios.isAxiosError(err) && (err.code === 'ECONNABORTED' || err.message?.includes('timeout'));
			if (isTimeout) {
				console.warn(
					'⚠️ getHousesSplit: таймаут или медленный ответ API (houses). Подставлены пустые списки домов. Проверьте сеть и доступность admin.molodost.club.',
				);
			} else {
				console.error('❌ Ошибка в getHousesSplit:', err);
			}
			return {
				individual: [],
				inHouse: [],
				luxiping: [],
			};
		} finally {
			housesPromise = null;
		}
	})();
	return housesPromise;
};

export interface TripsSplit {
	allDay: TripModel[];
	notAllDay: TripModel[];
}

// Кэш для хранения результатов запроса поездок
let tripsCache: TripsSplit | null = null;
let tripsCacheTime: number = 0;
const TRIPS_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 часа кэширования

export const getTripsSplit = async (): Promise<TripsSplit> => {
	const now = Date.now();
	if (tripsCache && (now - tripsCacheTime) < TRIPS_CACHE_DURATION) {
		return tripsCache;
	}
	if (tripsPromise) {
		return tripsPromise;
	}
	tripsPromise = (async () => {
		try {
			const { data } = await backendApi.get('trips', {
				params: { populate: '*' },
			});
			const trips: TripModel[] = data?.data || [];
			const result = {
				allDay: trips.filter((h) => h.attributes.isAllDay),
				notAllDay: trips.filter((h) => !h.attributes.isAllDay),
			};
			tripsCache = result;
			tripsCacheTime = now;
			return result;
		} catch (error) {
			const isTimeout =
				axios.isAxiosError(error) &&
				(error.code === 'ECONNABORTED' || error.message?.includes('timeout'));
			if (isTimeout) {
				console.warn(
					'⚠️ getTripsSplit: таймаут или медленный ответ API (trips). Подставлены пустые списки поездок.',
				);
			} else {
				console.error('❌ Ошибка в getTripsSplit:', error);
			}
			return {
				allDay: [],
				notAllDay: [],
			};
		} finally {
			tripsPromise = null;
		}
	})();
	return tripsPromise;
};

/** Список всех поездок (из кэша getTripsSplit) для getStaticPaths */
export const getTripsList = async (): Promise<TripModel[]> => {
	const { allDay, notAllDay } = await getTripsSplit();
	return [...allDay, ...notAllDay];
};
