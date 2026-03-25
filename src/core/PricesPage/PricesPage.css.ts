import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { pageContent, tablet, uikit, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 830,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '100%',
		marginTop: 30,
		gap: 20,
	},
	tablet({
		marginTop: 40,
		gap: 40,
		gridTemplateColumns: 'auto 255px',
	}),
]);

export const subtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 14,
		lineHeight: 1.2,
		textTransform: 'uppercase',
		backgroundColor: vars.color.brand,
		color: vars.color.white,
		borderRadius: '40px',
		padding: '8px 24px',
		display: 'inline-block',
		marginBottom: 0,
		marginTop: 40,
	},
	tablet({
		fontSize: 16,
	}),
]);

export const separatorNote = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 20,
	lineHeight: 1.4,
	color: vars.color.brand,
	textTransform: 'uppercase',
	textAlign: 'center',
	marginTop: 24,
	marginBottom: 24,
});

export const subsectionHeading = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 27,
	lineHeight: 1.2,
	color: vars.color.black,
	textTransform: 'uppercase',
	marginTop: 32,
	marginBottom: 20,
});

/** Подзаголовок секции — красный (brand), 27px */
export const subsectionHeadingBrand = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 27,
	lineHeight: 1.2,
	color: vars.color.brand,
	textTransform: 'uppercase',
	marginTop: 32,
	marginBottom: 20,
});

export const whatWeEatGastropubHeading = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 27,
	lineHeight: 1.2,
	color: vars.color.black,
	textTransform: 'uppercase',
	marginTop: 0,
	marginBottom: 20,
});

export const whatWeEatColumnHeading = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 20,
	lineHeight: 1,
	color: vars.color.black,
	textTransform: 'uppercase',
	marginTop: 0,
	marginBottom: 16,
});

export const whatWeEatGastropubLayout = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 20,
		marginTop: 16,
	},
]);

/** Строка питания + опционально абзац под ценами («Съедобное бревно») */
export const whatWeEatItemGroup = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	width: '100%',
	alignItems: 'stretch',
});

export const whatWeEatMealTimes = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 0,
	minWidth: 0,
});

export const whatWeEatMealTimeRow = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 14,
	lineHeight: 20 / 14,
	letterSpacing: 0,
	textTransform: 'uppercase',
});

export const whatWeEatDescription = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 18,
	lineHeight: 1,
	letterSpacing: 0,
	color: vars.color.black,
	minWidth: 0,
});

/** Текст пакета под ценами «Съедобное бревно» — без дефолтных отступов у p */
export const whatWeEatPackageDescription = style([
	whatWeEatDescription,
	{
		margin: 0,
	},
]);

export const whatWeEatColumns = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 40,
		marginTop: 32,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
		gap: 60,
	}),
]);

export const whatWeEatColumn = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const whatWeEatItem = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	gap: 16,
});

export const whatWeEatItemLeft = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	width: 172,
	flexShrink: 0,
	textAlign: 'left',
});

export const whatWeEatItemRight = style({
	width: 132,
	flexShrink: 0,
	textAlign: 'left',
});

export const whatWeEatItemTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	lineHeight: 1.3,
	textTransform: 'uppercase',
	color: vars.color.black,
});

/** Заголовок позиции красным (для блока «Поездки» Байкал и др.) */
export const whatWeEatItemTitleBrand = style([
	whatWeEatItemTitle,
	{ color: vars.color.brand },
]);

export const whatWeEatItemPrice = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	color: vars.color.brand,
});

export const whatWeEatItemDescriptor = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 16,
	color: vars.color.gray,
});

export const whatWeEatItemNote = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 16,
	color: vars.color.brand,
});

export const whatWeEatItemDescription = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 14,
	lineHeight: 1.4,
	color: vars.color.gray,
});

/** Заголовок карточки в блоке «Путешествия» — как whatWeEatItemTitleBrand, без отступов h4 */
export const puteshestviyaCardHeading = style([
	whatWeEatItemTitleBrand,
	{
		margin: 0,
		marginBottom: 8,
	},
]);

/** Описание в блоке «Путешествия» — как подпись к позициям «Что едим» */
export const puteshestviyaCardDescription = style([
	whatWeEatItemDescription,
	{
		margin: 0,
	},
]);

export const additionalPersonNote = style({
	fontFamily: vars.font.ApercuProBold,
	fontSize: 20,
	lineHeight: 1.2,
	color: vars.color.brand,
	marginTop: 24,
	paddingTop: 20,
	paddingBottom: 20,
	borderTop: `2px solid ${vars.color.brand}`,
	borderBottom: `2px solid ${vars.color.brand}`,
});

export const whatWeDrinkDivider = style({
	height: 0,
	borderTop: `1px solid ${vars.color.brand}`,
	marginTop: 20,
	marginBottom: 20,
});

export const whatWeDrinkBarDescription = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 20,
	lineHeight: 1.2,
	color: vars.color.black,
	marginBottom: 28,
});

export const whatWeDrinkAccentSubheading = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 27,
	lineHeight: 1,
	textTransform: 'uppercase',
	color: vars.color.brand,
	marginTop: 54,
	marginBottom: 16,
});

