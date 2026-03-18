import type {
	AccommodationItem,
	DrinkMenuItem,
	PoezdkiCarItem,
	PoezdkiGuideItem,
} from '../PricesPage/PricesPage.constants';

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
		description:
			'Круглосуточное питание – обед, ужин, байкальский водопой – безлимитный запас воды «Petroglyph», ланч боксы в путешествия и ночной дозор. Байкальский травяной сбор (чай) весь день – комплиментарно.',
	},
	guestsStaying: {
		title: 'ПИТАНИЕ ДЛЯ ГОСТЕЙ ПРОЖИВАЮЩИХ НА БАЗЕ',
		items: [
			{ title: 'УСЛУГА «СЪЕДОБНОЕ БРЕВНО»', priceAdult: 8_900, priceChild: 5_500 },
			{
				title: 'ЧТО ВХОДИТ:',
				description:
					'Круглосуточное питание – обед, ужин, байкальский водопой – безлимитный запас воды «Petroglyph», ланч боксы в путешествия и ночной дозор. Байкальский травяной сбор (чай) весь день – комплиментарно.',
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
	vodopoyNote:
		'Услуга «Водопой» – 500 ₽ в сутки с человека. Безлимитный запас воды «Petroglyph», оплачивается гостями, которые не приобретали услугу «Съедобное бревно».',
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
			{ title: 'ЧАЙ MARIAGE ЧЕРНЫЙ/ЭРЛ ГРЕЙ', price: 1_000 },
			{ title: 'МАТЧА ГОЛУБАЯ/ЗЕЛЕНАЯ', price: 500 },
			{ title: 'МАТЧА ТОНИК', price: 600 },
			{ title: 'МОЛОЧНЫЙ УЛУН', price: 0 },
			{ title: 'КАДЫН', price: 0 },
			{ title: 'ЧАЙ ТАЁЖНЫЙ/ЯГОДНЫЙ', price: 0 },
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

/** Банно-оздоровительный комплекс «Благодать» — Байкал */
export const BLAGODAT_BAIKAL = {
	title: 'БАННО-ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «БЛАГОДАТЬ»',
	leftColumn: [
		{ title: 'ПАРЕНИЕ', description: '90 минут / 1 человек', price: 20_000 },
		{ title: 'каждый дополнительный час', description: '60 минут / 1 человек', price: 10_000 },
		{ title: 'ГРУППОВОЕ ПАРЕНИЕ', description: '120 минут / от 6 человек', price: 120_000 },
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
			title: 'ГРУППОВАЯ УТРЕННЯЯ ЗАРЯДКА, ЙОГА И МЕДИТАЦИЯ В ТЕПЛЫЙ СЕЗОН И ФЕСТИВАЛЬНЫЕ ЗАЕЗДЫ',
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

/** Блок «Concept Store» Байкал + призыв внизу страницы */
export const CONCEPT_STORE_BAIKAL = {
	title: 'CONCEPT STORE',
	paragraph:
		'А еще не забудьте заглянуть в наш Concept Store, в котором представлен брендированный мерч «Молодости»',
	ctaText:
		'Если вам что-то хочется, а мы об этом еще не подумали — скажите нам, и мы вместе решим сколько это будет стоить.',
} as const;
