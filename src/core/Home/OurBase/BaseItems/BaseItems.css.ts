import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const item = style([
  {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginRight: 30,
  },
  tablet({
    marginRight: 0,
  }),
]);

export const itemImageWrapper = style([
  {
    position: 'relative',
    width: 262,
    height: 204,
    borderRadius: 14,
  },
  tablet({
    width: '100%',
    height: 287,
  }),
]);

export const itemImage = style({
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  borderRadius: 'inherit',
});

export const itemTitle = style({
  marginTop: 26,
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 25,
  lineHeight: '25px',
  textTransform: 'uppercase',
  color: vars.color.brand,
});

export const itemDescription = style([
  {
    marginTop: 14,
    maxWidth: 240,
    fontFamily: vars.font.CeraCompactCYRegular,
    fontSize: 13,
    lineHeight: '14px',
    color: vars.color.black,
  },
  tablet({
    maxWidth: 'none',
  }),
]);
