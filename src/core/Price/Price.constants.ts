export const inRoom = [
  {
    orderOnMobile: 1,
    title: 'хорошая cпальня',
    price: 12345,
    pricePrefix: 'От',
    persons: '1-2',
    area: '18-24 м²',
  },
  {
    orderOnMobile: 3,
    title: 'семейный номер',
    price: 25000,
    pricePrefix: 'От',
    persons: '2-4',
    area: '70 м²',
    description: 'две спальни, общая зона',
  },
  {
    orderOnMobile: 2,
    title: 'замечательная cпальня',
    price: 16000,
    pricePrefix: 'От',
    persons: '1-2',
    area: '24-28 м²',
  },
]

export const inHouse = [
  {
    title: 'Дом с печкой',
    price: 30000,
    pricePrefix: 'От',
    persons: '1-2',
    area: '38 м²',
    description: 'отдельно стоящий дом, одна спальня с печкой и верандой'
  },
  {
    title: 'дом на холме',
    price: 55000,
    pricePrefix: 'От',
    persons: '4-8',
    area: '150 м²',
    description: 'четыре спальни с ванными комнатами и террасой с видом на Катунь'
  },
  {
    title: 'бранхаус',
    price: 35000,
    pricePrefix: 'От',
    persons: '2-3',
    area: '68 м²',
    description: 'отдельно стоящий дом, две спальни, общая зона'
  },
  {
    title: 'большой шукшинский дом',
    price: 60000,
    pricePrefix: 'От',
    persons: '4-8',
    area: '110 м²',
    description: 'четыре спальни, общая зона, печка, видовая терраса на Катунь'
  },
  {
    title: 'семейный дом',
    price: 40000,
    pricePrefix: 'От',
    persons: '4-6',
    area: '100 м²',
    description: 'отдельно стоящий дом с тремя спальнями и гостиной'
  },
  {
    title: 'карахаус',
    price: 60001,
    pricePrefix: 'От',
    persons: '3-6',
    area: '120 м²',
    description: 'дом, посвященный архитектору Френку Гери, три спальни, общая зона'
  },
  {
    title: 'малый шукшинский дом',
    price: 40001,
    pricePrefix: 'От',
    persons: '2-4',
    area: '70 м²',
    description: 'наш любимый дом, две спальни, печка, видовая терраса на Катунь'
  },
  // {
  //   title: 'Дом с драконом',
  //   price: 120000,
  //   pricePrefix: 'От',
  //   persons: '7-14',
  //   area: '120 м²',
  //   description: 'семь спален разных размеров, три из которых с видом на реку Катунь, так же у дома есть свой отдельный сад и беседка с выходом на реку, своя кухня и гостиная с камином'
  // },
  {
    title: 'Дом птица',
    price: 40000,
    pricePrefix: 'От',
    persons: '2-4',
    description: 'дом, посвященный архитектору Сантьяго Калатраве, две замечательные спальни, объединенные уличной террасой'
  },
]

export const gastrotavern = [
  {
    title: 'завтрак',
    price: 2000,
    priceAfter: 'взрослый',

    priceForChild: 1000,
    priceForChildAfter: 'ребенок',

    description: 'Для проживающих на базе включен в стоимость',
  },
  {
    title: 'Услуга\n “Съедобное бревно”',
    price: 4500,
    priceAfter: 'взрослый',

    priceForChild: 3000,
    priceForChildAfter: 'ребенок',
  },
  {
    title: 'обед',
    price: 2000,
    priceAfter: 'взрослый',

    priceForChild: 1000,
    priceForChildAfter: 'ребенок',
  },
  {
    title: 'Услуга “Съедобное бревно” в сезон',
    price: 6000,
    priceAfter: 'взрослый в день',

    priceForChild: 4000,
    priceForChildAfter: 'ребенок в день',

    additionalTitles: [
      {
        title: 'Обед',
        price: 2000,
        priceSuffix: 'взрослый',
      },
      {
        title: 'Ужин',
        price: 4000,
        priceSuffix: 'взрослый',
      },
    ],
  },
  {
    title: 'гастроужин',
    price: 4000,
    priceAfter: 'взрослый',

    priceForChild: 2000,
    priceForChildAfter: 'ребенок',
  },
  {
    title: 'выездной пикник',
    description: 'рассчитывается индивидуально',
  },
  {
    title: 'Ребенок (5-12 лет) 50% скидка',
  },
]

export const food = [
  {
    title: 'алтайский рибай',
    price: 3000,
    description: 'от кооператива “Дружба”, 320±10g',
  },
  {
    title: 'тот самый катунский жареный хариус',
    price: 3000,
    description: 'если рыбаки сегодня добыли, 100g',
  },
]

