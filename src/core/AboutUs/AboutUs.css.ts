import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { pageContent, tablet } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: 830,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const navButtons = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 15,
		marginBottom: 25,
	},
	tablet({
		display: 'flex',
		flexDirection: 'row',
		gap: 20,
		maxWidth: 546,
		width: '100%',
		height: '100%',
		marginBottom: 40,
		marginInline: 'auto',
	}),
]);

export const navButton = style([
	{
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '13px 30px',
		borderRadius: 15,
		backgroundColor: vars.color.brand,
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 23,
		lineHeight: 1,
		color: vars.color.white,
		textDecoration: 'none',
		textTransform: 'uppercase',
		textAlign: 'center',
		':hover': {
			opacity: 0.9,
		},
	},
	tablet({
		fontSize: 24,
	}),
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
		borderRadius: 14,
		height: 450,
	}),
]);

export const image = style({
	objectFit: 'cover',
	borderRadius: 14,
	position: 'relative',
});

export const hudrukImageWrap = style({
	width: '100%',
	maxWidth: 536,
	maxHeight: 365,
	borderRadius: 14,
	overflow: 'hidden',
	lineHeight: 0,
});

const hudrukImageDropShadow = ['drop-shadow(0 9px 8px rgba(0, 0, 0, 0.1))', 'drop-shadow(0 24px 24px rgba(0, 0, 0, 0.12))'].join(' ');

export const hudrukImage = style({
	display: 'block',
	width: '100%',
	height: 'auto',
	maxHeight: 365,
	objectFit: 'cover',
	objectPosition: 'center',
	borderRadius: 14,
	filter: hudrukImageDropShadow,
});

export const hudruk = style([
	{
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: 10,
		marginBlock: 30,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '543px 1fr',
		gap: 30,
		marginBlock: 40,
	}),
]);

export const imageDescription = style({
	objectFit: 'cover',
	borderRadius: 'inherit',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
});

export const imageDescriptionTitle = style([
	{
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 16,
		lineHeight: 1.2,
		color: vars.color.black,
	},
	tablet({
		fontSize: 20,
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 1.2,
		color: vars.color.black,
	}),
]);

export const imageDescriptionText = style([
	{
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.2,
		color: vars.color.black,
	},
	tablet({
		fontSize: 20,
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: 1.2,
		color: vars.color.black,
	}),
]);

export const comandContainer = style({});

export const comandTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 30,
		marginBottom: 15,
		lineHeight: 1,
		textTransform: 'uppercase',
		color: vars.color.brand,
	},
	tablet({
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 50,
		lineHeight: 1,
		textTransform: 'uppercase',
		color: vars.color.brand,
		marginBottom: 40,
	}),
]);

export const comandTitleCenter = style([
	{
		textAlign: 'center',
		fontSize: 30,
		lineHeight: 1,
		marginBottom: 36,
		marginInline: 'auto',
		maxWidth: 150,
	},
	tablet({
		fontSize: 50,
		lineHeight: 1,
		marginBottom: 100,
		maxWidth: '100%',
	}),
]);

export const comandDescriptionBlack = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 30,
		lineHeight: '32px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'ss01' on, 'salt' on",
		color: vars.color.black,
		marginBottom: 14,
	},
	tablet({
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 50,
		lineHeight: '63px',
		textTransform: 'uppercase',
		fontFeatureSettings: "'ss01' on, 'salt' on",
		color: vars.color.black,
		marginBottom: 40,
	}),
]);

export const comandDescription = style([
	{
		fontSize: 16,
		marginBottom: 27,
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: 1.2,
		color: vars.color.black,
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 20,
		lineHeight: 1.2,
		color: vars.color.black,
		marginBottom: 40,
	}),
]);

export const comandMember = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

export const comandMemberName = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		lineHeight: 0.9,
		textAlign: 'center',
		color: vars.color.black,
		marginTop: 15,
		marginBottom: 10,
	},
	tablet({
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		lineHeight: 0.9,
		textAlign: 'center',
		color: vars.color.black,
		marginTop: 15,
		marginBottom: 10,
	}),
]);

export const comandMemberDescription = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.2,
		textAlign: 'center',
		color: vars.color.black,
		maxWidth: 420,
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.2,
		textAlign: 'center',
		color: vars.color.black,
		maxWidth: 420,
	}),
]);

export const comandMembers = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 35,
		width: '100%',
		marginBottom: 30,
	},
	tablet({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		marginBottom: 100,
		gap: 40,
	}),
]);

