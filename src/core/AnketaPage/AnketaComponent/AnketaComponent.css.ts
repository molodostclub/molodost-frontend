import { tablet, vars } from '@/styles';
import { flexDirection } from '@/uikit/FlexContainer/FlexContainer.css';
import { style } from '@vanilla-extract/css';

export const formRow = style([
  {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  tablet({
    flexDirection: 'row',
    alignItems: 'flex-end',
  }),
]);
export const formRowChild = style([
  {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },
  tablet({
    flexDirection: 'row',
    alignItems: 'flex-end',
  }),
]);
export const fromCol = style([
  {
    width: '100%',
  },
  tablet({
    width: '50%',
  }),
]);

export const separatorText = style([
  {
    width: '100%',
    color: vars.color.brand,
    marginTop: '30px',
    fontSize: '30px',
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

export const pageTitle = style([
  {
    width: '100%',
    color: vars.color.brand,
    fontSize: '50px',
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

const textBase = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  fontSize: 25,
  lineHeight: '25px',
  textTransform: 'uppercase',
});

export const accentText = style([
  textBase,
  {
    color: vars.color.brand,
  },
]);

export const separatorLine = style([
  {
    width: '40%',
    background: vars.color.brand,
    height: '1px',
  },
  tablet({
    width: '400px',
  }),
]);

export const note = style([
  {
    display: 'block',
    fontSize: 16,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);
export const noteBlack = style([
  {
    fontSize: 16,
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);

export const noteRed = style([
  {
    color: vars.color.brand,
  },
  tablet({}),
]);

export const description = style([
  {
    fontSize: 18,
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

export const redBorder = style([
  {
    border: `1px solid ${vars.color.brand}`,
    padding: '20px',
  },
  tablet({}),
]);

export const descriptionCenter = style([
  {
    fontSize: 24,
    textAlign: 'center',
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

export const descriptionAttention = style([
  {
    fontSize: 18,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);

export const checkBoxNote = style([
  {
    fontSize: 16,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
]);

export const labelDescription = style({
  fontSize: 14,
  color: vars.color.gray,
  fontFamily: vars.font.ApercuProRegular,
});

export const ctaBtn = style({
  width: '100%',
  borderRadius: 30,
  minHeight: 60,
  border: 'none',
  fontSize: 24,
  lineHeight: 1,
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  fontFamily: vars.font.CeraCondensedCYRegular,
  textTransform: 'uppercase',
  cursor: 'pointer',
  scrollMarginTop: 300
});

export const linkButton = style({ 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
});

export const agreementLink = style({
  fontSize: 16,
  lineHeight: '14px',
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
  textDecoration: 'underline',
});

export const modalDescription = style({
  fontSize: 16,
  lineHeight: 1.2,
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
});
