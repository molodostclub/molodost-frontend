import { style } from '@vanilla-extract/css';

import { Breakpoint, vars } from '@styles';

const mustard = '#CA8F07';

export const item = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 12,
	width: '100%',
	minWidth: 0,
	'@media': {
		[`screen and (max-width: ${Breakpoint.tablet - 1}px)`]: {
			// сброс инлайн gridColumn/gridRow — на мобиле одна колонка по порядку в DOM
			gridColumn: 'auto !important',
			gridRow: 'auto !important',
		},
	},
});

export const badge = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '4px 8px',
	gap: 10,
	width: 30,
	minWidth: 30,
	height: 40,
	flexShrink: 0,
	boxSizing: 'border-box',
	backgroundColor: mustard,
});

/** Двузначные номера — чуть шире подложка, высота 40px */
export const badgeWide = style([
	badge,
	{
		width: 'auto',
		minWidth: 36,
		paddingLeft: 6,
		paddingRight: 6,
	},
]);

export const badgeNumber = style({
	fontFamily: vars.font.ApercuProBold,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 20,
	lineHeight: '20px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: vars.color.white,
});

export const label = style({
	fontFamily: vars.font.ApercuProBold,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 18,
	lineHeight: '18px',
	display: 'block',
	fontFeatureSettings: "'ss01' on, 'salt' on",
	color: vars.color.black,
	flex: 1,
	minWidth: 0,
	wordBreak: 'break-word',
});
