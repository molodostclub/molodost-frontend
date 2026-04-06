import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const halfWidthInTablet = style([{ width: '100%' }, tablet({ width: '50%' })]);

export const imageWrapper = style([{ borderRadius: 15, maxWidth: 'calc(100vw - 60px)' }, tablet({ borderRadius: 25 })]);

export const imageWrapperGrid = style([
	imageWrapper,
	{
		display: "grid",
		gridTemplateColumns: "1fr",
		gap: 20
	},
	tablet({
		gridTemplateColumns: "1fr 1fr",
	}),
]);

export const image = style({
	// @ts-ignore
	position: 'static !important',
	width: 'auto',
	maxWidth: '100%',
	height: 'auto',
	minHeight: 315,
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const imageContain = style({
	objectFit: 'contain',
});

export const border = style({
	height: 1,
	width: '100%',
	backgroundColor: vars.color.brand,
});

export const mySwiperSlide = style({
	height: 'auto',
});

export const card = style([
	{
		backgroundColor: vars.color.white,
		filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.13))',
		borderRadius: 14,
		padding: '24px 15px 24px 15px',
		maxWidth: '100%',
		alignSelf: 'center',
		display: 'block',
	},
	tablet({
		alignSelf: 'flex-start',
		minWidth: 300,
		marginTop: 0,
		marginLeft: 60,
	}),
]);

export const cardTitle = style({
	fontSize: 20,
	lineHeight: '1.2',
	textTransform: 'uppercase',
	fontFamily: vars.font.CeraCondensedCYBold,
	color: vars.color.black,
});

export const cardTitleAccented = style([
	cardTitle,
	{
		color: vars.color.brand,
	},
]);

export const cardDescription = style({
	fontSize: 14,
	lineHeight: '1.2',
	fontFamily: vars.font.CeraCompactCYRegular,
	color: vars.color.black,
	marginTop: 10,
});

export const wrapper = style([
	{
		width: '100%',
		overflow: 'hidden',
		position: 'relative',
		borderRadius: 14,
		marginBottom: '70px',
	},
	tablet({
		maxWidth: '1000px',
		margin: '0 auto',
		borderRadius: 14,
		marginBottom: '80px',
	}),
]);

// Изображение
export const slideImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 14,
});

// Swiper-обёртки для стрелок и пагинации
export const swiper = style({});

export const mySwiper = style({
	borderRadius: 14,
});

export const navButton = style([
	{
		width: '35px',
		height: '35px',
		borderRadius: '50%',
		backgroundColor: vars.color.white,
		display: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		zIndex: 10,
		cursor: 'pointer',
		color: vars.color.brand,
		fontSize: '16px',
	},
	tablet({
		display: 'flex',
	}),
]);

export const navPrev = style([navButton, { left: '27px' }]);
export const navNext = style([navButton, { right: '27px' }]);

export const pagination = style({
	display: 'flex !important',
	justifyContent: 'center !important',
	marginTop: '16px !important',
	gap: '10px !important',
	position: 'relative',
	top: '0 !important',
});

globalStyle('.swiper-pagination-bullet', {
	width: '9px !important',
	height: '9px !important',
	borderRadius: '50% !important',
	backgroundColor: `${vars.color.gray} !important`,
	cursor: 'pointer !important',
	opacity: '1 !important',
	transition: 'background-color 0.3s ease !important',
});

globalStyle('.swiper-pagination-bullet-active', {
	backgroundColor: `${vars.color.brand} !important`,
});

export const accent = style({
	color: vars.color.brand,
});

export const pageContainerCustom = style([
	{
		boxSizing: 'border-box',
		width: '100%',
	},
]);

/** Страница Байкала: переопределение Container на 825px (вместо 746) */
export const container825 = style([
	{},
	tablet({
		maxWidth: 825,
	}),
]);

/** Full-bleed внутри узкого Container — блок «Как мы путешествуем» */
export const howWeTravelBaikalOuter = style({
	width: '100vw',
	maxWidth: '100vw',
	marginLeft: 'calc(50% - 50vw)',
	marginRight: 'calc(50% - 50vw)',
	boxSizing: 'border-box',
});

/** Ровно 28px от цитаты до заголовка (без лишних indent + margin цитаты) */
export const howWeTripAfterQuote = style({
	marginTop: 28,
});

export const blockContainer = style([
	{
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: 'calc(100vw - 60px)',
	},
	tablet({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: 'calc(100vw - 60px)',
	}),
]);

