import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const section = style({
	width: '100%',
});

export const mapWrap = style([
	{
		position: 'relative',
		width: '100%',
		borderRadius: 14,
		overflow: 'hidden',
		boxShadow: '0px 9px 8px rgba(0, 0, 0, 0.1), 0px 24px 24px rgba(0, 0, 0, 0.12)',
	},
	tablet({
		borderRadius: 14,
	}),
]);

export const mapImage = style({
	display: 'block',
	width: '100%',
	height: 'auto',
	borderRadius: 'inherit',
});

export const list = style([
	{
		listStyle: 'none',
		margin: 0,
		marginTop: 48,
		padding: '20px 12px',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridAutoRows: 'auto',
		rowGap: 15,
		columnGap: 0,
		backgroundColor: vars.color.mainBackground,
		borderRadius: 14,
	},
	tablet({
		gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		gridTemplateRows: 'repeat(3, auto)',
		padding: '24px 20px',
		columnGap: 'max(12px, 3%)',
	}),
]);
