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

export const title = style([
  {
    textAlign: 'center',
    fontFamily: vars.font.CeraCompactCYRegular,
    textTransform: 'uppercase',
    color: vars.color.brand,
    fontSize: 20,
    lineHeight: 1,
    maxWidth: 700,
  },
  tablet({
    fontSize: 28,
  }),
]);

export const accent = style({
  fontFamily: vars.font.CeraCondensedCYBold,
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
