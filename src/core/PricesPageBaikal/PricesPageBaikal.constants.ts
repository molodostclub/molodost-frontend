import type { AccommodationItem } from '../PricesPage/PricesPage.constants';

/** Размещение в гэрах — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_GERAH: AccommodationItem[] = [
	{ title: 'ГЭР НА БЕРЕГУ', capacity: '1-4', area: '40 м²', price: 70_000 },
	{ title: 'ГЭР В ЛЕСУ', capacity: '1-4', area: '40 м²', price: 60_000 },
];

/** Размещение в кубиках — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_CUBES: AccommodationItem[] = [
	{ title: 'КУБИК С ОДНОЙ СПАЛЬНЕЙ', capacity: '1-2', area: '48 м²', price: 24_000 },
	{ title: 'КУБИК С ДВУМЯ СПАЛЬНЯМИ', capacity: '1-4', area: '48 м²', price: 24_000 },
	{ title: 'ЛЮКСПИНГ', capacity: '1-2', area: '20 м²', price: 24_000 },
];

/** Текст про дополнительного человека — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON =
	'Каждый дополнительный человек в спальне и доме: + 8 000 ₽ взрослый; + 6 000 ₽ ребенок от 5 до 12 лет. Дети до 5 лет — комплиментарно.';

/** Наша программа — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_PROGRAM = [
	'Купаемся загораем, гуляем босиком по берегу.',
	'Собираем грибы, водянку и бруснику.',
	'Гуляем на лодке до Ольхона.',
	'Жжем байкальского «Горячего Человека».',
	'Пляшем как чертяки в Клубе «Сруб».',
	'Наслаждаемся закатными видами Байкала и согреваемся вечерами у костра.',
] as const;
