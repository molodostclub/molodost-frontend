import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const heading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 28,
		lineHeight: 1.2,
		textTransform: 'uppercase',
	},
	tablet({
		fontSize: 36,
		lineHeight: 48,
	}),
]);

export const subtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 16,
		textTransform: 'uppercase',
		color: vars.color.brand,
		textAlign: 'center',
	},
]);

export const description = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 18,
		lineHeight: 24,
	},
]);

export const imageWrapper = style([
	{
		position: 'relative',
		width: '100%',
		height: 300,
		borderRadius: 14,
		overflow: 'hidden',
		marginTop: 24,
	},
	tablet({
		height: 450,
	}),
]);

export const image = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const gallery = style([
	{
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: 12,
		marginTop: 24,
	},
	tablet({
		gridTemplateColumns: 'repeat(3, 1fr)',
	}),
]);

export const ctaButton = style({
	background: vars.color.brand,
	color: vars.color.white,
	padding: '14px 32px',
	borderRadius: 40,
	fontFamily: vars.font.CeraCondensedCYMedium,
	textTransform: 'uppercase',
	textDecoration: 'none',
	display: 'inline-block',
	marginTop: 24,
});
