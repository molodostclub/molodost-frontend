import { style } from '@vanilla-extract/css';

import { vars } from '@styles';

export const logo = style({
  position: 'relative',
  marginRight: 12,
});

export const logoText = style({
  position: 'absolute',
  top: 0,
  left: 6,
  fontFamily: vars.font.CeraCondensedCYRegular,
  fontSize: 40,
  lineHeight: '40px',
  textTransform: 'uppercase',
  color: vars.color.brand,
});
