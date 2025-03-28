import { tablet, vars } from '@/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style([
  {
    width: '100%',
    marginBottom: 30,
  },
  tablet({
    width: 406,
    marginBottom: 0,
  }),
]);

export const content = style({
  position: 'relative',
  display: 'flex',
});

export const ImageSize = {
  width: 345,
  height: 279,
};

export const carousel = styleVariants({
  wrapper: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: '18px',
  },
  container: [
    {
      display: 'flex',
      margin: '0 15px',
      gap: 10,
    },
    tablet({
      margin: 0,
    }),
  ],
  item: [
    {
      width: ImageSize.width,
      height: ImageSize.height,
    },
    tablet({
      flex: '0 0 100%',
      minWidth: 0,
    }),
  ],
  imageContainer: [
    { height: ImageSize.height, width: 'inherit' },
    tablet({ width: '100%' }),
  ],
  videoContainer: [
    { height: ImageSize.height, width: 'inherit' },
    tablet({ width: '100%' }),
  ],
  video: [
    {
      objectFit: 'cover',
      height: ImageSize.height,
      width: 'inherit'
    },
    tablet({ width: '100%' }),
  ],
  image: {
    width: '100%',
    height: 'inherit',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: 18,
  },
  dots: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    gap: 10,
    margin: '12px auto 14px',
  },
});

export const dot = style({
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: vars.color.gray,
});
export const dotSelected = style([
  dot,
  {
    backgroundColor: vars.color.brand,
  },
]);

export const title = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 25,
  lineHeight: '25px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

export const parameters = style([
  {
    display: 'flex',
    marginTop: 20,
    gap: 35,
  },
]);

export const parameter = style([
  {
    display: 'flex',
    gap: 18,
  },
]);

export const paramName = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 18,
  lineHeight: '18px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

export const paramValue = style([
  paramName,
  {
    color: vars.color.green,
  },
]);

export const dtBase = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 14,
  lineHeight: '14px',
  color: vars.color.gray,
});

export const description = style([
  dtBase,
  {
    whiteSpace: 'pre-wrap',
    width: 262,
    marginTop: 12,
  },
]);

export const greenText = style([
  dtBase,
  {
    color: vars.color.green,
  },
]);

export const capacity = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: 15,
});

export const capacityIcon = style({
  marginRight: 5,
});

export const areaInfo = style([
  greenText,
  {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
]);

const arrowButtonBase = style([
  {
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    width: 32,
    height: 32,
    borderRadius: 15,
    backgroundColor: vars.color.white,
    opacity: 0.9,
    border: 'none',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.1)',
      },
    },
  },
  tablet({
    display: 'flex',
  }),
]);

export const arrowButton = styleVariants({
  left: [
    arrowButtonBase,
    {
      left: 20,
    },
  ],
  right: [
    arrowButtonBase,
    {
      right: 20,
    },
  ],
});

const arrowBase = style({
  width: 10,
  height: 10,
  border: `solid ${vars.color.brand}`,
  borderWidth: '0 2px 2px 0',
});

export const arrow = styleVariants({
  left: [
    arrowBase,
    {
      transform: 'rotate(135deg)',
      marginLeft: 5,
    },
  ],
  right: [
    arrowBase,
    {
      transform: 'rotate(-45deg)',
      marginRight: 5,
    },
  ],
});
