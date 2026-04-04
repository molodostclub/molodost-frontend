import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const feat = "'ss01' on, 'salt' on";

const ceraMed = {
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontWeight: 500,
	fontFeatureSettings: feat,
};

const ceraReg = {
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontWeight: 400,
	fontFeatureSettings: feat,
};

export const row = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		width: '100%',
		alignItems: 'stretch',
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 28,
		alignItems: 'stretch',
	}),
]);

export const left = style([
	{
		flex: 1,
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: 28,
	},
]);

export const right = style([
	{
		flex: 1,
		minWidth: 0,
		position: 'relative',
		width: '100%',
		minHeight: 280,
		borderRadius: 22,
		overflow: 'hidden',
		backgroundColor: '#F5F5F5',
	},
	tablet({
		height: '100%',
		minHeight: 320,
		borderRadius: 30,
	}),
]);

export const image = style({
	objectFit: 'cover',
	width: '100%',
	height: '100%',
});

export const blockTitle = style([
	ceraMed,
	{
		margin: 0,
		fontSize: 18,
		lineHeight: '22px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 22,
		lineHeight: '26px',
	}),
]);

export const serviceName = style([
	ceraMed,
	{
		margin: 0,
		marginTop: 12,
		fontSize: 18,
		lineHeight: '22px',
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 20,
		lineHeight: '24px',
	}),
]);

export const priceLines = style([
	{
		margin: 0,
		marginTop: 16,
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
	},
]);

export const priceLine = style([
	ceraMed,
	{
		margin: 0,
		fontSize: 16,
		lineHeight: '20px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
		lineHeight: '22px',
	}),
]);

export const includesLabel = style([
	ceraMed,
	{
		margin: 0,
		marginTop: 20,
		fontSize: 16,
		lineHeight: '20px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 18,
		lineHeight: '22px',
	}),
]);

export const includesText = style([
	ceraReg,
	{
		margin: 0,
		marginTop: 10,
		fontSize: 14,
		lineHeight: '20px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 16,
		lineHeight: '22px',
	}),
]);

export const divider = style({
	height: 1,
	width: '100%',
	backgroundColor: 'rgba(0,0,0,0.12)',
	marginTop: 8,
	marginBottom: 8,
});

export const notStayingTitle = style([blockTitle]);

export const mealRow = style([
	{
		display: 'grid',
		gridTemplateColumns: 'minmax(0,auto) 1fr',
		gap: 12,
		columnGap: 16,
		alignItems: 'start',
		marginTop: 18,
	},
	tablet({
		columnGap: 24,
	}),
]);

export const mealName = style([
	ceraMed,
	{
		margin: 0,
		fontSize: 16,
		lineHeight: '20px',
		textTransform: 'uppercase',
		color: vars.color.black,
		paddingTop: 2,
	},
	tablet({
		fontSize: 18,
		lineHeight: '22px',
	}),
]);

export const mealPrices = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 6,
	alignItems: 'flex-end',
	textAlign: 'right',
});

export const mealPriceLine = style({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-end',
	alignItems: 'baseline',
	gap: 8,
	margin: 0,
});

export const categoryLabel = style([
	ceraReg,
	{
		fontSize: 15,
		lineHeight: '20px',
		textTransform: 'lowercase',
		color: vars.color.brand,
	},
	tablet({
		fontSize: 16,
		lineHeight: '22px',
	}),
]);

export const priceValue = style([
	ceraMed,
	{
		fontSize: 15,
		lineHeight: '20px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
	tablet({
		fontSize: 16,
		lineHeight: '22px',
	}),
]);
