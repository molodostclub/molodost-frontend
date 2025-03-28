import { tablet, vars } from '@/styles';
import { flexSb } from '@/styles/uikit.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const item = style([
  {
    minWidth: 240,
    width: 240,
    height: 353,
    borderRadius: 15,
    backgroundColor: vars.color.white,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.02), 0px 9px 24px rgba(0, 0, 0, 0.03)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  // tablet({
  //   minWidth: 290,
  //   height: 428,
  // }),
]);

export const itemImageWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  borderRadius: 'inherit',
});

export const itemImage = style({
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const itemContent = style({
  padding: '0 12px 15px',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const itemMainInfo = styleVariants({
  top: [
    {
      marginTop: 170,
    },
  ],
});

export const title = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 21,
    lineHeight: '21px',
    textTransform: 'uppercase',
    color: vars.color.white,
  },
  // tablet({
  //   fontSize: 25,
  //   lineHeight: '25px',
  // }),
]);

const textBase = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 13,
    lineHeight: '14px',
    color: vars.color.white,
  },
  // tablet({
  //   fontSize: 15,
  //   lineHeight: '17px',
  // }),
]);

export const subtitle = style([
  textBase,
  {
    marginTop: 10,
    maxHeight: 80,
  },
]);

export const mustardText = style([
  textBase,
  {
    color: vars.color.mustard,
  },
]);

export const line = style({
  height: 1.3,
  width: '100%',
  backgroundColor: vars.color.mustard,
});

export const priceWrapper = style([
  flexSb,
  {
    alignItems: 'center',
    marginTop: 8,
  },
]);

export const shade = style({
  borderRadius: 'inherit',
  position: 'absolute',
  width: '100%',
  height: 197,
  left: 0,
  bottom: 0,
  background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.58,
  transform: 'matrix(1, 0, 0, -1, 0, 0)',
});

export const blurWrap = style({
  borderRadius: 'inherit',
  position: 'absolute',
  width: '100%',
  height: 353 - 117,
  left: 0,
  top: 117,
  background: 'linear-gradient(180deg, #D9D9D9 56.77%, rgba(217, 217, 217, 0) 100%)',
});

export const blurImage = style({
  filter: 'blur(30px)',
});
