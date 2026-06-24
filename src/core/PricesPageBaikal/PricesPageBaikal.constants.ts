import { WHAT_WE_DRINK, type AccommodationItem, type DrinkMenuItem, type PoezdkiCarItem, type PoezdkiGuideItem } from '../PricesPage/PricesPage.constants';

import type { TripModel } from '@/shared/types';
import type { TripsSplit } from '@/utils';

/** Элемент колонки кофейни — подзаголовок или позиция меню */
export type NaBazeCoffeeColumnItem = { subheading: string } | DrinkMenuItem;

/** Размещение в гэрах — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_GERAH: AccommodationItem[] = [
	{ title: 'ГЭР НА\u00A0БЕРЕГУ', capacity: '1-4', area: '40 м²', price: 70_000 },
	{ title: 'ГЭР В\u00A0ЛЕСУ', capacity: '1-4', area: '40 м²', price: 60_000 },
];

/** Размещение в кубиках — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_CUBES: AccommodationItem[] = [
	{ title: 'КУБИК С\u00A0ОДНОЙ СПАЛЬНЕЙ', capacity: '1-2', area: '24\u00A0м²', price: 24_000 },
	{ title: 'КУБИК С\u00A0ДВУМЯ СПАЛЬНЯМИ', capacity: '1-4', area: '24\u00A0м²', price: 24_000 },
	{ title: 'ЛЮКСПИНГ', capacity: '1-2', area: '20\u00A0м²', price: 24_000 },
];

/** Текст про дополнительного человека — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON = 'Каждый дополнительный человек в\u00A0спальне и\u00A0доме: +\u00A08\u00A0000\u00A0₽ взрослый; +\u00A06\u00A0000\u00A0₽ ребенок от\u00A05 до\u00A012\u00A0лет. Дети до\u00A05\u00A0лет —\u00A0комплиментарно.';

/** Наша программа — блок «Проживание» Байкал */
export const PROZHIVANIE_BAIKAL_PROGRAM = [
	'Купаемся загораем, гуляем босиком по\u00A0берегу.',
	'Собираем грибы, водянку и\u00A0бруснику.',
	'Гуляем на\u00A0лодке до\u00A0Ольхона.',
	'Жжем байкальского «Горячего Человека».',
	'Пляшем как чертяки в\u00A0Клубе «Сруб».',
	'Наслаждаемся закатными видами Байкала и\u00A0согреваемся вечерами у\u00A0костра.',
] as const;

/** Блок «На базе» Байкал — гастротрактир + питание для гостей + кофейня */
export const NA_BAZE_BAIKAL = {
	title: 'ЧТО ЕДИМ',
	gastropub: {
		name: 'ГАСТРОТРАКТИР «ДОВОЛЬНЫЙ\u00A0ДРАКОН»',
		mealTimes: [
			{ name: 'ЗАВТРАК', time: '9:00-12:00' },
			{ name: 'ОБЕД', time: '14:00-17:00' },
			{ name: 'УЖИН', time: '20:00-22:30' },
		],
		mealPackageSummary: 'Круглосуточное питание – обед, ужин, байкальский водопой – безлимитный запас воды «Петроглиф», ланч боксы в\u00A0путешествия и\u00A0ночной дожор. Байкальский травяной сбор (чай) весь день –\u00A0комплиментарно.',
	},
	guestsStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ ПРОЖИВАЮЩИХ НА\u00A0БАЗЕ',
		items: [
			{
				title: 'УСЛУГА «СЪЕДОБНОЕ\u00A0БРЕВНО»',
				priceAdult: 8_900,
				priceChild: 5_500,
			},
		],
	},
	guestsNotStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ НЕ\u00A0ПРОЖИВАЮЩИХ НА\u00A0БАЗЕ',
		items: [
			{ title: 'ЗАВТРАК', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ОБЕД', priceAdult: 3_500, priceChild: 2_500 },
			{ title: 'УЖИН', priceAdult: 6_000, priceChild: 4_000 },
		],
	},
} as const;

/** Блок «Комфорт» Байкал */
export const COMFORT_BAIKAL = {
	title: 'КОМФОРТ',
	items: [
		{ title: 'ГЛАЖКА', price: 500, unit: '1\u00A0единица' },
		{ title: 'ПРАЧЕЧНАЯ (СТИРКА + СУШКА)', price: 2_000, unit: '1\u00A0загрузка' },
		{
			title: 'ОБСЛУЖИВАНИЕ В\u00A0НОМЕРЕ',
			price: 1_000,
			description: 'мы\u00A0можем принести вам завтрак, обед, ужин или все, что вы\u00A0захотите в\u00A0номер или в\u00A0дом.',
		},
		{ title: 'УСЛУГИ ДЕТСКОГО КЛУБА', price: 3_000, unit: '1\u00A0час' },
	] as DrinkMenuItem[],
} as const;

