import { style } from '@vanilla-extract/css';
import { tablet } from '@styles';

export const content = style({
	paddingTop: 15,
	paddingBottom: 30,
	width: '100%',
});

export const heading = style([
	{
		width: '100%',
	},
	tablet({
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const widget = style([
	{
		marginTop: 30,
		width: '100%',
		minHeight: 120,
	},
	tablet({
		marginTop: 45,
	}),
]);
