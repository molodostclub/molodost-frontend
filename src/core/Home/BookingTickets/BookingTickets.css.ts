import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style([
  {
    padding: '0 30px',
    marginTop: 40,
    maxWidth: 825,
  },
  tablet({
    marginLeft: 30,
  }),
]);

export const heading = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 32,
    textTransform: 'uppercase',
    color: vars.color.black,
    lineHeight: 1,
  },
  tablet({
    fontSize: 48,
  }),
]);

export const description = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 16,
  lineHeight: '22px',
  color: vars.color.black,
  marginTop: 16,
});

export const cardsGrid = style([
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
  padding: '20px 24px',
  borderRadius: 14,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  flex: 1,
  textDecoration: 'none',
});

export const cardTitle = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 20,
  textTransform: 'uppercase',
  color: vars.color.white,
});

export const cardSubtitle = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 14,
  color: vars.color.white,
});

export const cardBlue = style({
  backgroundColor: vars.color.blue,
});

export const cardGreen = style({
  backgroundColor: vars.color.green,
});

export const cardRed = style({
  backgroundColor: vars.color.brand,
});
