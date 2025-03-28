import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const container = style([
  {
    margin: '30px 30px 0 30px',
    filter: 'drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.15))',
  },
  tablet({ margin: 0 }),
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
  }),
]);

export const videoWrap = style([
  imageBase,
  {
    position: 'relative',
    maxHeight: '650px',
    overflow: 'hidden',
  },
]);

export const video = style({
  borderRadius: 'inherit',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const cover = style([
  imageBase,
  {
    backgroundColor: 'black',
  },
  tablet({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
  }),
]);
