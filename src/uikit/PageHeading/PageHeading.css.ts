import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const heading = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 35,
    lineHeight: '35px',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  tablet({
    fontSize: 50,
    lineHeight: '45px',
  }),
]);

export const colorBrand = style({
  color: vars.color.brand,
});
