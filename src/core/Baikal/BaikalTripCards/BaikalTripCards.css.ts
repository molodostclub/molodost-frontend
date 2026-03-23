import { globalStyle, style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

/** Внешняя обёртка ряда карточек */
export const gridOuter = style({
	width: '100%',
	maxWidth: '100%',
	boxSizing: 'border-box',
});

/** Сетка: на мобиле колонка, на планшете+ три равные колонки, gap 15px */
export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 15,
		width: '100%',
	},
	tablet({
		gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	}),
]);

export const cardWrap = style({
	minWidth: 0,
	width: '100%',
});

export const card = style([
	{
		position: 'relative',
		width: '100%',
		height: 460,
		borderRadius: 20,
		overflow: 'hidden',
		backgroundColor: '#1a1a1a',
		boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.08), 0px 9px 24px rgba(0, 0, 0, 0.06)',
	},
]);

export const swiperRoot = style({
	width: '100%',
	height: '100%',
	position: 'absolute',
	left: 0,
	top: 0,
});

globalStyle(`${swiperRoot} .swiper-wrapper`, {
	height: '100%',
});

globalStyle(`${swiperRoot} .swiper-slide`, {
	height: '100%',
});

export const slideImageWrap = style({
	position: 'relative',
	width: '100%',
	height: '100%',
});

export const slideImage = style({
	objectFit: 'cover',
	width: '100%',
	height: '100%',
});

/** Подложка под текст — нижние 50% карточки, градиент + opacity + отражение по Y */
export const gradient = style({
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 0,
	height: '50%',
	pointerEvents: 'none',
	background: 'linear-gradient(180deg, #000000 58.65%, rgba(0, 0, 0, 0) 100%)',
	opacity: 0.8,
	WebkitTransform: 'matrix(1, 0, 0, -1, 0, 0)',
	transform: 'matrix(1, 0, 0, -1, 0, 0)',
	zIndex: 1,
	borderRadius: 'inherit',
});

export const content = style({
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 0,
	top: 0,
	zIndex: 2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	padding: '8px 12px 12px',
	pointerEvents: 'none',
});

export const contentInteractive = style({
	pointerEvents: 'auto',
});

const headingFeat = "'ss01' on, 'salt' on";

/** Заголовок карточки — Cera Condensed CY Bold, макет Figma */
export const title = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		/* Компактная высота строки — многострочный заголовок помещается в 460px без скролла */
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontFeatureSettings: headingFeat,
		color: vars.color.white,
		margin: 0,
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
]);

export const description = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 10,
		lineHeight: '12px',
		fontFeatureSettings: headingFeat,
		color: vars.color.white,
		margin: 0,
		marginTop: 10,
		marginBottom: 10,
		whiteSpace: 'pre-line',
	},
]);

/** Ряд под заголовком: слева `titleNote`, справа основной `subtitle` */
export const titleNoteRow = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	gap: 12,
	width: '100%',
	marginTop: 10,
	marginBottom: 0,
	boxSizing: 'border-box',
});

/** Короткая подпись слева (под заголовком) — жирный белый, макет Байкал */
export const titleNote = style({
	flex: '0 1 38%',
	minWidth: 0,
	margin: 0,
	fontFamily: vars.font.ApercuProRegular,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 10,
	lineHeight: '12px',
	fontFeatureSettings: headingFeat,
	color: vars.color.white,
	whiteSpace: 'pre-line',
});

export const descriptionColumn = style({
	flex: 1,
	minWidth: 0,
	margin: 0,
	fontFamily: vars.font.ApercuProRegular,
	fontStyle: 'normal',
	fontWeight: 400,
	fontSize: 10,
	lineHeight: '12px',
	fontFeatureSettings: headingFeat,
	color: vars.color.white,
	whiteSpace: 'pre-line',
});

