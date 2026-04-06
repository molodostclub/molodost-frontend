import { subtitle, twoCol } from './PricesPage.css';

type PricesModel = {
	title: string;
	subtitle?: string;
	twoCol?: string;
	twoColChild?: string;
	price?: number;
	priceHigh?: number;
	pricePrefix?: string;
	priceText?: string;
	priceChild?: number;
	note?: string;
};

/** Элемент размещения для грида: все поля берутся из констант, description — опционально */
export type AccommodationItem = {
	title: string;
	capacity: string;
	area: string;
	/** Подпись/описание — не у всех элементов есть */
	description?: string;
	price: number;
};

type HeatLabModel = {
	title: string;
	subtitle?: string;
	subtitleTwo?: string;
	listTitle?: string;
	list?: Array<string>;
	duration?: string;
	clients?: string;
	pricePrefix?: string;
	price?: number;
	priceTwo?: number;
	priceText?: string;
	note?: string;
};

/** Блок «ЗОЖ И ЗОМ» — сетка с\u00A0ценами, 2 колонки */
export const ZOZH_ZOM = {
	title: 'ЗОЖ И ЗОМ',
	leftColumn: [
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА', price: 10_000, unit: '60 минут' },
		{ title: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА ДОП ЧЕЛОВЕК', price: 5_000, unit: '60 минут' },
		{ title: 'ЧАШИ ИНДИВИДУАЛЬНЫЕ', description: 'до 5 человек', price: 15_000, unit: '60 минут' },
		{ title: 'ЧАШИ ГРУППОВЫЕ', description: 'от 5 человек', price: 25_000, unit: '60 минут' },
	] as DrinkMenuItem[],
	rightColumn: [
		{
			title: 'ГРУППОВАЯ УТРЕННЯЯ ЗАРЯДКА, ЙОГА И МЕДИТАЦИЯ',
			priceText: 'БЕСПЛАТНО',
		},
	] as DrinkMenuItem[],
} as const;

export const PROZHIVANIE_PRICES: PricesModel[] = [
	{
		title: 'хорошая спальня',
		twoCol: '1',
		price: 18_000,
		priceHigh: 23_000,
	},
	{
		title: 'замечательная спальня',
		twoCol: '1',
		price: 26_000,
		priceHigh: 31_000,
	},
	{
		title: 'потрясающая спальня',
		twoCol: '1',
		price: 33_000,
		priceHigh: 38_000,
	},
	{
		title: 'семейный номер',
		twoCol: 'до 4',
		price: 45_000,
		priceHigh: 45_000,
	},
	{
		title: 'дом с\u00A0печкой',
		twoCol: 'до 4',
		price: 45_000,
		priceHigh: 45_000,
	},
	{
		title: 'барнхаус',
		twoCol: 'до 4',
		price: 50_000,
		priceHigh: 50_000,
	},
	{
		title: 'лохматый дом',
		twoCol: 'до 2',
		price: 45_000,
		priceHigh: 45_000,
	},
	{
		title: 'семейный дом',
		twoCol: 'до 8',
		price: 60_000,
		priceHigh: 60_000,
	},
	{
		title: 'малый шукшинский дом',
		twoCol: 'до 4',
		price: 60_000,
		priceHigh: 60_000,
	},
	{
		title: 'дом на холме (4 спальни)',
		twoCol: 'до 8',
		price: 90_000,
		priceHigh: 90_000,
	},
	{
		title: 'большой шукшинский дом',
		twoCol: 'до 8',
		price: 90_000,
		priceHigh: 90_000,
	},
	{
		title: 'карахаус',
		twoCol: 'до 6',
		price: 80_000,
		priceHigh: 80_000,
	},
];

/** Размещение в\u00A0номерах и домах: единый источник — цена, название, подпись (где есть), площадь, вместимость */
export const PROZHIVANIE_ACCOMMODATION: AccommodationItem[] = [
	// Номера
	{ title: 'Хорошая спальня', capacity: '1-2', area: '18-24 м²', price: 18_000 },
	{ title: 'Замечательная спальня', capacity: '1-2', area: '24-28 м²', price: 26_000 },
	{ title: 'Семейный номер', capacity: '2-4', area: '70 м²', description: 'две спальни, общая зона', price: 45_000 },
	{ title: 'Потрясающая спальня', capacity: '1-2', area: '24-28 м²', price: 33_000 },
	// Дома
	{ title: 'Дом с\u00A0печкой', capacity: '1-2', area: '38 м²', description: 'отдельно стоящий дом, одна спальня с\u00A0печкой и верандой', price: 45_000 },
	{ title: 'Бранхаус', capacity: '2-3', area: '68 м²', description: 'отдельно стоящий дом, две спальни, общая зона', price: 50_000 },
	{ title: 'Семейный дом', capacity: '4-6', area: '100 м²', description: 'отдельно стоящий дом с\u00A0тремя спальнями и гостиной', price: 60_000 },
	{ title: 'Малый Шукшинский дом', capacity: '2-4', area: '70 м²', description: 'наш любимый дом, две спальни, печка, живописная терраса с\u00A0видом на Катунь', price: 60_000 },
	{ title: 'Дом на холме', capacity: '4-8', area: '150 м²', description: 'четыре спальни с\u00A0санузлами и терраса с\u00A0видом на Катунь', price: 90_000 },
	{ title: 'Большой Шукшинский дом', capacity: '4-8', area: '110 м²', description: 'четыре спальни, общая зона, печка, живописная терраса с\u00A0видом на Катунь', price: 90_000 },
	{ title: 'Карахаус', capacity: '3-6', area: '120 м²', description: 'дом, посвящённый архитектору Фрэнку Гери, три спальни, общая зона', price: 80_000 },
];

export const PROZHIVANIE_ROOMS = PROZHIVANIE_ACCOMMODATION.slice(0, 4);
export const PROZHIVANIE_HOUSES = PROZHIVANIE_ACCOMMODATION.slice(4);

/** Блок «Что едим» — всё из переменных */
export const WHAT_WE_EAT = {
	title: 'ЧТО ЕДИМ?',
	gastropub: {
		name: 'ГАСТРОТРАКТИР «ДОВОЛЬНЫЙ\u00A0ДРАКОН»',
		mealTimes: [
			{ name: 'ЗАВТРАК', time: '9:00-12:00' },
			{ name: 'ОБЕД', time: '14:00-17:00' },
			{ name: 'УЖИН', time: '20:00-22:30' },
		],
	},
	guestsStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ ПРОЖИВАЮЩИХ НА\u00A0БАЗЕ',
		items: [
			{
				title: 'УСЛУГА «СЪЕДОБНОЕ\u00A0БРЕВНО»',
				priceAdult: 8_000,
				priceChild: 5_000,
				packageDescription:
					'Круглосуточное питание - обед, ужин, алтайский водопой - безлимитный запас воды «Петроглиф», ланч-боксы в\u00A0путешествия и\u00A0ночной дожор, Алтайский травяной сбор (чай) весь день - комплиментарно',
			},
			{ title: 'ЗАВТРАК', note: 'ВКЛЮЧЕН В\u00A0ПРОЖИВАНИЕ' },
			{ title: 'ОБЕД', priceAdult: 3_500, priceChild: 2_000 },
			{ title: 'УЖИН', priceAdult: 4_500, priceChild: 3_000 },
			{ title: 'АЛТАЙСКИЙ РИБАЙ', price: 5_000, description: 'от кооператива «Дружба», 320±10g' },
			{ title: 'СЫРНО-МЕДОВАЯ ТАРЕЛКА', price: 3_000, description: 'от «Логовской сыроварни» и пасеки «Медом в\u00A0ухо» 180±10g' },
			{ title: 'ЛАНЧ-БОКС', price: 2_000 },
		],
	},
	guestsNotStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ НЕ ПРОЖИВАЮЩИХ НА БАЗЕ',
		items: [
			{ title: 'ЗАВТРАК', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ОБЕД', priceAdult: 5_000, priceChild: 2_500 },
			{ title: 'УЖИН', priceAdult: 10_000, priceChild: 6_000 },
		],
	},
} as const;

/** Элемент меню напитков: title, price (или priceText), опционально pricePrefix, description, unit */
export type DrinkMenuItem = {
	title: string;
	price?: number;
	priceText?: string;
	pricePrefix?: string;
	description?: string;
	unit?: string;
};

