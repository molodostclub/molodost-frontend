import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 825,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const headingWrapper = style({
	marginTop: 0,
	marginBottom: 12,
});

export const subheading = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 24,
		lineHeight: 1.3,
		color: vars.color.black,
		marginTop: 16,
		marginBottom: 0,
	},
	tablet({
		fontSize: 36,
		lineHeight: '45px',
		marginTop: 20,
	}),
]);

export const paragraph = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
		lineHeight: 1.4,
		color: vars.color.black,
		marginTop: 12,
		marginBottom: 0,
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
		marginTop: 16,
	}),
]);

export const bold = style({
	fontFamily: vars.font.ApercuProBold,
});

export const accent = style({
	color: vars.color.brand,
});

export const accentLink = style([
	accent,
	{
		textDecoration: 'underline',
		cursor: 'pointer',
	},
]);

export const list = style({
	listStyle: 'none',
	paddingLeft: 0,
	marginTop: 8,
	marginBottom: 0,
});

export const listItem = style([
	{
		position: 'relative',
		paddingLeft: 24,
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
		lineHeight: 1.4,
		color: vars.color.black,
		marginTop: 8,
		':first-child': {
			marginTop: 0,
		},
		'::before': {
			content: '""',
			position: 'absolute',
			left: 0,
			top: '0.5em',
			width: 8,
			height: 8,
			borderRadius: '50%',
			backgroundColor: vars.color.brand,
		},
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
	}),
]);

export const cardsGrid = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		marginTop: 32,
	},
	tablet({
		marginTop: 48,
	}),
]);
