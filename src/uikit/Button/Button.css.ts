import { vars } from '@styles';

import { style, styleVariants } from '@vanilla-extract/css';

const HEIGHT = 43;
const BORDER_WIDTH = 3;

export const buttonContainer = style({
  width: 84,
  height: 30,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

export const buttonBorder = style({
  objectFit: 'contain',
  objectPosition: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
});

const buttonText = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 13,
  lineHeight: '13px',
  color: vars.color.brand,
  textTransform: 'uppercase',
});

export const contents = style([
  buttonText,
  {
    padding: '5px 7px',
  },
]);

export const twbContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'flex-start',
  height: HEIGHT,
});

export const twbColor = styleVariants({
  brand: {
    borderColor: vars.color.brand,
    color: vars.color.brand,
    stroke: vars.color.brand,
  },
  white: {
    borderColor: vars.color.white,
    color: vars.color.white,
    stroke: vars.color.white,
  },
});

const ARROW_LINE_LENGTH = '77.7%';
const arrowLinePropsRight = {
  content: '""' as const,
  position: 'absolute' as const,
  width: `${BORDER_WIDTH}px`,
  height: ARROW_LINE_LENGTH,
  backgroundColor: 'currentColor',
  right: -16,
  transformOrigin: 'right center',
};

const arrowLinePropsLeft = {
  content: '""' as const,
  position: 'absolute' as const,
  width: `${BORDER_WIDTH}px`,
  height: ARROW_LINE_LENGTH,
  backgroundColor: 'currentColor',
  left: -16,
  transformOrigin: 'left center',
};

const ARROW_PADDING = '0.9em';

export const twbArrowCss = styleVariants({
  left: {
    paddingLeft: ARROW_PADDING,
    selectors: {
      '&::after': { ...arrowLinePropsLeft, top: '62%', transform: 'translateY(-100%) rotate(45deg)' },
      '&::before': { ...arrowLinePropsLeft, top: '40%', transform: 'translateY(0) rotate(-45deg)' },
    },
  },
  right: {
    paddingRight: ARROW_PADDING,
    selectors: {
      '&::after': { ...arrowLinePropsRight, top: '62%', transform: 'translateY(-100%) rotate(-45deg)' },
      '&::before': { ...arrowLinePropsRight, top: '40%', transform: 'translateY(0) rotate(45deg)' },
    },
  },
});

const twbRectangleBase = style({
  position: 'relative',
  padding: '6px 14px',
  width: 'fit-content',
  borderStyle: 'solid',
});

export const twbRectangle = styleVariants({
  left: [
    buttonText,
    twbRectangleBase,
    {
      marginLeft: 18,
      borderWidth: `${BORDER_WIDTH}px ${BORDER_WIDTH}px ${BORDER_WIDTH}px 0`,
    },
  ],
  right: [
    buttonText,
    twbRectangleBase,
    {
      marginRight: 18,
      borderWidth: `${BORDER_WIDTH}px 0 ${BORDER_WIDTH}px ${BORDER_WIDTH}px`,
    },
  ],
});

export const twbSize = styleVariants({
  small: {
    fontSize: 13,
    lineHeight: '13px',
  },
  large: {
    fontSize: 25,
    lineHeight: '25px',
  },
});

export const twbLogo = style({
  paddingLeft: 3,
  paddingRight: 3,
  fontSize: 40,
});
