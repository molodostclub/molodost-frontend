import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const footer = style([
	{
		backgroundColor: vars.color.brand,
		padding: '24px 24px',
	},
	tablet({
		padding: '28px 40px',
	}),
]);

export const inner = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		margin: '0 auto',
	},
	tablet({
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		maxWidth: 1200,
		gap: 0,
	}),
]);

export const navColumn = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	margin: 0,
	padding: 0,
});

export const navLink = style({
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontSize: 26,
	lineHeight: '26px',
	color: vars.color.white,
	textTransform: 'uppercase',
	textDecoration: 'none',
	letterSpacing: 0,
	margin: 0,
	':hover': {
		opacity: 0.8,
	},
});

export const addressText = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 12,
	lineHeight: '16px',
	color: vars.color.white,
	margin: 0,
	maxWidth: '220px',
});

export const centerColumn = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	alignItems: 'center',
	alignSelf: 'center',
});

export const centerLink = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 36,
	lineHeight: '40px',
	color: vars.color.white,
	textTransform: 'uppercase',
	textDecoration: 'none',
	':hover': {
		opacity: 0.8,
	},
});

export const centerLinkBold = style([
	centerLink,
	{
		fontFamily: vars.font.CeraCondensedCYBold,
	},
]);

export const rightColumn = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 0,
		alignItems: 'center',
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
		minWidth: 280,
	}),
]);

/** Email + phone + legal links stacked; social icons sit to the right of this whole block */
export const rightContent = style([
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 0,
	},
	tablet({
		alignItems: 'center',
	}),
]);

/** Wrapper for email - centered per Figma, 10px gap to phone */
export const emailWrap = style({
	width: '100%',
	textAlign: 'center',
	marginBottom: 10,
});

export const emailLink = style({
	fontFamily: vars.font.ApercuProBold,
	fontSize: 14,
	lineHeight: '24px',
	color: vars.color.white,
	textTransform: 'uppercase',
	textDecoration: 'underline',
});


/** White pill button: 262×42px, red border, red icon + number (per Figma); 4px gap to legal links */
export const phonePill = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 12,
	width: 262,
	height: 42,
	backgroundColor: vars.color.white,
	border: `2px solid ${vars.color.brand}`,
	borderRadius: 21,
	padding: '0 20px',
	flexShrink: 0,
	textDecoration: 'none',
	marginBottom: 4,
	':hover': {
		opacity: 0.95,
	},
});

export const phoneIcon = style({
	width: 24,
	height: 24,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
});

export const phoneLink = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 36,
	lineHeight: 1,
	color: vars.color.brand,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
});

/** Social icons stacked vertically, to the right of entire content block (email + phone + links) */
export const socialIcons = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	flexShrink: 0,
});

export const socialIcon = style({
	width: 45,
	height: 45,
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',
});

/** Two columns of legal links below phone button, with vertical separator */
export const legalRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'stretch',
		gap: 0,
		justifyContent: 'center',
	}),
]);

/** Thin white vertical line between the two legal link columns (visible on desktop) */
export const legalSeparator = style([
	{
		display: 'none',
	},
	tablet({
		display: 'block',
		width: 1,
		minHeight: 32,
		backgroundColor: vars.color.white,
		margin: '0 16px',
		alignSelf: 'stretch',
	}),
]);

export const legalColumn = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 6,
});

export const legalColumnLeft = style([
	legalColumn,
	{ textAlign: 'right', alignItems: 'flex-end' },
]);

export const legalColumnRight = style([
	legalColumn,
	{ textAlign: 'left', alignItems: 'flex-start' },
]);

export const legalLink = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 12,
	lineHeight: '14px',
	color: vars.color.white,
	textTransform: 'uppercase',
	textDecoration: 'none',
	':hover': {
		textDecoration: 'underline',
	},
});
