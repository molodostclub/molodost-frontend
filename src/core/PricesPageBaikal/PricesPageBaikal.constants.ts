import {
	WHAT_WE_DRINK,
	type AccommodationItem,
	type DrinkMenuItem,
	type PoezdkiCarItem,
	type PoezdkiGuideItem,
} from '../PricesPage/PricesPage.constants';

import type { TripModel } from '@/shared/types';
import type { TripsSplit } from '@/utils';

/** Элемент колонки кофейни — подзаголовок или позиция меню */
export type NaBazeCoffeeColumnItem = { subheading: string } | DrinkMenuItem;

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

/** Блок «На базе» Байкал — гастротрактир + питание для гостей + кофейня */
export const NA_BAZE_BAIKAL = {
	title: 'НА БАЗЕ',
	gastropub: {
		name: 'ГАСТРОТРАКТИР «ДОВОЛЬНЫЙ ДРАКОН»',
		mealTimes: [
			{ name: 'ЗАВТРАК', time: '9:00-12:00' },
			{ name: 'ОБЕД', time: '14:00-17:00' },
			{ name: 'УЖИН', time: '20:00-22:30' },
		],
		mealPackageSummary:
			'Круглосуточное питание – обед, ужин, байкальский водопой – безлимитный запас воды «Петроглиф», ланч боксы в путешествия и ночной дожор. Байкальский травяной сбор (чай) весь день – комплиментарно.',
	},
	guestsStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ ПРОЖИВАЮЩИХ НА БАЗЕ',
		items: [
			{
				title: 'УСЛУГА «СЪЕДОБНОЕ БРЕВНО»',
				priceAdult: 8_900,
				priceChild: 5_500,
			},
		],
	},
	guestsNotStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ НЕ ПРОЖИВАЮЩИХ НА БАЗЕ',
		items: [
			{ title: 'ЗАВТРАК', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ОБЕД', priceAdult: 3_500, priceChild: 2_500 },
			{ title: 'УЖИН', priceAdult: 6_000, priceChild: 4_000 },
		],
	},
	coffeeShop: {
		name: 'КОФЕЙНЯ',
		description:
			'С 9:00 до 12:00 фильтр кофе включен в ваш завтрак в любом количестве. Полный ассортимент и цены уточняйте за нашей стойкой кофейни.',
		leftColumn: [
			{ subheading: 'КОФЕ/КАКАО/ШОКОЛАД' },
			{ title: 'ЭСПРЕССО / АМЕРИКАНО', price: 350 },
			{ title: 'КАПУЧИНО / ЛАТТЕ', price: 500 },
			{ title: 'ФРАППЕ', price: 500 },
			{ title: 'МАТЧА/КАКАО', price: 600 },
			{ title: 'КАКАО/ШОКОЛАД', price: 500 },
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
			{ title: 'ЧАЙ МАРЬЯЖ ЧЕРНЫЙ/ЭРЛ ГРЕЙ', price: 1_000 },
			{ title: 'МАТЧА ГОЛУБАЯ/ЗЕЛЕНАЯ', price: 500 },
			{ title: 'МАТЧА ТОНИК', price: 600 },
		] as NaBazeCoffeeColumnItem[],
	},
} as const;

/** Блок «Комфорт» Байкал */
export const COMFORT_BAIKAL = {
	title: 'КОМФОРТ',
	items: [
		{ title: 'ГЛАЖКА', price: 500, unit: '1 единица' },
		{ title: 'ПРАЧЕЧНАЯ (СТИРКА + СУШКА)', price: 2_000, unit: '1 загрузка' },
		{
			title: 'ОБСЛУЖИВАНИЕ В НОМЕРЕ',
			price: 1_000,
			description:
				'мы можем принести вам завтрак, обед, ужин или все, что вы захотите в номер или в дом.',
		},
		{ title: 'УСЛУГИ ДЕТСКОГО КЛУБА', price: 3_000, unit: '1 час' },
	] as DrinkMenuItem[],
} as const;

