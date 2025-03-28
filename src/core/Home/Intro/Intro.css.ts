import { style } from '@vanilla-extract/css';

import { desktop, hexToRgba, tablet, vars } from '@styles';

export const container = style([
  {
    marginTop: 30,
  },
  tablet({
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    maxWidth: 825,
  }),
]);

export const wrapper = style([
  {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  tablet({
    marginTop: 30,
    flexDirection: 'row',
  }),
]);

export const headingWrapper = style([
  {
    margin: '0 30px 0px 30px',
  },
  tablet({
    margin: 0,
  }),
]);

export const descriptionWrapper = style([
  {
    display: 'flex',
    margin: '0 22px 45px 30px',
  },
  tablet({
    margin: 0,
  }),
]);

export const description = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 18,
  lineHeight: '20px',
  color: vars.color.black,
});

export const movementList = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    columnGap: 10,
    rowGap: 28,
    marginTop: 10,
  },
  tablet({
    marginTop: 0,
    marginLeft: 48,
  }),
]);

export const movementItem = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tablet({
    flexDirection: 'row',
  }),
]);

export const movementItemTitle = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 16,
    lineHeight: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: hexToRgba('#000', 0.5),
    whiteSpace: 'pre',
    marginTop: 30,
  },
  tablet({
    marginTop: 0,
    marginLeft: 16,
  }),
]);
