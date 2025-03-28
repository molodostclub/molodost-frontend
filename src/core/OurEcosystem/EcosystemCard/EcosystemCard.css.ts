import { style } from '@vanilla-extract/css';

import { desktop, tablet, vars } from '@styles';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
});

export const cardCover = style([
  {
    position: 'relative',
    borderRadius: 14,
    filter:
      'drop-shadow(0px 9px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.12))',
    width: '100%',
    height: 287,
  },
  desktop({
    width: 411,
  }),
]);

export const cardCoverImage = style({
  borderRadius: 'inherit',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
});

export const cardName = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  textTransform: 'uppercase',
  fontSize: 25,
  lineHeight: '25px',
  color: vars.color.brand,
  marginTop: 30,
});

export const cardDescription = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 16,
  lineHeight: '18px',
  color: vars.color.black,
  marginTop: 30,
});
