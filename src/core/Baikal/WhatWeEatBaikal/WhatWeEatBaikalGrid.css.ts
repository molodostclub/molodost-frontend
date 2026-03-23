import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 16,
		width: '100%',
		boxSizing: 'border-box',
	},
	tablet({
		gap: 20,
	}),
]);

export const cell = style([
	{
		position: 'relative',
		width: '100%',
		aspectRatio: '4 / 3',
		borderRadius: 22,
		overflow: 'hidden',
		backgroundColor: '#F5F5F5',
	},
	tablet({
		borderRadius: 30,
	}),
]);

export const image = style({
	objectFit: 'cover',
	width: '100%',
	height: '100%',
});
