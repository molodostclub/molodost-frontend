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

/** Блок «ЗОЖ И ЗОМ» — сетка с ценами, 2 колонки */
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
			title: 'ГРУППОВАЯ УТРЕННЯЯ ЗАРЯДКА, ЙОГА И МЕДИТАЦИЯ В ТЕПЛЫЙ СЕЗОН И ФЕСТИВАЛЬНЫЕ ЗАЕЗДЫ',
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
		title: 'дом с печкой',
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

/** Размещение в номерах и домах: единый источник — цена, название, подпись (где есть), площадь, вместимость */
export const PROZHIVANIE_ACCOMMODATION: AccommodationItem[] = [
	// Номера
	{ title: 'Хорошая спальня', capacity: '1-2', area: '18-24 м²', price: 18_000 },
	{ title: 'Замечательная спальня', capacity: '1-2', area: '24-28 м²', price: 26_000 },
	{ title: 'Семейный номер', capacity: '2-4', area: '70 м²', description: 'две спальни, общая зона', price: 45_000 },
	{ title: 'Потрясающая спальня', capacity: '1-2', area: '24-28 м²', price: 33_000 },
	// Дома
	{ title: 'Дом с печкой', capacity: '1-2', area: '38 м²', description: 'отдельно стоящий дом, одна спальня с печкой и верандой', price: 45_000 },
	{ title: 'Бранхаус', capacity: '2-3', area: '68 м²', description: 'отдельно стоящий дом, две спальни, общая зона', price: 50_000 },
	{ title: 'Семейный дом', capacity: '4-6', area: '100 м²', description: 'отдельно стоящий дом с тремя спальнями и гостиной', price: 60_000 },
	{ title: 'Малый Шукшинский дом', capacity: '2-4', area: '70 м²', description: 'наш любимый дом, две спальни, печка, живописная терраса с видом на Катунь', price: 60_000 },
	{ title: 'Дом на холме', capacity: '4-8', area: '150 м²', description: 'четыре спальни с санузлами и терраса с видом на Катунь', price: 90_000 },
	{ title: 'Большой Шукшинский дом', capacity: '4-8', area: '110 м²', description: 'четыре спальни, общая зона, печка, живописная терраса с видом на Катунь', price: 90_000 },
	{ title: 'Карахаус', capacity: '3-6', area: '120 м²', description: 'дом, посвящённый архитектору Фрэнку Гери, три спальни, общая зона', price: 80_000 },
];

export const PROZHIVANIE_ROOMS = PROZHIVANIE_ACCOMMODATION.slice(0, 4);
export const PROZHIVANIE_HOUSES = PROZHIVANIE_ACCOMMODATION.slice(4);

/** Блок «Что едим» — всё из переменных */
export const WHAT_WE_EAT = {
	title: 'ЧТО ЕДИМ?',
	gastropub: {
		name: 'ГАСТРОТРАКТИР «ДОВОЛЬНЫЙ ДРАКОН»',
		mealTimes: [
			{ name: 'ЗАВТРАК', time: '9:00-12:00' },
			{ name: 'ОБЕД', time: '14:00-17:00' },
			{ name: 'УЖИН', time: '20:00-22:30' },
		],
		description:
			'Круглосуточное питание - обед, ужин, алтайский водопой - безлимитный запас воды «Petroglyph», ланч-боксы в путешествия и ночной дожор, Алтайский травяной сбор (чай) весь день - комплиментарно',
	},
	guestsStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ ПРОЖИВАЮЩИХ НА БАЗЕ',
		items: [
			{ title: 'УСЛУГА «СЪЕДОБНОЕ БРЕВНО»', priceAdult: 8_000, priceChild: 5_000 },
			{ title: 'ЗАВТРАК', note: 'ВКЛЮЧЕН В ПРОЖИВАНИЕ' },
			{ title: 'ОБЕД', priceAdult: 3_500, priceChild: 2_000 },
			{ title: 'УЖИН', priceAdult: 4_500, priceChild: 3_000 },
			{ title: 'АЛТАЙСКИЙ РИБАЙ', price: 5_000, description: 'от кооператива «Дружба», 320±10g' },
			{ title: 'СЫРНО-МЕДОВАЯ ТАРЕЛКА', price: 3_000, description: 'от «Логовской сыроварни» и пасеки «Медом в ухо» 180±10g' },
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
			'С 9:00 до 12:00 фильтр кофе включен в ваш завтрак в любом количестве. Полный ассортимент и цены уточняйте за нашей стойкой кофейни.',
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
			{ title: 'ЧАЙ MARIAGE ЧЁРНЫЙ', price: 1_000 },
		] as DrinkMenuItem[],
	},
	bar: {
		name: 'БАР «Я ДОГОНЮ»',
		description:
			'У нас приличная винная карта и большой выбор крепкого алкоголя. Мы верим, что воздух Алтая пьянит и дурманит сам по себе, поэтому цены в нашем баре специально высокие:',
		items: [
			{ title: 'КОКТЕЙЛИ', price: 1_000, pricePrefix: 'ОТ ', unit: 'штука' },
			{ title: 'ВИНА', price: 3_000, pricePrefix: 'ОТ ', unit: 'бутылка' },
			{ title: 'КРЕПКИЙ АЛКОГОЛЬ', price: 1_000, unit: '70 грамм' },
		] as DrinkMenuItem[],
	},
	corkage: 'Если вы приносите алкоголь с собой, наш пробковый сбор составляет 2 000 ₽ с бутылки слабого алкоголя и 5 000 ₽ за крепкий.',
} as const;

