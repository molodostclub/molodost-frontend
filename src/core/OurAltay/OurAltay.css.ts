import { style } from '@vanilla-extract/css';

import { desktop, pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 820,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const imageWrap = style([
  {
    position: 'relative',
    width: '100%',
    height: 182,
    borderRadius: 14,
    marginTop: 30,
  },
  tablet({
    height: 300,
    marginTop: 60,
  }),
]);

export const image = style({
  borderRadius: 'inherit',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const authorContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  tablet({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
  }),
]);

export const authorName = style({
  fontSize: 25,
  lineHeight: '25px',
  color: vars.color.black,
  textTransform: 'uppercase',
  fontFamily: vars.font.CeraCondensedCYMedium,
});

export const authorNameBranded = style([authorName, { color: vars.color.brand }]);

export const authorSummary = style([
  {
    fontSize: 10,
    lineHeight: '10px',
    color: vars.color.gray,
    fontFamily: vars.font.CeraCompactCYRegular,
    maxWidth: 405,
    marginTop: 15,
  },
  tablet({
    fontSize: 13,
    lineHeight: '14px',
    marginTop: 0,
    marginLeft: 15,
  }),
]);

export const idolsWrapper = style({
  paddingBottom: 70,
});
