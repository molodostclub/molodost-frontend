import { style } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const halfWidthInTablet = style([{ width: '100%' }, tablet({ width: '50%' })]);

export const imageWrapper = style([{ borderRadius: 15, maxWidth: 'calc(100vw - 60px)' }, tablet({ borderRadius: 25 })]);

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
		borderRadius: '14px',
		marginBottom: '70px',
	},
	tablet({
		maxWidth: '1000px',
		margin: '0 auto',
		borderRadius: '14px',
		marginBottom: '80px',
	}),
]);

// Изображение
export const slideImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: '14px',
});

// Swiper-обёртки для стрелок и пагинации
export const swiper = style({});

export const mySwiper = style({
	borderRadius: '14px',
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
	display: 'flex',
	justifyContent: 'center',
	marginTop: '16px',
	gap: '10px',
	position: 'relative',
	top: '0 !important',
});

export const bullet = style({
	width: '9px',
	height: '9px',
	borderRadius: '50%',
	backgroundColor: vars.color.gray,
	cursor: 'pointer',
	opacity: 1,
});

export const bulletActive = style({
	backgroundColor: vars.color.brand,
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

export const apercu16 = style({
	fontSize: 16,
	lineHeight: 1.1,
	fontFamily: vars.font.ApercuProRegular,
});

export const mobileHidden = style([
	{
		display: 'none !important',
	},
	tablet({
		display: 'block !important',
	}),
]);

export const fullWidthPhoto = style([
	{
		width: '100%',
		height: '315px',
		objectFit: 'cover',
		borderRadius: '14px',
		display: 'block',
	},
	tablet({
		height: '500px',
	}),
]);

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
		borderRadius: '14px',
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
		height: '315px',
		width: '100%',
		borderRadius: '14px',
		objectFit: 'cover',
		display: 'block',
	},
	tablet({
		height: '280px',
		width: 'auto',
	}),
]);
