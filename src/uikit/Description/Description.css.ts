import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const description = style([
  {
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '18px',
  },
  tablet({
    fontSize: 22,
    lineHeight: '24px',
  }),
]);

export const sizeSmallOnDesktop = style([
  tablet({
    fontSize: 18,
    lineHeight: '18px',
  }),
]);

export const colorBrand = style({ color: vars.color.brand });

export const inlineBlock = style({ display: 'inline-block' });

export const bold = style({ fontWeight: 700, fontFamily: vars.font.CeraCondensedCYBold });

export const uppercase = style({ textTransform: 'uppercase' });
