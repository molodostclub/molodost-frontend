import { pageContent, tablet, vars } from '@styles';
import { style } from '@vanilla-extract/css';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 720,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const textContent = style([{ marginTop: 30 }, tablet({ marginTop: 30 })]);

export const separator = style([
	{
		margin: '30px 0',
		backgroundColor: vars.color.brand,
		height: 1,
		width: '100%',
	},
]);

export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		columnGap: 40,
		rowGap: 60,
	},
]);

export const column = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		justifyContent: 'space-between',
	},
]);

const textBase = style({
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontWeight: 500,
	fontSize: 25,
	lineHeight: '25px',
	textTransform: 'uppercase',
});

export const contacts = style({
	margin: '30px 0 40px',
});

export const accentText = style([
	textBase,
	{
		color: vars.color.brand,
	},
]);

export const ctaBtn = style({
	width: '100%',
	borderRadius: 30,
	minHeight: 60,
	border: 'none',
	fontSize: 25,
	lineHeight: '25px',
	backgroundColor: vars.color.brand,
	color: vars.color.white,
	fontFamily: vars.font.CeraCondensedCYRegular,
	textTransform: 'uppercase',
	cursor: 'pointer',
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: '0.3s ease-in-out',

	selectors: {
		'&:hover': {
			opacity: 0.8,
			transition: '0.3s ease-in-out',
		},
	},
});