/** Бар и пробковый сбор для «Что пьём» (кофейня — в блоке «На базе»). */
export const BAR_AND_CORKAGE_BAIKAL = {
	coffeeShop: {
		name: 'КОФЕЙНЯ',
		description: 'С\u00A09:00 до\u00A012:00 фильтр кофе включен в\u00A0ваш завтрак в\u00A0любом количестве. Полный ассортимент и\u00A0цены уточняйте за\u00A0нашей стойкой кофейни.',
		leftColumn: [
			{ subheading: 'КОФЕ/КАКАО' },
			{ title: 'ЭСПРЕССО / АМЕРИКАНО', price: 350 },
			{ title: 'КАПУЧИНО / ЛАТТЕ', price: 500 },
			{ title: 'ФРАППЕ', price: 500 },
			{ title: 'КАКАО', price: 600 },
			{ subheading: 'ХОЛОДНЫЕ НАПИТКИ' },
			{ title: 'АВТОРСКИЕ ЛИМОНАДЫ', price: 500 },
			{ title: 'ФРАППЕ', price: 500 },
			{ title: 'ГАЗИРОВАННЫЕ НАПИТКИ', price: 500 },
			{ title: 'МИНЕРАЛЬНАЯ ВОДА', price: 300 },
		] as NaBazeCoffeeColumnItem[],
		rightColumn: [
			{ subheading: 'ЧАЙ В ЧАЙНИКЕ' },
			{ title: 'ЧАЙ ТРАВЯНОЙ/ЗЕЛЁНЫЙ/ЧЁРНЫЙ', price: 600 },
			{ title: 'БАЙКАЛЬСКИЙ ИВАН ЧАЙ', price: 600 },
			{ title: 'ЧАЙ МАРЬЯЖ ЧЕРНЫЙ', price: 1_000 },
			{ title: 'МАТЧА ГОЛУБАЯ/ЗЕЛЕНАЯ', price: 500 },
			{ title: 'МАТЧА ТОНИК', price: 600 },
		] as NaBazeCoffeeColumnItem[],
	},
	bar: {
		name: WHAT_WE_DRINK.bar.name,
		description: 'У\u00A0нас приличная винная карта и\u00A0большой выбор крепкого алкоголя. Мы верим, что\u00A0воздух Байкала пьянит и\u00A0дурманит сам по\u00A0себе, поэтому цены в\u00A0нашем баре специально высокие:',
		items: WHAT_WE_DRINK.bar.items,
	},
	corkage: WHAT_WE_DRINK.corkage,
} as const;

/** Банный комплекс «Благодать» — Байкал */
export const BLAGODAT_BAIKAL = {
	title: 'БАННЫЙ КОМПЛЕКС «БЛАГОДАТЪ»',
	leftColumn: [
		{ title: 'ПАРЕНИЕ', description: '90\u00A0минут / 1\u00A0человек', price: 20_000 },
		{ title: 'каждый дополнительный час', description: '60\u00A0минут / 1\u00A0человек', price: 10_000 },
		{
			title: 'ДЕТСКАЯ БАННАЯ ЦЕРЕМОНИЯ «СВЕТЛЫЙ ПАР»',
			description: '30-45 минут / 1\u00A0человек',
			price: 10_000,
		},
		{ title: 'каждый дополнительный ребенок', price: 5_000 },
		{
			title: 'УХОДОВАЯ ЦЕРЕМОНИЯ «ТЕПЛО ЗАБОТЫ»',
			description: '30-45\u00A0минут / 1\u00A0человек',
			price: 10_000,
		},
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'МАССАЖ РАССЛАБЛЯЮЩИЙ', description: '60\u00A0минут / 1\u00A0человек', price: 9_000 },
		{ title: '', description: '90\u00A0минут / 1\u00A0человек', price: 16_000 },
		{ title: '', description: '120\u00A0минут / 1\u00A0человек', price: 12_000 },
	] as DrinkMenuItem[],
} as const;

