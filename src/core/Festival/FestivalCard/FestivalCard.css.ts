import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const card = style([
	{
		position: 'relative',
		borderRadius: 14,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
	},
	tablet({
		display: 'block',
		minHeight: 482,
	}),
]);

export const imageWrap = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '16 / 9',
		flexShrink: 0,
	},
	tablet({
		position: 'absolute',
		inset: 0,
		width: '100%',
		height: '100%',
		aspectRatio: 'unset',
	}),
]);

export const image = style({
	objectFit: 'cover',
});

export const overlay = style([
	{
		display: 'none',
		visibility: 'hidden',
	},
	tablet({
		display: 'block',
		visibility: 'visible',
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		width: '78%',
		/* Тёмная подложка под текст (макет): контраст белому шрифту на фото */
		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.52) 55%, rgba(0, 0, 0, 0.12) 100%)',
		backdropFilter: 'blur(2px)',
		WebkitBackdropFilter: 'blur(4px)',
		pointerEvents: 'none',
		WebkitMaskImage: 'linear-gradient(to right, black 0%, black 72%, transparent 100%)',
		maskImage: 'linear-gradient(to right, black 0%, black 72%, transparent 100%)',
	}),
]);

export const content = style([
	{
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '20px 24px 24px',
		backgroundColor: vars.color.white,
		flex: '1 0 auto',
	},
	tablet({
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		padding: '24px 24px 28px',
		flex: 'unset',
	}),
]);

export const title = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 24,
		lineHeight: 1.2,
		textTransform: 'uppercase',
		color: vars.color.brand,
		margin: 0,
		marginBottom: 4,
	},
	tablet({
		fontSize: 50,
		lineHeight: '45px',
		color: vars.color.white,
	}),
]);

export const subtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 16,
		lineHeight: 1.3,
		textTransform: 'uppercase',
		color: vars.color.brand,
		margin: 0,
		marginBottom: 12,
	},
	tablet({
		fontSize: 36,
		lineHeight: '45px',
		color: vars.color.white,
		opacity: 0.95,
	}),
]);

export const description = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 16,
		lineHeight: 1.4,
		color: vars.color.black,
		margin: 0,
		marginBottom: 16,
		maxWidth: '100%',
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
		color: vars.color.white,
		maxWidth: '90%',
	}),
]);

export const button = style([
	{
		background: vars.color.brand,
		color: vars.color.white,
		padding: '10px 24px',
		boxSizing: 'border-box',
		borderRadius: 40,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 18,
		textTransform: 'uppercase',
		textDecoration: 'none',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		':hover': {
			opacity: 0.95,
		},
	},
	tablet({
		minWidth: 218,
		minHeight: 40,
		padding: '10px 35px',
		fontSize: 25,
	}),
]);
