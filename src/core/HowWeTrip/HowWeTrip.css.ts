import { style } from '@vanilla-extract/css';
import { vars } from '@styles';
import { tablet } from '@styles';

export const contentWrapper = style([
  {
    margin: '30px 0',
  },
  tablet({ margin: 30, }),
]);
export const carouselWrapper = style([
  {
    maxWidth: 825,
    margin: '0 auto',
  },
  tablet({}),
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
