import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style([
	{
		position: 'fixed',
		bottom: 16,
		left: 16,
		right: 16,
		zIndex: 1000,
		backgroundColor: vars.color.white,
		borderTop: `3px solid ${vars.color.brand}`,
		borderRadius: '0 0 14px 14px',
		padding: '16px 24px',
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '16px 32px',
		left: '50%',
		right: 'auto',
		transform: 'translateX(-50%)',
		maxWidth: 746,
		width: '100%',
		bottom: 24,
	}),
]);

export const textBlock = style({
	flex: 1,
});

export const text = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 13,
	lineHeight: '18px',
	color: vars.color.black,
});

export const textBold = style([
	text,
	{
		fontWeight: 700,
	},
]);

export const link = style({
	color: vars.color.brand,
	textDecoration: 'underline',
});

export const okButton = style({
	width: 44,
	height: 44,
	borderRadius: '50%',
	backgroundColor: vars.color.brand,
	color: vars.color.white,
	border: 'none',
	cursor: 'pointer',
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 16,
	flexShrink: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	':hover': {
		opacity: 0.9,
	},
});
