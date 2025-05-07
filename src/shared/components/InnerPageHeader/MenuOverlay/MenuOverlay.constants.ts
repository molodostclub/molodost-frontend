export type MenuItem = {
	label: string;
	href?: string;
	anchorId?: string;
	subItems?: MenuItem[];
};

export const APP_ROUTES: MenuItem[] = [
	{
		label: '«МОЛОДОСТЬ» НА АЛТАЕ',
		subItems: [
			{ label: '- Наш Алтай', href: '/nash-altay' },
			{ label: '- Наша экосистема', href: '/nasha-ekosistema' },
			{ label: '- Правила жизни', href: '/pravila-zhizni' },
			{ label: '- В Сибирь за свой счет', href: '/v-sibir-za-svoy-schet' },
			{ label: '- Про нас говорят', href: '/pro-nas-govoryat' },
		],
	},
	{
		label: 'ТУРБАЗА «МОЛОДОСТЬ»',
		subItems: [
			{ label: '- Забронировать', href: '/booking', },
			{ label: '- Майские', href: '/may', },
			{ label: '- ГДЕ МЫ ЖИВЕМ', href: '/rooms' },
			{ label: '- ЧТО МЫ ЕДИМ И ПЬЕМ', href: '/chto-my-edim' },
			{ label: '- КАК МЫ ПУТЕШЕСТВУЕМ', href: '/kak-my-puteshevstvuem' },
			{ label: '- АВТОПРОКАТ', href: '/kak-my-puteshevstvuem#scrollto=avtoprokat' },
			{ label: '- ДЕТИ', href: '/deti-v-molodosti' },
			{ label: '- БАННЫЙ КОМПЛЕКС «БЛАГОДАТЬ»', href: '/laboratoriya-tepla' },
			{ label: '- ЗОЖ И СОМ', href: '/zozh-i-zom' },
			{ label: '– Мероприятия в «Молодости» ', href: '/molodost-zazhigayet' },
		],
	},
	{
		label: '«МОЛОДОСТЬ» НА МАРСЕ',
		subItems: [
			{ label: '- Наш приют', href: '/mars' },
			{ label: '- Где мы живем', href: '/mars#scrollto=roomsOnMars' },
		],
	},
	{
		label: '«МОЛОДОСТЬ» НА байкале',
		subItems: [
			{ label: '– Наш пляжный курорт', href: '/baikal' },
			{ label: '– Где мы живем', href: '/baikal#scrollto=roomsOnBaikal' },
		],
	},
	{
		label: 'Как к нам попасть',
		href: '/kak-popast',
	},
	{
		label: 'Контакты',
		href: '/nashi-kontakty',
	},
];
