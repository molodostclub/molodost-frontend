import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 825,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 60,
	}),
]);

export const link = style({
	color: vars.color.brand,
});

export const buttonsRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginTop: '24px',
		marginBottom: '24px',
	},
	tablet({
		flexDirection: 'row',
		gap: '16px',
	}),
]);

export const iconCircle = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 36,
	height: 36,
	borderRadius: '50%',
	backgroundColor: vars.color.white,
	flexShrink: 0,
	overflow: 'hidden',
});

export const iconImage = style({
	objectFit: 'contain',
});

export const contactButton = style({
	display: 'inline-flex',
	alignItems: 'center',
	gap: 12,
	padding: '7px 19px 8px 10px',
	borderRadius: 40,
	backgroundColor: vars.color.white,
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
	fontFamily: vars.font.ApercuProBold,
	fontSize: 20,
	color: vars.color.black,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	':hover': {
		boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12)',
	},
});

export const phoneButton = style([
	contactButton,
	{
		color: vars.color.brand,
		fontWeight: 700,
	},
]);
