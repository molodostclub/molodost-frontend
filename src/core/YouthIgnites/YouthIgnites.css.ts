import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const placeList = style([
  {
    listStylePosition: 'inside',
    paddingLeft: 12,
    marginBottom: 30,
  },
  tablet({ marginBottom: 60 }),
]);

export const placeItem = style({ marginTop: 6 });

export const propertyList = style([
  {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  tablet({
    marginTop: 40,
  }),
]);

export const propertyName = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 25,
  lineHeight: '25px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

export const propertyCount = style([propertyName, { color: vars.color.brand }]);

export const link = style({
  textDecoration: 'none',
  color: vars.color.black,
});