export const comandMembersRowTwo = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 40,
		width: '100%',
	},
	tablet({
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	}),
]);

export const comandMembersRowThree = style([
	{
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 40,
	}),
]);

export const comandMembersRowThreeCell = style([
	{
		width: '100%',
	},
	tablet({
		flex: 1,
		minWidth: 0,
	}),
]);

export const comandMembersRowOne = style([
	{
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	tablet({
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
	}),
]);

export const cooperativeContainer = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		marginBottom: 15,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 20,
		marginBottom: 15,
	}),
]);

export const cooperativeLeftColumn = style({});

export const cooperativeRightColumn = style({});

export const cooperativeLeftColumnTitle = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '18px',
		color: vars.color.black,
		marginBottom: 18,
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '20px',
		lineHeight: '26px',
		color: vars.color.black,
		marginBottom: 26,
	}),
]);

export const cooperativeLeftColumnDescription = style([
	{
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '18px',
		color: vars.color.black,
		marginBottom: 18,
	},
	tablet({
		fontFamily: vars.font.ApercuProBold,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '20px',
		lineHeight: '26px',
		color: vars.color.black,
		marginBottom: 26,
	}),
]);

export const cooperativeLeftColumnList = style({
	paddingLeft: 24,
	listStylePosition: 'outside',
	listStyleType: 'disc',
	display: 'flex',
	flexDirection: 'column',
	gap: 26,
});

export const cooperativeLeftColumnListItem = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '18px',
		color: vars.color.black,
		marginBottom: 18,
		selectors: {
			'&::marker': {
				color: vars.color.brand,
			},
		},
	},
	tablet({
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '20px',
		lineHeight: '26px',
		color: vars.color.black,
		marginBottom: 26,
	}),
]);

export const cooperativeLeftColumnListItemBrand = style({
	color: vars.color.brand,
});

export const cooperativeRightColumnImage = style([
	{
		width: '100%',
		height: 315,
		objectFit: 'cover',
		objectPosition: 'bottom',
		borderRadius: 14,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	tablet({
		height: '100%',
		objectPosition: 'center',
		borderRadius: 40,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	}),
]);

export const whatWeDoContainer = style([
	{
		width: '100%',
		lineHeight: 0,
	},
	tablet({
		width: '100%',
		lineHeight: 0,
	}),
]);

export const whatWeDoImageMobile = style([
	{
		display: 'block',
		width: '100%',
		height: 'auto',
		marginBottom: 37,
	},
	tablet({
		display: 'none',
	}),
]);

export const whatWeDoImageDesktop = style([
	{
		display: 'none',
	},
	tablet({
		display: 'block',
		width: '100%',
		height: 'auto',
		marginBottom: 45,
	}),
]);

export const serviceModelContainer = style([
	{
		marginBottom: 27,
	},
	tablet({
		marginBottom: 40,
	}),
]);

export const serviceModelList = style({
	paddingLeft: 24,
});

export const serviceModelListItem = style([
	{
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.3,
		color: vars.color.black,
		marginBottom: 20,
	},
	tablet({
		fontFamily: 'Apercu Pro',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 20,
		lineHeight: 1.3,
		color: vars.color.black,
		marginBottom: 40,
	}),
]);

export const serviceModelImage = style([
	{
		width: '100%',
		height: 'auto',
		objectFit: 'cover',
		objectPosition: 'center',
		borderRadius: 14,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	tablet({
		width: '100%',
		height: 'auto',
		objectFit: 'cover',
		objectPosition: 'center',
		borderRadius: 40,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	}),
]);

export const luxpingContainer = style({});

export const luxpingImageWrap = style({
	width: '100%',
	height: 'auto',
	objectFit: 'cover',
	objectPosition: 'center',
	margin: '0 auto',
	display: 'flex',
	justifyContent: 'center',
	marginBottom: 40,
});

export const luxpingImage = style({});

export const projectsContainer = style({});

export const projectsList = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 40,
		marginBottom: 40,
	},
	tablet({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 40,
		marginBottom: 40,
	}),
]);

export const project = style([{}]);

export const projectRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 0,
	},
	tablet({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 40,
	}),
]);

export const projectDescription = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 1.2,
		color: vars.color.black,
		marginTop: 20,
	},
	tablet({
		marginTop: 15,
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 20,
		lineHeight: 1.2,
		color: vars.color.black,
	}),
]);
