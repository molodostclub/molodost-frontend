import axios from 'axios';
import { HouseModel, MediaUploadFormat, MediaUploadModel, TripModel } from '@shared/types';

const PUBLIC_BACKEND_URL = 'https://admin.molodost.club';
const DOCKER_BACKEND_URL = 'http://molodost-backend:1337';

// Функция для получения BASE_URL (вызывается каждый раз, чтобы получить актуальное значение)
// В dev / на localhost запросы идут по домену (публичный URL), в production в Docker — по внутреннему URL
export const getBaseUrl = (): string => {
	const fromEnv = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BASE_URL;
	if (fromEnv) return fromEnv;

	// На сервере (SSR): в dev или при локальном запуске используем публичный домен (molodost-backend на localhost не резолвится)
	if (typeof window === 'undefined') {
		const isDev = process.env.NODE_ENV === 'development';
		return isDev ? PUBLIC_BACKEND_URL : DOCKER_BACKEND_URL;
	}
	// На клиенте всегда внешний URL
	return PUBLIC_BACKEND_URL;
};

// Для обратной совместимости
export const BASE_URL = getBaseUrl();

export const getMediaLink = (path: string): string => {
	const baseUrl = getBaseUrl();
	if (!baseUrl || !path) return '';
	return `${baseUrl}${path}`;
};

export const getMediaLinkFromModel = (model: MediaUploadModel | MediaUploadModel['attributes'], size?: MediaUploadFormat): string => {
	const data = 'url' in model ? model : model.attributes;
	const baseUrl = getBaseUrl();

	if (!data || !data.url || !baseUrl) return '';

	let url: string;
	if (!size) {
		url = data.url;
	} else {
		url = data.formats?.[size]?.url || data.url;
	}

	return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
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
	/** Дома-люкспинг (слайдер на странице Байкала) */
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
		if (!BASE_URL) {
			console.warn('ℹ️ BACKEND URL не задан, возвращаем пустые дома');
			housesPromise = null;
			return { individual: [], inHouse: [], luxiping: [] };
		}
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
					'⚠️ getHousesSplit: таймаут или медленный ответ API (houses). Подставлены пустые списки домов. Проверьте сеть или поднимите локальный Strapi (BACKEND_URL).',
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
		if (!BASE_URL) {
			console.warn('ℹ️ BACKEND URL не задан, возвращаем пустые поездки');
			tripsPromise = null;
			return { allDay: [], notAllDay: [] };
		}
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
