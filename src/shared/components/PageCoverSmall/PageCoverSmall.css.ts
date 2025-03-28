import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const container = style([
  {
    margin: '30px',
    filter: 'drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.15))',
  },
  tablet({
    margin: '30px auto',
    maxWidth: 1200,
    width: '100%', 
  }),
]);

const imageBase = style([
  {
    maxWidth: '100%',
    height: 287,
    borderRadius: 14,
    filter:
      'drop-shadow(0px 9px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.12))',
  },
  tablet({
    height: '70vh',
    minHeight: 560,
    maxHeight: 650,
    borderRadius: 43,
  }),
]);

export const imageWrap = style([
  imageBase,
  {
    position: 'relative',
  },
]);

export const image = style({
  borderRadius: 'inherit',
  objectFit: 'cover',
});

export const cover = style([
  imageBase,
  {
    backgroundColor: 'black',
  },
  tablet({
    borderRadius: 43,
  }),
]);
