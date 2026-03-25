export type MenuItem = {
	label: string;
	href?: string;
	anchorId?: string;
	subItems?: MenuItem[];
};

export const APP_ROUTES: MenuItem[] = [
	{ label: 'НАШ ФЕСТИВАЛЬ', href: '/nash-festival' },
	{
		label: 'ЭКОСИСТЕМА АЛТАЙ',
		subItems: [
			{ label: '— НАША ЭКОСИСТЕМА', href: '/nasha-ekosistema' },
			{ label: '— «МОЛОДОСТЬ» В МАНЖЕРОКЕ', href: '/manjerok' },
			{ label: '— ПРИЮТ НА МАРСЕ', href: '/mars' },
			{ label: '— В СИБИРЬ ЗА СВОЙ СЧЕТ', href: '/v-sibir-za-svoy-schet' },
		],
	},
	{
		label: '«МОЛОДОСТЬ» НА БАЙКАЛЕ',
		subItems: [
			{ label: '— МОЛОДОСТЬ НА БАЙКАЛЕ', href: '/baikal' },
			{ label: '— КАК МЫ ЖИВЕМ', href: '/baikal', anchorId: 'roomsOnBaikal' },
			{ label: '— КАК МЫ ЕДИМ', href: '/baikal', anchorId: 'baikal-what-we-eat-title' },
			{ label: '— КУДА МЫ ЕЗДИМ', href: '/baikal', anchorId: 'kak-my-puteshestvuem' },
			{ label: '— В СИБИРЬ ЗА СВОЙ СЧЕТ', href: '/v-sibir-za-svoy-schet-baikal' },
		],
	},
	{ label: 'КУРИЛЫ', href: '/kurily' },
	{
		label: 'О НАС',
		subItems: [
			{ label: '— ТВОРЧЕСКИЙ КООПЕРАТИВ', href: '/o-nas' },
			{ label: '— О НАС ГОВОРЯТ', href: '/pro-nas-govoryat' },
			{ label: '— ПРАВИЛА ЖИЗНИ', href: '/pravila-zhizni' },
		],
	},
	{ label: 'КОНТАКТЫ', href: '/nashi-kontakty' },
];
