import { tablet, vars } from '@/styles';
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
    marginTop: '40px',
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontWeight: 500,
    fontSize: 50,
    lineHeight: '45px',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  tablet({}),
]);

export const pageTitle = style([
  {
    width: '100%',
    color: vars.color.brand,
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontWeight: 500,
    fontSize: 50,
    lineHeight: '45px',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  tablet({}),
]);

const textBase = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  fontSize: 20,
  lineHeight: '24px',
  textTransform: 'uppercase',
});

export const accentText = style([
  textBase,
  {
    color: vars.color.brand,
  },
]);

export const introBlock = style({
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
  textTransform: 'none',
});

export const introBold = style([
  introBlock,
  {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: 16,
  },
]);

export const introRegular = style([
  introBlock,
  {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: 16,
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
    fontSize: 20,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);
export const noteBlack = style([
  {
    fontSize: 20,
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
    fontSize: 20,
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

export const contactFormIntro = style({
  fontSize: 20,
  color: vars.color.black,
  fontFamily: vars.font.ApercuProRegular,
  marginBottom: 24,
  textTransform: 'none',
});

export const contactFormCta = style({
  marginTop: 24,
});

export const redBorder = style([
  {
    border: `2px solid ${vars.color.brand}`,
    borderRadius: 15,
    padding: 24,
    backgroundColor: 'transparent',
  },
  tablet({}),
]);

export const sectionHeading = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  fontSize: 50,
  lineHeight: '45px',
  color: vars.color.brand,
  textTransform: 'uppercase',
  textAlign: 'left',
});

export const pricingBox = style([
  {
    border: `2px solid ${vars.color.brand}`,
    padding: '20px 24px',
    marginBottom: 20,
  },
  tablet({
    padding: '24px 28px',
  }),
]);

export const pricingLine = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  fontSize: 20,
  lineHeight: '20px',
  color: vars.color.brand,
  textTransform: 'uppercase',
});

export const descriptionCenter = style([
  {
    fontSize: 20,
    textAlign: 'center',
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
    textTransform: 'uppercase',
  },
  tablet({}),
]);

export const descriptionAttention = style([
  {
    fontSize: 20,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);

export const checkBoxNote = style([
  {
    fontSize: 20,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
  },
]);

export const labelDescription = style({
  fontSize: 20,
  color: vars.color.gray,
  fontFamily: vars.font.ApercuProRegular,
});

export const ctaBtn = style({
  width: '100%',
  borderRadius: 30,
  minHeight: 60,
  border: 'none',
  fontSize: 20,
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
  fontSize: 20,
  lineHeight: '14px',
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
  textDecoration: 'underline',
});

export const modalDescription = style({
  fontSize: 20,
  lineHeight: 1.2,
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
});

export const navButtonsBottom = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: 40,
    marginBottom: 20,
  },
  tablet({
    flexDirection: 'row',
    gap: '16px',
  }),
]);

export const navButton = style([
  {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '40px',
    border: `2px solid ${vars.color.brand}`,
    backgroundColor: 'transparent',
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 20,
    color: vars.color.brand,
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    ':hover': {
      backgroundColor: vars.color.brand,
      color: vars.color.white,
    },
  },
  tablet({
    fontSize: 20,
  }),
]);

export const navButtonActive = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
});
