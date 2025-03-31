export type MenuItem = {
	label: string;
	href?: string;
	anchorId?: string;
	subItems?: MenuItem[];
};

export const APP_ROUTES: MenuItem[] = [
	{
		label: 'Майские',
		href: '/may',
	},
	{
		label: 'Правила жизни',
		href: '/pravila-zhizni',
	},
	{
		label: 'В Сибирь за свой счет',
		href: '/v-sibir-za-svoy-schet',
	},
	{
		label: 'ТУРБАЗА «МОЛОДОСТЬ»',
		subItems: [
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
		label: 'ПРО «МОЛОДОСТЬ»',
		subItems: [
			{ label: '- Наш Алтай', href: '/nash-altay' },
			{ label: '- Наша экосистема', href: '/nasha-ekosistema' },
			{ label: '- Как к нам попасть', href: '/kak-popast' },
			{ label: '- Про нас говорят', href: '/pro-nas-govoryat' },
			{ label: '- Контакты', href: '/nashi-kontakty' },
		],
	},
];
