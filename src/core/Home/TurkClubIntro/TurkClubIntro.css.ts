import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style([
  {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
  },
  tablet({
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
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

export const accentText = style({
  color: vars.color.brand,
  textDecoration: 'none',
  fontWeight: 'inherit',
});

export const description = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '22px',
    color: vars.color.black,
    marginTop: 20,
  },
  tablet({
    fontSize: 18,
    lineHeight: '24px',
  }),
]);
