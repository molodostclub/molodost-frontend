import { style } from '@vanilla-extract/css';
import { vars } from '@styles';
import { pageContent, tablet } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 75,
  }),
]);

export const list = style({
  listStylePosition: 'inside',
  paddingLeft: 12,
});

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