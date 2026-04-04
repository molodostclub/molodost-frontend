import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 746,
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

export const sectionTitle = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 20,
  textTransform: 'uppercase',
  marginTop: 32,
});

export const priceRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  padding: '8px 0',
});

export const priceLabel = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 16,
});

export const priceValue = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 16,
});

export const redTag = style({
  background: vars.color.brand,
  color: vars.color.white,
  padding: '4px 12px',
  borderRadius: 20,
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 12,
  textTransform: 'uppercase',
  display: 'inline-block',
  marginTop: 8,
});

export const description = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 16,
  lineHeight: 22,
  marginTop: 12,
});