/** Обёртка, выходящая за пределы Container (746px) — позволяет показать 825px */
export const block825Outer = style([
	{
		width: '100vw',
		maxWidth: '100vw',
		marginLeft: 'calc(50% - 50vw)',
		marginRight: 'calc(50% - 50vw)',
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 30,
		paddingRight: 30,
	},
	tablet({
		paddingLeft: 0,
		paddingRight: 0,
	}),
]);

/** Турбюро и Благодать — ширина контента 825px (внутри block825Outer) */
export const blockContainer825 = style([
	blockContainer,
	{
		width: '100%',
	},
	tablet({
		maxWidth: 825,
	}),
]);

export const foodItemDescription = style([
	{
		color: vars.color.gray,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 14,
		lineHeight: 1.1,
	},
	tablet({
		color: vars.color.gray,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 18,
		lineHeight: 1.1,
	}),
]);

export const flatsTitle = style([
	{
		marginBottom: 30,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 25,
		lineHeight: 1,
		color: vars.color.brand,
		textTransform: 'uppercase',
	},
	tablet({
		marginBottom: 30,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 25,
		lineHeight: 1,
		color: vars.color.brand,
		textTransform: 'uppercase',
	}),
]);

/** Приписка под «в гэрах»: префикс бренд + основной текст чёрный, Cera uppercase */
export const gersNoteLine = style([
	{
		margin: 0,
		marginTop: 0,
		marginBottom: 24,
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.35,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 20,
		lineHeight: 1.3,
		marginBottom: 28,
	}),
]);

export const gersNotePrefix = style({
	color: vars.color.brand,
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 700,
});

export const biletPrice = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 18,
	lineHeight: 1.1,
	color: vars.color.gray,
	display: 'flex',
	gap: 14,
});

export const housingBlock = style([
	{
		marginLeft: -15,
	},
	tablet({
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'flex-start',
		columnGap: 15,
		rowGap: 40,
		maxWidth: 890,
		margin: '0 auto 80px',
		width: '100%',
	}),
]);

export const biletPriceDescription = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
		lineHeight: 1.1,
		color: vars.color.black,
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 18,
		lineHeight: 1.1,
		color: vars.color.black,
	}),
]);

export const bilet = style({
	maxWidth: 380,
});

export const attention = style({
	fontFamily: vars.font.CeraCondensedCYBold,
});

export const attentionRed = style([
	{
		color: vars.color.brand,
	},
	tablet({}),
]);

/** Финальный блок — партнёры, телефон, ссылка на реквизиты */
export const finalBlock = style({
	width: '100%',
});

/** Финальный блок — mobile 25px, tablet 40px */
export const finalBlockText = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: 25,
		lineHeight: '28px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'salt' on",
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 40,
		lineHeight: '42px',
	}),
]);

export const finalBlockLinks = style([
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 24,
	},
	tablet({
		marginTop: 32,
	}),
]);

/** Ссылка НАШИ РЕКВИЗИТЫ — mobile 22px, tablet 30px */
export const finalBlockLink = style([
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 22,
		lineHeight: '26px',
		textTransform: 'uppercase',
		color: vars.color.brand,
		textDecoration: 'none',
		transition: 'opacity 0.2s ease',
		':hover': {
			opacity: 0.8,
		},
	},
	tablet({
		fontSize: 30,
		lineHeight: '30px',
	}),
]);

export const apercu16 = style({
	fontSize: 16,
	lineHeight: 1.1,
	fontFamily: vars.font.ApercuProRegular,
});

export const gridContainer = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '20px',
	}),
]);

export const column = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
});

export const photo = style([
	{
		width: '100%',
		height: '315px',
		objectFit: 'cover',
		borderRadius: 14,
		display: 'block',
	},
	tablet({
		height: 'auto',
	}),
]);

export const galleryBlock = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
});

export const row = style({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	gap: '20px',
});

export const spaPhoto = style([
	{
		height: 315,
		width: '100%',
		borderRadius: 14,
		objectFit: 'cover',
		display: 'block',
	},
	tablet({
		height: '280px',
		width: 'auto',
	}),
]);

/** БАННЫЙ КОМПЛЕКС «БЛАГОДАТЬ» — Cera 700, mobile 25px, tablet 40px */
export const blagodatHeading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 25,
		lineHeight: '28px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'ss01' on, 'salt' on",
		color: vars.color.black,
		margin: 0,
		marginBottom: 24,
	},
	tablet({
		fontSize: 40,
		lineHeight: '40px',
	}),
]);

