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

export const link = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 24,
	lineHeight: '45px',
	letterSpacing: 0,
	color: vars.color.brand,
	textTransform: 'uppercase',
	textDecoration: 'none',
	fontWeight: 500,
	':hover': {
		textDecoration: 'underline',
	},
});

export const separator = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 24,
	lineHeight: '45px',
	letterSpacing: 0,
	color: vars.color.brand,
	margin: '0 6px',
	userSelect: 'none',
	fontWeight: 500,
});

export const current = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 24,
	lineHeight: '45px',
	letterSpacing: 0,
	color: vars.color.brand,
	textTransform: 'uppercase',
	fontWeight: 500,
});
