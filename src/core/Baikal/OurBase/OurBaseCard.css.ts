import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const cardTitleFeatures = "'salt' on";
const cardTextFeatures = "'salt' on";

export const card = style({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
});

export const imageWrap = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '16 / 10',
		borderRadius: 14,
		overflow: 'hidden',
		boxShadow: '0px 9px 8px rgba(0, 0, 0, 0.1), 0px 24px 24px rgba(0, 0, 0, 0.12)',
	},
	tablet({
		aspectRatio: '4 / 3',
	}),
]);

export const image = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const title = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontFeatureSettings: cardTitleFeatures,
		color: vars.color.brand,
		margin: 0,
		marginTop: 26,
	},
	tablet({
		fontSize: 25,
		lineHeight: '25px',
	}),
]);

export const descriptionBlock = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 14,
	marginTop: 19,
});

export const descriptionParagraph = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: '20px',
		fontFeatureSettings: cardTextFeatures,
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
	}),
]);
