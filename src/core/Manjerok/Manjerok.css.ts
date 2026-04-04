import { style } from '@vanilla-extract/css';

import { hexToRgba, pageContent, tablet, vars } from '@styles';

export const entertainmentSection = style([
	{
		marginTop: 50,
		marginBottom: 62,
		width: '100%',
		maxWidth: 920,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: 30,
		paddingRight: 30,
		boxSizing: 'border-box',
	},
	tablet({
		paddingLeft: 0,
		paddingRight: 0,
	}),
]);

export const content = style([
	pageContent,
	tablet({
		maxWidth: 920,
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

export const quoteBlock = style({
	width: '100%',
	maxWidth: 644,
	margin: '0 auto 42px',
	backgroundColor: vars.color.mainBackground,
	borderRadius: 14,
	textAlign: 'center',
});

export const quoteText = style([
	{
		fontFamily: vars.font.ApercuProRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 20,
		lineHeight: '19px',
		textTransform: 'uppercase',
		color: vars.color.brand,
		margin: 0,
	},
	tablet({
		fontSize: 35,
		lineHeight: 1,
	}),
]);

export const quoteLineBold = style({
	fontFamily: vars.font.CeraCondensedCYBold,
});

export const quoteBlockWrapper = style([
	{
		padding: '40px 30px 0',
		maxWidth: 920,
		margin: '0 auto',
	},
	tablet({
		padding: '60px 30px 0',
	}),
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

export const galleryGrid = style([
	{
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: 12,
		marginTop: 24,
	},
	tablet({
		gridTemplateColumns: 'repeat(3, 1fr)',
	}),
]);

export const galleryItem = style({
	position: 'relative',
	paddingBottom: '100%',
	borderRadius: 14,
	overflow: 'hidden',
});

export const ourBaseSection = style({
	marginTop: 40,
});

export const ourBaseWrapper = style([
	{
		display: 'flex',
		flexDirection: 'column',
		marginTop: 18,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginTop: 30,
		gap: 48,
	}),
]);

export const ourBaseDescription = style({
	fontFamily: vars.font.ApercuProRegular,
	fontSize: 18,
	lineHeight: '24px',
	color: vars.color.black,
});

export const ourBaseFeatures = style([
	{
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(2, 1fr)',
		columnGap: 10,
		rowGap: 28,
		marginTop: 24,
		flexShrink: 0,
	},
	tablet({
		marginTop: 0,
	}),
]);

export const ourBaseFeatureItem = style([
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	tablet({
		flexDirection: 'row',
	}),
]);

export const ourBaseFeatureTitle = style([
	{
		fontFamily: vars.font.CeraCondensedCYMedium,
		fontSize: 16,
		lineHeight: '16px',
		textAlign: 'center',
		textTransform: 'uppercase',
		color: hexToRgba('#000', 0.5),
		whiteSpace: 'pre-line',
		marginTop: 12,
	},
	tablet({
		marginTop: 0,
		marginLeft: 16,
		textAlign: 'left',
	}),
]);

export const placeListMobile = style({
	overflow: 'hidden',
	width: '100%',
	paddingLeft: 30,
	marginTop: 30,
});

export const placeListContainer = style({
	display: 'flex',
});

export const placeListTablet = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	columnGap: 14,
	rowGap: 33,
	marginTop: 60,
});

export const travelBlockWrapper = style([
	{
		position: 'relative',
		zIndex: 0,
		width: '100vw',
		marginLeft: 'calc(-50vw + 50%)',
		marginTop: 40,
		overflow: 'visible',
		height: 300,
	},
	tablet({
		height: 'auto',
	}),
]);

export const travelBlock = style([
	{
		display: 'block',
		position: 'relative',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		backgroundColor: vars.color.mainBackground,
	},
	tablet({
		height: 640,
	}),
]);

export const travelBlockLeft = style([
	{
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		backgroundImage: 'url(/images/manjerok/raindeers1.png)',
		backgroundSize: 'cover',
		zIndex: 0,
		transform: 'none',
		opacity: 0.3,
		mixBlendMode: 'multiply',
	},
	tablet({
		top: '50%',
		bottom: 0,
		width: '44%',
		height: 320,
		transform: 'translateY(-50%)',
	}),
]);

export const travelBlockCenter = style([
	{
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		transform: 'none',
		zIndex: 1,
		backgroundImage: 'url(/images/manjerok/horse.png)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
	tablet({
		left: '50%',
		top: '50%',
		bottom: 0,
		width: 335,
		height: 335,
		transform: 'translate(-50%, -50%)',
	}),
]);

export const travelBlockRight = style([
	{
		display: 'none',
	},
	tablet({
		display: 'block',
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0,
		width: '44%',
		backgroundImage: 'url(/images/manjerok/raindeers1.png)',
		backgroundSize: 'cover',
		zIndex: 0,
		opacity: 0.3,
		mixBlendMode: 'multiply',
	}),
]);