/** Блок «Что пьем» */
export const WHAT_WE_DRINK = {
	title: 'ЧТО ПЬЕМ?',
	coffeeShop: {
		name: 'КОФЕЙНЯ «ТРИКСТЕР»',
		description:
			'С\u00A09:00 до\u00A012:00 фильтр кофе включен в\u00A0ваш завтрак в\u00A0любом количестве. Полный ассортимент и\u00A0цены уточняйте за\u00A0нашей стойкой кофейни.',
		subheading: 'НЕКОТОРЫЕ ПОЗИЦИИ',
		leftColumn: [
			{ title: 'ЭСПРЕССО / АМЕРИКАНО', price: 450 },
			{ title: 'КАПУЧИНО / ЛАТТЕ', price: 550 },
			{ title: 'МАТЧА / КАКАО', price: 550 },
			{ title: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ', price: 500, pricePrefix: 'ОТ ' },
		] as DrinkMenuItem[],
		rightColumn: [
			{ title: 'ЧАЙ ТРАВЯНОЙ / ЗЕЛЁНЫЙ / ЧЁРНЫЙ', price: 700 },
			{ title: 'НАШ АВТОРСКИЙ ЧАЙ', price: 1_000, description: 'облепиховый, имбирный, брусничный' },
			{ title: 'ЧАЙ МАРЬЯЖ ЧЁРНЫЙ', price: 1_000 },
		] as DrinkMenuItem[],
	},
	bar: {
		name: 'БАР «Я\u00A0ДОГОНЮ»',
		description:
			'У\u00A0нас приличная винная карта и\u00A0большой выбор крепкого алкоголя. Мы\u00A0верим, что\u00A0воздух Алтая пьянит и\u00A0дурманит сам по\u00A0себе, поэтому цены в\u00A0нашем баре специально высокие:',
		items: [
			{ title: 'КОКТЕЙЛИ', price: 1_000, pricePrefix: 'ОТ ', unit: 'штука' },
			{ title: 'ВИНА', price: 3_000, pricePrefix: 'ОТ ', unit: 'бутылка' },
			{ title: 'КРЕПКИЙ АЛКОГОЛЬ', price: 1_000, unit: '70 грамм' },
		] as DrinkMenuItem[],
	},
	corkage: 'Если вы\u00A0приносите алкоголь с\u00A0собой, наш пробковый сбор составляет 2\u00A0000\u00A0₽ с\u00A0бутылки слабого алкоголя и\u00A05\u00A0000\u00A0₽ за\u00A0крепкий.',
} as const;

/** Блок «Комфорт» — только цены, 2 колонки (правая пустая) */
export const COMFORT = {
	title: 'КОМФОРТ',
	items: [
		{ title: 'ГЛАЖКА', price: 500, unit: '1 единица' },
		{ title: 'ПРАЧЕЧНАЯ (СТИРКА +\u00A0СУШКА)', price: 2_000, unit: '1\u00A0загрузка' },
		{ title: 'ОБСЛУЖИВАНИЕ В\u00A0НОМЕРЕ', price: 1_000, description: 'мы\u00A0можем принести вам завтрак, обед, ужин или\u00A0все, что вы\u00A0захотите в\u00A0номер или в\u00A0дом.' },
		{ title: 'ИНДИВИДУАЛЬНЫЕ УСЛУГИ НЯНИ', price: 12_000, unit: '8\u00A0часов' },
	] as DrinkMenuItem[],
} as const;

/** Элемент поездки 3–5 ч / на целый день: название + цена взрослый/ребёнок или priceText */
export type PoezdkiTripItem = {
	title: string;
	priceText?: string;
	priceAdult?: number;
	priceChild?: number;
};

/** Элемент партнёрской активности: название, продолжительность/условие, цена */
export type PoezdkiPartnerItem = {
	title: string;
	duration?: string;
	condition?: string;
	priceText?: string;
	priceAdult?: number;
	priceChild?: number;
	pricePrefix?: string;
	price?: number;
};

/** Элемент автопроката/трансфера: название, примечание, цены за час/сутки или одна цена */
export type PoezdkiCarItem = {
	title: string;
	note?: string;
	pricePerHour?: number;
	pricePerDay?: number;
	price?: number;
	priceNote?: string;
};

/** Элемент блока гидов: название, описание, цена за час */
export type PoezdkiGuideItem = {
	title: string;
	description?: string;
	pricePerHour: number;
};

/** Блок «Поездки» — по скриншоту: 3–5 ч, целый день, партнёрские активности, автопрокат */
export const POEZDKI = {
	title: 'ПОЕЗДКИ',
	trips35: {
		sectionTitle: 'ПОЕЗДКИ НА 3-5 ЧАСОВ',
		leftColumn: [
			{ title: 'ЗА МУЗЕЙ', priceText: 'КОМПЛИМЕНТ' },
			{ title: 'ЗАЯЧИЙ ОСТРОВ', priceAdult: 7_000, priceChild: 4_500 },
			{ title: 'ТЕНЬ НА\u00A0ПЛЕТЕНЬ', priceAdult: 7_000, priceChild: 5_500 },
			{ title: 'ЗУБРОВЫЙ ПИТОМНИК +\u00A0БОТАНИЧЕСКИЙ САД', priceAdult: 6_000, priceChild: 3_500 },
		] as PoezdkiTripItem[],
		rightColumn: [
			{ title: 'ВСЕСЕЗОННЫЙ КУРОРТ МАНЖЕРОК', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ПАСЕКА «МЕДОМ В\u00A0УХО»', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ПАЛЕОПАРК И\u00A0ЛОХМАТАЯ ФЕРМА', priceAdult: 7_000, priceChild: 5_000 },
			{ title: 'КАРЫМ', priceAdult: 5_000, priceChild: 3_500 },
		] as PoezdkiTripItem[],
	},
	fullDay: {
		sectionTitle: 'ПОЕЗДКИ НА\u00A0ЦЕЛЫЙ ДЕНЬ',
		leftColumn: [
			{ title: 'КРАЕУГОЛЬНЫЙ КАМЕНЬ', priceAdult: 10_000, priceChild: 6_500 },
			{ title: 'СТОЯНКА ЧЕРНОГО ХАНА', priceAdult: 10_000, priceChild: 6_500 },
			{ title: 'ТЕНЬ НА ПЛЕТЕНЬ (АВТОРСКОЕ ПРИКЛЮЧЕНИЕ)', priceAdult: 10_000, priceChild: 7_000 },
		] as PoezdkiTripItem[],
		rightColumn: [
			{ title: 'СТЕПНЯК НА\u00A0СТОЯНКЕ ЧЕРНОГО ХАНА', priceAdult: 15_000, priceChild: 10_500 },
			{ title: 'АЛТАЙСКИЙ ТРИПТИХ (ЗУБРЫ+БОТАНИЧЕСКИЙ САД+МОТОРАФТИНГ)', priceAdult: 10_500, priceChild: 8_500 },
			{ title: 'ЧУЙСКИЙ ТРАКТ 1/2', priceAdult: 15_000, priceChild: 10_500 },
		] as PoezdkiTripItem[],
	},
	partner: {
		sectionTitle: 'ПАРТНЁРСКИЕ АКТИВНОСТИ',
		items: [
			{ title: 'КОННЫЕ ПРОГУЛКИ', duration: '2\u00A0ЧАСА', priceAdult: 6_000, priceChild: 4_500 },
			{ title: 'ПОЕЗДКИ НА\u00A0БОЛОТОХОДАХ И\u00A0КВАДРОЦИКЛАХ', condition: 'ПРОВОДИТСЯ ОТ\u00A03\u00A0ЧЕЛОВЕК', priceText: '12\u00A0000\u00A0₽ / ЧАС' },
			{ title: 'РАФТИНГ', condition: 'ПРОВОДИТСЯ ОТ\u00A06\u00A0ЧЕЛОВЕК', priceText: '7\u00A0000\u00A0₽ / ЧЕЛ' },
			{ title: 'ВЕРТОЛЁТНЫЕ ТУРЫ', condition: 'ПРИ ПОЛНОЙ ЗАГРУЗКЕ ВЕРТОЛЕТА', pricePrefix: 'ОТ\u00A0', price: 1_000_000 },
		] as PoezdkiPartnerItem[],
	},
	carRental: {
		sectionTitle: 'АВТОПРОКАТ «БЫВАЛЫЙ\u00A0РЕЙНДЖЕР»',
		leftColumn: [
			{ title: 'TANK\u00A0300', note: '+15\u00A0руб./км топливо', pricePerHour: 3_000, pricePerDay: 20_000 },
			{ title: 'MERCEDES VIANO', note: '+15\u00A0руб./км топливо', pricePerHour: 3_500, pricePerDay: 25_000 },
		] as PoezdkiCarItem[],
		rightColumn: [
			{ title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ TANK 300', note: 'в\u00A0одну сторону за машину / до\u00A03\u00A0человек', price: 9_000 },
			{ title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ MERCEDES VIANO', note: 'в\u00A0одну сторону за машину / до\u00A05\u00A0человек', price: 11_000 },
			{ title: 'ИНДИВИДУАЛЬНЫЙ ТРАНСФЕР', price: 4_000, priceNote: 'час' },
			{ title: 'ГРУППОВОЙ ТРАНСФЕР В/ИЗ\u00A0АЭРОПОРТА', note: 'в\u00A0одну сторону', price: 3_500 },
			{ title: 'ДОСТАВКА', note: 'в\u00A0течение дня', price: 2_500, priceNote: '+\u00A0СУММА ЧЕКА' },
			{ title: 'ДОСТАВКА', note: 'прямо сейчас', price: 5_000, priceNote: '+\u00A0СУММА ЧЕКА' },
		] as PoezdkiCarItem[],
	},
	guides: {
		sectionTitle: 'ГИДЫ-СЛЕДОПЫТЫ И ВОДИТЕЛИ',
		subheading: 'СОПРОВОЖДАЮЩИЕ',
		leftColumn: [
			{
				title: 'ПОПУТЧИК',
				description: 'один из\u00A0членов нашей команды, который знает детали маршрута, составит вам компанию и\u00A0поговорит о\u00A0том о\u00A0сем',
				pricePerHour: 3_000,
			},
			{ title: 'ВОДИТЕЛЬ', pricePerHour: 2_000 },
		] as PoezdkiGuideItem[],
		rightColumn: [
			{
				title: 'СЛЕДОПЫТ',
				description: 'подготовленный гид, который знает маршруты, рассказывает интересные факты по\u00A0маршруту и\u00A0в\u00A0целом про алтай и\u00A0может вести автомобиль',
				pricePerHour: 3_000,
			},
		] as PoezdkiGuideItem[],
	},
} as const;

/** Элемент правой колонки блока «Путешествия» — подпись (чёрная) или ценник (красный) */
export type PuteshestviyaRightItem = {
	text: string;
	isPrice?: boolean;
};

/** Одно путешествие: красный подзаголовок, описание, правый столбец (подписи + цены) */
export type PuteshestviyaItem = {
	title: string;
	description: string;
	rightItems: PuteshestviyaRightItem[];
};

/** Блок «Путешествия» — индивидуальные авторские приключения */
export const PUTESHESTVIYA = {
	title: 'ПУТЕШЕСТВИЯ',
	mainHeading: 'ИНДИВИДУАЛЬНЫЕ АВТОРСКИЕ ПРИКЛЮЧЕНИЯ',
	items: [
		{
			title: 'ПРОХОД В\u00A0ШАМБАЛУ',
			description:
				'Путешествие к\u00A0горе Белуха с\u00A0посещением мест Рериха с\u00A0обедом или\u00A0ночевкой в\u00A0люкспенге наших друзей «We\u00A0are Altay». У нас есть разные варианты посещения этих мест с\u00A0полетом на\u00A0вертолете, поездкой на\u00A0машине через самые красивые места Алтая и\u00A08\u00A0часовым пешим переходом, который позволит вам совершить «средний алтайский круг».',
			rightItems: [
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА\u00A0ТРИ ДНЯ' },
				{ text: 'ОТ\u00A0150\u00A0000\u00A0Р НА\u00A0ЧЕЛОВЕКА', isPrice: true },
				{ text: 'ПУТЕШЕСТВИЕ ЗАНИМАЕТ НЕ\u00A0МЕНЕЕ 3\u00A0ДНЕЙ И\u00A02\u00A0НОЧЕЙ.' },
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА\u00A014\u00A0ДНЕЙ.' },
			],
		},
		{
			title: 'АЛТАЙСКОЕ КОЛЬЦО',
			description:
				'Большое путешествие по\u00A0всему Алтаю, которое позволяет рассмотреть все\u00A0самые главные ландшафты и\u00A0пейзажи, проехать по\u00A0всему Чуйскому тракту до\u00A0границы с\u00A0Монголией, побывать на\u00A0Марсе, увидеть скифские курганы в\u00A0Чулышманской долине и\u00A0переправиться через Телецкое озеро.',
			rightItems: [
				{ text: 'ОТ\u00A0300\u00A0000\u00A0Р НА\u00A0ЧЕЛОВЕКА', isPrice: true },
				{ text: 'ПУТЕШЕСТВИЕ ЗАНИМАЕТ ОТ\u00A03-Х\u00A0ДНЕЙ.' },
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА\u00A03 ДНЯ' },
			],
		},
		{
			title: 'ВОДА-ВОДА',
			description:
				'Поездка на\u00A0целый день на\u00A0Телецкое озеро, которое входит в\u00A0список наследия ЮНЕСКО. Озеро находится на высоте 434\u00A0м над уровнем моря, его длина составляет 78\u00A0км. Посещение озера включает прогулку на\u00A0катерах от\u00A0северного до\u00A0южного берега, где вода прогревается достаточно, чтобы можно было купаться. Дополнительно можно сделать остановку на\u00A0ночь в\u00A0отеле.',
			rightItems: [
				{
					text: 'ОТ\u00A050\u00A0000\u00A0Р НА ЧЕЛОВЕКА, С\u00A0УЧЕТОМ ПЛАВАНИЯ ЧЕРЕЗ ВСЕ ОЗЕРО, НОЧЬ В\u00A0ОТЕЛЕ ОПЛАЧИВАЕТСЯ ОТДЕЛЬНО',
					isPrice: true,
				},
				{ text: 'ПОЕЗДКА ЗАНИМАЕТ ЦЕЛЫЙ' },
				{ text: 'ДЕНЬ' },
			],
		},
		{
			title: 'МИССИЯ НА МАРС',
			description:
				'Поездка по\u00A0Чуйскому тракту, одной из\u00A0самых красивых дорог в\u00A0мире по\u00A0версии National Geographic. Дорожное путешествие с\u00A0остановками на\u00A0уникальных природных и\u00A0исторических достопримечательностях: Каракольская долина с\u00A0курганами, перевалы Семинский и\u00A0Чике-Таман, гейзерово озеро. Вишенкой на\u00A0торте этой поездки является хайкинг в\u00A0горном районе Марс на\u00A0границе с\u00A0Монголией.',
			rightItems: [{ text: 'ОТ\u00A0110\u00A0000\u00A0Р НА ЧЕЛОВЕКА', isPrice: true }],
		},
	] as PuteshestviyaItem[],
} as const;

/** Блок «Для детей» */
export const DLYA_DETEY = {
	title: 'ДЛЯ ДЕТЕЙ',
	paragraph: 'Дети в\u00A0«Молодости» считаются от\u00A05 до\u00A012\u00A0лет.',
	intro: 'На\u00A0территории базы есть:',
	listItems: [
		'Детская площадка имени Дамблдора',
		'Домашний и\u00A0уличный кинотеатры',
		'Спортивные игры',
		'Услуги няни (8\u00A0часов 12\u00A0000\u00A0₽)',
	],
} as const;

/** Текст под аккордеонами: фирменный магазин + призыв */
export const CONCEPT_STORE = {
	paragraph:
		'А ещё не забудьте заглянуть в\u00A0наш фирменный магазин: там представлены сувениры и продукция с\u00A0символикой «Молодости», в\u00A0том числе премиальные алтайские сувениры.',
	ctaText:
		'Если вам что-то хочется, а\u00A0мы об этом ещё не\u00A0подумали — скажите нам, и\u00A0мы вместе решим, сколько это будет стоить.',
} as const;

/** Блок «Банно-оздоровительный комплекс Благодать» — сетка с\u00A0ценами, 2 колонки */
export const BLAGODAT_SAUNA = {
	title: 'БАННО-ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «БЛАГОДАТЬ»',
	leftColumn: [
		{ title: 'ПАРЕНИЕ', description: '90\u00A0минут / 1\u00A0человек', price: 20_000 },
		{ title: 'каждый дополнительный час', description: '60 минут / 1 человек', price: 10_000 },
		{ title: 'ЧАН НА АЛТАЙСКИХ ТРАВАХ', price: 20_000 },
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'МАССАЖ РАССЛАБЛЯЮЩИЙ', description: '60 минут / 1 человек', price: 9_000 },
		{ title: '', description: '90\u00A0минут / 1\u00A0человек', price: 12_000 },
		{ title: '', description: '120\u00A0минут / 1\u00A0человек', price: 16_000 },
		{ title: 'МАНУАЛЬНЫЙ МАССАЖ', description: '35-40 минут / 1\u00A0человек', price: 15_000 },
		{ title: 'ЭНЕРГОТЕРАПЕВТ', description: 'сеанс / 1\u00A0человек', price: 25_000 },
	] as DrinkMenuItem[],
} as const;

export const ADDITIONAL_PRICES: PricesModel[] = [
	{
		title: 'Room service',
		subtitle: '(в\u00A0дом или в\u00A0баню)',
		twoCol: '1\u00A0доставка',
		price: 1_000,
	},
	{
		title: 'Прачечная (стирка+сушка)',
		twoCol: '1\u00A0загрузка',
		price: 2_000,
	},
	{
		title: 'Глажка вещей',
		twoCol: '1\u00A0единица',
		price: 500,
	},
	{
		title: 'индивидуальные услуги няни',
		twoCol: '8 часов',
		price: 12_000,
	},
	{
		title: 'доставка «бывалый рейнджер»',
		twoCol: 'в течение дня',
		price: 2_500,
		note: '+\u00A0сумма чека',
	},
	{
		title: 'доставка «бывалый рейнджер»',
		twoCol: 'прямо сейчас',
		price: 5_000,
		note: '+\u00A0сумма чека',
	},
];

export const GASTRO_TRAKTIR_FESTIVAL: PricesModel[] = [
	{
		title: 'Завтрак',
		priceText: 'Входит в\u00A0стоимость проживания',
	},
	{
		title: 'обед',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012\u00A0лет)',
		price: 3_500,
		priceChild: 2_000,
	},
	{
		title: 'УЖИН',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012\u00A0лет)',
		price: 4_500,
		priceChild: 3_000,
	},
	{
		title: 'Съедобное бревно',
		subtitle: '(обед+ужин)',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012\u00A0лет)',
		price: 8_000,
		priceChild: 5_000,
	},
];
export const GASTRO_TRAKTIR_QUIET: PricesModel[] = [
	{
		title: 'Завтрак',
		priceText: 'Входит в\u00A0стоимость проживания',
	},
	{
		title: 'обед',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 3_500,
		priceChild: 2_000,
	},
	{
		title: 'УЖИН',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 4_500,
		priceChild: 3_000,
	},
	{
		title: 'Съедобное бревно',
		subtitle: '(обед+ужин)',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 8_000,
		priceChild: 5_000,
	},
];

