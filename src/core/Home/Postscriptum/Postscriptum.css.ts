import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const section = style([
  {
    padding: '40px 30px',
  },
  tablet({
    width: '100%',
    maxWidth: 825,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '60px 0 0 0',
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

export const text = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '20px',
    color: vars.color.black,
    marginTop: 24,
  },
  tablet({
    fontSize: 20,
    lineHeight: '24px',
  }),
]);

export const brandText = style({
  color: vars.color.brand,
});
