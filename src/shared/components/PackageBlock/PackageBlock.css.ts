import { style } from '@vanilla-extract/css';
import { vars } from '@styles';
import { tablet } from '@styles';

export const packageBox = style([
	{
		border: `2px solid ${vars.color.brand}`,
		borderRadius: 15,
		padding: 16,
		marginBottom: 20,
		textAlign: 'center',
		boxSizing: 'border-box',
		maxWidth: '100%',
	},
	tablet({ padding: 24, marginBottom: 24 }),
]);

export const packageHeader = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontSize: 16,
		lineHeight: 1.4,
		color: vars.color.brand,
		textTransform: 'uppercase',
		marginBottom: 12,
		margin: 0,
	},
	tablet({ fontSize: 20, marginBottom: 20 }),
]);

export const packagePrice = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontSize: 16,
		lineHeight: 1.5,
		color: vars.color.black,
		textTransform: 'uppercase',
		marginBottom: 12,
		margin: 0,
		selectors: {
			'&:last-of-type': { marginBottom: 0 },
		},
	},
	tablet({ fontSize: 20 }),
]);

export const packageIncluded = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
		lineHeight: 1.5,
		color: vars.color.black,
		textTransform: 'none',
		marginTop: 16,
		marginBottom: 0,
		textAlign: 'center',
	},
	tablet({ fontSize: 20, marginTop: 24 }),
]);