export const GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS: PricesModel[] = [
	{
		title: 'Завтрак',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'обед',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 5_000,
		priceChild: 2_500,
	},
	{
		title: 'УЖИН',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до\u00A012 лет)',
		price: 10_000,
		priceChild: 6_000,
	},
];
export const GASTRO_TRAKTIR_QUIET_FOR_NON_GUESTS: PricesModel[] = [
	{
		title: 'Завтрак',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'обед',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
		price: 3_500,
		priceChild: 2_000,
	},
	{
		title: 'УЖИН',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
		price: 4_500,
		priceChild: 3_000,
	},
];

export const TRAKTIR_MENU: PricesModel[] = [
	{
		title: 'Стейк Рибай',
		twoCol: '',
		price: 5_000,
	},
	{
		title: 'Сырно медовая тарелка',
		subtitle: 'от «Логовской сыроварни» и\u00A0пасеки «Мёдом в\u00A0ухо»',
		twoCol: '',
		price: 3_000,
	},
	{
		title: 'Ланч-бокс',
		twoCol: '',
		price: 2_000,
	},
];

export const BAR_MENU: PricesModel[] = [
	{
		title: 'Бокал',
		subtitle: 'игристого / белого / красного',
		twoCol: '',
		pricePrefix: 'от ',
		price: 1_000,
	},
	{
		title: 'Крепкий алкоголь',
		subtitle: '70\u00A0мл',
		twoCol: '',
		pricePrefix: 'от ',
		price: 1_000,
	},
	// {
	//   title: 'Крепкий алкоголь',
	//   subtitle: 'наш',
	//   twoCol: '',
	//   pricePrefix: 'от ',
	//   price: 500,
	// },
	{
		title: 'Авторская настойка',
		subtitle: '',
		twoCol: '',
		pricePrefix: '',
		price: 500,
	},
	{
		title: 'Водка',
		subtitle: '50\u00A0мл',
		twoCol: '',
		pricePrefix: '',
		price: 500,
	},
	// {
	// 	title: 'Коктейли крепкие алкогольные',
	// 	subtitle: 'негрони / Б-52',
	// 	twoCol: '',
	// 	pricePrefix: '',
	// 	price: 1_500,
	// },
	{
		title: 'Коктейли алкогольные',
		subtitle: 'Джин-тоник / Негрони / Б-52 / Куба-либре / Виски-кола / Апероль-шпритц / Кровая мэри / Маргарита',
		twoCol: '',
		pricePrefix: 'от ',
		price: 1_000,
	},
	{
		title: 'Пиво и\u00A0медовуха',
		subtitle: '0,33',
		twoCol: '',
		price: 500,
	},
	{
		title: 'Пробковый сбор',
		subtitle: 'слабый алкоголь',
		twoCol: '',
		price: 2_000,
		note: 'с\u00A0бутылки',
	},
	{
		title: 'Пробковый сбор',
		subtitle: 'крепкий алкоголь',
		twoCol: '',
		price: 5_000,
		note: 'с\u00A0бутылки',
	},
];

