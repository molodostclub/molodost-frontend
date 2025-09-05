import { tablet, vars } from '@/styles';
import { globalStyle, style } from '@vanilla-extract/css';

export const separatorText = style([
	{
		width: '100%',
		color: vars.color.brand,
		marginTop: '30px',
		fontSize: '30px',
		fontFamily: vars.font.ApercuProRegular,
		textTransform: 'uppercase',
	},
	tablet({}),
]);

export const pageTitle = style([
	{
		width: '100%',
		color: vars.color.black,
		fontSize: '50px',
		lineHeight: '1.45',
		fontFamily: vars.font.CeraCondensedCYRegular,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	tablet({}),
]);

export const input = style([
	{
		width: '100%',
		border: '1px solid rgba(0, 0, 0, 0.25)',
		borderRadius: 10,
		padding: 15,
	},
]);

export const inputFile = style([
	{
		width: '100%',
		padding: '15px 0',
	},
]);

globalStyle(`input[type="file" i]::-webkit-file-upload-button`, {
	background: 'transparent',
	outline: 'none',
	border: '1px solid rgba(0, 0, 0, 0.25)',
	padding: '15px',
	borderRadius: '10px',
	marginRight: '18px',
	transition: '0.3s ease-in-out',
});

globalStyle(`input[type="file" i]::-webkit-file-upload-button:hover`, {
	background: vars.color.brand,
    color: vars.color.white,
    cursor: "pointer",
	transition: '0.3s ease-in-out',
});

export const textBase = style({
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontWeight: 500,
	fontSize: 25,
	lineHeight: '25px',
	textTransform: 'uppercase',
});

export const accentText = style([
	textBase,
	{
		color: vars.color.brand,
	},
]);

export const noteBlack = style([
	{
		fontSize: 16,
		color: vars.color.black,
		fontFamily: vars.font.ApercuProRegular,
	},
	tablet({}),
]);

export const descriptionCenter = style([
	{
		fontSize: 20,
		textAlign: 'center',
		color: vars.color.black,
		fontFamily: vars.font.ApercuProRegular,
		textTransform: 'uppercase',
	},
	tablet({}),
]);

export const descriptionAttention = style([
	{
		fontSize: 18,
		color: vars.color.brand,
		fontFamily: vars.font.ApercuProRegular,
	},
	tablet({}),
]);

export const labelDescription = style({
	fontSize: 14,
	color: vars.color.gray,
	fontFamily: vars.font.ApercuProRegular,
});

export const ctaBtn = style({
	width: '100%',
	borderRadius: 30,
	minHeight: 60,
	border: 'none',
	fontSize: 24,
	lineHeight: 1,
	backgroundColor: vars.color.brand,
	color: vars.color.white,
	fontFamily: vars.font.CeraCondensedCYRegular,
	textTransform: 'uppercase',
	cursor: 'pointer',
	scrollMarginTop: 300,
});

export const linkButton = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: 30,
});

export const agreementLink = style({
	fontSize: 16,
	lineHeight: '14px',
	color: vars.color.brand,
	fontFamily: vars.font.ApercuProRegular,
	textDecoration: 'underline',
});

export const modalDescription = style({
	fontSize: 16,
	lineHeight: 1.2,
	color: vars.color.brand,
	fontFamily: vars.font.ApercuProRegular,
});