export const accommodationGrid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 24,
		marginTop: 20,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
		gap: 32,
	}),
]);

export const accommodationCard = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
});

export const accommodationCardHeader = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	gap: 12,
});

export const accommodationCardTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	lineHeight: 1.3,
	color: vars.color.black,
	textTransform: 'uppercase',
	margin: 0,
});

export const accommodationCardPrice = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	lineHeight: 1.3,
	color: vars.color.brand,
	textTransform: 'uppercase',
	flexShrink: 0,
});

export const accommodationCardMeta = style({
	display: 'flex',
	alignItems: 'center',
	gap: 6,
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 14,
	lineHeight: 1.4,
	color: vars.color.gray,
});

export const accommodationCardDescription = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 14,
	lineHeight: 1.4,
	color: vars.color.gray,
	margin: 0,
});

export const accommodationCardIcon = style({
	flexShrink: 0,
	objectFit: 'contain',
});

const textContentBase = style([
	tablet({
		maxWidth: 320,
		gridArea: 'a',
	}),
]);

export const textContent = styleVariants({
	top: [textContentBase],
	bottom: [
		textContentBase,
		tablet({
			gridArea: 'b',
			marginTop: 0,
		}),
	],
});

export const priceTable = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 15,
	},
	tablet({
		gap: 20,
	}),
]);

export const tableHeaderCol = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 14,
		color: vars.color.brand,
		lineHeight: 1,
		textAlign: 'right',
		textTransform: 'uppercase',
		selectors: {
			'&:first-of-type': {
				textAlign: 'left',
			},
		},
	},
	tablet({
		fontSize: 16,
	}),
]);

/** Заголовки колонок таблицы «Партнёрские активности» — красные, 18px. УСЛУГА и ПРОДОЛЖИТЕЛЬНОСТЬ влево, ЦЕНА вправо */
export const partnerTableHeaderCol = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	color: vars.color.brand,
	lineHeight: 1,
	textTransform: 'uppercase',
	selectors: {
		'&:first-of-type': { textAlign: 'left' },
		'&:nth-of-type(2)': { textAlign: 'left' },
		'&:last-of-type': { textAlign: 'right' },
	},
});

/** Ячейка «Продолжительность» в таблице партнёрских активностей — красный текст, 18px, по левому краю колонки */
export const partnerTableDuration = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	lineHeight: 1,
	textAlign: 'left',
	color: vars.color.brand,
	textTransform: 'uppercase',
});

/** Подпись условия в строке партнёрских активностей — на мобиле как whatWeEatItemDescription */
export const partnerTableCondition = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 14,
		lineHeight: 1.4,
		color: vars.color.gray,
		textTransform: 'none',
	},
	tablet({
		fontSize: 18,
		lineHeight: 1.2,
		color: vars.color.black,
		textTransform: 'uppercase',
	}),
]);

/** Подпись «взрослый»/«детский» у цены в партнёрских активностях — серый */
export const partnerTablePriceLabel = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 12,
	lineHeight: 1.2,
	color: vars.color.gray,
});

/** Название услуги в таблице партнёрских активностей — CeraCondensed Bold, 20px, чёрный */
export const partnerTableServiceTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 20,
	lineHeight: 1,
	textTransform: 'uppercase',
	color: vars.color.black,
	maxWidth: '80%',
});

/** Ячейка колонки «Продолжительность» — выравнивание по левому краю */
export const partnerTableColLeft = style({
	textAlign: 'left',
});

/** Ячейка колонки «Цена» — выравнивание вправо */
export const partnerTableColRight = style({
	textAlign: 'right',
});

/** Красный подзаголовок в блоке «Путешествия» — без верхнего отступа */
export const travelsSubheading = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 'bold',
	fontSize: 27,
	lineHeight: 1.2,
	color: vars.color.brand,
	textTransform: 'uppercase',
	marginTop: 0,
	marginBottom: 20,
});

/** Красный подзаголовок с отступом сверху 80px (между ЗОЖ и ЗОМ и Групповые хайкинги) */
export const travelsSubheadingWithGap = style([
	travelsSubheading,
	{ marginTop: 80 },
]);

/** Блок «Путешествия» — обёртка строк */
export const travelsWrap = style({
	marginTop: 20,
	display: 'flex',
	flexDirection: 'column',
	gap: 40,
});

/** Одна строка путешествия — две колонки ~65% / 35%, gap 40px */
export const travelsRow = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 24,
		alignItems: 'start',
	},
	tablet({
		gridTemplateColumns: '65% 1fr',
		gap: 40,
	}),
]);

/** Группа правой колонки для одного путешествия */
export const travelsRightGroup = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
});

/** Вертикальный стек абзацев/списков внутри аккордеона */
export const textStack = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

/** Фирменный магазин — всегда под аккордеонами, без раскрытия */
export const conceptStoreStatic = style([
	textStack,
	{
		marginTop: 40,
	},
]);

globalStyle(`${travelsRightGroup} p`, { margin: 0 });
globalStyle(`${textStack} p`, { margin: 0 });
globalStyle(`${conceptStoreStatic} p`, { margin: 0 });

