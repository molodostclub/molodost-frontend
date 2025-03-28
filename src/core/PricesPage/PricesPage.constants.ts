import { subtitle, twoCol } from "./PricesPage.css";

type PricesModel = {
  title: string;
  subtitle?: string;
  twoCol?: string;
  twoColChild?: string;
  price?: number;
  pricePrefix?: string;
  priceText?: string;
  priceChild?: number;
  note?: string;
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

export const PROZHIVANIE_PRICES: PricesModel[] = [
  {
    title: 'хорошая спальня',
    twoCol: '1',
    price: 12_345,
  },
  {
    title: 'замечательная спальня',
    twoCol: '1',
    price: 15_555,
  },
  {
    title: 'спальня птица',
    twoCol: '1',
    price: 18_000,
  },
  {
    title: 'семейный номер',
    twoCol: '4',
    price: 35_000,
  },
  {
    title: 'дом с печкой',
    twoCol: '3',
    price: 35_000,
  },
  {
    title: 'барнхаус',
    twoCol: '3',
    price: 40_000,
  },
  {
    title: 'лохматый дом',
    twoCol: '2',
    price: 35_000,
  },
  {
    title: 'семейный дом',
    twoCol: '6',
    price: 47_000,
  },
  {
    title: 'дом птица',
    twoCol: '2',
    price: 47_000,
  },
  {
    title: 'малый шукшинский дом',
    twoCol: '4',
    price: 50_000,
  },
  {
    title: 'дом на холме (4 спальни)',
    twoCol: '8',
    price: 65_000,
  },
  {
    title: 'дом на холме (5 спален)',
    twoCol: '10',
    price: 80_000,
  },
  {
    title: 'большой шукшинский дом',
    twoCol: '8',
    price: 70_000,
  },
  {
    title: 'карахаус',
    twoCol: '6',
    price: 70_000,
  },
];

export const ADDITIONAL_PRICES: PricesModel[] = [
  {
    title: 'ВОДЯНОЙ СБОР',
    twoCol: 'В\u00A0сутки с\u00A0человека',
    price: 350,
  },
  {
    title: 'Персональный батлер-сервис «Блэк Хан»',
    twoCol: 'В\u00A0сутки',
    price: 23_456,
  },
  {
    title: 'Room service',
    twoCol: '1\u00A0доставка',
    price: 1_000,
  },
  {
    title: 'прачечная стирка+сушка',
    twoCol: '1\u00A0загрузка',
    price: 2_000,
  },
  {
    title: 'индивидуальные услуги няни',
    twoCol: '1\u00A0час',
    price: 3_000,
  },
  {
    title: 'индивидуальные услуги няни',
    twoCol: '7 часов',
    price: 10_000,
  },
  {
    title: 'встреча в аэропорту',
    twoCol: 'в одну сторону, 1 человек',
    price: 2_000,
  },
  {
    title: 'трансфер в аэропорт',
    twoCol: 'в одну сторону, 1 человек',
    price: 1_500,
  },
  {
    title: 'бизнес зал прилёт',
    subtitle: 'взрослый/ребёнок с учётом нашей комиссии (дети по правилам аэропорта с 2 до 12 лет)',
    twoCol: '',
    price: 7_020,
    priceChild: 3_510,
  },
  {
    title: 'бизнес зал вылет',
    subtitle: 'взрослый/ребёнок с учётом нашей комиссии (дети по правилам аэропорта с 2 до 12 лет)',
    twoCol: '',
    price: 10_010,
    priceChild: 5_070,
  },
  {
    title: 'индивидуальный трансфер в любую сторону',
    twoCol: '1 час',
    price: 3_000,
    note: '+\u00A0бензин 15\u00A0руб/км',
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
    price: 7_000,
    note: '+\u00A0сумма чека',
  },
];

export const GASTRO_TRAKTIR_FESTIVAL: PricesModel[] = [
  {
    title: 'Завтрак',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 0,
    priceChild: 0,
  },
  {
    title: 'обед',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 3_000,
    priceChild: 2_100,
  },
  {
    title: 'УЖИН',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 5_000,
    priceChild: 3_500,
  },
];
export const GASTRO_TRAKTIR_QUIET: PricesModel[] = [
  {
    title: 'завтрак',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 0,
    priceChild: 0,
  },
  {
    title: 'обед',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 2_000,
    priceChild: 1_400,
  },
  {
    title: 'УЖИН',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 3_000,
    priceChild: 2_100,
  },
];

export const GASTRO_TRAKTIR_FESTIVAL_FOR_NON_GUESTS: PricesModel[] = [
  {
    title: 'Завтрак',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 3_000,
    priceChild: 2_100,
  },
  {
    title: 'обед',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 3_000,
    priceChild: 2_100,
  },
  {
    title: 'УЖИН',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 6_000,
    priceChild: 4_200,
  },
];
export const GASTRO_TRAKTIR_QUIET_FOR_NON_GUESTS: PricesModel[] = [
  {
    title: 'завтрак',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 2_000,
    priceChild: 1_400,
  },
  {
    title: 'обед',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 2_000,
    priceChild: 1_400,
  },
  {
    title: 'УЖИН',
    twoCol: 'взрослый',
    twoColChild: 'ребёнок (до 14 лет)',
    price: 3_000,
    priceChild: 2_100,
  },
];

export const TRAKTIR_MENU: PricesModel[] = [
  {
    title: 'Стейк Рибай',
    twoCol: '',
    price: 4_000,
  },
  {
    title: 'Хариус',
    subtitle: 'жареный / на\u00A0пару',
    twoCol: '',
    price: 2_000,
  },
  {
    title: 'Сырно медовая тарелка',
    subtitle: 'от «Логовской сыроварни» и\u00A0пасеки «Мёдом в\u00A0ухо»',
    twoCol: '',
    price: 3_000,
  },
  {
    title: 'Ланч бокс',
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
    price: 1000,
  },
  {
    title: 'Крепкий алкоголь',
    subtitle: '70 мл',
    twoCol: '',
    pricePrefix: 'от ',
    price: 1_000,
  },
  {
    title: 'Крепкий алкоголь',
    subtitle: 'наш',
    twoCol: '',
    pricePrefix: 'от ',
    price: 500,
  },
  {
    title: 'Коктейль',
    subtitle:
      'Джин-тоник / Куба-либре / негрони / виски+кола / Апероль / Мохито / Том Коллинз / Маргарита / Кровавая Мэри и др.',
    twoCol: '',
    pricePrefix: 'от ',
    price: 1_000,
  },
  {
    title: 'Пиво и\u00A0медовуха',
    subtitle: '500 мл',
    twoCol: '',
    price: 700,
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
    title: 'Эспрессо / Фильтр кофе /Американо',
    subtitle: 'во время завтрака 1 напиток входит в стоимость',
    twoCol: '',
    price: 250,
  },
  {
    title: 'Капучино / Латте / Флэт уайт',
    subtitle: '400 мл',
    twoCol: '',
    price: 400,
  },
  {
    title: 'Чай травяной / зелёный /чёрный',
    subtitle: 'во время завтрака входит в стоимость (чайник)',
    twoCol: '',
    price: 400,
  },
  {
    title: 'Чай Mariage чёрный ENGLISH\u00A0BREAKFAST TEA',
    subtitle: 'насыщенный, утренний купаж (чайник)',
    twoCol: '',
    price: 800,
  },
  {
    title: 'ЧАЙ WEDDING IMPÉRIAL',
    subtitle: 'со вкусом шоколада и\u00A0карамели (чайник)',
    twoCol: '',
    price: 800,
  },
  {
    title: 'ЧАЙ EARL GREY PROVENCE',
    subtitle: 'бергамот и\u00A0голубая лаванда',
    twoCol: '',
    price: 800,
  },
  {
    title: 'ЧАЙ TOKYO BREAKFAST TEA',
    subtitle: 'мягкий и\u00A0бархатистый',
    twoCol: '',
    price: 800,
  },
  {
    title: 'ЧАЙ CHAI PARISIEN',
    subtitle: 'пряный, с\u00A0мягкими фруктовыми нотами',
    twoCol: '',
    price: 800,
  },
  {
    title: 'Матча / Какао',
    subtitle: '400 мл',
    twoCol: '',
    price: 500,
  },
  {
    title: 'Авторский чай',
    subtitle: 'облепиховый / имбирный / брусничный (400 мл)',
    twoCol: '',
    price: 800,
  },
  {
    title: 'Безалкогольные напитки',
    twoCol: '',
    pricePrefix: 'от ',
    price: 500,
  },
];

export const HEAT_LAB: HeatLabModel[] = [
  {
    title: 'Банная церемония «Танец тепла»',
    subtitle: 'парение в 4\u00A0руки',
    listTitle: 'Входит:',
    list: [
      '— чан на Алтайских травах',
      '— вода Petroglyph',
      '— чай',
      '— необходимое количество полотенец и простыней',
      '— фирменная шапка в подарок',
      '— веники',
    ],
    duration: '120 мин.',
    clients: 'до 2 человек',
    price: 45_000,
  },
  {
    title: 'каждый дополнительный час',
    duration: '60 мин.',
    clients: 'до 2 человек',
    price: 10_000,
  },
  {
    title: 'каждый дополнительный человек',
    duration: '',
    clients: '',
    price: 12_000,
  },
  {
    title: 'Банная церемония «Молодость»',
    subtitle: '1 пармейстер',
    listTitle: 'Входит:',
    list: [
      '— вода Petroglyph',
      '— парение',
      '— чай',
      '— необходимое количество полотенец и простыней',
      '— фирменная шапка в подарок',
      '— веники',
    ],
    duration: '120 мин.',
    clients: 'до 2 человек',
    price: 35_000,
  },
  {
    title: 'Чан на Алтайских травах',
    duration: '',
    clients: '',
    price: 10_000,
  },
  {
    title: 'Классическое парение',
    duration: '30 мин.',
    clients: '1 человек',
    price: 10_000,
  },
  {
    title: 'Групповое парение',

    duration: '20 мин.',
    clients: 'до 6 человек',
    price: 5_000,
    note: 'на человека',
  },
  {
    title: 'Аренда бани (малая)',
    duration: '60 мин.',
    clients: '',
    price: 10_000,
  },
  {
    title: 'Аренда бани (большая)',
    duration: '60 мин.',
    clients: '',
    price: 20_000,
  },
  {
    title: 'Массаж, расслабляющий',
    duration: '60 мин.',
    clients: '1 человек',
    price: 7_000,
  },
  {
    title: 'Массаж, расслабляющий',
    duration: '90 мин.',
    clients: '1 человек',
    price: 9_000,
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
    price: 9_600,
    priceChild: 7_800,
  },
  {
    title: 'Стоянка Чёрного хана',
    twoCol: 'весь день',
    price: 9_600,
    priceChild: 7_800,
  },
  {
    title: 'Степник на Стоянке Чёрного хана',
    twoCol: 'весь день',
    price: 12_345,
    priceChild: 8_000,
  },
  {
    title: 'Алтайскии триптих групповой',
    subtitle: 'зубры +\u00A0ботанический\u00A0сад +\u00A0моторафтинг',
    twoCol: 'весь день',
    price: 10_000,
    priceChild: 8_500,
  },
  {
    title: 'Тень на плетень',
    twoCol: 'весь день',
    price: 10_000,
    priceChild: 7_000,
  },
  {
    title: 'Поездка в сростки',
    twoCol: '6 часов',
    price: 7_200,
    priceChild: 5_400,
  },
  {
    title: 'Лебединое озеро',
    twoCol: '5 часов',
    price: 6_000,
    priceChild: 3_500,
  },
  {
    title: 'Зубровый питомник + ботанический сад',
    subtitle: 'групповой',
    twoCol: '3 часа',
    price: 5_000,
    priceChild: 3_500,
  },
  {
    title: 'Эл музей',
    subtitle: 'поездка в Национальный музей',
    twoCol: '3 часа',
    priceText: 'комплимент',
  },
  {
    title: 'Манжерок и Пасека «Мёдом в ухо»',
    subtitle: 'подъем на канатной дороге не входит в стоимость',
    twoCol: '3 часа',
    price: 4_000,
    priceChild: 2_500,
  },
  {
    title: 'Заячий остров',
    subtitle: 'групповой',
    twoCol: '4–5 часов',
    price: 5_000,
    priceChild: 3_500,
  },
  {
    title: 'Палеопарк и лохматая ферма',
    subtitle: 'билеты входят в стоимость, групповой',
    twoCol: '4 часа',
    price: 6_000,
    priceChild: 4_500,
  },
];

export const TOUR_HIKINGS: PricesModel[] = [
  {
    title: 'Групповой хайкинг по «Хоббитании»',
    subtitle: 'Проводятся даже если пришёл один человек',
    twoCol: '2–3 часа',
    price: 3_000,
  },
  {
    title: 'Групповой хайкинг на гору Черепан',
    subtitle: 'Проводятся даже если пришёл один человек',
    twoCol: '3–4 часа',
    price: 3_000,
  },
  {
    title: 'Групповой хайкинг на гору Бабырган',
    subtitle: 'Проводится от 5 человек',
    twoCol: '5–6 часов',
    price: 5_000,
  },
  {
    title: 'Групповой хайкинг на гору Сарлык',
    subtitle: 'Проводится от 5 человек',
    twoCol: 'весь день',
    price: 8_000,
  },
];

export const TOUR_INDIVIDUAL: HeatLabModel[] = [
  {
    title: 'Пакет планирования «Путёвка»',
    duration: '1 сутки пребывания с нами',
    price: 12_345,
  },
  {
    title: 'Попутчик',
    duration: '1 час',
    price: 3_000,
  },
  {
    title: 'Следопыт',
    duration: '1 час',
    price: 3_500,
  },
  {
    title: 'водитель',
    duration: '1 час',
    price: 2_000,
  },
  {
    title: 'На Марс раньше Маска',
    subtitle: 'на машине TANK',
    duration: '3 дня / 2 ночи',
    pricePrefix: 'от ',
    price: 108_000,
    note: 'за машину',
  },
  {
    title: 'На Марс раньше Маска',
    subtitle: 'на машине Mercedes Viano',
    duration: '3 дня / 2 ночи',
    pricePrefix: 'от ',
    price: 138_000,
    note: 'за машину',
  },
  // {
  //   title: 'На Марс раньше Маска',
  //   subtitle: 'ИНДИВИДУАЛЬНО (1 человек или пара)',
  //   listTitle: 'Входит:',
  //   list: [
  //     '— проживание',
  //     '— питание',
  //     '— трансфер',
  //     '— сопровождение следопытом',
  //     '— поездка в степь',
  //   ],
  //   duration: '3 дня / 2 ночи',
  //   pricePrefix: 'от ',
  //   price: 123_456,
  // },
  {
    title: 'Проход в Шамбалу',
    subtitle: 'в группе 4–5 человек',
    duration: '2 дня / 1 ночь',
    pricePrefix: 'от ',
    price: 200_000,
    note: 'на человека',
  },
  {
    title: 'Проход в Шамбалу',
    subtitle: 'С вертолётом ИНДИВИДУАЛЬНО (1 человек или пара)',
    duration: '2 дня / 1 ночь',
    pricePrefix: 'от ',
    price: 500_000,
  },
  {
    title: 'Обед в We are Altay',
    subtitle: 'С вертолётом. В группе 4–5 человек',
    duration: '1 день',
    pricePrefix: 'от ',
    price: 90_000,
    note: 'на человека',
  },
  // {
  //   title: 'Алтайское кольцо',
  //   duration: '3 дня / 2 ночи',
  //   pricePrefix: 'от ',
  //   price: 400_000,
  //   note: 'на человека',
  // },
  {
    title: 'Телецкое озеро',
    subtitle: 'в группе 4–5 человек',
    duration: 'от 12 часов',
    pricePrefix: 'от ',
    price: 35_000,
    note: 'на человека',
  },
  {
    title: 'Телецкое озеро',
    subtitle: 'Индивидуальная поездка с катером',
    duration: 'от 12 часов',
    pricePrefix: 'от ',
    price: 80_000,
    note: 'на человека с учетом катера и комиссии',
  },
];

export const TOUR_PARTNERS: PricesModel[] = [
  {
    title: 'Конные прогулки',
    pricePrefix: 'от ',
    price: 3_000,
  },
  {
    title: 'Поездки на болотоходах и квадроциклах',
    pricePrefix: 'от ',
    price: 10_000,
  },
  {
    title: 'Рафты',
    pricePrefix: 'от ',
    price: 5_000,
  },
  {
    title: 'Снегоходы',
    pricePrefix: 'от ',
    price: 5_000,
  },
  {
    title: 'Моторные лодки по реке',
    pricePrefix: 'от ',
    price: 5_000,
  },
  {
    title: 'Вертолётные туры',
    subtitle: 'при полной загрузке вертолёта',
    pricePrefix: 'от ',
    price: 150_000,
  },
];

export const AUTO_RENT: PricesModel[] = [
  // {
  //   title: 'RANGE ROVER',
  //   subtitle: '1 час',
  //   price: 2_000,
  // },
  // {
  //   title: 'RANGE ROVER',
  //   subtitle: '24 часа',
  //   price: 15_000,
  // },
  {
    title: 'MERCEDES VIANO',
    subtitle: '1 час',
    price: 3_000,
  },
  {
    title: 'MERCEDES VIANO',
    subtitle: '24 часа',
    price: 25_000,
  },
  {
    title: 'TANK',
    subtitle: '1 час',
    price: 2_500,
  },
  {
    title: 'TANK',
    subtitle: '24 часа',
    price: 15_000,
  },
];

export const CORPORATIVE_PRICE: HeatLabModel[] = [
  {
    title: 'АРЕНДА ВСЕЙ БАЗЫ',
    subtitle:
      '(автопарк без бензина, водители следопыты, кофе-брейк в горклубе «Молодость», все дома, (кроме дома 1), баня с групповыми парениями +чан, аренда всех пространств, культурная программа, которую мы делаем своими силами)',
    duration: '1 сутки (до 50 человек)',
    price: 2_000_000,
  },
  {
    title: 'Каждый человек сверх 50-го',
    duration: '1 сутки',
    price: 20_000,
  },
  {
    title: 'Клуб Сруб',
    duration: '2 часа с учётом подготовки',
    price: 36_000,
  },
  {
    title: '',
    duration: '1 мероприятие до 24 часов с учётом подготовки',
    price: 123_456,
  },
  {
    title: 'Юрта',
    duration: '2 часа с учётом подготовки',
    price: 12_000,
  },
  {
    title: '',
    duration: '1 мероприятие до 12 часов',
    price: 75_000,
  },
  {
    title: 'Аренда банного комплекса под ключ',
    subtitle:
      'малая и большая баня, чан, групповой пар 30 мин',
    duration: '1 час',
    price: 60_000,
  },
  {
    title: 'Организация групповых заездов',
    subtitle: 'от 10 человек',
    duration: 'берет агентство Маури',
    priceText: '10%',
    note: 'от общей суммы без учёта стоимости проживания',
  },
  {
    title: 'Аренда Стоянки Чёрного Хана',
    duration: 'только площадка',
    price: 145_678,
    //note: '+6%+эквайринг',
  },
  {
    title: 'Степник на стоянке Чёрного Хана под ключ',
    duration: 'трансфер и авто не входят',
    price: 1_456_789,
    //note: '+6%+эквайринг',
  },
  {
    title: 'Горячий человек',
    subtitle: 'до 40 человек',
    listTitle: 'Входит:',
    list: [
      '— диджей',
      '— гала ужин с бараном',
      '— огненное шоу',
      '— изготовление и транспортировка дер. фигуры',
      '— аренда сруба',
    ],
    duration:
      '3 часа с учётом нашей подготовки вечеринка на берегу Катуни со сжиганием деревянной фигуры',
    price: 360_000,
  },
  {
    title: 'Групповая медитация с поющими чашами',
    subtitle: 'до 30 человек',
    duration: 'включена аренда пространства',
    price: 54_000
  },
];

export const CLOSED_TOURS: HeatLabModel[] = [
  {
    title: 'Медитация с поющими чашами',
    subtitle: 'до 2 человек',
    subtitleTwo: 'Дополнительный человек',
    duration: 'до 1 часа',
    price: 18_000,
    priceTwo:  6_000,
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
    subtitle: "аренда сруба",
    subtitleTwo: "диджей",
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
    list: [
      '— аренда стола',
      '— подготовка',
      '— сервисное обслуживание',
    ],
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
    subtitle:
      'вода PETROGLYPH, чай, кофе + бутерброд (рыба/мясо/сыр) + горячая закуска/авторский курут + десерт дня',
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
  // {
  //   title: 'хорошая спальня',
  //   twoCol: '2',
  //   price: 12_345,
  // },
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
];

export const ADDITIONAL_SERVICES: PricesModel[] = [
  {
		title: 'завтрак (для не живущих на базе)',
		twoCol: '1 человек',
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
]