export const foodNoFisher = [
  {
    title: 'стейк из семги или палтуса',
    price: 1500,
    description: '180±10g',
  },
  {
    title: 'сет с тремя видами меда от пасеки “мЁдом в ухо”',
    price: 1200,
    description: '200±10g',
  },
  {
    title: 'сырно-медовая тарелка',
    price: 2000,
    description: 'из трех видов сыра и меда, 300±10g',
  },
  {
    title: 'пельмени ручной лепки мясные или рыбные',
    price: 500,
    description: 'можем отварить или пожарить, 200±10g',
  },
  {
    title: 'ассорти сыров от наших местных партнеров “логовский сыроварни”',
    price: 1500,
    description: '300±10g',
  },
]

export const drink = [
  {
    title: 'фирменный квас от нашего шеф-повара',
    price: 350,
    description: '500±10 ml',
  },
  {
    title: 'танковое пиво местное разливное',
    price: 1500,
    description: '500±10 ml',
  },
  {
    title: 'медовуха от наших партнеров “мЁдом в ухо”',
    price: 500,
    description: '500±10 ml',
  },
]

export const drinkBranded = [
  {
    title: '“таежный десерт” со сгущенкой или медом',
    price: 500,
    description: '200±10g',
  },
  {
    title: 'мороженое',
    price: 500,
    description: '100±10g',
  },
]

export const bar = [
  {
    title: 'коктейли',
    pricePrefix: 'от',
    price: 1000,
    priceAfter: 'штука',
  },
  {
    title: 'вина',
    pricePrefix: 'от',
    price: 3000,
    priceAfter: 'бутылка',
  },
  {
    title: 'крепкий алкоголь',
    price: 1000,
    priceAfter: '70 грамм',
  },
] 


export const comfort = [
  {
    title: 'Прачечная (стирка + сушка)',
    price: 2000,
    priceAfter: '1 загрузка',
  },
  {
    title: 'обслуживание в номере',
    price: 1000,
    description: 'Мы можем принести вам завтрак, обед, ужин или все, что вы захотите в номер или в дом.',
  },
] 


export const bathhouse = [
  {
    title: 'аренда бани',
    pricePrefix: 'от',
    price: 4000,
    priceAfter: '',
    description: '60 минут / 4 человека',
  },
  {
    title: 'Банная церемония “Танец тепла”',
    price: 25000,
    description: '120 минут / 2 человек',
    additionalTitles: [
      {
        title: 'Каждый следующий час',
        price: 10000,
      },
      {
        title: 'Каждый дополнительный гость',
        price: 12000,
      },
    ],
  },
  {
    title: 'бар веников',
    price: 500,
    priceAfter: 'штука',
    description: 'березовый, дубовый, липовый, можжевеловый, пихтовый',
  },
  {
    title: 'Банная церемония “Молодость”',
    price: 20000,
    description: '120 минут / 1 человек',
  },
  {
    title: 'Классическое парение',
    price: 6000,
    description: '20 минут / 1 человек',
  },
  {
    title: 'Чан травяной на Алтайских травах',
    price: 10000,
  },
  {
    title: 'классический массаж',
    price: 9000,
    description: '90 минут / 1 человек',
  },
] 


export const coffe = [
  {
    title: 'эспрессо / Американо',
    price: 250,
  },
  {
    title: 'Чай травяной/зелёный/чёрный',
    price: 400,
  },
  {
    title: 'капучино / латте',
    price: 400,
  },
  {
    title: 'Наш Авторский чай',
    price: 500,
    description: 'Облепиховый, имбирный, Брусничный',
  },
  {
    title: 'Матча/Какао',
    price: 500,
  },
  {
    title: 'Чай Mariage черный',
    price: 800,
  },
  {
    title: 'Безалкогольные напитки',
    price: 500,
  },
]


export const fitness = [
  {
    title: 'персональная тренировка',
    price: 4000,
    priceAfter: '40 минут',

    priceForChild: 5000,
    priceForChildAfter: '60 минут',
  },
  {
    title: 'персональное занятий йогой',
    price: 4000,
    priceAfter: '40 минут',

    priceForChild: 5000,
    priceForChildAfter: '60 минут',
  },
  {
    title: 'Групповая утренняя зарядка, йога и медитация в теплый сезон и сезонные заезды',
    price: 'бесплатно',
  },
]


export const movement = [
  {
    title: 'Групповой хайкинг по Хоббитании',
    description: '2–3 часа',
    price: 2000,
  },
  {
    title: 'Групповой трекинг на гору сарлык',
    description: '6–7 часов',
    price: 6000,
  },
  {
    title: 'Групповой хайкинг на гору черепан',
    description: '3–4 часа',
    price: 3000,
  },
  {
    title: 'тур на велосипедах',
    description: '5 часов',
    pricePrefix: 'от',
    price: 4000,
  },
  {
    title: 'Групповой трекинг “не одинокая гора бабырган”',
    description: '5–6 часов',
    price: 5000,
  },
  {
    title: 'аренда велосипедов',
    price: 'бесплатно',
  },
]


