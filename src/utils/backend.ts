import axios from 'axios';
import { HouseModel, MediaUploadFormat, MediaUploadModel, TripModel } from '@shared/types';

export const BASE_URL = 'https://admin.molodost.club';

export const getMediaLink = (path: string): string => {
	if (!BASE_URL || !path) return '';
	return `${BASE_URL}${path}`;
};

export const getMediaLinkFromModel = (model: MediaUploadModel | MediaUploadModel['attributes'], size?: MediaUploadFormat): string => {
	const data = 'url' in model ? model : model.attributes;

	if (!data || !data.url || !BASE_URL) return '';

	let url: string;
	if (!size) {
		url = data.url;
	} else {
		url = data.formats?.[size]?.url || data.url;
	}

	return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export const backendApi = axios.create({
	baseURL: `${BASE_URL}/api/`,
	timeout: 15000, // Увеличен таймаут до 15 секунд
	headers: { Accept: 'application/json' },
	validateStatus: (s) => s < 500,
});

export interface HousesSplit {
	individual: HouseModel[];
	inHouse: HouseModel[];
}

// Кэш для хранения результатов запроса
let housesCache: HousesSplit | null = null;
let housesCacheTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 часа кэширования

export const getHousesSplit = async (): Promise<HousesSplit> => {
	// Проверка кэша
	const now = Date.now();
	if (housesCache && (now - housesCacheTime) < CACHE_DURATION) {
		return housesCache;
	}

	if (!BASE_URL) {
		console.warn('ℹ️ BACKEND URL не задан, возвращаем пустые дома');
		return { individual: [], inHouse: [] };
	}

	try {
		// Запрос с populate=* как в оригинале
		const { data } = await backendApi.get(`houses`, {
			params: { populate: '*' },
		});
		const houses: HouseModel[] = data?.data || [];

		const result = {
			individual: houses.filter((h) => h.attributes.isIndividual),
			inHouse: houses.filter((h) => !h.attributes.isIndividual),
		};
		
		// Сохраняем в кэш
		housesCache = result;
		housesCacheTime = now;
		
		return result;
	} catch (err) {
		console.error('❌ Ошибка в getHousesSplit:', err);
		return {
			individual: [],
			inHouse: [],
		};
	}
};

export interface TripsSplit {
	allDay: TripModel[];
	notAllDay: TripModel[];
}

export const getTripsSplit = async (): Promise<TripsSplit> => {
	if (!BASE_URL) {
		console.warn('ℹ️ BACKEND URL не задан, возвращаем пустые поездки');
		return { allDay: [], notAllDay: [] };
	}

	try {
		const { data } = await backendApi.get('trips', {
			params: { populate: '*' },
		});
		const trips: TripModel[] = data?.data || [];

		return {
			allDay: trips.filter((h) => h.attributes.isAllDay),
			notAllDay: trips.filter((h) => !h.attributes.isAllDay),
		};
	} catch (error) {
		console.error('❌ Ошибка в getTripsSplit:', error);
		return {
			allDay: [],
			notAllDay: [],
		};
	}
};
