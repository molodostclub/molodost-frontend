import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const ceraFeat = "'ss01' on, 'salt' on";
const ceraFeatSalt = "'salt' on";

export const section = style({
	width: '100%',
	boxSizing: 'border-box',
});

/** ТУРБЮРО И АВТОПРОКАТ — Cera 700, mobile 25px, tablet 40px */
export const heading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 25,
		lineHeight: '28px',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraFeat,
		color: vars.color.black,
		margin: 0,
		marginBottom: 24,
	},
	tablet({
		fontSize: 40,
		lineHeight: '40px',
	}),
]);

export const topRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 40,
	}),
]);

export const topColLeft = style([
	{
		flex: 1,
		minWidth: 0,
	},
	tablet({
		flex: '1 1 50%',
	}),
]);

export const topColRight = style([
	{
		flex: 1,
		minWidth: 0,
	},
	tablet({
		flex: '1 1 50%',
	}),
]);

/** Вступление — Cera 400, mobile 18px, tablet 24px */
export const introText = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 18,
		lineHeight: '22px',
		fontFeatureSettings: ceraFeatSalt,
		color: vars.color.black,
		margin: 0,
		marginBottom: 16,
	},
	tablet({
		fontSize: 24,
		lineHeight: '24px',
	}),
]);

/** сопровождающие — Cera 700, mobile 20px, tablet 25px */
export const subheading = style([
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 20,
		lineHeight: '24px',
		display: 'flex',
		alignItems: 'center',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraFeat,
		color: vars.color.brand,
		margin: 0,
		marginBottom: 16,
	},
	tablet({
		fontSize: 25,
		lineHeight: '25px',
	}),
]);

export const guideItem = style({
	marginBottom: 16,
});

/** Попутчик — Cera 700, 18px, uppercase, black */
export const guideItemTitle = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 18,
	lineHeight: '18px',
	textTransform: 'uppercase',
	fontFeatureSettings: ceraFeat,
	color: vars.color.black,
	margin: 0,
	marginBottom: 4,
});

/** Цена — Cera 700, 18px, uppercase, #E03823 */
export const guideItemPrice = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontStyle: 'normal',
	fontWeight: 700,
	fontSize: 18,
	lineHeight: '18px',
	textTransform: 'uppercase',
	fontFeatureSettings: ceraFeat,
	color: vars.color.brand,
});

/** Описание гида — Cera 400, 15px, #E03823 */
export const guideItemDesc = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontStyle: 'normal',
	fontWeight: 400,
	fontSize: 15,
	lineHeight: '14px',
	fontFeatureSettings: ceraFeat,
	color: vars.color.brand,
	margin: 0,
	marginTop: 4,
});

/** Широкая картинка: отступ до 30px, отступ после 40px, radius 40px, drop-shadow */
export const wideImage = style({
	width: '100%',
	height: 'auto',
	borderRadius: 40,
	objectFit: 'cover',
	display: 'block',
	marginTop: 30,
	marginBottom: 40,
	filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});

/** Текст после картинки — mobile 18px, tablet 24px */
export const middleText = style([
	{
		fontFamily: vars.font.CeraCondensedCYRegular,
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: 18,
		lineHeight: '22px',
		fontFeatureSettings: ceraFeatSalt,
		color: vars.color.black,
		margin: 0,
		marginBottom: 34,
	},
	tablet({
		fontSize: 24,
		lineHeight: '24px',
	}),
]);

export const bottomRow = style([
	{
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
	},
	tablet({
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 40,
	}),
]);

export const bottomColLeft = style([
	{
		flex: 1,
		minWidth: 0,
	},
	tablet({
		flex: '1 1 50%',
	}),
]);

export const bottomColRight = style([
	{
		flex: 1,
		minWidth: 0,
	},
	tablet({
		flex: '1 1 50%',
	}),
]);

export const priceTable = style({
	width: '100%',
	borderCollapse: 'collapse',
});

/** Цена в таблице — Cera 700, 18px, uppercase */
export const priceTableHeader = style({
	fontFamily: vars.font.CeraCondensedCYBold,
	fontSize: 18,
	lineHeight: '18px',
	textTransform: 'uppercase',
	fontFeatureSettings: ceraFeat,
	color: vars.color.brand,
	textAlign: 'left',
	paddingBottom: 8,
	paddingRight: 16,
});

export const priceTableRow = style({
	verticalAlign: 'top',
});

export const priceTableCell = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 15,
	lineHeight: '14px',
	fontFeatureSettings: ceraFeat,
	color: vars.color.black,
	paddingBottom: 12,
	paddingRight: 16,
});

/** Название услуги — Cera 700, 18px, black */
export const priceTableCellTitle = style([
	priceTableCell,
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 18,
		lineHeight: '18px',
		textTransform: 'uppercase',
		color: vars.color.black,
	},
]);

/** Цена — Cera 700, 18px, #E03823 */
export const priceTableCellAccent = style([
	priceTableCell,
	{
		fontFamily: vars.font.CeraCondensedCYBold,
		fontSize: 18,
		lineHeight: '18px',
		textTransform: 'uppercase',
		fontFeatureSettings: ceraFeat,
		color: vars.color.brand,
	},
]);

export const priceNote = style({
	fontFamily: vars.font.CeraCondensedCYRegular,
	fontSize: 15,
	lineHeight: '14px',
	fontFeatureSettings: ceraFeat,
	color: vars.color.brand,
	display: 'block',
	marginTop: 2,
});

export const narrowImage = style({
	width: '100%',
	height: 'auto',
	maxHeight: 400,
	borderRadius: 40,
	objectFit: 'cover',
	display: 'block',
	filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});
