import { style } from '@vanilla-extract/css';
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

export const grid = style([
  {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  tablet({
    marginTop: 30,
    gap: '0 60px',
    gridTemplateColumns: '1fr 1fr',
  }),
]);

export const textContent = style([
  {
    marginTop: 30 
  },
  tablet({
    marginTop: 0,
  }),
]);

export const tableContainer = style([
  {
    maxWidth: 320,
    width: '100%',
    marginTop: 30,
  },
  tablet({ marginTop: 0 }),
]);

export const itemImageWrapper = style([
  {
    position: 'relative',
    width: 262,
    height: 204,
    borderRadius: 14,
  },
  tablet({
    width: '100%',
    height: 287,
  }),
]);

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: 'inherit',
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