export const TRIKSTER_MENU: PricesModel[] = [
	{
		title: 'Эспрессо / Фильтр кофе / Американо',
		subtitle: 'во\u00A0время завтрака 1\u00A0напиток входит в\u00A0стоимость',
		twoCol: '',
		price: 450,
	},
	{
		title: 'Эспрессо-тоник',
		subtitle: '',
		twoCol: '',
		price: 550,
	},
	{
		title: 'Бамбл кофе',
		subtitle: '',
		twoCol: '',
		price: 550,
	},
	{
		title: 'Капучино / Латте / Флэт\u00A0уайт',
		subtitle: '',
		twoCol: '',
		price: 550,
	},
	{
		title: 'Какао',
		subtitle: '',
		twoCol: '',
		price: 550,
	},
	{
		title: 'Матча',
		subtitle: '',
		twoCol: '',
		price: 500,
	},
	{
		title: 'Чай травяной/зелёный/чёрный',
		subtitle: '500\u00A0мл',
		twoCol: '',
		price: 700,
	},
	{
		title: 'Алтайский травяной чай',
		subtitle: 'бесплатно в\u00A0течение дня',
		twoCol: '',
		price: 0,
	},
	{
		title: 'Авторский чай',
		subtitle: 'облепиховый, имбирный, брусничный (500 мл)',
		twoCol: '',
		price: 1_000,
	},
	{
		title: 'Чай Марьяж чёрный ENGLISH\u00A0BREAKFAST TEA',
		subtitle: 'насыщенный, утренний купаж (чайник)',
		twoCol: '',
		price: 1_000,
	},
	{
		title: 'ЧАЙ WEDDING IMPÉRIAL',
		subtitle: 'со вкусом шоколада и\u00A0карамели (чайник)',
		twoCol: '',
		price: 1000,
	},
	{
		title: 'ЧАЙ EARL GREY PROVENCE',
		subtitle: 'бергамот и\u00A0голубая лаванда',
		twoCol: '',
		price: 1000,
	},
	{
		title: 'ЧАЙ TOKYO BREAKFAST TEA',
		subtitle: 'мягкий и\u00A0бархатистый',
		twoCol: '',
		price: 1000,
	},
	{
		title: 'ЧАЙ CHAI PARISIEN',
		subtitle: 'пряный, с\u00A0мягкими фруктовыми нотами',
		twoCol: '',
		price: 1000,
	},
	{
		title: 'Безалкогольные напитки',
		subtitle: 'газированные лимонады / минеральная вода Сан Пелегрино',
		pricePrefix: 'от ',
		price: 500,
	},
];

export const HEAT_LAB_SERVICE: HeatLabModel[] = [
	{
		title: '',
		listTitle: 'Входит:',
		list: ['— аренда подготовленного пространства бани', '— веники', '— вода Петроглиф с\u00A0газом и\u00A0без', '— алтайский травяной чай', '— мед, сушки и\u00A0варенье', '— необходимое количество полотенец и\u00A0простыней', '— фирменная шапка в\u00A0подарок'],
	},
];

