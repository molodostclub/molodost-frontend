import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';

export const overlayWrapper = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	visibility: 'hidden',
	opacity: 0,
	transition: 'opacity 0.3s ease, visibility 0.3s ease',
	zIndex: 999,
});

export const opened = style({
	visibility: 'visible',
	opacity: 1,
});

export const overlayBackground = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный темный фон
	cursor: 'pointer',
});

export const overlay = style({
	position: 'relative',
	background: vars.color.brand,
	width: 400,
	height: '100%',
	boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.2)',
	transform: 'translateX(100%)',
	transition: 'transform 0.3s ease',
});

export const overlayOpened = style({
	transform: 'translateX(0)',
});

export const overlayTransition = style({
	transition: 'transform 300ms ease-in-out',
});

// export const overlay = style({
// 	position: 'fixed',
// 	top: 0,
// 	right: 0,
// 	width: 400,
// 	height: '100vh',
// 	zIndex: 10,
// 	backgroundColor: vars.color.brand,
// 	willChange: 'transform',
// 	overflowX: 'auto',
// });

export const overlayVisibility = styleVariants({
	visible: {
		pointerEvents: 'auto',
		transform: 'translate3d(0, 0, 0)',
	},
	hidden: {
		pointerEvents: 'none',
		transform: 'translate3d(100%, 0, 0)',
	},
});

export const content = style([
	{
		display: 'flex',
		flexDirection: 'column',
		margin: 30,
		height: 'calc(100% - 60px)',
	},
]);

export const header = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: 'fit-content',
});

export const cross = style({
	position: 'relative',
	width: 30,
	height: 30,
	border: 'none',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	selectors: {
		'&::before, &::after': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: 4,
			backgroundColor: vars.color.white,
			transformOrigin: 'center center',
			marginTop: 12,
		},
		'&::before': {
			transform: 'rotate(45deg)',
		},
		'&::after': {
			transform: 'rotate(-45deg)',
		},
	},
});

export const menu = style({
	marginTop: 48,
	height: 'calc(100% - 80px)',
});

export const menuList = style([
	{
		listStyle: 'none',
		textAlign: 'left',
		padding: 0,
		height: '100%',
		overflow: 'auto',
	},
	tablet({ textAlign: 'center' }),
]);

export const menuItem = style({
	textAlign: 'left',
	fontSize: 25,
	selectors: {
		'&:not(:first-child)': {
			marginTop: 20,
		},
		'&:nth-of-type(4)': {
			borderTop: '1px solid rgba(255 255 255 / 0.4)',
			paddingTop: 20,
			paddingBottom: 20,
			borderBottom: '1px solid rgba(255 255 255 / 0.4)',
		},
	},
});

export const menuLabel = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 25,
	lineHeight: '25px',
	textTransform: 'uppercase',
	textDecoration: 'none',
	color: vars.color.white,
	transitionProperty: 'opacity',
	transitionDuration: '200ms',
	transitionTimingFunction: 'ease-in-out',
	selectors: {
		'&:hover': {
			opacity: 0.85,
		},
	},
});

export const subMenuLabel = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 20,
	lineHeight: 1,
	textTransform: 'uppercase',
	textDecoration: 'none',
	color: vars.color.white,
	transitionProperty: 'opacity',
	transitionDuration: '200ms',
	transitionTimingFunction: 'ease-in-out',
	selectors: {
		'&:hover': {
			opacity: 0.85,
		},
	},
});

export const menuButton = style({
	background: 'none',
	border: 'none',
	color: vars.color.white,
	cursor: 'pointer',
	width: '100%',
	textAlign: 'left',
	display: 'flex',
	alignItems: 'center',
	gap: 10,
	padding: 0,
});

export const subMenu = style({
	listStyle: 'none',
	paddingLeft: 15,
	marginTop: 5,
	maxHeight: 0,
	overflow: 'hidden',
	transition: 'max-height 0.3s ease-in-out',
});

export const subMenuItem = style({
	marginTop: 12,
	selectors: {
		'&:first-child': {
			marginTop: 20,
		},
	},
});

export const subMenuOpen = style({
	maxHeight: '1000px', // Подбираем подходящую высоту
});

export const divider = style({
	width: 22,
	height: 3,
	marginTop: 11,
	marginBottom: 11,
	backgroundColor: vars.color.white,
});
