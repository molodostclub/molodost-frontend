import { style } from '@vanilla-extract/css';
import { vars } from '@styles';

export const packageBox = style({
	border: `2px solid ${vars.color.brand}`,
	borderRadius: 15,
	padding: 24,
	marginBottom: 24,
	textAlign: 'center',
});

export const packageHeader = style({
	fontFamily: vars.font.ApercuProBold,
	fontSize: 20,
	lineHeight: 1.4,
	color: vars.color.brand,
	textTransform: 'uppercase',
	marginBottom: 20,
	margin: 0,
});

export const packagePrice = style({
	fontFamily: vars.font.ApercuProBold,
	fontSize: 20,
	lineHeight: 1.5,
	color: vars.color.black,
	textTransform: 'uppercase',
	marginBottom: 12,
	margin: 0,
	selectors: {
		'&:last-of-type': { marginBottom: 0 },
	},
});

export const packageIncluded = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 20,
	lineHeight: 1.5,
	color: vars.color.black,
	textTransform: 'none',
	marginTop: 24,
	marginBottom: 0,
	textAlign: 'center',
});
