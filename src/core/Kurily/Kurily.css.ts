import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

/** Cera — опентайп фичи из макета */
const ceraHeadingFeatures = "'ss01' on, 'salt' on";

/** Apercu body (моб.) */
const apercuBodyFeatures = "'ss01' on, 'salt' on";

/** Оболочка: правая акцентная линия как в макете */
export const shell = style([
	{
		position: 'relative',
	},
	tablet({
		borderRight: `3px solid ${vars.color.brand}`,
		paddingRight: 24,
		marginRight: 0,
	}),
]);

export const content = style([
	pageContent,
	{
		paddingLeft: 30,
		paddingRight: 30,
		paddingBottom: 48,
	},
	tablet({
		paddingLeft: 0,
		paddingRight: 0,
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const title = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: 30,
		lineHeight: '32px',
		display: 'flex',
		alignItems: 'center',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraHeadingFeatures,
		color: vars.color.black,
		margin: 0,
		marginTop: 8,
	},
	tablet({
		fontFamily: vars.font.CeraCondensedCYBold,
		fontWeight: 700,
		fontSize: 50,
		lineHeight: '63px',
		marginTop: 12,
	}),
]);

export const sectionHeading = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: 30,
		lineHeight: '32px',
		display: 'flex',
		alignItems: 'center',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraHeadingFeatures,
		color: vars.color.black,
		margin: 0,
		marginTop: 32,
	},
	tablet({
		fontFamily: vars.font.CeraCondensedCYBold,
		fontWeight: 700,
		fontSize: 50,
		lineHeight: '63px',
		marginTop: 40,
	}),
]);

export const subtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		lineHeight: '22px',
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFeatureSettings: "'salt' on",
		color: vars.color.brand,
		margin: 0,
		marginTop: 20,
		maxWidth: 640,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	tablet({
		fontSize: 30,
		lineHeight: '32px',
		marginTop: 24,
	}),
]);

export const description = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: '20px',
		fontFeatureSettings: apercuBodyFeatures,
		color: vars.color.black,
		margin: 0,
		marginTop: 16,
	},
	tablet({
		fontSize: 20,
		lineHeight: '26px',
		fontFeatureSettings: apercuBodyFeatures,
		marginTop: 20,
	}),
]);

/** Акценты в абзаце — тот же кегль/интерлиньяж, цвет бренда */
export const accent = style({
	color: vars.color.brand,
	fontFamily: vars.font.ApercuProRegular,
	fontStyle: 'normal',
	fontWeight: 400,
	fontFeatureSettings: apercuBodyFeatures,
});

export const imageWrapper = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '16 / 10',
		borderRadius: 14,
		overflow: 'hidden',
		marginTop: 24,
	},
	tablet({
		aspectRatio: '16 / 9',
		marginTop: 28,
	}),
]);

export const image = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const captionBlock = style({
	marginTop: 16,
	textAlign: 'left',
});

/** «Лесопилка» / «октябрь 2025» — Apercu Pro 700, 20/26, uppercase, ss01 + salt */
export const captionLine = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 16,
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraHeadingFeatures,
		color: vars.color.black,
		margin: 0,
	},
	tablet({
		fontSize: 20,
		lineHeight: '26px',
	}),
]);

export const captionLineSecond = style({
	marginTop: 4,
});

/** Верхний ряд сетки: два кадра (макет 829×540 всего, геп 19px, кадр ~405×540) */
export const mosaicTop = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 19,
		marginTop: 40,
	},
	tablet({
		flexDirection: 'row',
		gap: 19,
		marginTop: 48,
	}),
]);

/** Нижний блок: слева высокий кадр, справа два — тот же геп 19px */
export const mosaicBottom = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 19,
		marginTop: 19,
	},
	tablet({
		flexDirection: 'row',
		gap: 19,
		alignItems: 'stretch',
		marginTop: 19,
		minHeight: 675,
	}),
]);

export const mosaicHalf = style([
	{
		position: 'relative',
		width: '100%',
		height: 315,
		minHeight: 315,
		borderRadius: 14,
		overflow: 'hidden',
	},
	tablet({
		height: 'auto',
		minHeight: 0,
		aspectRatio: '405 / 540',
		flex: '1 1 0',
		minWidth: 0,
	}),
]);

export const mosaicTall = style([
	{
		position: 'relative',
		width: '100%',
		height: 315,
		minHeight: 315,
		borderRadius: 14,
		overflow: 'hidden',
	},
	tablet({
		height: 'auto',
		/* Пропорция 534/(534+276) без выхода за контейнер */
		flex: '534 1 0',
		minWidth: 0,
		minHeight: 0,
		alignSelf: 'stretch',
	}),
]);

export const mosaicStack = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 19,
		width: '100%',
	},
	tablet({
		/* Пропорция 276/(534+276) без фиксированной ширины */
		flex: '276 1 0',
		minWidth: 0,
		gap: 19,
		minHeight: 0,
	}),
]);

export const mosaicStackItem = style([
	{
		position: 'relative',
		width: '100%',
		height: 315,
		minHeight: 315,
		borderRadius: 14,
		overflow: 'hidden',
		flex: '0 0 auto',
	},
	tablet({
		height: 'auto',
		flex: '1 1 0',
		minHeight: 0,
	}),
]);

export const ctaButton = style([
	{
		background: vars.color.brand,
		color: vars.color.white,
		padding: '16px 24px',
		borderRadius: 40,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 18,
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraHeadingFeatures,
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '100%',
		boxSizing: 'border-box',
		marginTop: 32,
		transition: 'opacity 0.2s ease',
		':hover': {
			opacity: 0.92,
		},
		selectors: {
			'&:focus-visible': {
				outline: `2px solid ${vars.color.black}`,
				outlineOffset: 2,
			},
		},
	},
	tablet({
		fontSize: 23.4286,
		lineHeight: '22px',
		padding: '18px 32px',
		marginTop: 40,
	}),
]);
