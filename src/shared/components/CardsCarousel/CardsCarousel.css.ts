import { desktop, hexToRgba, tablet, vars } from '@/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const list = style([
  {
    overflow: 'hidden',
    width: '100%',
    padding: '0 30px',
    marginTop: 15,
    position: 'relative',
  },
  desktop({ padding: 0 }),
]);

export const listContainer = style({
  display: 'flex',
  gap: 20,
});

export const carousel = style([
  {
    position: 'relative',
  },
  desktop({ margin: '0 30px' }),
]);

const arrowButtonBase = style([
  {
    display: 'none',
    background: vars.color.white,
    boxShadow: '0px 11px 15px rgba(0, 0, 0, 0.04)',
    width: 75,
    height: 75,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    zIndex: 100,
  },
  tablet({ display: 'none' }),
  desktop({ display: 'flex !important' }),
]);

export const arrowButton = styleVariants({
  left: [
    arrowButtonBase,
    {
      left: -30,
    },
    desktop({
      left: -105,
    }),
  ],
  right: [
    arrowButtonBase,
    {
      left: 'calc(100% - 45px)',
    },
    desktop({
      left: 'unset',
      right: -105,
    }),
  ],
});

export const arrowLine = styleVariants({
  left: [
    {
      transform: 'scale(-1, -1)',
      transformOrigin: 'center',
    },
  ],
  right: [{}],
});