export const HEAT_LAB: HeatLabModel[] = [
	{
		title: 'Банная церемония «Черный Хан»',
		subtitle: '2\u00A0пармейстера, горячий чан\u00A0алтайских травах',
		duration: '2 - 3 часа',
		clients: 'до 2 человек',
		price: 80_000,
	},
	{
		title: 'каждый дополнительный час',
		duration: '60 мин.',
		clients: '',
		price: 15_000,
	},
	{
		title: 'каждый дополнительный человек',
		duration: '',
		clients: '',
		price: 20_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Банная церемония «Молодость»',
		subtitle: '1 пармейстер',
		duration: '120 мин.',
		clients: 'до 2 человек',
		price: 40_000,
	},
	{
		title: 'каждый дополнительный час',
		duration: '60 мин.',
		clients: '',
		price: 15_000,
	},
	{
		title: 'каждый дополнительный человек',
		duration: '',
		clients: '',
		price: 20_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Банная церемония «Благодать» в\u00A0Малой бане',
		subtitle: '',
		listTitle: '',
		duration: '90 мин.',
		clients: '1 человек',
		price: 30_000,
	},
	{
		title: 'каждые дополнительные 30\u00A0минут',
		duration: '30 мин.',
		clients: '',
		price: 5_000,
	},
	{
		title: 'каждый дополнительный человек',
		duration: '',
		clients: '',
		price: 15_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Банная церемония «Благодать» в\u00A0Большой бане',
		duration: '90 мин.',
		clients: '1 человек',
		price: 40_000,
	},
	{
		title: 'каждые дополнительные 30\u00A0минут',
		duration: '30 мин.',
		clients: '',
		price: 7_000,
	},
	{
		title: 'каждый дополнительный человек',
		duration: '',
		clients: '',
		price: 15_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Чан на\u00A0Алтайских травах',
		duration: '',
		clients: '',
		price: 15_000,
	},
	{
		title: 'Классическое парение',
		duration: '20\u00A0мин.',
		clients: '1\u00A0человек',
		price: 10_000,
	},
	{
		title: 'Групповое парение',
		duration: '15\u00A0мин.',
		clients: 'до 6\u00A0человек',
		price: 5_000,
		note: 'с человека',
	},
	{
		title: 'Аренда бани (малая)',
		duration: '90\u00A0мин.',
		clients: '',
		price: 15_000,
	},
	{
		title: 'каждые дополнительные 30 минут',
		subtitle: '20 минут мы\u00A0считаем в\u00A0пользу гостей, а\u00A0последние 10 в\u00A0нашу',
		duration: '',
		clients: '',
		price: 5_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Аренда бани (большая)',
		duration: '90\u00A0мин.',
		clients: '',
		price: 25_000,
	},
	{
		title: 'каждые дополнительные 30 минут',
		subtitle: '20\u00A0минут мы\u00A0считаем в\u00A0пользу гостей, а\u00A0последние 10 в\u00A0нашу',
		duration: '',
		clients: '',
		price: 7_000,
	},
	{
		title: '',
		duration: '',
		clients: '',
	},
	{
		title: 'Массаж, классический',
		duration: '60\u00A0мин.',
		clients: '1\u00A0человек',
		price: 8_000,
	},
	{
		title: 'Массаж, классический',
		duration: '90\u00A0мин.',
		clients: '1\u00A0человек',
		price: 10_000,
	},
	{
		title: 'Мануальный массаж',
		duration: '30–45\u00A0мин.',
		clients: '1\u00A0раз',
		price: 10_000,
	},
	{
		title: 'Оздоровительный курс мануального массажа',
		duration: '30–45\u00A0мин.',
		clients: '5\u00A0раз',
		price: 40_000,
	},
];

export const TOUR_GROUPS: PricesModel[] = [
	{
		title: 'Краеугольный камень',
		twoCol: 'весь день',
		price: 10_000,
		priceChild: 6_500,
	},
	{
		title: 'Стоянка Чёрного хана',
		twoCol: 'весь день',
		price: 10_000,
		priceChild: 6_500,
	},
	{
		title: 'Степник на Стоянке Чёрного хана',
		twoCol: 'весь день',
		price: 15_000,
		priceChild: 10_500,
	},
	{
		title: 'Степник на Стоянке Чёрного хана',
		subtitle: 'В\u00A0РАМКАХ КУЛЬТУРНОЙ ПРОГРАММЫ В\u00A0ВЫСОКИЙ СЕЗОН (ИЮЛЬ-АВГУСТ). СТОИМОСТЬ ДЛЯ ПРОЖИВАЮЩИХ',
		twoCol: 'весь день',
		price: 8_000,
		priceChild: 5_600,
	},
	{
		title: 'Алтайскии триптих',
		subtitle: 'зубры +\u00A0ботанический\u00A0сад +\u00A0моторафтинг',
		twoCol: 'весь день',
		price: 10_000,
		priceChild: 8_500,
	},
	{
		title: 'Тень на плетень',
		subtitle: 'Поездка в\u00A0деревню Сростки без ивента',
		twoCol: '6 часов',
		price: 7_000,
		priceChild: 5_500,
	},
	{
		title: 'Тень на плетень',
		subtitle: 'авторское приключение с\u00A0обедом на\u00A0завалинке и\u00A0ансамблем Товарочка',
		twoCol: 'весь день',
		price: 10_000,
		priceChild: 7_000,
	},
	{
		title: 'Тень на плетень',
		subtitle: 'авторское приключение - СЕЗОННЫЙ ЗАЕЗД для\u00A0проживающих гостей',
		twoCol: 'весь день',
		price: 0,
		priceChild: 0,
	},
	{
		title: 'Вода-вода (Телецкое озеро)',
		subtitle: 'Поездка проводится от\u00A04-х гостей. В\u00A0стоимость поездки входит ланчбокс. Мы можем сделать остановку в\u00A0ресторане, где питание гость оплачивает самостоятельно.',
		twoCol: 'Весь день',
		price: 50_000,
		priceChild: 30_000,
	},
	{
		title: 'Чуйский тракт - 1/2',
		twoCol: 'Весь день',
		price: 15_000,
		priceChild: 10_500,
	},
	{
		title: 'Эл музей',
		subtitle: 'поездка в\u00A0Национальный музей',
		twoCol: '3\u00A0часа',
		priceText: 'комплимент',
	},
	{
		title: 'Заячий остров',
		subtitle: 'групповой',
		twoCol: '4–5\u00A0часов',
		price: 7_000,
		priceChild: 4_500,
	},
	{
		title: 'Пасека',
		subtitle: 'групповой',
		twoCol: '2\u00A0часа',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'Манжерок',
		subtitle: 'поездка в\u00A0сопровождении следопыта с\u00A0подъемом на канатной дороге и хайкингом по эко-тропам (билет на КД оплачивается отдельно)',
		twoCol: '3\u00A0часа',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'Манжерок и\u00A0Пасека «Мёдом в\u00A0ухо»',
		subtitle: 'подъем на канатной дороге не\u00A0входит в\u00A0стоимость',
		twoCol: '3\u00A0часа',
		price: 5_000,
		priceChild: 3_500,
	},
	{
		title: 'Палеопарк и лохматая ферма',
		subtitle: 'билеты входят в\u00A0стоимость',
		twoCol: '4\u00A0часа',
		price: 7_000,
		priceChild: 5_000,
	},
	{
		title: 'Зубровый питомник+ботанический сад',
		subtitle: 'групповой',
		twoCol: '3\u00A0часа',
		price: 6_000,
		priceChild: 3_500,
	},
	{
		title: 'Карым',
		twoCol: '',
		price: 5_000,
		priceChild: 3_500,
	},
];

