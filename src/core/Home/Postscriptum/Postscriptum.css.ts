import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

const contentBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const container = styleVariants({
  top: [
    {
      width: '100%',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 60,
      paddingBottom: 66,
      marginTop: 45,
      backgroundColor: vars.color.brand,
    },
    contentBase,
  ],
  bottom: [
    {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 30,
      paddingRight: 30,
    },
    tablet({
      paddingTop: 80,
      paddingBottom: 80,
    }),
  ],
});

export const content = style([
  contentBase,
  tablet({
    maxWidth: 825,
  }),
]);

export const description = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    color: vars.color.white,
    fontSize: 25,
    lineHeight: '28px',
  },
  tablet({
    fontSize: 20,
    lineHeight: '24px',
    textAlign: 'center',
  }),
]);

export const title = style({
  textAlign: 'center',
  fontFamily: vars.font.CeraCondensedCYBold,
  textTransform: 'uppercase',
  color: vars.color.white,
  fontSize: 50,
  lineHeight: '39px',
  maxWidth: 400,
  marginTop: 90,
});

export const caption = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    color: vars.color.white,
    fontSize: 16,
    lineHeight: '18px',
    marginTop: 72,
  },
  tablet({
    fontSize: 20,
    lineHeight: '24px',
    textAlign: 'center',
  }),
]);

export const quote = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  color: vars.color.brand,
  fontSize: 50,
  lineHeight: '49px',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const quoteAuthor = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 13,
  lineHeight: '14px',
  textAlign: 'center',
  color: vars.color.brand,
  marginTop: 8,
});
