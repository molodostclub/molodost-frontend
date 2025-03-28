import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';
export const container = styleVariants({
  top: [
    {
      width: '100%',
    },
  ],
  bottom: [
    {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 30,
      paddingRight: 30,
    },
    tablet({
      paddingTop: 80,
      paddingBottom: 80,
    }),
  ],
});

const forSmallText = {
  fontFamily: vars.font.ApercuProRegular,
  fontSize: '14px',
  color: vars.color.gray,
}

export const personsCountWrapper = style({
  maxWidth: 'fit-content',
});

export const personsCount = style({
  ...forSmallText,
  marginLeft: 5,
});
export const area = style({
  ...forSmallText,
  marginLeft: 20,
});
export const description = style({
  ...forSmallText,
  maxWidth: 190,
});
export const priceAfter = style({
  ...forSmallText,
  marginLeft: 10,
  marginBottom: 3,
});
export const priceContainer = style({
  width: 'auto',
  flexShrink: 0,
});
export const leftCol = style({
  width: 191,
});

export const linksWrapper = style({
  
});
