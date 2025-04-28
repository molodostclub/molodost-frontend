import { style, styleVariants } from '@vanilla-extract/css';

import { pageContent, tablet, uikit, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 825,
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

export const subtitle = style([uikit.pageSubtitle, { marginBottom: 0, marginTop: 70, fontSize: 26 }]);

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
