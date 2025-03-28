import { pageContent, tablet, uikit, vars } from '@styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 870,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const tableContainer = style([
	{
		maxWidth: 320,
		width: '100%',
		marginTop: 30,
	},
	tablet({
		marginTop: 0,
		maxWidth: 'unset',
	}),
]);

export const imagesGrid = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 20,
	},
	tablet({
		gridTemplateColumns: '1fr 1fr',
	}),
]);

export const grid = style([
	{
		display: 'grid',
		gridTemplateAreas: '"textTop" "colLeft" "colRight"',
		gridTemplateColumns: '100%',
		marginTop: 30,
	},
	tablet({
		marginTop: 60,
		gap: '60px 15px',
		gridTemplateAreas: '"textTop textTop" "colLeft colRight"',
		gridTemplateColumns: '0.5fr 0.5fr',
	}),
]);

export const textTop = style([{ gridArea: 'textTop' }, tablet({ maxWidth: 720 })]);
export const colLeft = style([{ gridArea: 'colLeft' }]);
export const colRight = style([{ gridArea: 'colRight' }]);

export const movementTitle = style([uikit.pageSubtitle, { marginTop: 30 }, tablet({ marginTop: 90, marginBottom: 30 })]);

export const colRightTable = style([tablet({ marginTop: 60 })]);

export const card = style([{ marginTop: 30 }, tablet({ marginTop: 0 })]);

export const cardTitle = styleVariants({
	withSubtitle: [
		uikit.pageSubtitleBlack,
		{
			marginTop: 15,
		},
		tablet({ marginBottom: 60 }),
	],
	withoutSubtitle: [
		uikit.pageSubtitleBlack,
		{
			marginTop: 15,
		},
		tablet({ marginTop: 50 }),
	],
});

export const cardSubtitle = style([
	uikit.pageSubtitleRegular,
	{
		marginTop: 15,
	},
]);

export const imageWrapper = style([
	{
		position: 'relative',
		width: '100%',
		height: 287,
		borderRadius: vars.borderRadius.image,
		backgroundColor: vars.color.black,
	},
]);

export const image = style({
	width: '100%',
	height: 'auto',
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const attention = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1,
		color: vars.color.black,
		textTransform: 'uppercase',
		marginTop: 30,
		marginBottom: 50,
	},
	tablet({
		fontSize: 26,
	}),
]);

export const attentionRed = style([
	{
		color: vars.color.brand,
	},
	tablet({}),
]);
