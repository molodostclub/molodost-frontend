import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const headerMenu = style([
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: 20,
    listStyle: 'none',
  },
  tablet({
    justifyContent: 'flex-start',
    columnGap: 40,
  }),
]);

export const navItem = style({
  ':last-child': {
    paddingRight: '30px',
  },
})

export const menuLink = style([
  {
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 15,
    lineHeight: '15px',
    textDecoration: 'underline',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 25,
    lineHeight: '25px',
    textDecoration: 'none',
    color: vars.color.white,
  }),
]);
