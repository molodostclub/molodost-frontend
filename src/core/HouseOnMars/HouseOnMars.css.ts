import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const halfWidthInTablet = style([
  { width: '100%' },
  tablet({ width: '50%' }),
]);

export const imageWrapper = style([
  { borderRadius: 15 },
  tablet({ borderRadius: 25 }),
]);

export const image = style({
  // @ts-ignore
  position: 'static !important',
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  minHeight: 315,
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const border = style({
  height: 1,
  width: '100%',
  backgroundColor: vars.color.brand,
});

export const list = style({
  marginLeft: 20,
});
export const listItem = style({
  marginBottom: 20,
  ':last-child': {
    marginBottom: 0,
  }
});

export const priceItem = style([
  {
    width: '50%',
    maxWidth: 'calc(50% - 10px)',
  },
  tablet({
    maxWidth: 400,
  })
]);

export const attention = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 22,
    lineHeight: 1,
    color: vars.color.black,
    textTransform: 'uppercase',
    marginTop: 30
  },
  tablet({
    fontSize: 26,
  }),
]);

export const attentionRed = style([
  {
    color: vars.color.brand,
  },
  tablet({
  }),
]);