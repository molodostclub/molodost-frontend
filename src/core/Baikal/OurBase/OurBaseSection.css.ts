import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const headingFeatures = "'ss01' on, 'salt' on";
const introFeatures = "'ss01' on, 'salt' on";

export const section = style({
	marginTop: 42,
});

export const heading = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: 30,
		lineHeight: '32px',
		textTransform: 'uppercase',
		fontFeatureSettings: headingFeatures,
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 50,
		lineHeight: '45px',
	}),
]);

export const intro = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: '20px',
		fontFeatureSettings: introFeatures,
		color: vars.color.black,
		margin: 0,
		marginTop: 15,
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
	}),
]);

export const accent = style({
	color: vars.color.brand,
});

export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		rowGap: 50,
		columnGap: 28,
		marginTop: 68,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
	}),
]);
