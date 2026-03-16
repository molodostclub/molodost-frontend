import { style } from '@vanilla-extract/css';

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
});

export const content = style({
	overflow: 'hidden',
	marginTop: 24,
});

export const contentHidden = style({
	display: 'none',
});
