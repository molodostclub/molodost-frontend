import { style, styleVariants } from '@vanilla-extract/css';

import { pageContent, tablet, uikit, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 825,
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

export const grid = style([
  {
    display: 'grid',
    gridTemplateAreas: '"a" "c" "b"',
    gridTemplateColumns: '100%',
    marginTop: 30,
  },
  tablet({
    marginTop: 60,
    gap: '0 90px',
    gridTemplateAreas: '"a c" "b c"',
    gridTemplateColumns: '0.5fr 0.5fr',
  }),
]);

export const subtitle = style([uikit.pageSubtitle, { marginBottom: Math.floor(25 / 2) }]);

const textContentBase = style([
  tablet({
    maxWidth: 320,
    gridArea: 'a',
  }),
]);

export const textContent = styleVariants({
  top: [textContentBase],
  bottom: [
    textContentBase,
    tablet({
      gridArea: 'b',
      marginTop: 0,
    }),
  ],
});

export const acccompaniesContainer = style([
  {
    maxWidth: 310,
    gridArea: 'c',
    margin: '30px 0',
  },
  tablet({ marginTop: 0 }),
]);

export const accompanyItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 15,
  marginTop: 30,
});

export const accompanyInfo = style({
  flexGrow: 1,
});

export const accompanyDescription = style({
  fontFamily: vars.font.CeraCondensedCYRegular,
  fontSize: 13,
  lineHeight: '14px',
  color: vars.color.brand,
});

export const accompanyPrice = style({
  minWidth: 90,
  textAlign: 'left',
});

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