/** Строка под описанием, выравнивание вправо («Никакого интернета.») */
export const subtitleClosing = style({
	margin: 0,
	marginTop: 8,
	marginBottom: 10,
	fontFamily: vars.font.ApercuProRegular,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 10,
	lineHeight: '12px',
	fontFeatureSettings: headingFeat,
	color: vars.color.white,
	textAlign: 'right',
	width: '100%',
});

export const line = style({
	height: 1,
	width: '100%',
	backgroundColor: vars.color.mustard,
	marginTop: 0,
	flexShrink: 0,
});

/** Если нет блока описания — отступ до линии */
export const lineAfterTitleOnly = style({
	marginTop: 28,
});

/** Строка «Весь день | цена» — Cera Condensed CY Bold, макет */
export const priceRow = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-end',
	gap: 8,
	marginTop: 3,
	flexShrink: 0,
});

export const priceText = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 13,
	lineHeight: '14px',
	display: 'flex',
	alignItems: 'flex-end',
	fontFeatureSettings: "'salt' on",
	color: vars.color.mustard,
});

export const priceStack = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: 4,
	marginTop: 3,
	flexShrink: 0,
});

/** Многострочный жёлтый футер — та же типографика, блочная строка */
export const priceStackLine = style([priceText, { display: 'block', width: '100%', alignSelf: 'stretch' }]);

/** Блок структурированных строк футера */
export const priceFooterRows = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	width: '100%',
	marginTop: 3,
	flexShrink: 0,
});

export const priceFooterPlain = style([
	priceText,
	{
		margin: 0,
		width: '100%',
		display: 'block',
	},
]);

/** Две колонки: слева / справа, сноски под основной строкой */
export const priceFooterTwoCols = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	gap: 12,
	width: '100%',
});

export const priceFooterColStart = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: 3,
	flex: 1,
	minWidth: 0,
});

export const priceFooterColEnd = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	textAlign: 'right',
	gap: 3,
	flex: 1,
	minWidth: 0,
});

export const priceFooterMain = style([
	priceText,
	{
		display: 'block',
		textAlign: 'inherit',
	},
]);

/** Сноска под подписью — белая, мельче */
export const priceFooterNoteLight = style({
	fontFamily: vars.font.ApercuProRegular,
	fontStyle: 'normal',
	fontWeight: 400,
	fontSize: 10,
	lineHeight: '12px',
	fontFeatureSettings: headingFeat,
	color: vars.color.white,
	display: 'block',
	textAlign: 'inherit',
	maxWidth: '100%',
});

/** Сноска жёлтая (акцент, как километраж у багги) */
export const priceFooterNoteAccent = style([
	priceFooterNoteLight,
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontWeight: 700,
		fontSize: 10,
		lineHeight: '12px',
		color: vars.color.mustard,
	},
]);

/** Три колонки: услуга | цена | длительность */
export const priceFooterThreeCols = style({
	display: 'grid',
	gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
	columnGap: 10,
	rowGap: 0,
	width: '100%',
	alignItems: 'start',
});

export const priceFooterThreeCellLeft = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: 3,
	minWidth: 0,
});

export const priceFooterThreeCellMid = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	gap: 3,
	justifySelf: 'center',
});

export const priceFooterThreeCellRight = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	textAlign: 'right',
	gap: 3,
	minWidth: 0,
	justifySelf: 'end',
});

export const navPrev = style([
	{
		position: 'absolute',
		left: 6,
		top: '38%',
		transform: 'translateY(-50%)',
		zIndex: 4,
		width: 36,
		height: 36,
		borderRadius: '50%',
		backgroundColor: vars.color.white,
		border: 'none',
		padding: 0,
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
		pointerEvents: 'auto',
	},
]);

export const navNext = style([
	navPrev,
	{
		left: 'auto',
		right: 6,
	},
]);

export const navIcon = style({
	display: 'block',
	color: vars.color.brand,
});

export const navHidden = style({
	display: 'none',
});