/** Блок «Комфорт» — только цены, 2 колонки (правая пустая) */
export const COMFORT = {
	title: 'КОМФОРТ',
	items: [
		{ title: 'ГЛАЖКА', price: 500, unit: '1 единица' },
		{ title: 'ПРАЧЕЧНАЯ (СТИРКА + СУШКА)', price: 2_000, unit: '1 загрузка' },
		{ title: 'ОБСЛУЖИВАНИЕ В НОМЕРЕ', price: 1_000, description: 'мы можем принести вам завтрак, обед, ужин или все, что вы захотите в номер или в дом.' },
		{ title: 'ИНДИВИДУАЛЬНЫЕ УСЛУГИ НЯНИ', price: 12_000, unit: '8 часов' },
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
			{ title: 'ТЕНЬ НА ПЛЕТЕНЬ', priceAdult: 7_000, priceChild: 5_500 },
			{ title: 'ЗУБРОВЫЙ ПИТОМНИК + БОТАНИЧЕСКИЙ САД', priceAdult: 6_000, priceChild: 3_500 },
		] as PoezdkiTripItem[],
		rightColumn: [
			{ title: 'ВСЕСЕЗОННЫЙ КУРОРТ МАНЖЕРОК', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ПАСЕКА «МЕДОМ В УХО»', priceAdult: 3_000, priceChild: 2_000 },
			{ title: 'ПАЛЕОПАРК И ЛОХМАТАЯ ФЕРМА', priceAdult: 7_000, priceChild: 5_000 },
			{ title: 'КАРЫМ', priceAdult: 5_000, priceChild: 3_500 },
		] as PoezdkiTripItem[],
	},
	fullDay: {
		sectionTitle: 'ПОЕЗДКИ НА ЦЕЛЫЙ ДЕНЬ',
		leftColumn: [
			{ title: 'КРАЕУГОЛЬНЫЙ КАМЕНЬ', priceAdult: 10_000, priceChild: 6_500 },
			{ title: 'СТОЯНКА ЧЕРНОГО ХАНА', priceAdult: 10_000, priceChild: 6_500 },
			{ title: 'ТЕНЬ НА ПЛЕТЕНЬ (АВТОРСКОЕ ПРИКЛЮЧЕНИЕ)', priceAdult: 10_000, priceChild: 7_000 },
		] as PoezdkiTripItem[],
		rightColumn: [
			{ title: 'СТЕПНЯК НА СТОЯНКЕ ЧЕРНОГО ХАНА', priceAdult: 15_000, priceChild: 10_500 },
			{ title: 'АЛТАЙСКИЙ ТРИПТИХ (ЗУБРЫ+БОТАНИЧЕСКИЙ САД+МОТОРАФТИНГ)', priceAdult: 10_500, priceChild: 8_500 },
			{ title: 'ЧУЙСКИЙ ТРАКТ 1/2', priceAdult: 15_000, priceChild: 10_500 },
		] as PoezdkiTripItem[],
	},
	partner: {
		sectionTitle: 'ПАРТНЁРСКИЕ АКТИВНОСТИ',
		items: [
			{ title: 'КОННЫЕ ПРОГУЛКИ', duration: '2 ЧАСА', priceAdult: 6_000, priceChild: 4_500 },
			{ title: 'ПОЕЗДКИ НА БОЛОТОХОДАХ И КВАДРОЦИКЛАХ', condition: 'ПРОВОДИТСЯ ОТ 3 ЧЕЛОВЕК', priceText: '12 000 ₽ / ЧАС' },
			{ title: 'РАФТИНГ', condition: 'ПРОВОДИТСЯ ОТ 6 ЧЕЛОВЕК', priceText: '7 000 ₽ / ЧЕЛ' },
			{ title: 'ВЕРТОЛЁТНЫЕ ТУРЫ', condition: 'ПРИ ПОЛНОЙ ЗАГРУЗКЕ ВЕРТОЛЕТА', pricePrefix: 'ОТ ', price: 1_000_000 },
		] as PoezdkiPartnerItem[],
	},
	carRental: {
		sectionTitle: 'АВТОПРОКАТ «БЫВАЛЫЙ РЕЙНДЖЕР»',
		leftColumn: [
			{ title: 'TANK 300', note: '+15 руб./км топливо', pricePerHour: 3_000, pricePerDay: 20_000 },
			{ title: 'MERCEDES VIANO', note: '+15 руб./км топливо', pricePerHour: 3_500, pricePerDay: 25_000 },
		] as PoezdkiCarItem[],
		rightColumn: [
			{ title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ TANK 300', note: 'в одну сторону за машину / до 3 человек', price: 9_000 },
			{ title: 'ВСТРЕЧА В/ИЗ АЭРОПОРТ MERCEDES VIANO', note: 'в одну сторону за машину / до 5 человек', price: 11_000 },
			{ title: 'ИНДИВИДУАЛЬНЫЙ ТРАНСФЕР', price: 4_000, priceNote: 'час' },
			{ title: 'ГРУППОВОЙ ТРАНСФЕР В/ИЗ АЭРОПОРТА', note: 'в одну сторону', price: 3_500 },
			{ title: 'ДОСТАВКА', note: 'в течение дня', price: 2_500, priceNote: '+ СУММА ЧЕКА' },
			{ title: 'ДОСТАВКА', note: 'прямо сейчас', price: 5_000, priceNote: '+ СУММА ЧЕКА' },
		] as PoezdkiCarItem[],
	},
	guides: {
		sectionTitle: 'ГИДЫ-СЛЕДОПЫТЫ И ВОДИТЕЛИ',
		subheading: 'СОПРОВОЖДАЮЩИЕ',
		leftColumn: [
			{
				title: 'ПОПУТЧИК',
				description: 'один из членов нашей команды, который знает детали маршрута, составит вам компанию и поговорит о том о сем',
				pricePerHour: 3_000,
			},
			{ title: 'ВОДИТЕЛЬ', pricePerHour: 2_000 },
		] as PoezdkiGuideItem[],
		rightColumn: [
			{
				title: 'СЛЕДОПЫТ',
				description: 'подготовленный гид, который знает маршруты, рассказывает интересные факты по маршруту и в целом про алтай и может вести автомобиль',
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
			title: 'ПРОХОД В ШАМБАЛУ',
			description:
				'Путешествие к горе Белуха с посещением мест Рериха с обедом или ночевкой в люкспенге наших друзей «We are Altay». У нас есть разные варианты посещения этих мест с полетом на вертолете, поездкой на машине через самые красивые места Алтая и 8 часовым пешим переходом, который позволит вам совершить «средний алтайский круг».',
			rightItems: [
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА' },
				{ text: 'ТРИ ДНЯ' },
				{ text: 'ОТ 150 000 Р НА ЧЕЛОВЕКА', isPrice: true },
				{ text: 'ПУТЕШЕСТВИЕ ЗАНИМАЕТ' },
				{ text: 'НЕ МЕНЕЕ 3 ДНЕЙ И 2 НОЧЕЙ.' },
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА' },
				{ text: '14 ДНЕЙ.' },
			],
		},
		{
			title: 'АЛТАЙСКОЕ КОЛЬЦО',
			description:
				'Большое путешествие по всему Алтаю, которое позволяет рассмотреть все самые главные ландшафты и пейзажи, проехать по всему Чуйскому тракту до границы с Монголией, побывать на Марсе, увидеть скифские курганы в Чулышманской долине и переправиться через Телецкое озеро.',
			rightItems: [
				{ text: 'ОТ 300 000 Р НА ЧЕЛОВЕКА', isPrice: true },
				{ text: 'ПУТЕШЕСТВИЕ ЗАНИМАЕТ ОТ' },
				{ text: '3-Х ДНЕЙ.' },
				{ text: 'ПОЕЗДКА БРОНИРУЕТСЯ ЗА 3 ДНЯ' },
			],
		},
		{
			title: 'ВОДА-ВОДА',
			description:
				'Поездка на целый день на Телецкое озеро, которое входит в список наследия ЮНЕСКО. Озеро находится на высоте 434 м над уровнем моря, его длина составляет 78 км. Посещение озера включает прогулку на катерах от северного до южного берега, где вода прогревается достаточно, чтобы можно было купаться. Дополнительно можно сделать остановку на ночь в отеле.',
			rightItems: [
				{
					text: 'ОТ 50 000 Р НА ЧЕЛОВЕКА, С УЧЕТОМ ПЛАВАНИЯ ЧЕРЕЗ ВСЕ ОЗЕРО, НОЧЬ В ОТЕЛЕ ОПЛАЧИВАЕТСЯ ОТДЕЛЬНО',
					isPrice: true,
				},
				{ text: 'ПОЕЗДКА ЗАНИМАЕТ ЦЕЛЫЙ' },
				{ text: 'ДЕНЬ' },
			],
		},
		{
			title: 'МИССИЯ НА МАРС',
			description:
				'Поездка по Чуйскому тракту, одной из самых красивых дорог в мире по версии National Geographic. Дорожное путешествие с остановками на уникальных природных и исторических достопримечательностях: Каракольская долина с курганами, перевалы Семинский и Чике-Таман, гейзерово озеро. Вишенкой на торте этой поездки является хайкинг в горном районе Марс на границе с Монголией.',
			rightItems: [{ text: 'ОТ 110 000 Р НА ЧЕЛОВЕКА', isPrice: true }],
		},
	] as PuteshestviyaItem[],
} as const;

/** Блок «Для детей» */
export const DLYA_DETEY = {
	title: 'ДЛЯ ДЕТЕЙ',
	paragraph: 'Дети в «Молодости» считаются от 5 до 12 лет.',
	intro: 'На территории базы есть:',
	listItems: [
		'Детская площадка имени Дамблдора',
		'Домашний и уличный кинотеатры',
		'Спортивные игры',
		'Услуги няни (8 часов 12 000 ₽)',
	],
} as const;

/** Блок «Concept Store» + призыв к действию */
export const CONCEPT_STORE = {
	title: 'CONCEPT STORE',
	paragraph:
		'А еще не забудьте заглянуть в наш Concept Store, в котором собраны брендированный мерч «Молодости» и премиальные алтайские сувениры.',
	ctaText:
		'Если вам что-то хочется, а мы об этом еще не подумали — скажите нам, и мы вместе решим сколько это будет стоить.',
} as const;

/** Блок «Банно-оздоровительный комплекс Благодать» — сетка с ценами, 2 колонки */
export const BLAGODAT_SAUNA = {
	title: 'БАННО-ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «БЛАГОДАТЬ»',
	leftColumn: [
		{ title: 'ПАРЕНИЕ', description: '90 минут / 1 человек', price: 20_000 },
		{ title: 'каждый дополнительный час', description: '60 минут / 1 человек', price: 10_000 },
		{ title: 'ЧАН НА АЛТАЙСКИХ ТРАВАХ', price: 20_000 },
		{ title: 'ГРУППОВОЕ ПАРЕНИЕ', description: '120 минут / от 6 человек', price: 120_000 },
		{ title: 'каждый дополнительный час', description: '60 минут', price: 60_000 },
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'МАССАЖ РАССЛАБЛЯЮЩИЙ', description: '60 минут / 1 человек', price: 9_000 },
		{ title: '', description: '90 минут / 1 человек', price: 12_000 },
		{ title: '', description: '120 минут / 1 человек', price: 16_000 },
		{ title: 'МАНУАЛЬНЫЙ МАССАЖ', description: '35-40 минут / 1 человек', price: 15_000 },
		{ title: 'ЭНЕРГОТЕРАПЕВТ', description: 'сеанс / 1 человек', price: 25_000 },
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
		priceText: 'Входит в стоимость проживания',
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
	{
		title: 'Съедобное бревно',
		subtitle: '(обед+ужин)',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
		price: 8_000,
		priceChild: 5_000,
	},
];
export const GASTRO_TRAKTIR_QUIET: PricesModel[] = [
	{
		title: 'Завтрак',
		priceText: 'Входит в стоимость проживания',
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
	{
		title: 'Съедобное бревно',
		subtitle: '(обед+ужин)',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
		price: 8_000,
		priceChild: 5_000,
	},
];

export const GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS: PricesModel[] = [
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
		price: 5_000,
		priceChild: 2_500,
	},
	{
		title: 'УЖИН',
		twoCol: 'взрослый',
		twoColChild: 'ребёнок (до 12 лет)',
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
		subtitle: '70 мл',
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
		subtitle: '50 мл',
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
		note: 'с бутылки',
	},
	{
		title: 'Пробковый сбор',
		subtitle: 'крепкий алкоголь',
		twoCol: '',
		price: 5_000,
		note: 'с бутылки',
	},
];

export const TRIKSTER_MENU: PricesModel[] = [
	{
		title: 'Эспрессо / Фильтр кофе / Американо',
		subtitle: 'во время завтрака 1 напиток входит в стоимость',
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
		title: 'Капучино / Латте / Флэт уайт',
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
		subtitle: '500 мл',
		twoCol: '',
		price: 700,
	},
	{
		title: 'Алтайский травяной чай',
		subtitle: 'бесплатно в течение дня',
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
		title: 'Чай Mariage чёрный ENGLISH\u00A0BREAKFAST TEA',
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
		subtitle: 'газированные лимонады / минеральная вода San Pellegrino',
		pricePrefix: 'от ',
		price: 500,
	},
];

export const HEAT_LAB_SERVICE: HeatLabModel[] = [
	{
		title: '',
		listTitle: 'Входит:',
		list: ['— аренда подготовленного пространства бани', '— веники', '— вода Petroglyph с\u00A0газом и\u00A0без', '— алтайский травяной чай', '— мед, сушки и\u00A0варенье', '— необходимое количество полотенец и\u00A0простыней', '— фирменная шапка в\u00A0подарок'],
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
		title: 'каждые дополнительные 30 минут',
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
		title: 'каждые дополнительные 30 минут',
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
		title: 'Чан на Алтайских травах',
		duration: '',
		clients: '',
		price: 15_000,
	},
	{
		title: 'Классическое парение',
		duration: '20 мин.',
		clients: '1 человек',
		price: 10_000,
	},
	{
		title: 'Групповое парение',
		duration: '15 мин.',
		clients: 'до 6 человек',
		price: 5_000,
		note: 'с человека',
	},
	{
		title: 'Аренда бани (малая)',
		duration: '90 мин.',
		clients: '',
		price: 15_000,
	},
	{
		title: 'каждые дополнительные 30 минут',
		subtitle: '20 минут мы считаем в пользу гостей, а последние 10 в нашу',
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
		duration: '90 мин.',
		clients: '',
		price: 25_000,
	},
	{
		title: 'каждые дополнительные 30 минут',
		subtitle: '20 минут мы считаем в пользу гостей, а последние 10 в нашу',
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
		duration: '60 мин.',
		clients: '1 человек',
		price: 8_000,
	},
	{
		title: 'Массаж, классический',
		duration: '90 мин.',
		clients: '1 человек',
		price: 10_000,
	},
	{
		title: 'Мануальный массаж',
		duration: '30–45 мин.',
		clients: '1 раз',
		price: 10_000,
	},
	{
		title: 'Оздоровительный курс мануального массажа',
		duration: '30–45 мин.',
		clients: '5 раз',
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
		subtitle: 'В РАМКАХ КУЛЬТУРНОЙ ПРОГРАММЫ В ВЫСОКИЙ СЕЗОН (ИЮЛЬ-АВГУСТ). СТОИМОСТЬ ДЛЯ ПРОЖИВАЮЩИХ',
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
		subtitle: 'Поездка в деревню Сростки без ивента',
		twoCol: '6 часов',
		price: 7_000,
		priceChild: 5_500,
	},
	{
		title: 'Тень на плетень',
		subtitle: 'авторское приключение с обедом на завалинке и ансамблем Товарочка',
		twoCol: 'весь день',
		price: 10_000,
		priceChild: 7_000,
	},
	{
		title: 'Тень на плетень',
		subtitle: 'авторское приключение - СЕЗОННЫЙ ЗАЕЗД для проживающих гостей',
		twoCol: 'весь день',
		price: 0,
		priceChild: 0,
	},
	{
		title: 'Вода-вода (Телецкое озеро)',
		subtitle: 'Поездка проводится от 4-х гостей. В стоимость поездки входит ланчбокс. Мы можем сделать остановку в ресторане, где питание гость оплачивает самостоятельно.',
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
		twoCol: '3 часа',
		priceText: 'комплимент',
	},
	{
		title: 'Заячий остров',
		subtitle: 'групповой',
		twoCol: '4–5 часов',
		price: 7_000,
		priceChild: 4_500,
	},
	{
		title: 'Пасека',
		subtitle: 'групповой',
		twoCol: '2 часа',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'Манжерок',
		subtitle: 'поездка в сопровождении следопыта с подъемом на канатной дороге и хайкингом по эко-тропам (билет на КД оплачивается отдельно)',
		twoCol: '3 часа',
		price: 3_000,
		priceChild: 2_000,
	},
	{
		title: 'Манжерок и\u00A0Пасека «Мёдом в\u00A0ухо»',
		subtitle: 'подъем на канатной дороге не\u00A0входит в\u00A0стоимость',
		twoCol: '3 часа',
		price: 5_000,
		priceChild: 3_500,
	},
	{
		title: 'Палеопарк и лохматая ферма',
		subtitle: 'билеты входят в\u00A0стоимость',
		twoCol: '4 часа',
		price: 7_000,
		priceChild: 5_000,
	},
	{
		title: 'Зубровый питомник+ботанический сад',
		subtitle: 'групповой',
		twoCol: '3 часа',
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
		{ title: 'ГРУППОВОЙ ХАЙКИНГ ПО ХОББИТАНИИ', description: '3-4 часа', price: 3_500 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА ГОРУ ЧЕРЕПАН', description: '3-4 часа', price: 3_500 },
		{ title: 'ГРУППОВОЙ ТРЕКИНГ «НЕ ОДИНОКАЯ ГОРА БАБЫРГАН»', description: '5-6 часов', price: 6_000 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА РАССВЕТНО-ЗАКАТНУЮ ТОЧКУ', description: '2-3 часа', price: 3_500 },
	] as DrinkMenuItem[],
	rightColumn: [
		{ title: 'ГРУППОВОЙ ТРЕКИНГ НА ГОРУ САРЛЫК', description: '6-7 часов', price: 10_000 },
		{ title: 'ГРУППОВОЙ ХАЙКИНГ НА ГОРУ ВЕРБЛЮД', description: '3-4 часа', price: 3_500 },
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
		subtitle: 'Проводится от 3 человек',
		twoCol: '3–4 часа',
		price: 3_500,
	},
	{
		title: 'Групповой хайкинг на гору Бабырган',
		subtitle: 'Проводится от\u00A05\u00A0человек',
		twoCol: '5–6 часов',
		price: 6_000,
	},
	{
		title: 'Групповой хайкинг на гору Верблюд',
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
		title: 'Миссия на Марс на одну ночь при двухместном размещении',
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
		title: 'Проход в Шамбалу',
		subtitle: 'партнёрская поездка в We are Altay',
		duration: '3\u00A0дня / 2\u00A0ночи',
		pricePrefix: 'от ',
		price: 150_000,
	},
	{
		title: 'Вертолётная экскурсия на Белуху с обедом',
		duration: 'до\u00A05\u00A0чел',
		pricePrefix: 'от ',
		price: 1_000_000,
	},
	{
		title: 'Вода-Вода (Телецкое озеро)',
		subtitle: 'от 4 гостей, ланч-боксы включены',
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
		duration: '1 час',
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
		title: ' ',
		subtitle: ' ',
		priceText: ' ',
	},
	{
		title: 'Поездки на болотоходах и\u00A0квадроциклах',
		priceText: 'от\u00A012\u00A0000\u00A0₽ / час',
	},
	{
		title: 'Рафтинг',
		subtitle: 'от 6 чел',
		priceText: 'от\u00A07\u00A0000\u00A0₽ / человек',
	},
	{
		title: 'Вертолётные туры',
		subtitle: 'при полной загрузке вертолёта',
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
		subtitle: '1 час',
		priceText: '4\u00A0000\u00A0₽ +\u00A0бензин 15\u00A0руб/км',
	},
];

export const CORPORATIVE_PRICE: HeatLabModel[] = [
	{
		title: 'АРЕНДА ВСЕЙ БАЗЫ',
		subtitle: '(завтрак, обед, ужин и\u00A0водопой, автопарк без бензина, водители следопыты, номерной фонд, баня с\u00A0групповыми парениями + чан, аренда всех пространств, культурная программа, которую мы делаем своими силами)',
		duration: '1 сутки (до 50 человек)',
		price: 2_500_000,
	},
	{
		title: 'Каждый человек сверх 50-го',
		duration: '1 сутки',
		price: 25_000,
	},
	{
		title: 'Клуб Сруб',
		duration: '2 часа с\u00A0учётом подготовки',
		priceText: '18 000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 24 часов с\u00A0учётом подготовки',
		price: 100_000,
	},
	{
		title: 'Юрта',
		duration: '2 часа с\u00A0учётом подготовки',
		priceText: '12 000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 12 часов',
		price: 30_000,
	},
	{
		title: 'Аренда банного комплекса под\u00A0ключ',
		subtitle: 'Аренда банного комплекса под ключ - малая и\u00A0большая баня, чан.',
		duration: '1 час',
		price: 60_000,
	},
	{
		title: 'Авторская поездка в\u00A0деревню Сростки “Тень на плетень” под ключ',
		subtitle: 'до 25 человек',
		duration: '1 день',
		listTitle: 'Входит:',
		list: ['— гиды', '— пространство', '— обед от\u00A0шеф-повара', '— посещение музеев Шукшина', '— выступление коллектива Товарочка'],
		price: 500_000,
	},
	{
		title: 'Аренда Стоянки Черного Хана на\u00A0день',
		listTitle: 'Входит:',
		list: ['— площадка', '— вода', '— генератор', '— тех. поддержка'],
		price: 300_000,
	},
	{
		title: 'Степник на стоянке Чёрного Хана под ключ',
		duration: 'трансфер и\u00A0авто не\u00A0входят',
		listTitle: 'Входит:',
		list: ['— аренда площадки', '— кейтеринг до\u00A040 чел', '— чай', '— кофе', '— вода', '— концерт горлового пения', '— DJ', '— хайкинг', '— мастер класс по плетению венков', '— алтайские игры'],
		price: 1_300_000,
	},
	{
		title: 'Кейтеринг на Степнике - только еда',
		subtitle: 'до 30 человек',
		duration: 'трансфер и\u00A0авто не\u00A0входят',
		price: 60_000,
		note: 'каждый следующий человек - 2\u00A0000',
	},
	{
		title: 'Горячий человек',
		subtitle: 'до 40 человек',
		listTitle: 'Входит:',
		list: ['— диджей', '— баран на\u00A0вертеле - как гастро шоу *ужин оплачивается дополнительно', '— огненное шоу', '— изготовление и\u00A0транспортировка дер. фигуры', '— аренда сруба'],
		duration: '3 часа с\u00A0учётом нашей подготовки, вечеринка на\u00A0берегу Катуни со\u00A0сжиганием деревянной фигуры',
		price: 360_000,
	},
	{
		title: 'Групповая медитация с\u00A0поющими чашами',
		subtitle: 'до 15 человек',
		duration: 'включена аренда пространства',
		price: 54_000,
		note: 'каждый следующий человек - 3 000',
	},
	{
		title: 'Вечеринка с диджеем в клубе “Сруб”',
		subtitle: 'до 15 человек',
		listTitle: 'Примечания:',
		list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
		duration: '5 часов',
		price: 150_000,
	},
	{
		title: 'Караоке система в клубе “Сруб” ',
		priceText: 'входит в аренду сруба',
		duration: '5 часов',
	},
	{
		title: 'Караоке в клубе “Сруб” с\u00A0Сергеем Ашариным под\u00A0ключ',
		subtitle: 'до 15 человек',
		listTitle: 'Примечания:',
		list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
		duration: '5 часов',
		price: 150_000,
	},
	{
		title: 'стол на Катуни / Стол с самоваром / бар Розовый Фламинго',
		subtitle: 'на семью или группу до 6 чел',
		listTitle: 'Входит:',
		list: ['— аренда стола', '— подготовка', '—  сервисное обслуживание'],
		price: 12_345,
		note: 'за каждого следующего гостя 1000 ₽',
	},
	{
		title: 'Веранда',
		subtitle: 'закрытие веранды под группу гостей (до 30 человек)',
		price: 30_000,
	},
	{
		title: 'Летний кинотеатр',
		subtitle: 'проектор, все\u00A0необходимое для\u00A0уютного просмотра и\u00A0работает бар\u00A0"Малыш"',
		priceText: '10 000 ₽ / час',
	},
	{
		title: 'Танцплощадка',
		duration: 'бесплатно',
		price: 0,
	},
	{
		title: 'Костровая площадка с костром',
		subtitle: 'малый и большой круг',
		duration: 'бесплатно',
		price: 0,
	},
	{
		title: 'Большой костер по заказу',
		subtitle: '',
		price: 25_000,
		listTitle: 'Примечания:',
		list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
	},
	{
		title: 'Мастер классы, которые делает сотрудник на базе',
		subtitle: '(бисероплетение, венки, карта желаний, рисование итд) ',
		priceText: '3 000/ 2 000 (взр/реб)',
		note: 'за 1 человека',
	},
	{
		title: 'ТОРТ под заказ',
		subtitle: '',
		price: 5_000,
		note: 'за 1 кг',
	},
	{
		title: 'Кофе-брейк',
		listTitle: 'Можно выбрать 3 позиции из еды, напитки все включены:',
		list: ['— фильтр-кофе,', '— чай', '— вода', '— сэндвичи с мясом и рыбой', '— орехи', '— ассорти сыров', '— овощи', '— сладкая выпечка', '— пироги'],
		price: 1_500,
		note: 'за 1 человека',
	},
	{
		title: 'Пикник на Хоббитании',
		subtitle: 'до 15 человек',
		price: 40_000,
		note: 'каждый следующий человек 1 500',
	},
	{
		title: 'Пикник от шефа в Каракольской долине',
		subtitle: 'обязательно с горячим супом и поваром',
		priceText: 'от 70 000 за 30 человек',
		note: 'каждый следующий человек 2 000',
	},
	{
		title: 'Пробковый сбор, слабый алкоголь',
		price: 2_000,
		note: 'с бутылки',
	},
	{
		title: 'Пробковый сбор, крепкий алкоголь',
		price: 5_000,
		note: 'с бутылки',
	},
	{
		title: 'Концерт группы *любой группы*',
		subtitle: '*исключение: когда на концерт можно позвать всех гостей базы, тогда за аренду пространства не берем деньги',
		priceText: 'Индивидуально',
	},
	{
		title: 'Юрта на Марсе',
		duration: '2 часа с учётом подготовки',
		priceText: '12 000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 12 часов',
		price: 40_000,
	},
];

export const CORPORATIVE_PRICE_NON_GUESTS: HeatLabModel[] = [
	{
		title: 'Клуб Сруб',
		duration: '2 часа с учётом подготовки',
		priceText: '20 000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 24 часов с учётом подготовки',
		price: 120_000,
	},
	{
		title: 'Юрта',
		duration: '2 часа с учётом подготовки',
		priceText: '14 000 / час',
	},
	{
		title: '',
		duration: '1 мероприятие до 12 часов',
		price: 36_000,
	},
	{
		title: 'Аренда банного комплекса под ключ',
		subtitle: 'малая и большая баня, чан, групповой пар 30 мин',
		duration: '1 час',
		price: 70_000,
	},
	// {
	// 	title: 'Авторская поездка в деревню Сростки “Тень на плетень” под ключ',
	// 	subtitle: 'до 25 человек',
	// 	duration: '1 день',
	// 	listTitle: 'Входит:',
	// 	list: ['— гиды', '— пространство', '— обед от шеф-повара', '— посещение музеев Шукшина', '— выступление коллектива Товарочка'],
	// 	price: 500_000,
	// },
	{
		title: 'Аренда Стоянки Черного Хана на день',
		listTitle: 'Входит:',
		list: ['— площадка', '— вода', '— генератор', '— тех. поддержка'],
		price: 300_000,
	},
	{
		title: 'Степник на стоянке Чёрного Хана под ключ',
		duration: 'трансфер и авто не входят',
		listTitle: 'Входит:',
		list: ['— аренда площадки', '— кейтеринг до 40 чел', '— чай', '— кофе', '— вода', '— концерт горлового пения', '— DJ', '— хайкинг', '— мк по плетению венков', '— алтайские игры'],
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
		subtitle: 'до 40 человек',
		listTitle: 'Входит:',
		list: ['— диджей', '— баран на вертеле - как гастро шоу *ужин оплачивается дополнительно', '— огненное шоу', '— изготовление и транспортировка дер. фигуры', '— аренда сруба'],
		duration: '3 часа с учётом нашей подготовки, вечеринка на берегу Катуни со сжиганием деревянной фигуры',
		price: 360_000,
	},
	{
		title: 'Групповая медитация с\u00A0поющими чашами',
		subtitle: 'до 15 человек',
		duration: 'включена аренда пространства',
		price: 60_000,
		note: 'каждый следующий человек - 3 000',
	},
	{
		title: 'Вечеринка с диджеем в клубе “Сруб”',
		subtitle: 'до 15 человек',
		listTitle: 'Примечания:',
		list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
		duration: '5 часов',
		price: 180_000,
	},
	{
		title: 'Караоке система в клубе “Сруб” ',
		priceText: 'входит в аренду сруба',
		duration: '5 часов',
	},
	{
		title: 'Караоке в клубе “Сруб” с\u00A0Сергеем Ашариным под\u00A0ключ',
		subtitle: 'до 15 человек',
		listTitle: 'Примечания:',
		list: ['— организация бара входит', '— напитки оплачиваются отдельно'],
		duration: '5 часов',
		price: 180_000,
	},
	{
		title: 'стол на Катуни / Стол с самоваром / бар Розовый Фламинго',
		subtitle: 'на семью или группу до 6 чел',
		listTitle: 'Входит:',
		list: ['— аренда стола', '— подготовка', '—  сервисное обслуживание'],
		price: 15_000,
		note: 'за каждого следующего гостя 2000 ₽',
	},
	{
		title: 'Веранда',
		subtitle: 'закрытие веранды под группу гостей (до 30 человек)',
		price: 36_000,
	},
	{
		title: 'Летний кинотеатр',
		subtitle: 'проектор, все\u00A0необходимое для\u00A0уютного просмотра и\u00A0работает бар\u00A0"Малыш"',
		priceText: '12 000 ₽ / час',
	},
	// {
	// 	title: 'Танцплощадка',
	// 	duration: 'бесплатно',
	// 	price: 0,
	// },
	// {
	// 	title: 'Костровая площадка с костром',
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
		list: ['— фильтр-кофе,', '— чай', '— вода', '— сэндвичи с мясом и рыбой', '— орехи', '— ассорти сыров', '— овощи', '— сладкая выпечка', '— пироги'],
		price: 1_500,
		note: 'за 1 человека',
	},
	// {
	// 	title: 'Пикник на Хоббитании',
	// 	subtitle: 'до 15 человек',
	// 	price: 40_000,
	//   note: "каждый следующий человек 1 500"
	// },
	// {
	// 	title: 'Пикник от шефа в Каракольской долине',
	// 	subtitle: 'обязательно с горячим супом и поваром',
	// 	priceText: 'от 70 000 за 30 человек',
	//   note: "каждый следующий человек 2 000"
	// },
	{
		title: 'Пробковый сбор, слабый алкоголь',
		price: 2_000,
		note: 'с бутылки',
	},
	{
		title: 'Пробковый сбор, крепкий алкоголь',
		price: 5_000,
		note: 'с бутылки',
	},
	{
		title: 'Концерт группы *любой группы*',
		subtitle: '*исключение: когда на концерт можно позвать всех гостей базы, тогда за аренду пространства не берем деньги',
		priceText: 'Индивидуально',
	},
	// {
	// 	title: 'Юрта на Марсе',
	// 	duration: '2 часа с учётом подготовки',
	// 	priceText: '12 000 / час',
	// },
	// {
	// 	title: '',
	// 	duration: '1 мероприятие до 12 часов',
	// 	price: 40_000,
	// },
];

export const CLOSED_TOURS: HeatLabModel[] = [
	{
		title: 'Медитация с поющими чашами',
		subtitle: 'до 2 человек',
		subtitleTwo: 'Дополнительный человек',
		duration: 'до 1 часа',
		price: 18_000,
		priceTwo: 6_000,
	},
	{
		title: 'Концерт группы Тюрк Кабай',
		subtitle: 'Аренда пространства оплачивается отдельно',
		duration: '1 час',
		price: 50_000,
		// note: '+10% комиссия за организацию',
	},
	{
		title: 'Вечеринка с диджеем в клубе «Сруб»',
		subtitle: 'аренда сруба',
		subtitleTwo: 'диджей',
		duration: '5 часов',
		price: 70_000,
		priceTwo: 30_000,
	},
	{
		title: 'Караоке в клубе «Сруб»',
		duration: '5 часов',
		price: 84_000,
		// note: ' +6%',
	},
	{
		title: 'Индивидуальный закрытый прием пищи на Катуни',
		subtitle: 'На семью или группу до 6 человек\n',
		price: 12_345,
		list: ['— аренда стола', '— подготовка', '— сервисное обслуживание'],
	},
];

export const PRICE_SERVICES: PricesModel[] = [
	{
		title: 'Входной билет за индивидуальный визит',
		subtitle: 'вода PETROGLYPH, чай, кофе + закуски по ситуации + Wi+Fi',
		twoCol: '1 человек',
		price: 1_234,
	},
	{
		title: 'Аренда пространства',
		subtitle: 'обучение, развитие, общение',
		twoCol: '1 час',
		price: 12_345,
	},
	{
		title: '',
		subtitle: '',
		twoCol: 'Каждый доп. час',
		price: 3_000,
	},
	{
		title: 'Шумное мероприятие',
		subtitle: 'индивидуальное событие: вечеринка, день рождения, праздник, дискотека',
		twoCol: 'до 3-х часов',
		price: 23_456,
	},
	{
		title: '',
		subtitle: '',
		twoCol: 'каждый доп. час',
		price: 5_000,
	},
	{
		title: 'Кофе-брейк',
		subtitle: 'вода PETROGLYPH, чай, кофе',
		twoCol: '1 человек',
		price: 1_234,
	},
	{
		title: 'Кофе-брейк с перекусом',
		subtitle: 'вода PETROGLYPH, чай, кофе + бутерброд (рыба/мясо/сыр) + горячая закуска/авторский курут + десерт дня',
		twoCol: '1 человек',
		price: 3_000,
	},
	{
		title: 'Кофе-брейк с едой',
		subtitle: 'вода PETROGLYPH, чай, кофе + индивидуальное меню',
		twoCol: '1 человек',
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
		subtitle: 'до 8 чел. Каждый дополнительный человек - 30 000 руб.',
		twoCol: '1 сутки',
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
		twoCol: '1 человек',
		price: 2_500,
	},
	{
		title: 'ужин',
		twoCol: '1 человек',
		price: 3_500,
	},
	{
		title: 'ланч-боксы',
		twoCol: '1 человек',
		price: 2_000,
	},
	{
		title: 'баня + чан',
		twoCol: '1 человек',
		price: 15_000,
	},
	{
		title: 'Аренда приюта полностью',
		subtitle: 'до 18 чел. Входит проживание, завтрак, обед и ужин, посещение бани и чана, водный сбор, кофейня и все базлкогольные напитки',
		twoCol: '1 сутки',
		price: 500_000,
	},
];
