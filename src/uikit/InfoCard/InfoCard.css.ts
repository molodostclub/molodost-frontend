import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style({
  position: 'relative',
  width: '100%',
  maxWidth: 825,
  height: 482,
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

export const smallHeight = style([
  {
    height: 315,
  },
  tablet({
    height: 482,
  })
]);

export const cardImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 'inherit',
  zIndex: -2,
});

export const shade = style({
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: 276,
  left: 0,
  bottom: 0,
  background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.8,
  transform: 'matrix(1, 0, 0, -1, 0, 0)',
  borderRadius: 'inherit',
});

export const shadeSecond = style({
  position: 'absolute',
  zIndex: -2,
  width: '100%',
  height: '100%',
  left: 0,
  bottom: 0,
  background: 'linear-gradient(164deg, #000 24.48%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.5,
  transform: 'matrix(1, 0, 0, -1, 0, 0)',
  borderRadius: 'inherit',
});

export const cardContents = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '26px 26px 32px 26px',
  maxWidth: 475,
  boxSizing: 'content-box',
});

export const title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 50,
    lineHeight: '45px',
    textTransform: 'uppercase',
    color: vars.color.white,
    marginBottom: 12,
  },
  tablet({
    marginBottom: 30,
  }),
]);

export const smallTitle = style([
  {
    fontSize: 30,
    lineHeight: '35px',
    marginBottom: 0,
  },
  tablet({
    marginBottom: 0,
    fontSize: 45,
    lineHeight: '50px',
  }),
]);

export const description = style([
  {
    maxWidth: 375,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 13,
    lineHeight: '14px',
    color: vars.color.white,
    marginBottom: 25,
  },
  tablet({
    fontSize: 20,
    lineHeight: '24px',
    marginBottom: 30,
  }),
]);
