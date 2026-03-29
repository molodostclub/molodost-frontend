export type AboutUsSection = {
	id: string;
	title: string;
	accented?: boolean;
	blackHeading?: boolean;
	paragraphs: string[];
};

export const COMMAND_MEMBERS_LIST = [
	{
		id: '1',
		name: 'Рома Лампарадзе',
		description: 'Генеральный директор. Управляет юридическими и\u00A0земельными вопросами. Делает так, чтобы проекты любой сложности возникли в\u00A0кратчайшие сроки',
		imageSrc: '/images/about/roman.png',
	},
	{
		id: '2',
		name: 'Лёша Уманский',
		description: 'Руководитель направления по\u00A0работе с\u00A0крупными корпоративными клиентами, реализует проекты в\u00A0интересах ВЭБ.РФ и\u00A0Highland Gold под ключ, включая все регуляторные и\u00A0строительные требования',
		imageSrc: '/images/about/alexey.png',
	},
	{
		id: '3',
		name: 'Мария Лампарадзе',
		description: 'Руководитель отдела продаж и\u00A0руководитель базы «Молодость» Алтай',
		imageSrc: '/images/about/maria.png',
	},
	{
		id: '4',
		name: 'Ольга Кутенких',
		description: 'Операционный директор, занимается поиском и\u00A0обучением сотрудников, руководитель базы «Молодость» Байкал',
		imageSrc: '/images/about/olga.png',
	},
	{
		id: '5',
		name: 'Настя Баскакова',
		description: 'Руководитель отдела продаж и\u00A0руководитель базы «Молодость» Алтай',
		imageSrc: '/images/about/anastasia.png',
	},
	{
		id: '6',
		name: 'Арина Курьянова',
		description: 'Руководитель культурной программы на\u00A0базах «Молодость» в\u00A0высокий сезон, отвечает за\u00A0международные, групповые заезды',
		imageSrc: '/images/about/arina.png',
	},
];