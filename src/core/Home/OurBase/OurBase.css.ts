import { style, styleVariants } from '@vanilla-extract/css';

import { hexToRgba, paddingHome, tablet, vars } from '@styles';

export const container = style([
	{
		width: '100%',
		marginTop: 45,
	},
	tablet({
		maxWidth: 'calc(825px + 60px)',
		marginTop: 94,
	}),
]);

export const content = style({
	marginLeft: 30,
	marginRight: 30,
});

export const descriptionRed = style({
	color: vars.color.brand,
});

export const textContent = style([
	{
		display: 'flex',
		flexDirection: 'column',
		marginTop: 18,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginTop: 60,
	}),
]);

export const placeList = styleVariants({
	mobile: {
		overflow: 'hidden',
		width: '100%',
		paddingLeft: 30,
		marginTop: 30,
	},
	tablet: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(3, 1fr)',
		columnGap: 14,
		rowGap: 33,
		marginTop: 60,
		marginLeft: 30,
		marginRight: 30,
	},
});

export const placeListContainer = style({
	display: 'flex',
});

export const quoteWrapper = style([
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 42,
	},
	tablet({
		minWidth: 405,
		marginTop: -16,
	}),
]);
