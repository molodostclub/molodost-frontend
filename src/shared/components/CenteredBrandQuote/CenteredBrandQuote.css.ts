import { globalStyle, style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const block = style({
	width: '100%',
	maxWidth: 644,
	margin: '0 auto 42px',
	backgroundColor: vars.color.mainBackground,
	borderRadius: 14,
	textAlign: 'center',
	padding: '30px 0',
});

export const blockNoMarginBottom = style({
	marginBottom: 0,
	paddingBlock: 0
});

export const quoteInner = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1.05,
		letterSpacing: 0,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 35,
		lineHeight: 1,
	}),
]);

globalStyle(`${quoteInner} p`, {
	margin: 0,
	font: 'inherit',
});

export const footerBase = style({
	lineHeight: 1.2,
	letterSpacing: 0,
	textAlign: 'center',
	color: vars.color.brand,
	marginTop: 24,
	marginBottom: 0,
});

/** как на Манжерок — подпись Apercu */
export const footerApercu = style([
	footerBase,
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 13,
		lineHeight: 1,
	},
]);

/** вариант с Cera (например, Байкал / Коммерсантъ) */
export const footerCera = style([
	footerBase,
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 15,
		lineHeight: '20px',
		textTransform: 'none',
	},
	tablet({
		fontSize: 17,
		lineHeight: '22px',
	}),
]);
