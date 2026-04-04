import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const breadcrumb = style([
	{
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '0',
		padding: '16px 30px 0 30px',
	},
	tablet({
		maxWidth: 1024,
		margin: '0 auto',
	}),
]);

export const link = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 12,
		lineHeight: '14px',
		letterSpacing: 0,
		color: vars.color.brand,
		textTransform: 'uppercase',
		textDecoration: 'none',
		display: 'inline-flex',
		alignItems: 'center',
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 24,
		lineHeight: '45px',
		fontWeight: 500,
		display: 'inline',
	}),
	{
		':hover': {
			textDecoration: 'underline',
		},
	},
]);

export const separator = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 12,
		lineHeight: '14px',
		letterSpacing: 0,
		color: vars.color.brand,
		margin: '0 6px',
		userSelect: 'none',
		display: 'inline-flex',
		alignItems: 'center',
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 24,
		lineHeight: '45px',
		fontWeight: 500,
		display: 'inline',
	}),
]);

export const current = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 12,
		lineHeight: '14px',
		letterSpacing: 0,
		color: vars.color.brand,
		textTransform: 'uppercase',
		display: 'inline-flex',
		alignItems: 'center',
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 24,
		lineHeight: '45px',
		fontWeight: 500,
		display: 'inline',
	}),
]);
