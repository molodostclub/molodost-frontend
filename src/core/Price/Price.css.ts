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
  listStyleType: 'none',
});
export const listItem = style({
  position: 'relative',
  paddingLeft: 15,
  ':before': {
    content: '',
    position: 'absolute',
    display: 'block',
    top: 11,
    left: 4,
    width: 3,
    height: 3,
    borderRadius: '50%',
    backgroundColor: 'black',
  },
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

export const separator = style([
  {
    margin: '30px 0',
    backgroundColor: vars.color.brand,
    height: 1,
    width: '100%',
  },
]);

export const festivalItem = style({
  width: '100%',
  maxWidth: '350px',
});

export const toursRightCol = style([
  { width: '100%', flexShrink: 0, },
  tablet({ width: '191px' }),
]);
