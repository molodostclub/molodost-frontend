import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles';
import { pageContent, tablet } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 870,
    marginLeft: 'auto',
    marginRight: 'auto',
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

export const tableContainer = style([
  {
    maxWidth: 320,
    width: '100%',
    marginTop: 30,
    gridArea: 'price',
  },
  tablet({ marginTop: 0 }),
]);

export const grid = style([
  {
    display: 'grid',
    gridTemplateAreas: '"textTop" "price" "textBottom"',
    gridTemplateColumns: '100%',
    marginTop: 30,
  },
  tablet({
    marginTop: 60,
    gap: '90px 60px',
    gridTemplateAreas: '"textTop textTop" "textBottom price"',
    gridTemplateColumns: '0.5fr 0.5fr',
  }),
]);

export const textContent = styleVariants({
  top: [{ gridArea: 'textTop' }, tablet({ maxWidth: 720 })],
  bottom: [
    { gridArea: 'textBottom', marginTop: 30 },
    tablet({
      marginTop: 0,
    }),
  ],
});