/** Бар и пробковый сбор для «Что пьём» (кофейня — в блоке «На базе»). */
export const BAR_AND_CORKAGE_BAIKAL = {
	bar: {
		name: WHAT_WE_DRINK.bar.name,
		description:
			'У нас приличная винная карта и большой выбор крепкого алкоголя. Мы верим, что воздух Байкала пьянит и дурманит сам по себе, поэтому цены в нашем баре специально высокие:',
		items: WHAT_WE_DRINK.bar.items,
	},
	corkage: WHAT_WE_DRINK.corkage,
} as const;

/** Банный комплекс «Благодать» — Байкал */
export const BLAGODAT_BAIKAL = {
	title: 'БАННЫЙ КОМПЛЕКС «БЛАГОДАТЬ»',
	leftColumn: [
		{ title: 'ПАРЕНИЕ', description: '90 минут / 1 человек', price: 20_000 },
		{ title: 'каждый дополнительный час', description: '60 минут / 1 человек', price: 10_000 },
		{
			title: 'ДЕТСКАЯ БАННАЯ ЦЕРЕМОНИЯ «СВЕТЛЫЙ ПАР»',
			description: '30-45 минут / 1 человек',
			price: 10_000,
		},
		{ title: 'каждый дополнительный ребенок', price: 5_000 },
		{
			title: 'УХОДОВАЯ ЦЕРЕМОНИЯ «ТЕПЛО ЗАБОТЫ»',
			description: '30-45 минут / 1 человек',
			price: 10_000,
		},
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'МАССАЖ РАССЛАБЛЯЮЩИЙ', description: '60 минут / 1 человек', price: 9_000 },
		{ title: '', description: '90 минут / 1 человек', price: 16_000 },
		{ title: '', description: '120 минут / 1 человек', price: 12_000 },
	] as DrinkMenuItem[],
} as const;