export const tableHeaderColWide = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 14,
		color: vars.color.brand,
		lineHeight: 1,
		textAlign: 'center',
		textTransform: 'uppercase',
		selectors: {
			'&:first-of-type': {
				textAlign: 'left',
			},
		},
	},
	tablet({
		fontSize: 16,
	}),
]);

export const priceRow = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		alignItems: 'center',
	},
	tablet({
		gridTemplateColumns: '3fr 2fr 1.5fr',
	}),
]);

/** Строка заголовка таблицы «Партнёрские активности» (3 колонки) */
export const partnerTableHeaderRow = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		alignItems: 'center',
	},
	tablet({
		gridTemplateColumns: '3fr 2fr 1.5fr',
	}),
]);

export const priceRowFour = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		alignItems: 'center',
	},
	tablet({
		gridTemplateColumns: '1.5fr 0.6fr 1.5fr 1.5fr',
	}),
]);

export const priceRowTop = style([
	{
		display: 'grid',
		gridTemplateColumns: '3fr 2fr 2fr',
		alignItems: 'start',
	},
	tablet({
		gridTemplateColumns: '4fr 1fr 1.5fr',
	}),
]);

export const priceRowSmall = style([
	{
		display: 'grid',
		gridTemplateColumns: '3fr 1fr',
		alignItems: 'center',
	},
	tablet({
		gridTemplateColumns: '3fr 1fr',
	}),
]);

export const priceRowWide = style([
	{
		display: 'grid',
		alignItems: 'start',
		gridTemplateColumns: '2fr 1fr 1fr 1fr',
	},
	tablet({
		gridTemplateColumns: '4fr 1fr 1fr 1fr',
	}),
]);

export const priceTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 12,
		lineHeight: 1,
		textTransform: 'uppercase',
		maxWidth: '80%',
	},
	tablet({
		fontSize: 18,
	}),
]);

export const priceListTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 10,
		lineHeight: 1,
		textTransform: 'lowercase',
	},
	tablet({
		fontSize: 16,
	}),
]);

export const list = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 12,
		lineHeight: 1,
		display: 'flex',
		flexDirection: 'column',
		marginTop: 10,
		gap: 5,
		listStyle: 'initial',
		paddingLeft: 20,
	},
	tablet({
		fontSize: 16,
	}),
]);

export const listItem = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 12,
		lineHeight: 1,
	},
	tablet({
		fontSize: 16,
	}),
]);

export const priceList = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 12,
		lineHeight: 1,
		listStyle: 'none',
	},
	tablet({
		fontSize: 16,
	}),
]);

export const priceSubtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 12,
	},
	tablet({
		fontSize: 16,
	}),
]);

export const twoCol = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 12,
		lineHeight: 1,
		textAlign: 'right',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const attention = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1,
		color: vars.color.black,
		textTransform: 'uppercase',
		marginTop: 30,
	},
	tablet({
		fontSize: 26,
	}),
]);

export const attentionRed = style([
	{
		color: vars.color.brand,
	},
	tablet({}),
]);

export const priceNum = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 12,
		lineHeight: 1,
		textAlign: 'right',
		width: '100%',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const PriceNumBlack = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 12,
		lineHeight: 1,
		textAlign: 'right',
		width: '100%',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const priceNumList = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 12,
		lineHeight: 1,
		textAlign: 'center',
		width: '100%',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const priceNote = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 10,
	lineHeight: 1,
	textAlign: 'right',
});

export const sideTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 16,
	color: vars.color.brand,
	textTransform: 'uppercase',
});

export const groupTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 20,
	color: vars.color.brand,
	textTransform: 'uppercase',
});

export const sideText = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 16,
	textTransform: 'uppercase',
	marginBottom: 30,
	selectors: {
		'&:last-of-type': {
			marginBottom: 0,
		},
	},
});
export const sideLightText = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 16,
	textTransform: 'uppercase',
});

export const separator = style({
	width: '100%',
	height: '1px',
	backgroundColor: vars.color.brand,
	margin: '50px 0',
});

export const navButtonsBottom = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginTop: 60,
		marginBottom: 40,
	},
	tablet({
		flexDirection: 'row',
		gap: '16px',
	}),
]);

export const navButton = style([
	{
		display: 'inline-block',
		padding: '14px 28px',
		borderRadius: '40px',
		border: `2px solid ${vars.color.brand}`,
		backgroundColor: 'transparent',
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontSize: 14,
		color: vars.color.brand,
		textDecoration: 'none',
		textTransform: 'uppercase',
		textAlign: 'center',
		':hover': {
			backgroundColor: vars.color.brand,
			color: vars.color.white,
		},
	},
	tablet({
		fontSize: 16,
	}),
]);

export const navButtonActive = style([
	{
		backgroundColor: vars.color.brand,
		color: vars.color.white,
	},
]);

/** Равномерный шаг между аккордеонами на странице цен (Байкал) */
export const pricesBaikalAccordionStack = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,
	marginTop: 24,
});

globalStyle(`${pricesBaikalAccordionStack} > section`, {
	marginTop: 0,
});