/** Банный комплекс «Благодать» — цены (ЦЕРЕМОНИЯ МОЛОДОСТЬ, МАССАЖ) */
export const blagodatPricing = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const blagodatPricingItem = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
});

export const blagodatPricingLabel = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.2,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const blagodatPricingPrice = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.2,
		color: vars.color.brand,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const blagodatPricingNote = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 14,
	lineHeight: 1.2,
	color: vars.color.gray,
});

/** Галерея «Благодать»: row1 — 2 колонки 50/50, row2 — 3 колонки (средняя шире) */
export const blagodatGalleryBlock = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const blagodatGalleryRow1 = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridAutoRows: 'minmax(280px, 1fr)',
		gap: 20,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
	}),
]);

export const blagodatGalleryRow2 = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridAutoRows: 'minmax(280px, 1fr)',
		gap: 20,
	},
	tablet({
		gridTemplateColumns: '1fr 1.5fr 1fr',
	}),
]);

export const blagodatPhoto = style({
	width: '100%',
	height: '100%',
	borderRadius: 14,
	objectFit: 'cover',
	display: 'block',
});

export const blagodatPhotoWide = style([
	blagodatPhoto,
	{
		objectPosition: 'center',
	},
]);

/** Сруб Декабристов — заголовок Cera 700, mobile 25px, tablet 40px */
export const dekabristsHeading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 25,
		lineHeight: 28,
		textTransform: 'uppercase',
		fontFeatureSettings: "'salt' on",
		color: vars.color.black,
		margin: 0,
		marginBottom: 24,
	},
	tablet({
		fontSize: 40,
		lineHeight: 1,
	}),
]);

/** Подзаголовок Cera 700, mobile 18px, tablet 24px */
export const dekabristsSubheading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 18,
		lineHeight: '22px',
		color: vars.color.black,
		margin: 0,
		marginBottom: 16,
	},
	tablet({
		fontSize: 24,
		lineHeight: '26px',
	}),
]);

/** Текст Cera 400, mobile 18px, tablet 24px */
export const dekabristsText = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 18,
		lineHeight: '22px',
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 24,
		lineHeight: '26px',
	}),
]);

/** Жирное заглавие до двоеточия (Ресепшен:, Каминная:) */
export const dekabristsLabel = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 700,
});

/** Блок Массажный кабинет + Караоке — 12px сверху */
export const dekabristsLowerText = style([
	dekabristsText,
	{
		marginTop: 12,
	},
]);

/** Секция ЧТО ВНУТРИ? Cera 700, mobile 18px, tablet 24px */
export const dekabristsSectionTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 18,
		lineHeight: '22px',
		textTransform: 'uppercase',
		color: vars.color.black,
		margin: 0,
		marginTop: 40,
		marginBottom: 24,
	},
	tablet({
		fontSize: 24,
		lineHeight: '26px',
	}),
]);


/** Сруб — сетка 50/50 */
export const dekabristsRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 40,
	}),
]);

export const dekabristsCol = style({
	flex: '1 1 50%',
	minWidth: 0,
});

/** Картинки сруба — скругление 25px */
export const dekabristsPhoto = style({
	width: '100%',
	height: 'auto',
	borderRadius: 14,
	objectFit: 'cover',
	display: 'block',
});

/** Дом звука и тишины — заголовок, mobile 25px, tablet 40px */
export const zvukHeading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 25,
		lineHeight: '28px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'ss01' on, 'salt' on",
		color: vars.color.black,
		margin: 0,
		marginBottom: 24,
	},
	tablet({
		fontSize: 40,
		lineHeight: '40px',
	}),
]);

/** Дом звука — описание, mobile 18px, tablet 24px */
export const zvukDescription = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 18,
		lineHeight: '22px',
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 24,
		lineHeight: '26px',
	}),
]);

/** Дом звука — строка цены (название слева, цена справа) */
export const zvukPriceRow = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: 8,
	marginBottom: 0,
});

export const zvukPriceLabel = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.2,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const zvukPriceValue = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.2,
		color: vars.color.brand,
	},
	tablet({
		fontSize: 18,
	}),
]);

