import { style } from '@vanilla-extract/css';

import { desktop, pageContent, tablet, vars } from '@styles';
import { colorBrand } from '@/uikit/Description/Description.css';
import { fonts } from '@/styles/theme.css';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 820,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const textRed96 = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    textTransform: 'uppercase',
    color: vars.color.brand,
    fontSize: 64,
  },
  tablet({
    fontSize: 96,
  }),
]);

export const textRed55 = style([
  {
    color: vars.color.brand,
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    fontSize: 32,
  },
  tablet({
    fontSize: 55,
  }),
]);

export const textRed40 = style([
  {
    fontSize: 22,
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 40,
  }),
]);

export const textUnderline = style([
  {
    textDecoration: 'underline',
  }
])

export const textRed36Medium = style([
  {
    fontSize: 18,
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 36,
  }),
]);

export const textBlack40 = style([
  {
    fontSize: 24,
    fontFamily: vars.font.CeraCondensedCYBold,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 40,
  }),
]);

export const textBlack40Medium = style([
  {
    fontSize: 22,
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 40,
  }),
]);

export const textBlack36 = style([
  {
    fontSize: 20,
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    lineHeight: 1.2,
    color: vars.color.black,
  },
  tablet({
    fontSize: 36,
  }),
]);

export const textRed50Bold = style([
  {
    fontSize: 22,
    fontFamily: vars.font.CeraCondensedCYBold,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 50,
  }),
]);

export const textCenter = style([
  {
    textAlign: 'center',
    lineHeight: 1.2,  
    maxWidth: 200,
    margin: '0 auto'
  },
  tablet({
    textAlign: 'center',
    maxWidth: 'unset',
    lineHeight: 1.2,
  }),
]);

export const paragraph = style([
  {
    margin: '28px 0',
  },
  tablet({
    margin: '56px 0',
  }),
]);

export const katalkaColumns = style([
  {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 12,
  },
  tablet({
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  }),
]);

export const katalkaColumnsReverse = style([
  {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  tablet({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  })
])

export const katalkaColumn = style([
  {
    position: 'relative',
  },
  tablet({
    position: 'relative',
  }),
]);

export const katalkaPriceRedHighlight = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    textTransform: 'uppercase',
    color: vars.color.brand,
    fontSize: 24,
  },

  tablet({
    fontSize: 50,
  }),
]);

export const katalkaImg = style([
  {
    boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: 14,
    objectFit: 'cover',
    width: '100%',
  },
  tablet({
    boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.1), 0px 24px 24px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: 14,
    objectFit: 'cover',
    width: '100%',
  }),
]);

export const authorImg = style([
  {
    position: 'relative',
    top: -24,
    left: 'calc(50% - 32px)',
    width: 170,
  },
  tablet({
    position: 'absolute',
    top: '44px',
    left: '126px',
    width: 'auto'
  }),
]);

export const katalkaList = style([
  {
    paddingLeft: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    paddingTop: 20,
  },
  tablet({
    paddingLeft: 50,
    paddingTop: 30,
  }),
]);

export const katalkaListItem = style([
  {
    fontSize: 18,
    color: vars.color.black,
    lineHeight: 1.2,
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({
    fontSize: 22,
  }),
]);