/** Блок «ЗОЖ И ЗОМ» Байкал */
export const ZOZH_ZOM_BAIKAL = {
	title: 'ЗОЖ И ЗОМ',
	leftColumn: [
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА', price: 10_000, unit: '60 минут' },
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА ДОП\u00A0ЧЕЛОВЕК', price: 5_000, unit: '60 минут' },
		{ title: 'ЧАШИ ИНДИВИДУАЛЬНЫЕ', description: 'до 5\u00A0человек', price: 15_000, unit: '60 минут' },
		{ title: 'ЧАШИ ГРУППОВЫЕ', price: 25_000, unit: '60 минут' },
	] as DrinkMenuItem[],
	rightColumn: [
		{
			title: 'ГРУППОВАЯ УТРЕННЯЯ ЗАРЯДКА, ЙОГА И\u00A0МЕДИТАЦИЯ',
			priceText: 'БЕСПЛАТНО',
		},
	] as DrinkMenuItem[],
} as const;

/** Элемент «Короткие поездки» Байкал: заголовок, примечание, одна цена или подпункты */
export type PoezdkiBaikalShortItem = {
	title: string;
	note?: string;
	priceText?: string;
	subItems?: { label: string; priceText: string }[];
};

/** Блок «Поездки» Байкал */
export const POEZDKI_BAIKAL = {
	title: 'ПОЕЗДКИ',
	shortTrips: {
		sectionTitle: 'КОРОТКИЕ ПОЕЗДКИ',
		items: [
			{
				title: 'ИВОЛГИНСКИЙ ДАЦАН',
				note: 'ТРАНСФЕР СЧИТАЕТСЯ ОТДЕЛЬНО',
				priceText: '5\u00A0000\u00A0₽ НА\u00A0ЧЕЛОВЕКА',
			},
			{
				title: 'СПЛАВ ПО\u00A0РЕКЕ ТУРКЕ НА\u00A0БАЙДАРКАХ',
				note: 'ТРАНСФЕР СЧИТАЕТСЯ ОТДЕЛЬНО',
				priceText: '8\u00A0500\u00A0₽ НА\u00A0ЧЕЛОВЕКА',
			},
			{
				title: 'КВАДРОЦИКЛЫ И\u00A0БАГГИ',
				note: 'ТРАНСФЕР СЧИТАЕТСЯ ОТДЕЛЬНО',
				subItems: [
					{ label: 'КВАДРОЦИКЛЫ', priceText: 'ОТ 7\u00A0500\u00A0₽ НА\u00A0ЧЕЛОВЕКА' },
					{ label: 'БАГГИ', priceText: 'ОТ 11\u00A0000 РУБЛЕЙ' },
				],
			},
		] as PoezdkiBaikalShortItem[],
	},
} as const;

/** Элемент «Приключения на весь день»: заголовок (красный), цена, опционально подпись */
export type PuteshestviyaBaikalFullDayItem = {
	title: string;
	priceText: string;
	description?: string;
};

/** Блок «Путешествия» Байкал: приключения на весь день, автопрокат, гиды */
export const PUTESHESTVIYA_BAIKAL = {
	title: 'ПУТЕШЕСТВИЯ',
	fullDayAdventures: {
		sectionTitle: 'ПРИКЛЮЧЕНИЯ НА\u00A0ЦЕЛЫЙ ДЕНЬ',
		items: [
			{ title: 'НАЛЕВО И\u00A0ДО КОНЦА', priceText: '15\u00A0000 ₽ НА\u00A0ЧЕЛОВЕКА' },
			{ title: 'ОЛЬХОН-СЕВЕР ОСТРОВА', priceText: '50\u00A0000\u00A0₽ НА\u00A0ЧЕЛОВЕКА' },
			{
				title: 'ЧИВЫРКУЙСКИЙ ЗАЛИВ',
				priceText: '40\u00A0000\u00A0₽ НА\u00A0ЧЕЛОВЕКА',
				description: 'НЕРПЫ ЗДЕСЬ!',
			},
		] as PuteshestviyaBaikalFullDayItem[],
	},
	carRental: {
		sectionTitle: 'АВТОПРОКАТ «БЫВАЛЫЙ РЕЙНДЖЕР»',
		leftColumn: [
			{
				title: 'TANK 300',
				note: '+15 руб./км топливо',
				pricePerHour: 3_000,
				pricePerDay: 20_000,
			},
			{ title: 'ДОСТАВКА', note: 'в\u00A0течение дня', price: 2_500, priceNote: '+ СУММА ЧЕКА' },
			{ title: 'ДОСТАВКА', note: 'прямо сейчас', price: 5_000, priceNote: '+ СУММА ЧЕКА' },
		] as PoezdkiCarItem[],
		rightColumn: [
			{
				title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ TANK 300',
				note: 'в\u00A0одну сторону за\u00A0машину/ до\u00A03\u00A0человек',
				price: 18_000,
			},
			{
				title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ МИКРОАВТОБУС',
				note: 'в\u00A0одну сторону за\u00A0машину/ до\u00A05\u00A0человек',
				price: 25_000,
			},
			{
				title: 'ИНДИВИДУАЛЬНЫЙ ТРАНСФЕР',
				note: '+ 15 руб./км топливо',
				price: 5_000,
				priceNote: 'час',
			},
			{
				title: 'ГРУППОВОЙ ТРАНСФЕР В/ИЗ АЭРОПОРТА',
				note: 'в\u00A0одну сторону с\u00A0человека',
				price: 8_000,
			},
		] as PoezdkiCarItem[],
	},
	guides: {
		sectionTitle: 'ГИДЫ-СЛЕДОПЫТЫ И\u00A0ВОДИТЕЛИ',
		subheading: 'СОПРОВОЖДАЮЩИЕ',
		items: [
			{
				title: 'СЛЕДОПЫТ/ПОПУТЧИК',
				description: 'один из\u00A0членов нашей команды, который знает детали маршрута, составит вам компанию и\u00A0поговорит о\u00A0том о\u00A0сем',
				pricePerHour: 3_500,
			},
			{ title: 'ВОДИТЕЛЬ', pricePerHour: 2_000 },
		] as PoezdkiGuideItem[],
	},
} as const;

