import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const priceItem = style({
  width: '100%',
  maxWidth: '350px',
});
export const personsCount = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: '14px',
  color: vars.color.gray,
  marginLeft: 5,
});

