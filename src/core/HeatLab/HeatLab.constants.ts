type HeatLabTableModel = {
  id: number,
  name: string,
  note?: string,
  time?: string,
  pricePrefix?: string,
  price: number,
  pricePostfix?: string,
}

export const HEAT_LAB_TABLE:HeatLabTableModel[] = [
  {
    id: 1,
    name: 'Аренда бани малая',
    note: '',
    time: '60 мин',
    price: 10_000,
  },
  {
    id: 2,
    name: 'Аренда бани большая',
    note: '',
    time: '60 мин',
    price: 20_000,
  },
  {
    id: 3,
    name: 'Классическое парение',
    note: '1 человек',
    time: '30 мин',
    price: 10_000,
  },
  {
    id: 3,
    name: 'Групповое парение',
    note: 'до 6 человек',
    time: '20 мин',
    pricePrefix: 'за каждого гостя -',
    price: 5_000,
  },
  {
    id: 4,
    name: 'Банная церемония «Танец тепла»',
    note: 'До 2 человек. Каждый дополнительный гость +12 000 ₽, каждый следующий час - 10 000 ₽',
    time: '120 мин',
    price: 45_000,
  },
  {
    id: 5,
    name: 'Банная церемония «МОЛОДОСТЬ»',
    note: '2 человека',
    time: '120 мин',
    price: 35_000,
  },
  {
    id: 6,
    name: 'Чан на Алтайских травах',
    note: '',
    price: 10_000,
    pricePostfix: '',
  },
  {
    id: 7,
    name: 'Расслабляющий массаж 60 мин',
    note: '1 человек',
    time: '',
    price: 7_000,
  },
  {
    id: 8,
    name: 'Расслабляющий массаж 90 мин',
    note: '1 человек',
    time: '',
    price: 9_000,
  },
  {
    id: 9,
    name: 'Мануальный массаж',
    note: '1 человек',
    time: '30-45 мин',
    price: 10_000,
  },
  {
    id: 10,
    name: 'Оздоровительный курс мануального массажа',
    note: '1 человек',
    time: '5 раз по 30-45 мин',
    price: 40_000,
  },
];