/** Блок «Для детей» Байкал */
export const DLYA_DETEY_BAIKAL = {
	title: 'ДЛЯ ДЕТЕЙ',
	paragraph: 'Дети в\u00A0«Молодости» считаются от\u00A05 до\u00A012\u00A0лет.',
	intro: 'НА\u00A0ТЕРРИТОРИИ БАЗЫ ЕСТЬ:',
	listItems: ['Детская и\u00A0спортивная площадки', 'Домашний и\u00A0уличный кинотеатры', 'Спортивные игры', 'Услуги детского клуба (1 час 3\u00A0000\u00A0₽)'],
} as const;

/** Текст под аккордеонами: фирменный магазин + призыв (Байкал) */
export const CONCEPT_STORE_BAIKAL = {
	paragraph: 'А\u00A0ещё не\u00A0забудьте заглянуть в\u00A0наш фирменный магазин: там представлены сувениры и\u00A0продукция с\u00A0символикой «Молодости».',
	ctaText: 'Если вам что-то хочется, а\u00A0мы об\u00A0этом ещё не\u00A0подумали —\u00A0скажите нам, и\u00A0мы вместе решим, сколько это будет стоить.',
} as const;

const TRIP_PICTURES_EMPTY = { data: null } as TripModel['attributes']['pictures'];


export const HOW_WE_TRAVEL_BAIKAL_INTRO = 'Все наши поездки очень зависят от\u00A0погоды и\u00A0природы, и\u00A0мы оставляем за\u00A0собой право все менять в\u00A0последний момент. Мы соблюдаем правила безопасности в\u00A0наших поездках и\u00A0напоминаем, что Вы\u00A0сами несете ответственность за\u00A0свою жизнь.';

