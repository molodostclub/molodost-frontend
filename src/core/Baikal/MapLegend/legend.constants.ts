export type LegendItemData = {
	number: number;
	/** Строки через \n — отображаются с переносом */
	label: string;
	/** Позиция в сетке 4×3 (заполнение по колонкам) */
	gridColumn: string;
	gridRow: string;
};

/**
 * Порядок на макете — по колонкам:
 * кол.1: 1,2,3 | кол.2: 4,5,6 | кол.3: 7,8,9 | кол.4: 10,11
 * П.9 занимает 2 колонки (3–4) в 3-м ряду.
 */
export const BAIKAL_MAP_LEGEND_ITEMS: LegendItemData[] = [
	{ number: 1, label: 'Парковка', gridColumn: '1', gridRow: '1' },
	{ number: 2, label: 'Сруб', gridColumn: '1', gridRow: '2' },
	{ number: 3, label: 'Дом Приёмов', gridColumn: '1', gridRow: '3' },
	{ number: 4, label: 'Баня\nс бассейном', gridColumn: '2', gridRow: '1' },
	{ number: 5, label: 'Дом звука', gridColumn: '2', gridRow: '2' },
	{ number: 6, label: 'Дома кубики', gridColumn: '2', gridRow: '3' },
	{ number: 7, label: 'Гэры', gridColumn: '3', gridRow: '1' },
	{ number: 8, label: 'Детская\nплощадка', gridColumn: '3', gridRow: '2' },
	{ number: 9, label: 'Пляжный клуб\n«Розовый фламинго»', gridColumn: '3 / span 2', gridRow: '3' },
	{ number: 10, label: 'Люкспинг', gridColumn: '4', gridRow: '1' },
	{ number: 11, label: 'Туалетно-душевой\nкомплекс', gridColumn: '4', gridRow: '2' },
];
