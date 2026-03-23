import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const feat = "'ss01' on, 'salt' on";

export const root = style([
	{
		width: '100%',
		paddingBottom: 8,
	},
	tablet({
		paddingBottom: 16,
	}),
]);

/** «ЧТО МЫ ЕДИМ» — слева сверху */
export const sectionLabel = style([
	{
		margin: 0,
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 20,
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontFeatureSettings: feat,
		color: vars.color.black,
		textAlign: 'left',
	},
	tablet({
		fontSize: 23,
		lineHeight: '23px',
	}),
]);

/** «ДОМ ПРИЕМОВ» — по центру, красный */
export const mainTitle = style([
	{
		margin: 0,
		marginTop: 20,
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 30,
		lineHeight: '32px',
		textTransform: 'uppercase',
		fontFeatureSettings: feat,
		color: vars.color.brand,
		textAlign: 'center',
	},
	tablet({
		marginTop: 24,
		fontSize: 50,
		lineHeight: '45px',
	}),
]);

export const body = style([
	{
		marginTop: 24,
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	tablet({
		marginTop: 32,
		gap: 24,
	}),
]);

export const paragraph = style([
	{
		margin: 0,
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontWeight: 400,
		fontSize: 16,
		lineHeight: '22px',
		fontFeatureSettings: feat,
		color: vars.color.black,
		textAlign: 'left',
	},
	tablet({
		fontSize: 20,
		lineHeight: '26px',
	}),
]);

export const schedule = style([
	{
		marginTop: 40,
		display: 'grid',
		gridTemplateColumns: '1fr',
		justifyItems: 'center',
		rowGap: 28,
		columnGap: 24,
		width: '100%',
	},
	tablet({
		marginTop: 48,
		gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
		justifyItems: 'center',
		maxWidth: 720,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const scheduleItem = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
});

export const mealLabel = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontWeight: 500,
		fontSize: 18,
		lineHeight: '20px',
		textTransform: 'uppercase',
		fontFeatureSettings: feat,
		color: vars.color.brand,
	},
	tablet({
		fontSize: 22,
		lineHeight: '24px',
	}),
]);

export const mealTime = style([
	{
		marginTop: 8,
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontWeight: 400,
		fontSize: 18,
		lineHeight: '22px',
		fontFeatureSettings: feat,
		color: vars.color.black,
	},
	tablet({
		fontSize: 22,
		lineHeight: '26px',
	}),
]);
