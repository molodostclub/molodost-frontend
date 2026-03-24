import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const section = style({
	marginTop: 40,
});

export const triggerButton = style({
	appearance: 'none',
	border: 'none',
	background: 'none',
	padding: 0,
	margin: 0,
	cursor: 'pointer',
	font: 'inherit',
	textAlign: 'left',
	width: '100%',
});

/** Обводка + стрелка: SVG тянется под блок с заголовком */
export const accordionGraphic = style({
	position: 'relative',
	display: 'block',
	width: '100%',
	color: vars.color.brand,
});

export const accordionSvg = style({
	position: 'absolute',
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	pointerEvents: 'none',
	overflow: 'visible',
});

/** Мобилка: форма под перенос текста (viewBox 306×95) */
export const accordionSvgMultiline = style([
	{
		display: 'block',
	},
	tablet({
		display: 'none',
	}),
]);

/** Планшет+: одна строка (viewBox 306×62) */
export const accordionSvgSingle = style([
	{
		display: 'none',
	},
	tablet({
		display: 'block',
	}),
]);

export const accordionTitle = style([
	{
		position: 'relative',
		zIndex: 1,
		display: 'block',
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 20,
		lineHeight: 1.2,
		textTransform: 'uppercase',
		whiteSpace: 'normal',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 18,
		paddingRight: 48,
	},
	tablet({
		fontSize: 32,
		whiteSpace: 'nowrap',
	}),
]);

export const content = style({
	overflow: 'hidden',
	marginTop: 24,
});

export const contentHidden = style({
	display: 'none',
});