export const BAIKAL_TRIPS_FOR_PAGE: TripsSplit = {
	allDay: [
		{
			id: 9_101,
			attributes: {
				slug: '',
				title: 'ольхон -\u00A0север острова',
				subtitle:
					'Переходим на\u00A0катере самую глубокую точку озера Байкал. Едем на\u00A0УАЗах к\u00A0самым красивым местам северной части острова и гуляем к мысам «Три брата» и\u00A0«Хобой». Пробуем омулевую уху и кедровый самогон от местных жителей. Смотрим на скульптуру «Хранитель Байкала» Даши Намдакова.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/olhon/olhon1.jpg', '/images/baikal/olhon/olhon.jpg'],
				footerDuration: 'Весь день',
				footerPrice: '50\u00A0000\u00A0₽ / чел',
			},
		},
		{
			id: 9_102,
			attributes: {
				slug: '',
				title: 'чивыркуйский залив (нерпы\u00A0—\u00A0здесь!)',
				titleNote: '',
				subtitle: 'Едем на\u00A0танках вдоль побережья, идем на\u00A0хайкинг к\u00A0селу Катунь, где обедаем домашней картошкой и\u00A0жареным омулем, катаемся на\u00A0катере в\u00A0сторону Ушканьих островов, наблюдаем за\u00A0нерпами в\u00A0дикой природе, по\u00A0желанию расслабляемся в\u00A0серных горячих источниках.',
				subtitleClosing: 'Никакого интернета.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/zaliv/nerpa.jpg'],
				footerDuration: 'Весь день',
				footerPrice: '40\u00A0000\u00A0₽ / чел',
			},
		},
		{
			id: 9_103,
			attributes: {
				slug: '',
				title: 'поездка налево и\u00A0до конца',
				subtitle:
					'Едем в\u00A0село Баргузин (здесь жил и\u00A0работал Вильгельм Карлович фон Кюхельбекер и\u00A0его жена), заходим в\u00A0самобытный школьный музей, отправляемся на\u00A0север вдоль Баргузинского хребта, заезжаем в\u00A0местный дацан, где гуляем по\u00A0лесу до\u00A0проявленного лика богини Янжимы, гуляем по\u00A0песчаной дюне посреди долины «Подкова Аргады».',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/nalevo/nalevo.webp'],
				footerDuration: 'Весь день',
				footerPrice: '15\u00A0000\u00A0₽ / чел',
			},
		},
	],
	notAllDay: [
		{
			id: 9_104,
			attributes: {
				slug: '',
				title: 'сплав по\u00A0реке турка',
				titleNote: 'на\u00A0байдарках',
				subtitle: 'Едем по\u00A0спокойной реке с\u00A0живописными поворотами и\u00A0островами, наблюдаем цапель, чаек, уток, орланов, коз, лошадей, а\u00A0если повезет — байкальскую нерпу. Устраиваем обеденный пикник на\u00A0солнечной поляне.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: false,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/turka/image%2030.jpg'],
				footerDuration: '',
				footerPrice: '8\u00A0500\u00A0₽ / чел',
			},
		},
		{
			id: 9_105,
			attributes: {
				slug: '',
				title: 'улан-удэ +\u00A0аэропорт',
				subtitle: 'Стартуем с\u00A0нашей базы, в\u00A0Улан-Удэ поднимаемся к\u00A0дацану на\u00A0вершине Лысой горы —\u00A0там открывается панорама всего города, смотрим на\u00A0самую большую в\u00A0мире голову Ленина, посещаем Иволгинский дацан и\u00A0погружаемся в\u00A0буддийскую культуру.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: false,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/airport/Frame.png', '/images/baikal/airport/Frame-1.png', '/images/baikal/airport/Frame-2.png', '/images/baikal/airport/Frame-3.png'],
				priceFooterRows: [
					{
						variant: 'twoCols',
						left: 'ЭКСКУРСИЯ ДАЦАН',
						right: '5\u00A0000\u00A0₽ / чел',
					},
					{ variant: 'plain', text: 'ВСТРЕЧА | ПРОВОДЫ:' },
					{
						variant: 'twoCols',
						left: 'TANK',
						leftNote: 'до\u00A03\u00A0чел.',
						right: '18\u00A0000\u00A0₽',
						rightNote: 'в\u00A0одну сторону за\u00A0машину',
					},
					{
						variant: 'twoCols',
						left: 'МИКРОАВТОБУС',
						leftNote: 'до\u00A05\u00A0чел.',
						right: '25\u00A0000 ₽',
						rightNote: 'в\u00A0одну сторону за\u00A0машину',
					},
				],
			},
		},
		{
			id: 9_106,
			attributes: {
				slug: '',
				title: 'квадроциклы и\u00A0багги',
				titleNote: 'по\u00A0побережью байкала',
				subtitle: 'Едем по\u00A0хвойному лесу и\u00A0песчаным дорогам вдоль Байкала, пересекаем пляжи, крутые тропы и\u00A0живописные участки с\u00A0видом на\u00A0озеро.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: false,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/kvadro/image%2093.jpg'],
				priceFooterRows: [
					{
						variant: 'threeCols',
						left: 'КВАДРОЦИКЛЫ',
						mid: '7\u00A0500\u00A0₽',
						right: '60\u00A0мин / чел',
					},
					{
						variant: 'threeCols',
						left: 'БАГГИ',
						mid: '11\u00A0000\u00A0₽',
						right: '70\u00A0мин / чел',
						rightNote: '25–27\u00A0км',
						rightNoteAccent: true,
					},
				],
			},
		},
	],
};
