import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const halfWidthInTablet = style([{ width: '100%' }, tablet({ width: '50%' })]);

export const imageWrapper = style([{ borderRadius: 15 }, tablet({ borderRadius: 25 })]);

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

export const mapGrid = style([
	{
		display: 'flex',
		flexDirection: 'column-reverse',
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: 'auto 500px',
		gap: 20,
	}),
]);

export const foodGrid = style([
	{
		display: 'flex',
		flexDirection: 'column-reverse',
		rowGap: 40,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 20,
	}),
]);

export const mapList = style([
	{
		marginTop: 20,
	},
	tablet({
		display: 'flex',
		flexDirection: 'column',
		listStyle: 'none',
		padding: 0,
		marginTop: 0,
	}),
]);

export const foodColumn = style([
	{ marginTop: 30 },
	tablet({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}),
]);

export const mapListItem = style([
	{
		minHeight: 76,
		display: 'flex',
		':last-child': {
			marginBottom: 0,
		},
		gap: 12,
	},
	tablet({
		minHeight: 86,
		display: 'flex',
		':last-child': {
			marginBottom: 0,
		},
	}),
]);

export const mapListNumber = style([
	{
		fontSize: 16,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 22,
		minWidth: 22,
		height: 26,
		background: vars.color.brand,
		color: vars.color.white,
		fontFamily: vars.font.ApercuProRegular,
	},
	tablet({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 30,
		minWidth: 30,
		height: 40,
		background: vars.color.brand,
		color: vars.color.white,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 20,
	}),
]);

export const mapListText = style([
	{
		fontSize: 16,
		fontFamily: vars.font.ApercuProBold,
		lineHeight: 1,
		color: vars.color.black,
		display: 'flex',
		flexDirection: 'column',
	},
	tablet({
		marginLeft: 12,
		fontFamily: vars.font.ApercuProBold,
		fontSize: 18,
		lineHeight: 1,
		color: vars.color.black,
		display: 'flex',
		flexDirection: 'column',
	}),
]);

export const mapListDescription = style([
	{
		marginTop: 6,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
	},
	tablet({
		marginTop: 7,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
	}),
]);

export const foodPrices = style([
	{
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '200px',
	},
	tablet({
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '200px',
	}),
]);

export const foodItem = style([
	{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	tablet({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}),
]);

export const foodRow = style([
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tablet({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}),
]);

export const foodRowGap = style([
	{
		display: 'flex',
		flexDirection: 'row',
		gap: 16,
	},
	tablet({
		display: 'flex',
		flexDirection: 'row',
		gap: 16,
	}),
]);

export const foodItemTitle = style([
	{
		color: vars.color.black,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.1,
		textTransform: 'uppercase',
	},
	tablet({
		color: vars.color.black,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1.1,
		textTransform: 'uppercase',
	}),
]);

export const foodItemPrice = style([
	{
		color: vars.color.black,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		lineHeight: 1.1,
	},
	tablet({
		color: vars.color.black,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1.1,
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

export const list = style({
	marginLeft: 20,
});
export const listItem = style({
	marginBottom: 20,
	':last-child': {
		marginBottom: 0,
	},
});

export const priceItem = style([
	{
		width: '50%',
		maxWidth: 'calc(50% - 10px)',
	},
	tablet({
		maxWidth: 400,
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
		display: "flex",
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
