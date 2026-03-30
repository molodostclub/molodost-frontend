import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const footer = style([
	{
		backgroundColor: vars.color.brand,
		padding: '12px 10px',
	},
	tablet({
		padding: '28px 40px',
	}),
]);

export const inner = style([
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		gap: 8,
		margin: '0 auto',
		maxWidth: '100%',
		width: '100%',
		boxSizing: 'border-box',
	},
	tablet({
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1.3fr",
		maxWidth: 900,
		gap: 0,
	}),
]);

export const navColumn = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: '2px',
		margin: 0,
		padding: 0,
		flex: '0 1 auto',
		minWidth: 0,
		maxWidth: '26%',
	},
	tablet({
		gap: '4px',
		maxWidth: 'none',
	}),
]);

export const navLink = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontSize: 13,
		lineHeight: '13px',
		color: vars.color.white,
		textTransform: 'uppercase',
		textDecoration: 'none',
		letterSpacing: 0,
		margin: 0,
		':hover': {
			opacity: 0.8,
		},
	},
	tablet({
		fontSize: 26,
		lineHeight: '26px',
	}),
]);

export const addressText = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 8,
		lineHeight: '10px',
		color: vars.color.white,
		margin: 0,
		marginTop: 6,
		maxWidth: '100%',
	},
	tablet({
		fontSize: 12,
		lineHeight: '16px',
		marginTop: 0,
		maxWidth: '220px',
	}),
]);

export const centerColumn = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
		alignItems: 'flex-start',
		alignSelf: 'flex-start',
		flex: '0 1 auto',
		minWidth: 0,
		maxWidth: '24%',
	},
	tablet({
		gap: 4,
		alignItems: 'center',
		alignSelf: 'center',
		maxWidth: 'none',
	}),
]);

export const centerLink = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 11,
		lineHeight: '12px',
		color: vars.color.white,
		textTransform: 'uppercase',
		textDecoration: 'none',
		':hover': {
			opacity: 0.8,
		},
	},
	tablet({
		fontSize: 36,
		lineHeight: '40px',
	}),
]);

export const centerLinkBold = style([
	centerLink,
	{
		fontFamily: vars.font.CeraCondensedCYBold,
	},
]);

export const rightColumn = style([
	{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		gap: 6,
		flex: '1 1 auto',
		minWidth: 0,
	},
	tablet({
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
		alignItems: 'flex-end',
		gap: 0,
		flex: '1 1 auto',
		minWidth: 0,
		maxWidth: '100%',
	},
	tablet({
		alignItems: 'center',
	}),
]);

/** Wrapper for email - centered per Figma, 10px gap to phone */
export const emailWrap = style([
	{
		width: '100%',
		textAlign: 'right',
		marginBottom: 6,
	},
	tablet({
		marginBottom: 10,
	}),
]);

export const emailLink = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontSize: 7,
		lineHeight: '10px',
		color: vars.color.white,
		textTransform: 'uppercase',
		textDecoration: 'underline',
		wordBreak: 'break-all',
	},
	tablet({
		fontSize: 14,
		lineHeight: '24px',
		wordBreak: 'normal',
	}),
]);

/** White pill button */
export const phonePill = style([
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 6,
		width: '100%',
		maxWidth: 200,
		height: 32,
		backgroundColor: vars.color.white,
		border: `2px solid ${vars.color.brand}`,
		borderRadius: 16,
		padding: '0 8px',
		flexShrink: 0,
		textDecoration: 'none',
		marginBottom: 4,
		boxSizing: 'border-box',
		':hover': {
			opacity: 0.95,
		},
		alignSelf: 'flex-end',
	},
	tablet({
		gap: 12,
		width: 262,
		maxWidth: 'none',
		height: 42,
		borderRadius: 21,
		padding: '0 20px',
	}),
]);

export const phoneIcon = style([
	{
		width: 16,
		height: 16,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
	},
	tablet({
		width: 24,
		height: 24,
	}),
]);

/** Next/Image: визуальный размер иконки телефона */
export const phoneIconImage = style([
	{
		width: 16,
		height: 16,
		objectFit: 'contain',
	},
	tablet({
		width: 24,
		height: 24,
	}),
]);

export const phoneLink = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 13,
		lineHeight: 1,
		color: vars.color.brand,
		textDecoration: 'none',
		whiteSpace: 'nowrap',
	},
	tablet({
		fontSize: 36,
	}),
]);

/** Social icons stacked vertically, to the right of entire content block */
export const socialIcons = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 4,
		flexShrink: 0,
	},
	tablet({
		gap: 8,
	}),
]);

export const socialIcon = style([
	{
		width: 30,
		height: 30,
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	tablet({
		width: 45,
		height: 45,
	}),
]);

export const socialIconImage = style([
	{
		width: 30,
		height: 30,
		objectFit: 'contain',
	},
	tablet({
		width: 45,
		height: 45,
	}),
]);

/** Two columns of legal links below phone button, with vertical separator */
export const legalRow = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'stretch',
	gap: 0,
	justifyContent: 'flex-end',
	width: '100%',
});

/** Thin white vertical line between the two legal link columns */
export const legalSeparator = style([
	{
		display: 'block',
		width: 1,
		minHeight: 24,
		backgroundColor: vars.color.white,
		margin: '0 6px',
		alignSelf: 'stretch',
		flexShrink: 0,
	},
	tablet({
		minHeight: 32,
		margin: '0 16px',
	}),
]);

export const legalColumn = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 3,
	},
	tablet({
		gap: 6,
	}),
]);

export const legalColumnLeft = style([
	legalColumn,
	{ textAlign: 'right', alignItems: 'flex-end' },
]);

export const legalColumnRight = style([
	legalColumn,
	{ textAlign: 'left', alignItems: 'flex-start' },
]);

export const legalLink = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontSize: 7,
		lineHeight: '9px',
		color: vars.color.white,
		textTransform: 'uppercase',
		textDecoration: 'none',
		':hover': {
			textDecoration: 'underline',
		},
	},
	tablet({
		fontSize: 12,
		lineHeight: '14px',
	}),
]);