export const carRent = [
  {
    title: 'Range Rover',
    price: 1500,
    priceAfter: 'час',

    priceForChild: 15000,
    priceForChildAfter: 'сутки',

    description: 'топливо оплачивается дополнительно',
  },
  {
    title: 'трансфер из аэропорта',
    price: 1500,
    priceAfter: 'человек',
  },
  {
    title: 'Mercedes Viano',
    price: 2500,
    priceAfter: 'час',
    
    priceForChild: 20000,
    priceForChildAfter: 'сутки',
    
    description: 'топливо оплачивается дополнительно',
  },
  {
    title: 'трансфер в аэропорт',
    price: 1000,
    priceAfter: 'человек',
  },
  {
    title: 'индивидуальный трансфер',
    pricePrefix: 'от',
    price: 3000,
  },
  {
    title: 'встреча / проводы в “бизнес зал”',
    price: 2900,
    priceAfter: 'прилет',
    priceForChild: 8900,
    priceForChildAfter: 'вылет',
  },
]


export const merch = [
  {
    title: 'Футболка “не проfакайте молодость”',
    price: 5000,
  },
  {
    title: 'Худи “Молодость х Ola Ola”',
    price: 10000,
  },
]


export const tours = [
  {
    title: 'проход в шамбалу',
    description: 'Путешествие к горе Белуха с посещением мест Рериха с обедом или ночевкой в люкспенге наших друзей “We are Altay”. У нас есть разные варианты посещения этих мест с полетом на вертолете, поездкой на машине через самые красивые места Алтая и 8 часовым пешим переходом, который позволит вам совершить «средний алтайский круг».',
    details: 'поездка бронируется за три дня',
    priceInfo: 'от 90 000 ₽ на человека',
  },
  {
    title: 'алтайское кольцо',
    description: 'Большое путешествие по всему Алтаю, которое позволяет рассмотреть все самые главные ландшафты и пейзажи, проехать по всему Чуйскому тракту до границы с Монголией, побывать на Марсе, увидеть скифские курганы в Чулышманской долине и переправиться через Телецкое озеро.',
    details: 'Путешествие занимает не менее 3 дней и 2 ночей. Поездка бронируется за 14 дней.',
    priceInfo: 'от 100 000 ₽ на человека',
  },
  {
    title: 'вода-вода',
    description: 'Поездка на целый день на Телецкое озеро, которое входит в список наследия ЮНЕСКО. Озеро находится на высоте  434 м над уровнем моря, его длина составляет 78 км. Посещение озера включает прогулку на катерах от северного до южного берега, где вода прогревается достаточно, чтобы можно было купаться. Дополнительно можно сделать остановку на ночь в отеле.',
    details: 'поездка занимает целый день',
    priceInfo: 'от 25 000 ₽ на человека, с учетом плавания через все озеро, ночь в отеле оплачивается отдельно',
  },
  {
    title: 'Миссия на марс',
    description: 'Поездка по Чуйскому тракту, одной из самых красивых дорог в мире по версии National Geographic. Дорожное путешествие с остановками на уникальных природных и исторических достопримечательностях: Каракольская долина с курганами, перевалы Семинский и Чике-Таман, гейзерово озеро. Вишенкой на торте этой поездки является хайкинг в горном районе Марс на границе с Монголией.',
    details: 'Путешествие занимает от 3-х дней.  Поездка бронируется за 3 дня',
    priceInfo: 'от 70 000 ₽ на человека',
  },
]


export const guide = [
  {
    title: 'попутчик',
    description: 'Один из членов нашей команды, который знает детали маршрута, составит вам компанию и поговорит о том о сем',
    price: 2000,
    priceAfter: 'час',
  },
  {
    title: 'следопыт',
    description: 'Подготовленный гид, который знает маршруты, рассказывает интересные факты по маршруту и в целом про Алтай и может вести автомобиль',
    price: 2500,
    priceAfter: 'час',
  },
  {
    title: 'водитель',
    price: 1200,
    priceAfter: 'час',
  },
]

export const drive = [
  {
    title: 'эл музей',
    price: 2000,
    priceAfter: 'взрослый',
    priceForChild: 1000,
    priceForChildAfter: 'детский',
  },
  {
    title: 'всесезонный курорт манжерок',
    price: 1000,
    priceAfter: 'в одну сторону',
  },
  {
    title: 'заячий остров',
    price: 5000,
    priceAfter: 'взрослый',
    priceForChild: 3500,
    priceForChildAfter: 'детский',
  },
  {
    title: 'пасека “медом в ухо”',
    price: 3000,
    priceAfter: 'взрослый',
    priceForChild: 1500,
    priceForChildAfter: 'детский',
  },
]
