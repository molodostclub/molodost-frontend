import housesData from '@/content/houses.json';
import tripsData from '@/content/trips.json';
import ecosystemData from '@/content/ecosystem.json';
import type { EcosystemModel, HouseModel, TripModel } from '@shared/types';

const houses = housesData as HouseModel[];
const trips = tripsData as TripModel[];
const ecosystem = ecosystemData as EcosystemModel;

export interface HousesSplit {
	individual: HouseModel[];
	inHouse: HouseModel[];
	/** Дома-люкспинг (блок на странице Байкала) */
	luxiping: HouseModel[];
}

export interface TripsSplit {
	allDay: TripModel[];
	notAllDay: TripModel[];
}

export function getHousesSplit(): HousesSplit {
	return {
		luxiping: houses.filter((h) => h.isLuxiping === true),
		individual: houses.filter((h) => h.isIndividual && !h.isLuxiping),
		inHouse: houses.filter((h) => !h.isIndividual && !h.isLuxiping),
	};
}

export function getTripsSplit(): TripsSplit {
	return {
		allDay: trips.filter((t) => t.isAllDay),
		notAllDay: trips.filter((t) => !t.isAllDay),
	};
}

export function getTripsList(): TripModel[] {
	return trips;
}

export function getTripBySlug(slug: string): TripModel | undefined {
	return trips.find((t) => t.slug === slug);
}

export function getEcosystem(): EcosystemModel {
	return ecosystem;
}

/** Локальный путь к CMS-медиа (`/cms/...` или `/images/...`). */
export function resolveCmsPath(path: string | null | undefined): string {
	return path || '';
}
