import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const containerBase = style([
  {
    marginTop: 45,
    marginLeft: 30,
    marginRight: 30,
  },
  tablet({
    maxWidth: 825,
  }),
]);

export const container = styleVariants({
  top: [
    containerBase,
    tablet({
      marginTop: 68,
    }),
  ],
  bottom: [
    containerBase,
    tablet({
      marginTop: 105,
    }),
  ],
});

export const imageWrapper = style([
  {
    position: 'relative',
    width: '100%',
    height: 285,
    marginTop: 12,
    borderRadius: vars.borderRadius.image,
    filter:
      'drop-shadow(0px 9px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.12))',
  },
  tablet({
    height: 420,
  }),
]);

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const descriptionWrapper = style({
  marginTop: 27,
});
