import { style } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const contentWrapper = style([
  {
    margin: '30px 0',
  },
  tablet({ margin: 30, }),
]);

export const contentWrapperManjerok = style({
  margin: '30px 0',
});
export const carouselWrapper = style([
  {
    maxWidth: 746,
    margin: '0 auto',
  },
  tablet({}),
]);

export const carouselWrapperManjerok = style({
  maxWidth: 920,
});

export const headingsBlockManjerok = style({
  width: '100%',
  maxWidth: 920,
  margin: '0 auto',
  padding: 0,
});

export const carouselListNoPadding = style({
  paddingLeft: 0,
  paddingRight: 0,
});

export const carouselNoMargin = style({
  marginLeft: 0,
  marginRight: 0,
});

export const tripsBlockManjerok = style([
  {
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 980,
    margin: '0 auto',
  },
  tablet({
    paddingLeft: 0,
    paddingRight: 0,
  }),
]);
export const attention = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 22,
    lineHeight: 1,
    color: vars.color.black,
    textTransform: 'uppercase',
    marginTop: 30
  },
  tablet({
    fontSize: 26,
  }),
]);

export const attentionRed = style([
  {
    color: vars.color.brand,
  },
  tablet({
  }),
]);
