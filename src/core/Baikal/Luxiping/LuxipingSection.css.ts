import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const block = style({
	width: '100%',
});

export const intro = style([
	{
		margin: 0,
		marginBottom: 28,
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 14,
		lineHeight: 1.35,
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
		lineHeight: 1.4,
		marginBottom: 32,
	}),
]);

export const introBrand = style({
	color: vars.color.brand,
	fontFamily: vars.font.CeraCondensedCYBold,
	fontWeight: 700,
});

export const row = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		width: '100%',
		alignItems: 'stretch',
	},
	tablet({
		flexDirection: 'row',
		gap: 28,
		alignItems: 'flex-start',
	}),
]);

export const colPhoto = style([
	{
		width: '100%',
		minWidth: 0,
		flex: '1 1 auto',
	},
	tablet({
		flex: '1 1 0',
		maxWidth: '50%',
	}),
]);

export const sideImageWrap = style([
	{
		display: 'none',
	},
	tablet({
		position: 'relative',
		width: '100%',
		borderRadius: 14,
		overflow: 'hidden',
		boxShadow: '0px 9px 8px rgba(0, 0, 0, 0.1), 0px 24px 24px rgba(0, 0, 0, 0.12)',
		aspectRatio: '4 / 3',
		display: 'block',
	}),
]);

export const sideImage = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const emptyColumn = style({
	minHeight: 200,
	borderRadius: 14,
	backgroundColor: 'rgba(0,0,0,0.04)',
});
