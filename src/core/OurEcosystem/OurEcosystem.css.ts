import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBottom: 68,
		maxWidth: 825,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const navButtonsWrapper = style([
	{
		width: '100%',
		height: 'auto',
		boxSizing: 'border-box',
		backgroundColor: vars.color.white,
		padding: '13px 10px',
		borderRadius: 15,
		boxShadow: '0px 4.69px 14.06px 0 rgba(0, 0, 0, 0.13)',
	},
	tablet({
		width: '100%',
		height: 110,
		boxSizing: 'border-box',
		backgroundColor: vars.color.white,
		padding: '18px 25px',
		borderRadius: 15,
		boxShadow: '0px 4.69px 14.06px 0 rgba(0, 0, 0, 0.13)',
	}),
]);

export const navButtons = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		width: '100%',
		height: '100%',
	},
	tablet({
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	}),
]);

export const navButton = style([
	{
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '16px 20px',
		borderRadius: 15,
		backgroundColor: vars.color.brand,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 26,
		lineHeight: 1,
		color: vars.color.white,
		textDecoration: 'none',
		textTransform: 'uppercase',
		textAlign: 'center',
		':hover': {
			opacity: 0.9,
		},
	},
	tablet({
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '18px 30px',
		borderRadius: 15,
		backgroundColor: vars.color.brand,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 32,
		lineHeight: 1,
		color: vars.color.white,
		textDecoration: 'none',
		textTransform: 'uppercase',
		textAlign: 'center',
		':hover': {
			opacity: 0.9,
		},
	}),
]);

export const introBlock = style({
	marginTop: 24,
	marginBottom: 8,
});

export const paragraph = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 16,
	lineHeight: 1.5,
	color: vars.color.black,
	marginTop: 16,
	marginBottom: 0,
});

export const accent = style({
	color: vars.color.brand,
});

export const bold = style({
	fontFamily: vars.font.ApercuProBold,
});

export const headingWrapper = style({
	marginTop: 24,
	marginBottom: 0,
});

export const mapImageWrap = style([
	{
		width: '100%',
		marginTop: 24,
	},
	tablet({
		maxWidth: 740,
		marginTop: 32,
	}),
]);

export const mapImage = style({
	width: '100%',
	height: 'auto',
	display: 'block',
	borderRadius: 14,
});

export const list = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		rowGap: 30,
		listStyle: 'none',
		marginTop: 30,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		columnGap: 15,
		rowGap: 60,
		maxWidth: 746,
		marginTop: 60,
	}),
]);
