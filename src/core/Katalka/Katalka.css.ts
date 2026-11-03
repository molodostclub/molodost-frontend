import { style } from '@vanilla-extract/css';

import { desktop, pageContent, tablet, vars } from '@styles';
import { colorBrand } from '@/uikit/Description/Description.css';
import { fonts } from '@/styles/theme.css';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 820,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const textRed96 = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		color: vars.color.brand,
		fontSize: 64,
	},
	tablet({
		fontSize: 96,
	}),
]);

export const textRed55 = style([
	{
		color: vars.color.brand,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		fontSize: 32,
	},
	tablet({
		fontSize: 55,
	}),
]);

export const textRed40 = style([
	{
		fontSize: 22,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 40,
	}),
]);

export const textRed36 = style([
	{
		fontSize: 22,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 36,
	}),
]);

export const textRed24Centered = style([
	{
		fontSize: 18,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.brand,
		textAlign: 'center',
	},
	tablet({
		fontSize: 24,
	}),
]);

export const textRed36Medium = style([
	{
		fontSize: 18,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 36,
	}),
]);

export const textBlack40 = style([
	{
		fontSize: 24,
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 40,
	}),
]);

export const textBlack40Medium = style([
	{
		fontSize: 22,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 40,
	}),
]);

export const textBlack36 = style([
	{
		fontSize: 20,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		lineHeight: 1.2,
		color: vars.color.black,
	},
	tablet({
		fontSize: 36,
	}),
]);

export const textBlack34 = style([
	{
		fontSize: 18,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		lineHeight: 1.2,
		color: vars.color.black,
	},
	tablet({
		fontSize: 34,
	}),
]);

export const accentText = style([
	{
		color: vars.color.brand,
	},
	tablet({}),
]);

export const textBlack25Lines = style([
	{
		fontSize: 17,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		lineHeight: 1.2,
		color: vars.color.black,
		borderTop: `1px solid ${vars.color.brand}`,
		paddingTop: 10,
		borderBottom: `1px solid ${vars.color.brand}`,
		paddingBottom: 10,
		textAlign: 'center',
	},
	tablet({
		fontSize: 25,
	}),
]);

export const textBlack55 = style([
	{
		color: vars.color.black,
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		fontSize: 34,
	},
	tablet({
		fontSize: 55,
	}),
]);

export const textRed50Bold = style([
	{
		fontSize: 22,
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 50,
	}),
]);

export const textCenter = style([
	{
		textAlign: 'center',
		lineHeight: 1.2,
		maxWidth: 200,
		margin: '0 auto',
	},
	tablet({
		textAlign: 'center',
		maxWidth: 'unset',
		lineHeight: 1.2,
	}),
]);

export const paragraph = style([
	{
		margin: '28px 0',
	},
	tablet({
		margin: '56px 0',
	}),
]);

export const katalkaColumns = style([
	{
		display: 'flex',
		flexDirection: 'column-reverse',
		gap: 24,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 24,
		position: 'relative',
	}),
]);

export const katalkaColumnsWide = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 0,
	},
	tablet({
		gridTemplateColumns: '510px 1fr',
		gap: 0,
		position: 'relative',
	}),
]);

export const cardRotated = style([
	{
		backgroundColor: vars.color.brand,
		borderRadius: 20,
		padding: 20,
		transform: 'rotate(-1.74deg) translateY(-20%)',
		color: vars.color.white,
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		fontSize: 18,
		lineHeight: 1.2,
		textAlign: 'center',
		width: '96%',
		position: 'relative',
		left: '2%',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	tablet({
		transform: 'rotate(-1.74deg) translateY(-50%)',
		position: 'absolute',
		right: 0,
		top: '50%',
		width: 'max-content',
		left: 'unset',
		fontSize: 28,
	}),
]);

export const katalkaColumnsReverse = style([
	{
		display: 'flex',
		flexDirection: 'column-reverse',
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 24,
	}),
]);

export const katalkaColumn = style([
	{
		position: 'relative',
	},
	tablet({
		position: 'relative',
	}),
]);

export const katalkaPriceRedHighlight = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		textTransform: 'uppercase',
		color: vars.color.brand,
		fontSize: 24,
	},

	tablet({
		fontSize: 50,
	}),
]);

export const katalkaImg = style([
	{
		boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
		borderRadius: 14,
		objectFit: 'cover',
		width: '100%',
	},
	tablet({
		boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
		borderRadius: 14,
		objectFit: 'cover',
		width: '100%',
	}),
]);

export const katalkaImgSmall = style([
	{
		boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
		borderRadius: 14,
		objectFit: 'cover',
		width: '100%',
    marginTop: 20,
	},
	tablet({
		marginTop: 20,
		boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
		borderRadius: 14,
		objectFit: 'cover',
		width: '100%',
		maxHeight: 217,
	}),
]);

export const authorImg = style([
	{
		position: 'relative',
		top: -24,
		left: 'calc(50% - 32px)',
		width: 170,
	},
	tablet({
		position: 'absolute',
		top: '44px',
		left: '126px',
		width: 'auto',
	}),
]);

export const katalkaList = style([
	{
		paddingLeft: 10,
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		paddingTop: 20,
	},
	tablet({
		paddingLeft: 10,
		paddingTop: 64,
	}),
]);

export const katalkaListItem = style([
	{
		fontSize: 16,
		color: vars.color.black,
		lineHeight: 1.5,
		fontFamily: vars.font.ApercuProRegular,
	},
	tablet({
		fontSize: 18,
	}),
]);

export const paragraphCard = style([
	{
		backgroundColor: vars.color.white,
		borderRadius: 20,
		padding: 30,
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		fontSize: 18,
		lineHeight: 1.2,
		textAlign: 'center',
		position: 'relative',
		width: "100%",
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: '50%',
		transform: 'translateX(-50%)',
	},
	tablet({
		fontSize: 28,
    width: 500,
	}),
]);

export const textLine = style([
	{
		fontSize: 20,
		fontFamily: vars.font.CeraCondensedCYBold,
		textTransform: 'uppercase',
		lineHeight: 1.2,
		color: vars.color.white,
		backgroundColor: vars.color.brand,
		textAlign: 'center',
		padding: '10px 30px',
		borderRadius: 20,
		position: 'absolute',
		bottom: -40,
		left: '80%',
		transform: 'translateX(-50%) rotate(-8deg)',
		width: 'max-content',
	},
	tablet({
		fontSize: 32,
	}),
]);
