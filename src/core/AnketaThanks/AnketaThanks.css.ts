import { style } from '@vanilla-extract/css';

import { vars } from '@styles';

export const content = style({
  textAlign: 'center',
  padding: '60px 30px',
  maxWidth: 600,
  margin: '0 auto',
});

export const heading = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 36,
  textTransform: 'uppercase',
  fontStyle: 'italic',
});

export const description = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 18,
  lineHeight: 28,
  marginTop: 20,
});

export const nameAccent = style({
  color: vars.color.brand,
  fontStyle: 'italic',
});