/** Блок «Групповые хайкинги» — отдельный аккордеон */
export const GROUP_HIKINGS = {
	title: 'ГРУППОВЫЕ ХАЙКИНГИ',
	leftColumn: [
		{ title: 'ГРУППОВОЙ ХАЙКИНГ ПО\u00A0ХОББИТАНИИ', description: '3-4 часа', price: 3_500 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА\u00A0ГОРУ ЧЕРЕПАН', description: '3-4 часа', price: 3_500 },
		{ title: 'ГРУППОВОЙ ТРЕКИНГ «НЕ\u00A0ОДИНОКАЯ ГОРА БАБЫРГАН»', description: '5-6 часов', price: 6_000 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА\u00A0РАССВЕТНО-ЗАКАТНУЮ ТОЧКУ', description: '2-3 часа', price: 3_500 },
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'ГРУППОВОЙ ТРЕКИНГ НА\u00A0ГОРУ САРЛЫК', description: '6-7 часов', price: 10_000 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА\u00A0ГОРУ ВЕРБЛЮД', description: '3-4 часа', price: 3_500 },
		{ title: 'АРЕНДА ВЕЛОСИПЕДОВ', priceText: 'БЕСПЛАТНО' },
	] as DrinkMenuItem[],
} as const;

export const TOUR_HIKINGS: PricesModel[] = [
	{
		title: 'Групповой хайкинг по\u00A0«Хоббитании»',
		subtitle: 'Проводится от\u00A03\u00A0человек',
		twoCol: '2–3 часа',
		priceText: '3\u00A0500\u00A0₽ / 2\u00A0000\u00A0₽',
	},
	{
		title: 'Групповой хайкинг на\u00A0гору Черепан',
		subtitle: 'Проводится от\u00A03\u00A0человек',
		twoCol: '3–4 часа',
		price: 3_500,
	},
	{
		title: 'Групповой хайкинг на\u00A0гору Бабырган',
		subtitle: 'Проводится от\u00A05\u00A0человек',
		twoCol: '5–6 часов',
		price: 6_000,
	},
	{
		title: 'Групповой хайкинг на\u00A0гору Верблюд',
		subtitle: 'Проводится от\u00A05\u00A0человек',
		twoCol: '3 часа',
		priceText: '3\u00A0500\u00A0₽ / 2\u00A0000\u00A0₽',
	},
	{
		title: 'Групповой хайкинг на гору рассветно-закатную точку',
		subtitle: 'Проводится от\u00A05\u00A0человек',
		twoCol: '2–3 часа',
		priceText: '3\u00A0500\u00A0₽ / 2\u00A0000\u00A0₽',
	},
	{
		title: 'Групповой хайкинг на\u00A0гору Сарлык',
		subtitle: 'Проводится от\u00A05\u00A0человек',
		twoCol: 'весь день',
		price: 10_000,
	},
];

export const TOUR_INDIVIDUAL: HeatLabModel[] = [
	{
		title: 'Миссия на\u00A0Марс на\u00A0одну ночь при\u00A0двухместном размещении',
		duration: 'до\u00A02\u00A0чел',
		pricePrefix: '',
		price: 110_000,
	},
	{
		title: 'доп человек (номер)',
		duration: '',
		clients: '',
		price: 30_000,
	},
	{
		title: 'Золотое кольцо',
		subtitle: 'путешествие по\u00A0основным достопримечательностям Алтая',
		duration: 'от\u00A03-х\u00A0дней',
		pricePrefix: 'от ',
		price: 300_000,
	},
	{
		title: 'Проход в\u00A0Шамбалу',
		subtitle: 'партнёрская поездка в\u00A0We are Altay',
		duration: '3\u00A0дня / 2\u00A0ночи',
		pricePrefix: 'от ',
		price: 150_000,
	},
	{
		title: 'Вертолётная экскурсия на Белуху с\u00A0обедом',
		duration: 'до\u00A05\u00A0чел',
		pricePrefix: 'от ',
		price: 1_000_000,
	},
	{
		title: 'Вода-Вода (Телецкое озеро)',
		subtitle: 'от\u00A04\u00A0гостей, ланч-боксы включены',
		duration: 'весь день',
		priceText: 'от\u00A050\u00A0000\u00A0₽ / 30\u00A0000\u00A0₽',
	},
];

export const DRIVERS: HeatLabModel[] = [
	{
		title: 'Следопыт/Попутчик',
		duration: '1 час',
		price: 3_000,
	},
	{
		title: 'водитель',
		duration: '1\u00A0час',
		price: 2_000,
	},
];

export const TOUR_PARTNERS: PricesModel[] = [
	{
		title: 'Конные прогулки',
		subtitle: '2\u00A0часа',
		priceText: 'Взрослый 6\u00A0000\u00A0₽ / Ребенок 4\u00A0500\u00A0₽',
	},
	{
		title: 'Поездки на\u00A0болотоходах и\u00A0квадроциклах',
		priceText: 'от\u00A012\u00A0000\u00A0₽ / час',
	},
	{
		title: 'Рафтинг',
		subtitle: 'от 6 чел',
		priceText: 'от\u00A07\u00A0000\u00A0₽ / человек',
	},
	{
		title: 'Вертолётные туры',
		subtitle: 'при\u00A0полной загрузке вертолёта',
		pricePrefix: 'от ',
		price: 150_000,
	},
];

export const AUTO_RENT: PricesModel[] = [
	{
		title: 'MERCEDES VIANO',
		subtitle: '1 час',
		price: 3_500,
	},
	{
		title: 'MERCEDES VIANO',
		subtitle: '24 часа',
		price: 25_000,
	},
	{
		title: 'TANK',
		subtitle: '1 час',
		price: 3_000,
	},
	{
		title: 'TANK',
		subtitle: '24 часа',
		price: 20_000,
	},
];

export const TRANSFER: PricesModel[] = [
	{
		title: 'Встреча в\u00A0аэропорту, Tank\u00A0300',
		twoCol: 'в\u00A0одну сторону, за\u00A0машину до\u00A03\u00A0человек',
		price: 9_000,
	},
	{
		title: 'Встреча в\u00A0аэропорту, Mercedes\u00A0Viano',
		twoCol: 'в\u00A0одну сторону, за\u00A0машину до\u00A05\u00A0человек',
		price: 11_000,
	},
	{
		title: 'Групповой трансфер в\u00A0аэропорт',
		twoCol: 'в\u00A0одну сторону',
		price: 3_500,
	},
	{
		title: 'Бизнес зал\u00A0прилет',
		subtitle: 'взрослый/ребенок до\u00A012\u00A0лет',
		twoCol: '',
		priceText: 'стоимость рассчитывается по\u00A0запросу и\u00A0включает комиссию 20%',
	},
	{
		title: 'Бизнес зал вылет',
		subtitle: 'взрослый/ребенок до\u00A012\u00A0лет',
		twoCol: '',
		priceText: 'стоимость рассчитывается по\u00A0запросу и\u00A0включает комиссию 20%',
	},
	{
		title: 'индивидуальный трансфер в\u00A0любую сторону',
		subtitle: '1\u00A0час',
		priceText: '4\u00A0000\u00A0₽ +\u00A0бензин 15\u00A0руб/км',
	},
];

export const CORPORATIVE_PRICE: HeatLabModel[] = [
	{
		title: 'АРЕНДА ВСЕЙ БАЗЫ',
		subtitle: '(завтрак, обед, ужин и\u00A0водопой, автопарк без бензина, водители следопыты, номерной фонд, баня с\u00A0групповыми парениями + чан, аренда всех пространств, культурная программа, которую мы делаем своими силами)',
		duration: '1\u00A0сутки (до\u00A050\u00A0человек)',
		price: 2_500_000,
	},
	{
		title: 'Каждый человек сверх 50-го',
		duration: '1\u00A0сутки',
		price: 25_000,
	},
	{
		title: 'Клуб Сруб',
		duration: '2\u00A0часа с\u00A0учётом подготовки',
		priceText: '18\u00A0000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 24 часов с\u00A0учётом подготовки',
		price: 100_000,
	},
	{
		title: 'Юрта',
		duration: '2 часа с\u00A0учётом подготовки',
		priceText: '12\u00A0000 / час',
	},
	{
		title: '',
		duration: '1\u00A0мероприятие до\u00A012\u00A0часов',
		price: 30_000,
	},
	{
		title: 'Аренда банного комплекса под\u00A0ключ',
		subtitle: 'Аренда банного комплекса под\u00A0ключ - малая и\u00A0большая баня, чан.',
		duration: '1\u00A0час',
		price: 60_000,
	},
	{
		title: 'Авторская поездка в\u00A0деревню Сростки “Тень на плетень” под ключ',
		subtitle: 'до\u00A025\u00A0человек',
		duration: '1\u00A0день',
		listTitle: 'Входит:',
		list: ['—\u00A0гиды', '—\u00A0пространство', '—\u00A0обед от\u00A0шеф-повара', '—\u00A0посещение музеев Шукшина', '—\u00A0выступление коллектива Товарочка'],
		price: 500_000,
	},
	{
		title: 'Аренда Стоянки Черного Хана на\u00A0день',
		listTitle: 'Входит:',
		list: ['—\u00A0площадка', '—\u00A0вода', '—\u00A0генератор', '—\u00A0тех.\u00A0поддержка'],
		price: 300_000,
	},
	{
		title: 'Степник на стоянке Чёрного Хана под ключ',
		duration: 'трансфер и\u00A0авто не\u00A0входят',
		listTitle: 'Входит:',
		list: ['—\u00A0аренда площадки', '—\u00A0кейтеринг до\u00A040 чел', '—\u00A0чай', '—\u00A0кофе', '—\u00A0вода', '—\u00A0концерт горлового пения', '—\u00A0DJ', '—\u00A0хайкинг', '—\u00A0мастер класс по\u00A0плетению венков', '—\u00A0алтайские игры'],
		price: 1_300_000,
	},
	{
		title: 'Кейтеринг на\u00A0Степнике - только еда',
		subtitle: 'до\u00A030\u00A0человек',
		duration: 'трансфер и\u00A0авто не\u00A0входят',
		price: 60_000,
		note: 'каждый следующий человек - 2\u00A0000',
	},
	{
		title: 'Горячий человек',
		subtitle: 'до\u00A040\u00A0человек',
		listTitle: 'Входит:',
		list: ['—\u00A0диджей', '—\u00A0баран на\u00A0вертеле - как гастро шоу *ужин оплачивается дополнительно', '—\u00A0огненное шоу', '—\u00A0изготовление и\u00A0транспортировка дер. фигуры', '—\u00A0аренда сруба'],
		duration: '3\u00A0часа с\u00A0учётом нашей подготовки, вечеринка на\u00A0берегу Катуни со\u00A0сжиганием деревянной фигуры',
		price: 360_000,
	},
	{
		title: 'Групповая медитация с\u00A0поющими чашами',
		subtitle: 'до\u00A015\u00A0человек',
		duration: 'включена аренда пространства',
		price: 54_000,
		note: 'каждый следующий человек - 3\u00A0000',
	},
	{
		title: 'Вечеринка с\u00A0диджеем в\u00A0клубе “Сруб”',
		subtitle: 'до\u00A015\u00A0человек',
		listTitle: 'Примечания:',
		list: ['—\u00A0организация бара входит', '—\u00A0напитки оплачиваются отдельно'],
		duration: '5\u00A0часов',
		price: 150_000,
	},
	{
		title: 'Караоке система в\u00A0клубе “Сруб” ',
		priceText: 'входит в\u00A0аренду сруба',
		duration: '5\u00A0часов',
	},
	{
		title: 'Караоке в\u00A0клубе “Сруб” с\u00A0Сергеем Ашариным под\u00A0ключ',
		subtitle: 'до\u00A015\u00A0человек',
		listTitle: 'Примечания:',
		list: ['—\u00A0организация бара входит', '—\u00A0напитки оплачиваются отдельно'],
		duration: '5 часов',
		price: 150_000,
	},
	{
		title: 'стол на\u00A0Катуни / Стол с\u00A0самоваром / бар Розовый Фламинго',
		subtitle: 'на\u00A0семью или группу до\u00A06\u00A0чел',
		listTitle: 'Входит:',
		list: ['—\u00A0аренда стола', '—\u00A0подготовка', '—\u00A0сервисное обслуживание'],
		price: 12_345,
		note: 'за\u00A0каждого следующего гостя 1000\u00A0₽',
	},
	{
		title: 'Веранда',
		subtitle: 'закрытие веранды под группу гостей (до\u00A030\u00A0человек)',
		price: 30_000,
	},
	{
		title: 'Летний кинотеатр',
		subtitle: 'проектор, все\u00A0необходимое для\u00A0уютного просмотра и\u00A0работает бар\u00A0"Малыш"',
		priceText: '10\u00A0000\u00A0₽ / час',
	},
	{
		title: 'Танцплощадка',
		duration: 'бесплатно',
		price: 0,
	},
	{
		title: 'Костровая площадка с\u00A0костром',
		subtitle: 'малый и\u00A0большой круг',
		duration: 'бесплатно',
		price: 0,
	},
	{
		title: 'Большой костер по\u00A0заказу',
		subtitle: '',
		price: 25_000,
		listTitle: 'Примечания:',
		list: ['—\u00A0организация бара входит', '—\u00A0напитки оплачиваются отдельно'],
	},
	{
		title: 'Мастер классы, которые делает сотрудник на\u00A0базе',
		subtitle: '(бисероплетение, венки, карта желаний, рисование итд) ',
		priceText: '3\u00A0000/ 2\u00A0000 (взр/реб)',
		note: 'за\u00A01\u00A0человека',
	},
	{
		title: 'ТОРТ под\u00A0заказ',
		subtitle: '',
		price: 5_000,
		note: 'за\u00A01\u00A0кг',
	},
	{
		title: 'Кофе-брейк',
		listTitle: 'Можно выбрать 3 позиции из еды, напитки все включены:',
		list: ['—\u00A0фильтр-кофе,', '—\u00A0чай', '—\u00A0вода', '—\u00A0сэндвичи с\u00A0мясом и рыбой', '—\u00A0орехи', '—\u00A0ассорти сыров', '—\u00A0овощи', '—\u00A0сладкая выпечка', '—\u00A0пироги'],
		price: 1_500,
		note: 'за\u00A01\u00A0человека',
	},
	{
		title: 'Пикник на\u00A0Хоббитании',
		subtitle: 'до\u00A015\u00A0человек',
		price: 40_000,
		note: 'каждый следующий человек 1\u00A0500',
	},
	{
		title: 'Пикник от\u00A0шефа в\u00A0Каракольской долине',
		subtitle: 'обязательно с\u00A0горячим супом и поваром',
		priceText: 'от\u00A070\u00A0000 за\u00A030\u00A0человек',
		note: 'каждый следующий человек 2\u00A0000',
	},
	{
		title: 'Пробковый сбор, слабый алкоголь',
		price: 2_000,
		note: 'с\u00A0бутылки',
	},
	{
		title: 'Пробковый сбор, крепкий алкоголь',
		price: 5_000,
		note: 'с\u00A0бутылки',
	},
	{
		title: 'Концерт группы *любой группы*',
		subtitle: '*исключение: когда на концерт можно позвать всех гостей базы, тогда за аренду пространства не берем деньги',
		priceText: 'Индивидуально',
	},
	{
		title: 'Юрта на Марсе',
		duration: '2\u00A0часа с\u00A0учётом подготовки',
		priceText: '12\u00A0000 / час',
	},
	{
		title: '',
		duration: '1\u00A0мероприятие до 12\u00A0часов',
		price: 40_000,
	},
];

export const CORPORATIVE_PRICE_NON_GUESTS: HeatLabModel[] = [
	{
		title: 'Клуб Сруб',
		duration: '2\u00A0часа с\u00A0учётом подготовки',
		priceText: '20 000 / час',
	},
	{
		title: '',
		duration: '1\u00A0мероприятие до 24\u00A0часов с\u00A0учётом подготовки',
		price: 120_000,
	},
	{
		title: 'Юрта',
		duration: '2\u00A0часа с\u00A0учётом подготовки',
		priceText: '14\u00A0000 / час',
	},
	{
		title: '',
		duration: '1\u00A0мероприятие до\u00A012\u00A0часов',
		price: 36_000,
	},
	{
		title: 'Аренда банного комплекса под ключ',
		subtitle: 'малая и\u00A0большая баня, чан, групповой пар 30\u00A0мин',
		duration: '1\u00A0час',
		price: 70_000,
	},
	// {
	// 	title: 'Авторская поездка в\u00A0деревню Сростки “Тень на плетень” под ключ',
	// 	subtitle: 'до 25 человек',
	// 	duration: '1 день',
	// 	listTitle: 'Входит:',
	// 	list: ['— гиды', '— пространство', '— обед от шеф-повара', '— посещение музеев Шукшина', '— выступление коллектива Товарочка'],
	// 	price: 500_000,
	// },
	{
		title: 'Аренда Стоянки Черного Хана на день',
		listTitle: 'Входит:',
		list: ['—\u00A0площадка', '—\u00A0вода', '—\u00A0генератор', '—\u00A0тех.\u00A0поддержка'],
		price: 300_000,
	},
	{
		title: 'Степник на стоянке Чёрного Хана под ключ',
		duration: 'трансфер и авто не входят',
		listTitle: 'Входит:',
		list: ['—\u00A0аренда площадки', '—\u00A0кейтеринг до 40 чел', '—\u00A0чай', '—\u00A0кофе', '—\u00A0вода', '—\u00A0концерт горлового пения', '—\u00A0DJ', '—\u00A0хайкинг', '—\u00A0мк по\u00A0плетению венков', '—\u00A0алтайские игры'],
		price: 1_300_000,
	},
	// {
	// 	title: 'Кейтеринг на Степнике - только еда',
	// 	subtitle: 'до 30 человек',
	// 	duration: 'трансфер и авто не входят',
	// 	price: 60_000,
	// 	note: 'каждый следующий человек - 2 000',
	// },
	{
		title: 'Горячий человек',
		subtitle: 'до\u00A040\u00A0человек',
		listTitle: 'Входит:',
		list: ['—\u00A0диджей', '—\u00A0баран на\u00A0вертеле - как гастро шоу *ужин оплачивается дополнительно', '—\u00A0огненное шоу', '—\u00A0изготовление и\u00A0транспортировка дер. фигуры', '—\u00A0аренда сруба'],
		duration: '3\u00A0часа с\u00A0учётом нашей подготовки, вечеринка на\u00A0берегу Катуни со\u00A0сжиганием деревянной фигуры',
		price: 360_000,
	},
	{
		title: 'Групповая медитация с\u00A0поющими чашами',
		subtitle: 'до\u00A015\u00A0человек',
		duration: 'включена аренда пространства',
		price: 60_000,
		note: 'каждый следующий человек - 3\u00A0000',
	},
	{
		title: 'Вечеринка с\u00A0диджеем в\u00A0клубе “Сруб”',
		subtitle: 'до\u00A015\u00A0человек',
		listTitle: 'Примечания:',
		list: ['—\u00A0организация бара входит', '—\u00A0напитки оплачиваются отдельно'],
		duration: '5\u00A0часов',
		price: 180_000,
	},
	{
		title: 'Караоке система в\u00A0клубе “Сруб” ',
		priceText: 'входит в\u00A0аренду сруба',
		duration: '5\u00A0часов',
	},
	{
		title: 'Караоке в\u00A0клубе “Сруб” с\u00A0Сергеем Ашариным под\u00A0ключ',
		subtitle: 'до\u00A015\u00A0человек',
		listTitle: 'Примечания:',
		list: ['—\u00A0организация бара входит', '—\u00A0напитки оплачиваются отдельно'],
		duration: '5\u00A0часов',
		price: 180_000,
	},
	{
		title: 'стол на\u00A0Катуни / Стол с\u00A0самоваром / бар Розовый Фламинго',
		subtitle: 'на\u00A0семью или группу до 6\u00A0чел',
		listTitle: 'Входит:',
		list: ['—\u00A0аренда стола', '—\u00A0подготовка', '—\u00A0сервисное обслуживание'],
		price: 15_000,
		note: 'за\u00A0каждого следующего гостя 2000\u00A0₽',
	},
	{
		title: 'Веранда',
		subtitle: 'закрытие веранды под\u00A0группу гостей (до\u00A030\u00A0человек)',
		price: 36_000,
	},
	{
		title: 'Летний кинотеатр',
		subtitle: 'проектор, все\u00A0необходимое для\u00A0уютного просмотра и\u00A0работает бар\u00A0"Малыш"',
		priceText: '12\u00A0000\u00A0₽ / час',
	},
	// {
	// 	title: 'Танцплощадка',
	// 	duration: 'бесплатно',
	// 	price: 0,
	// },
	// {
	// 	title: 'Костровая площадка с\u00A0костром',
	//   subtitle: 'малый и большой круг',
	// 	duration: 'бесплатно',
	// 	price: 0,
	// },
	// {
	// 	title: 'Большой костер по заказу',
	// 	subtitle: '',
	// 	price: 25_000,
	//   listTitle: 'Примечания:',
	// 	list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
	// },
	// {
	// 	title: 'Мастер классы, которые делает сотрудник на базе',
	// 	subtitle: '(бисероплетение, венки, карта желаний, рисование итд) ',
	// 	priceText: "3 000/ 2 000 (взр/реб)",
	//   note: 'за 1 человека'
	// },
	// {
	// 	title: 'ТОРТ под заказ',
	// 	subtitle: '',
	// 	price: 5_000,
	//   note: "за 1 кг"
	// },
	{
		title: 'Кофе-брейк',
		listTitle: 'Можно выбрать 3 позиции из еды, напитки все включены:',
		list: ['—\u00A0фильтр-кофе,', '—\u00A0чай', '—\u00A0вода', '—\u00A0сэндвичи с\u00A0мясом и\u00A0рыбой', '—\u00A0орехи', '—\u00A0ассорти сыров', '—\u00A0овощи', '—\u00A0сладкая выпечка', '—\u00A0пироги'],
		price: 1_500,
		note: 'за\u00A01\u00A0человека',
	},
	{
		title: 'Пробковый сбор, слабый алкоголь',
		price: 2_000,
		note: 'с\u00A0бутылки',
	},
	{
		title: 'Пробковый сбор, крепкий алкоголь',
		price: 5_000,
		note: 'с\u00A0бутылки',
	},
	{
		title: 'Концерт группы *любой группы*',
		subtitle: '*исключение: когда на\u00A0концерт можно позвать всех гостей базы, тогда за\u00A0аренду пространства не\u00A0берем деньги',
		priceText: 'Индивидуально',
	},
];

export const CLOSED_TOURS: HeatLabModel[] = [
	{
		title: 'Медитация с\u00A0поющими чашами',
		subtitle: 'до\u00A02\u00A0человек',
		subtitleTwo: 'Дополнительный человек',
		duration: 'до\u00A01\u00A0часа',
		price: 18_000,
		priceTwo: 6_000,
	},
	{
		title: 'Концерт группы Тюрк Кабай',
		subtitle: 'Аренда пространства оплачивается отдельно',
		duration: '1\u00A0час',
		price: 50_000,
		// note: '+10% комиссия за организацию',
	},
	{
		title: 'Вечеринка с\u00A0диджеем в\u00A0клубе «Сруб»',
		subtitle: 'аренда сруба',
		subtitleTwo: 'диджей',
		duration: '5\u00A0часов',
		price: 70_000,
		priceTwo: 30_000,
	},
	{
		title: 'Караоке в\u00A0клубе «Сруб»',
		duration: '5\u00A0часов',
		price: 84_000,
		// note: ' +6%',
	},
	{
		title: 'Индивидуальный закрытый прием пищи на Катуни',
		subtitle: 'На\u00A0семью или группу до 6 человек\n',
		price: 12_345,
		list: ['—\u00A0аренда стола', '—\u00A0подготовка', '—\u00A0сервисное обслуживание'],
	},
];

export const PRICE_SERVICES: PricesModel[] = [
	{
		title: 'Входной билет за индивидуальный визит',
		subtitle: 'вода Петроглиф, чай, кофе +\u00A0закуски по\u00A0ситуации +\u00A0Wi+Fi',
		twoCol: '1\u00A0человек',
		price: 1_234,
	},
	{
		title: 'Аренда пространства',
		subtitle: 'обучение, развитие, общение',
		twoCol: '1\u00A0час',
		price: 12_345,
	},
	{
		title: '',
		subtitle: '',
		twoCol: 'Каждый доп.\u00A0час',
		price: 3_000,
	},
	{
		title: 'Шумное мероприятие',
		subtitle: 'индивидуальное событие: вечеринка, день рождения, праздник, дискотека',
		twoCol: 'до\u00A03-х\u00A0часов',
		price: 23_456,
	},
	{
		title: '',
		subtitle: '',
		twoCol: 'каждый доп.\u00A0час',
		price: 5_000,
	},
	{
		title: 'Кофе-брейк',
		subtitle: 'вода Петроглиф, чай, кофе',
		twoCol: '1\u00A0человек',
		price: 1_234,
	},
	{
		title: 'Кофе-брейк с перекусом',
		subtitle: 'вода Петроглиф, чай, кофе + бутерброд (рыба/мясо/сыр) + горячая закуска/авторский курут + десерт дня',
		twoCol: '1\u00A0человек',
		price: 3_000,
	},
	{
		title: 'Кофе-брейк с едой',
		subtitle: 'вода Петроглиф, чай, кофе + индивидуальное меню',
		twoCol: '1\u00A0человек',
		price: 6_000,
	},
	{
		title: 'Soft drinks',
		subtitle: 'газированные напитки',
		twoCol: 'штука',
		price: 700,
	},
	{
		title: 'Пробковый сбор',
		twoCol: 'слабый алкоголь',
		price: 1_000,
	},
	{
		title: '',
		twoCol: 'крепкий алкоголь',
		price: 5_000,
	},
];

export const TO_MARS: PricesModel[] = [
	{
		title: 'хорошая спальня',
		twoCol: '2',
		price: 12_345,
	},
	{
		title: 'замечательная спальня',
		twoCol: '2',
		price: 25_000,
	},
	{
		title: 'келья',
		twoCol: '2',
		price: 35_000,
	},
	{
		title: 'Логово Вавилонского Тигра',
		twoCol: '3',
		price: 50_000,
	},
	{
		title: 'Аренда приюта полностью',
		subtitle: 'до\u00A08\u00A0чел. Каждый дополнительный человек - 30\u00A0000\u00A0руб.',
		twoCol: '1\u00A0сутки',
		price: 300_000,
	},
];

export const ADDITIONAL_SERVICES: PricesModel[] = [
	{
		title: 'Завтрак (для внешних гостей)',
		twoCol: 'человек',
		price: 2_000,
	},
	{
		title: 'обед',
		twoCol: '1\u00A0человек',
		price: 2_500,
	},
	{
		title: 'ужин',
		twoCol: '1\u00A0человек',
		price: 3_500,
	},
	{
		title: 'ланч-боксы',
		twoCol: '1\u00A0человек',
		price: 2_000,
	},
	{
		title: 'баня + чан',
		twoCol: '1\u00A0человек',
		price: 15_000,
	},
	{
		title: 'Аренда приюта полностью',
		subtitle: 'до\u00A018\u00A0чел. Входит проживание, завтрак, обед и\u00A0ужин, посещение бани и\u00A0чана, водный сбор, кофейня и\u00A0все базлкогольные напитки',
		twoCol: '1\u00A0сутки',
		price: 500_000,
	},
];
