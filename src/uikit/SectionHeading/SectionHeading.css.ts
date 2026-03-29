import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const heading = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  textTransform: 'uppercase',
});

export const headingSize = styleVariants({
  // (L)arge
  L: [
    {
      fontSize: 30,
      lineHeight: '30px',
    },
    tablet({
      fontSize: 50,
      lineHeight: '45px',
    })
  ],
  // (M)edium
  M: [
    {
      fontSize: 25,
      lineHeight: '25px',
    },
    tablet({
      fontSize: 35,
      lineHeight: '35px',
    })
  ],
  // (S)mall
  S: [
    {
      fontSize: 20,
      lineHeight: '20px',
    },
    tablet({
      fontSize: 23,
      lineHeight: '23px',
    })
  ],
});

export const headingColor = styleVariants({
  black: {
    color: vars.color.black,
  },
  brand: {
    color: vars.color.brand,
  },
});

export const headingWeight = styleVariants({
  bold: {
    fontWeight: 700,
  },
  medium: {
    fontWeight: 500,
  },
});

export const headingAccented = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 700,
  fontSize: 23,
  lineHeight: '23px',
  textTransform: 'uppercase',
  color: vars.color.brand,
});

export const sectionMoreLink = style({
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  alignSelf: 'flex-start',
});

export const sectionMoreLabel = style({
  fontSize: 13,
  lineHeight: '13px',
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 12,
  paddingRight: 32,
  whiteSpace: 'nowrap',
  color: vars.color.brand,
});