/** Блок «ЗОЖ И ЗОМ» Байкал */
export const ZOZH_ZOM_BAIKAL = {
	title: 'ЗОЖ И ЗОМ',
	leftColumn: [
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА', price: 10_000, unit: '60 минут' },
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА ДОП ЧЕЛОВЕК', price: 5_000, unit: '60 минут' },
		{ title: 'ЧАШИ ИНДИВИДУАЛЬНЫЕ', description: 'до 5 человек', price: 15_000, unit: '60 минут' },
		{ title: 'ЧАШИ ГРУППОВЫЕ', price: 25_000, unit: '60 минут' },
	] as DrinkMenuItem[],
	rightColumn: [
		{
			title: 'ГРУППОВАЯ УТРЕННЯЯ ЗАРЯДКА, ЙОГА И МЕДИТАЦИЯ',
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
				priceText: '5 000 ₽ НА ЧЕЛОВЕКА',
			},
			{
				title: 'СПЛАВ ПО РЕКЕ ТУРКЕ НА БАЙДАРКАХ',
				note: 'ТРАНСФЕР СЧИТАЕТСЯ ОТДЕЛЬНО',
				priceText: '8 500 ₽ НА ЧЕЛОВЕКА',
			},
			{
				title: 'КВАДРОЦИКЛЫ И БАГГИ',
				note: 'ТРАНСФЕР СЧИТАЕТСЯ ОТДЕЛЬНО',
				subItems: [
					{ label: 'КВАДРОЦИКЛЫ', priceText: 'ОТ 7 500 ₽ НА ЧЕЛОВЕКА' },
					{ label: 'БАГГИ', priceText: 'ОТ 11 000 РУБЛЕЙ' },
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
		sectionTitle: 'ПРИКЛЮЧЕНИЯ НА ЦЕЛЫЙ ДЕНЬ',
		items: [
			{ title: 'НАЛЕВО И ДО КОНЦА', priceText: '15 000 ₽ НА ЧЕЛОВЕКА' },
			{ title: 'ОЛЬХОН-СЕВЕР ОСТРОВА', priceText: '50 000 ₽ НА ЧЕЛОВЕКА' },
			{
				title: 'ЧИВЫРКУЙСКИЙ ЗАЛИВ',
				priceText: '40 000 ₽ НА ЧЕЛОВЕКА',
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
			{ title: 'ДОСТАВКА', note: 'в течение дня', price: 2_500, priceNote: '+ СУММА ЧЕКА' },
			{ title: 'ДОСТАВКА', note: 'прямо сейчас', price: 5_000, priceNote: '+ СУММА ЧЕКА' },
		] as PoezdkiCarItem[],
		rightColumn: [
			{
				title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ TANK 300',
				note: 'в одну сторону за машину/ до 3 человек',
				price: 18_000,
			},
			{
				title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ МИКРОАВТОБУС',
				note: 'в одну сторону за машину/ до 5 человек',
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
				note: 'в одну сторону с человека',
				price: 8_000,
			},
		] as PoezdkiCarItem[],
	},
	guides: {
		sectionTitle: 'ГИДЫ-СЛЕДОПЫТЫ И ВОДИТЕЛИ',
		subheading: 'СОПРОВОЖДАЮЩИЕ',
		items: [
			{
				title: 'СЛЕДОПЫТ/ПОПУТЧИК',
				description:
					'один из членов нашей команды, который знает детали маршрута, составит вам компанию и поговорит о том о сем',
				pricePerHour: 3_500,
			},
			{ title: 'ВОДИТЕЛЬ', pricePerHour: 2_000 },
		] as PoezdkiGuideItem[],
	},
} as const;

/** Блок «Для детей» Байкал */
export const DLYA_DETEY_BAIKAL = {
	title: 'ДЛЯ ДЕТЕЙ',
	paragraph: 'Дети в «Молодости» считаются от 5 до 12 лет.',
	intro: 'НА ТЕРРИТОРИИ БАЗЫ ЕСТЬ:',
	listItems: [
		'Детская и спортивная площадки',
		'Домашний и уличный кинотеатры',
		'Спортивные игры',
		'Услуги детского клуба (1 час 3 000 ₽)',
	],
} as const;

/** Текст под аккордеонами: фирменный магазин + призыв (Байкал) */
export const CONCEPT_STORE_BAIKAL = {
	paragraph:
		'А ещё не забудьте заглянуть в наш фирменный магазин: там представлены сувениры и продукция с символикой «Молодости».',
	ctaText:
		'Если вам что-то хочется, а мы об этом ещё не подумали — скажите нам, и мы вместе решим, сколько это будет стоить.',
} as const;

const TRIP_PICTURES_EMPTY = { data: null } as TripModel['attributes']['pictures'];

/** Вступление к блоку «Как мы путешествуем» на странице Байкала */
export const HOW_WE_TRAVEL_BAIKAL_INTRO =
	'Все наши поездки очень зависят от погоды и природы, и мы оставляем за собой право все менять в последний момент. Мы соблюдаем правила безопасности в наших поездках и напоминаем, что Вы сами несете ответственность за свою жизнь.';

/**
 * Карточки поездок для блока «Как мы путешествуем» на `/baikal` (без Strapi).
 * — `staticCoverPaths`: слайдер внутри карточки (1+ кадров; стрелки при 2+).
 * — `footerDuration` + `footerPrice`: жёлтая строка «Весь день | цена».
 * — `titleNote` + `subtitle`: две колонки под заголовком (слева короткая подпись, справа текст).
 * — `subtitleClosing`: строка под описанием справа (напр. «Никакого интернета.»).
 * — `priceFooterRows` / `priceFooterLines`: футер с ценами.
 * В именах файлов с пробелами в URL используйте %20.
 */
export const BAIKAL_TRIPS_FOR_PAGE: TripsSplit = {
	allDay: [
		{
			id: 9_101,
			attributes: {
				slug: '',
				title: 'ольхон - север острова',
				subtitle:
					'Переходим на катере самую глубокую точку озера Байкал. Едем на УАЗах к самым красивым местам северной части острова и гуляем к мысам «Три брата» и «Хобой». Пробуем омулевую уху и кедровый самогон от местных жителей. Смотрим на скульптуру «Хранитель Байкала» Даши Намдакова.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/olhon/Frame.png', '/images/baikal/olhon/Frame-1.png'],
				footerDuration: 'Весь день',
				footerPrice: '50 000 ₽ / чел',
			},
		},
		{
			id: 9_102,
			attributes: {
				slug: '',
				title: 'чивыркуйский залив (нерпы — здесь!)',
				titleNote: '',
				subtitle:
					'Едем на танках вдоль побережья, идем на хайкинг к селу Катунь, где обедаем домашней картошкой и жареным омулем, катаемся на катере в сторону Ушканьих островов, наблюдаем за нерпами в дикой природе, по желанию расслабляемся в серных горячих источниках.',
				subtitleClosing: 'Никакого интернета.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/zaliv/Group%2047.jpg'],
				footerDuration: 'Весь день',
				footerPrice: '40 000 ₽ / чел',
			},
		},
		{
			id: 9_103,
			attributes: {
				slug: '',
				title: 'поездка налево и до конца',
				subtitle:
					'Едем в село Баргузин (здесь жил и работал Вильгельм Карлович фон Кюхельбекер и его жена), заходим в самобытный школьный музей, отправляемся на север вдоль Баргузинского хребта, заезжаем в местный дацан, где гуляем по лесу до проявленного лика богини Янжимы, гуляем по песчаной дюне посреди долины «Подкова Аргады».',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: true,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/nalevo/Frame.jpg', '/images/baikal/nalevo/Frame-1.jpg'],
				footerDuration: 'Весь день',
				footerPrice: '15 000 ₽ / чел',
			},
		},
	],
	notAllDay: [
		{
			id: 9_104,
			attributes: {
				slug: '',
				title: 'сплав по реке турка',
				titleNote: 'на байдарках',
				subtitle:
					'Едем по спокойной реке с живописными поворотами и островами, наблюдаем цапель, чаек, уток, орланов, коз, лошадей, а если повезет — байкальскую нерпу. Устраиваем обеденный пикник на солнечной поляне.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: false,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: ['/images/baikal/turka/image%2030.jpg'],
				footerDuration: '',
				footerPrice: '8 500 ₽ / чел',
			},
		},
		{
			id: 9_105,
			attributes: {
				slug: '',
				title: 'улан-удэ + аэропорт',
				subtitle:
					'Стартуем с нашей базы, в Улан-Удэ поднимаемся к дацану на вершине Лысой горы — там открывается панорама всего города, смотрим на самую большую в мире голову Ленина, посещаем Иволгинский дацан и погружаемся в буддийскую культуру.',
				description: '',
				priceAdult: 0,
				priceChild: 0,
				isAllDay: false,
				durationText: null,
				notes: [],
				pictures: TRIP_PICTURES_EMPTY,
				staticCoverPaths: [
					'/images/baikal/airport/Frame.png',
					'/images/baikal/airport/Frame-1.png',
					'/images/baikal/airport/Frame-2.png',
					'/images/baikal/airport/Frame-3.png',
				],
				priceFooterRows: [
					{
						variant: 'twoCols',
						left: 'ЭКСКУРСИЯ ДАЦАН',
						right: '5 000 ₽ / чел',
					},
					{ variant: 'plain', text: 'ВСТРЕЧА | ПРОВОДЫ:' },
					{
						variant: 'twoCols',
						left: 'TANK',
						leftNote: 'до 3 чел.',
						right: '18 000 ₽',
						rightNote: 'в одну сторону за машину',
					},
					{
						variant: 'twoCols',
						left: 'МИКРОАВТОБУС',
						leftNote: 'до 5 чел.',
						right: '25 000 ₽',
						rightNote: 'в одну сторону за машину',
					},
				],
			},
		},
		{
			id: 9_106,
			attributes: {
				slug: '',
				title: 'квадроциклы и багги',
				titleNote: 'по побережью байкала',
				subtitle:
					'Едем по хвойному лесу и песчаным дорогам вдоль Байкала, пересекаем пляжи, крутые тропы и живописные участки с видом на озеро.',
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
						mid: '7 500 ₽',
						right: '60 мин / чел',
					},
					{
						variant: 'threeCols',
						left: 'БАГГИ',
						mid: '11 000 ₽',
						right: '70 мин / чел',
						rightNote: '25–27 км',
						rightNoteAccent: true,
					},
				],
			},
		},
	],
};
