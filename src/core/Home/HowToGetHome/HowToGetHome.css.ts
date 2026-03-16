import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style([
  {
    padding: '0 30px',
    marginTop: 40,
  },
  tablet({
    width: '100%',
    padding: 0,
    maxWidth: 825,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const heading = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: '30px',
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 50,
    lineHeight: '45px',
  }),
]);

export const description = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '22px',
    color: vars.color.black,
    marginTop: 16,
  },
  tablet({
    fontSize: 18,
    lineHeight: '24px',
  }),
]);

export const accentText = style({
  color: vars.color.brand,
  textDecoration: 'none',
});

export const accentLink = style({
  color: vars.color.brand,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const cardsRow = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 24,
  },
  tablet({
    flexDirection: 'row',
  }),
]);

export const card = style({
  flex: 1,
  backgroundColor: vars.color.white,
  borderRadius: 15,
  padding: '27px 27px 24px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 4.7px 14px rgba(0, 0, 0, 0.13)',
});

export const cardTitle = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 23,
  lineHeight: '22px',
  textTransform: 'uppercase',
  color: vars.color.brand,
});

export const cardText = style({
  fontFamily: vars.font.CeraCondensedCYRegular,
  fontSize: 13,
  lineHeight: '14px',
  color: vars.color.black,
  marginTop: 12,
});

export const cardTextSpaced = style({
  marginTop: 7,
});

export const cardButtons = style({
  display: 'flex',
  gap: 12,
  marginTop: 'auto',
  paddingTop: 20,
});

export const cardButton = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  borderRadius: 15,
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  textDecoration: 'none',
  textAlign: 'center',
  border: 'none',
  ':hover': {
    opacity: 0.85,
  },
});

export const btnMain = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 23,
  lineHeight: '22px',
  textTransform: 'uppercase',
});

export const btnSub = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 15,
  lineHeight: '15px',
});