/** Дом звука — весь блок в 2 колонки (под заголовком) */
export const zvukTwoCol = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 20,
		alignItems: 'stretch',
	}),
]);

/** Колонка 1: текст сверху, фото 2 и 3 внизу, одинакового размера */
export const zvukCol1 = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const zvukPhotosRow = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 20,
		marginTop: 'auto',
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
	}),
]);

/** Обёртка для фото 2 и 3 — aspect-ratio задаёт размер без фиксированной высоты */
export const zvukPhotoWrap = style({
	position: 'relative',
	width: '100%',
	aspectRatio: '4 / 5',
	borderRadius: 14,
	overflow: 'hidden',
});

/** Фото в ряду 2 и 3 — заполняют обёртку */
export const zvukPhotoInRow = style({
	width: '100%',
	height: '100%',
	borderRadius: 14,
	objectFit: 'cover',
	display: 'block',
});

/** Колонка 2: фото 1 сверху, фото 4 снизу */
export const zvukCol2 = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const zvukPhoto = style({
	width: '100%',
	height: 'auto',
	borderRadius: 14,
	objectFit: 'cover',
	display: 'block',
});

export const dekabristsPhotoGrid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 20,
		marginTop: 24,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
	}),
]);

/** ПЛЯЖНЫЙ КЛУБ РОЗОВЫЙ ФЛАМИНГО — заголовок, mobile 25px, tablet 40px */
export const flamingoHeading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 25,
		lineHeight: '28px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'ss01' on, 'salt' on",
		color: vars.color.black,
		margin: 0,
		marginBottom: 24,
	},
	tablet({
		fontSize: 40,
		lineHeight: '40px',
	}),
]);

/** Фламинго — описание Cera 400, mobile 18px, tablet 24px */
export const flamingoDescription = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 18,
		lineHeight: '22px',
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 24,
		lineHeight: '26px',
	}),
]);

/** Фламинго — обёртка: flex column, gap 20 */
export const flamingoGrid = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
	marginTop: 24,
});

/** Верхняя часть — на планшете 3-колоночный грид (лев 3 фото | hero | прав 2 фото), макс. высота 505px */
export const flamingoGridTop = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr 1fr 1fr',
		gap: 20,
		alignItems: 'stretch',
		height: 505,
		maxHeight: 505,
	}),
]);

/** Левая колонка — 3 фото вертикально */
export const flamingoColLeft = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	tablet({
		gridColumn: 1,
		gridRow: '1 / 4',
	}),
]);

/** Hero по центру — занимает все 3 ряда, заполняет высоту */
export const flamingoColCenter = style([
	{
		display: 'flex',
	},
	tablet({
		gridColumn: 2,
		gridRow: '1 / 4',
		minHeight: 0,
		alignSelf: 'stretch',
	}),
]);

/** Правая колонка — 2 фото, по высоте равна левой и центру */
export const flamingoColRight = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	tablet({
		gridColumn: 3,
		gridRow: '1 / 4',
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	}),
]);

/** Нижний ряд — 2 широких фото */
export const flamingoGridBottom = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 20,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
		gap: 20,
	}),
]);

/** Обёртка для фото — aspect-ratio 4/5 */
export const flamingoPhotoWrap = style({
	position: 'relative',
	width: '100%',
	aspectRatio: '4 / 5',
	borderRadius: 14,
	overflow: 'hidden',
});

/** Обёртка для фото в правой колонке — на планшете flex: 1, делят высоту пополам */
export const flamingoPhotoWrapRight = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '4 / 5',
		borderRadius: 14,
		overflow: 'hidden',
	},
	tablet({
		flex: 1,
		minHeight: 0,
		aspectRatio: 'auto',
	}),
]);

/** Hero — на мобиле aspect-ratio, на планшете заполняет высоту грид-ячейки */
export const flamingoPhotoHeroWrap = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '3 / 5',
		borderRadius: 14,
		overflow: 'hidden',
	},
	tablet({
		flex: 1,
		minHeight: 0,
		aspectRatio: 'auto',
	}),
]);

/** Нижние широкие фото */
export const flamingoPhotoWideWrap = style({
	position: 'relative',
	width: '100%',
	aspectRatio: '16 / 9',
	borderRadius: 14,
	overflow: 'hidden',
});

/** Фото в гриде фламинго */
export const flamingoPhoto = style({
	width: '100%',
	height: '100%',
	borderRadius: 14,
	objectFit: 'cover',
	display: 'block',
});
