import axios from 'axios';

import { HouseModel, MediaUploadFormat, MediaUploadModel, TripModel } from '@shared/types';

const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.molodost.club';
export const BASE_URL = BASE;

export const getMediaLink = (path: string): string => `${BASE_URL}${path}`;

export const getMediaLinkFromModel = (model: MediaUploadModel | MediaUploadModel['attributes'], size?: MediaUploadFormat): string => {
	const data = 'url' in model ? model : model.attributes;

	let url: string;
	if (!size) {
		url = data.url;
	} else {
		url = data.formats?.[size] ? data.formats[size].url : data.url;
	}

	return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export const backendApi = axios.create({
	baseURL: `${BASE_URL}/api`,
});

export interface HousesSplit {
	individual: HouseModel[];
	inHouse: HouseModel[];
}

export const getHousesSplit = async (): Promise<HousesSplit> => {
	try {
		const { data } = await backendApi.get(`houses`, { params: { populate: '*' } });
		if (!data || !data.data) console.log('Ошибка получения домов');

		const houses: HouseModel[] = data.data;

		return {
			individual: houses.filter((h) => h.attributes.isIndividual),
			inHouse: houses.filter((h) => !h.attributes.isIndividual),
		};
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
	try {
		const { data } = await backendApi.get('trips/', { params: { populate: '*' } });

		if (!data || !data.data) throw new Error('Cannot fetch trip data');

		const houses: TripModel[] = data.data;

		const allDay = houses.filter((h) => h.attributes.isAllDay);
		const notAllDay = houses.filter((h) => !h.attributes.isAllDay);

		return {
			allDay,
			notAllDay,
		};
	} catch (error) {
		console.error('❌ Ошибка в getTripsSplit:', error);

		return {
			allDay: [],
			notAllDay: [],
		};
	}
};
