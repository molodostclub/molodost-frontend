import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 60,
  }),
]);

export const link = style({
  color: vars.color.brand,
});

export const linkBlack = style({
  color: vars.color.black,
});

export const descriptionBold = style({
  fontFamily: vars.font.ApercuProBold,
});
