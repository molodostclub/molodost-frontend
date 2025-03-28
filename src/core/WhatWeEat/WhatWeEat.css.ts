import { pageContent, tablet, vars } from '@styles';
import { style, styleVariants } from '@vanilla-extract/css';
import { pageSubtitle } from '@/styles/uikit.css';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 720,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const textContent = styleVariants({
	top: [{ marginTop: 30, gridArea: 'textTop' }, tablet({ marginTop: 30 })],
	bottom: [{ marginTop: 30 }],
});

export const tableContainer = style([
	{
		maxWidth: 320,
		width: '100%',
		marginTop: 60,
	},
	tablet({ marginTop: 0 }),
]);

export const imageContainer = style([
	{
		position: 'relative',
		width: '100%',
		height: 287,
		marginTop: 30,
		filter: 'drop-shadow(0px 9px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.12))',
		borderRadius: 14,
	},
	tablet({
		height: 432,
		marginTop: 90,
	}),
]);

export const image = style({
	objectFit: 'cover',
	objectPosition: 'center',
	width: '100%',
	height: 'auto',
	borderRadius: 'inherit',
});

export const table = style([
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	tablet({
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 40,
		marginTop: 60,
	}),
]);

export const firstCol = style({ marginBottom: 45 });

export const grid = style([
	{
		display: 'grid',
		gridTemplateColumns: '100%',
		marginTop: 30,
		gap: 20,
	},
	tablet({
		marginTop: 40,
		gap: 40,
		gridTemplateColumns: 'auto 255px',
	}),
]);

export const titleCoffe = style([
	pageSubtitle,
	{ margin: '30px 0' },
	tablet({
		margin: '45px 0 30px',
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontSize: 50,
		lineHeight: '45px',
		color: vars.color.black,
	}),
]);

export const attention = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 22,
		lineHeight: 1,
		color: vars.color.black,
		textTransform: 'uppercase',
		marginTop: 30,
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

export const sideTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 16,
	color: vars.color.brand,
	textTransform: 'uppercase',
});

export const sideText = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 16,
	textTransform: 'uppercase',
	marginBottom: 30,
	selectors: {
		'&:last-of-type': {
			marginBottom: 0,
		},
	},
});
