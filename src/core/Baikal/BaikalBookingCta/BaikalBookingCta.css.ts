import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const ceraMedium = {
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontStyle: 'normal' as const,
	fontWeight: 500,
	fontFeatureSettings: "'ss01' on, 'salt' on",
	textTransform: 'uppercase' as const,
};

export const root = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	marginTop: 40,
});

export const title = style([
	ceraMedium,
	{
		margin: 0,
		color: vars.color.brand,
		fontSize: 22,
		lineHeight: 1,
		textAlign: 'center',
		maxWidth: 920,
	},
	tablet({
		fontSize: 35,
		lineHeight: '35px',
	}),
]);

export const titleLine = style({
	display: 'block',
});

export const pill = style([
	{
		marginTop: 28,
		display: 'inline-flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16,
		padding: '14px 24px',
		background: vars.color.white,
		borderRadius: 80,
		boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
	},
	tablet({
		marginTop: 32,
		padding: '18px 32px',
		gap: 20,
	}),
]);

export const messengers = style({
	display: 'flex',
	alignItems: 'center',
	gap: 12,
});

export const iconLink = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	lineHeight: 0,
	flexShrink: 0,
	':focus-visible': {
		outline: `2px solid ${vars.color.blue}`,
		outlineOffset: 4,
		borderRadius: 8,
	},
});

export const phoneLink = style([
	ceraMedium,
	{
		color: vars.color.blue,
		fontSize: 26,
		lineHeight: '30px',
		textAlign: 'right',
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'flex-end',
		whiteSpace: 'nowrap',
		':hover': {
			opacity: 0.88,
		},
	},
	tablet({
		fontSize: 36.12,
		lineHeight: '33px',
	}),
]);
