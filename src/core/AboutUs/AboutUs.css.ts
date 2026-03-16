import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const heading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 36,
		lineHeight: 1.2,
		textTransform: 'uppercase',
	},
	tablet({
		fontSize: 48,
	}),
]);

export const subtitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 14,
		textTransform: 'uppercase',
		color: vars.color.brand,
		textAlign: 'center',
		marginTop: 16,
	},
]);

export const description = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontSize: 18,
		lineHeight: 24,
		marginTop: 16,
	},
]);

export const sectionTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 28,
		textTransform: 'uppercase',
		marginTop: 40,
	},
]);

export const imageWrapper = style([
	{
		position: 'relative',
		width: '100%',
		height: 300,
		borderRadius: 14,
		overflow: 'hidden',
		marginTop: 24,
	},
	tablet({
		height: 450,
	}),
]);

export const image = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const teamGrid = style([
	{
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: 20,
		marginTop: 24,
	},
	tablet({
		gridTemplateColumns: 'repeat(3, 1fr)',
	}),
]);

export const teamCard = style({
	display: 'flex',
	flexDirection: 'column',
});

export const teamCardImage = style({
	position: 'relative',
	width: '100%',
	height: 250,
	borderRadius: 14,
	overflow: 'hidden',
});

export const teamCardName = style({
	fontFamily: vars.font.CeraCondensedCYMedium,
	fontSize: 16,
	marginTop: 8,
});

export const teamCardRole = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 14,
	color: vars.color.gray,
});
