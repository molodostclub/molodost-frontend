import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 870,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const subtitle = style([
  {
    width: '100%',
    marginTop: 30,
    fontSize: 25,
    lineHeight: 1,
    color: vars.color.brand,
    fontWeight: 700,
    fontFamily: vars.font.CeraCondensedCYMedium,
  },
  tablet({
    marginTop: 45,
    fontSize: 35,
    maxWidth: 530,
  }),
]);

export const lead = style([
  {
    width: '100%',
    marginTop: 30,
    fontSize: 20,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
    borderTop: `1px solid ${vars.color.brand}`,
    borderBottom: `1px solid ${vars.color.brand}`,
    lineHeight: 1,
    padding: '26px 0',
    fontWeight: 400,
    margin: '30px 0',
  },
  tablet({
    margin: '60px 0',
    fontSize: 25,
    maxWidth: 580,
  }),
]);

export const list = style([
  {
    listStyle: 'disc',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginLeft: 20,
  },
  tablet({
    listStyle: 'none',
    gap: 60,
    marginLeft: 0,
  }),
]);

export const listItem = style([
  {
    display: 'list-item',
  },
  tablet({
    display: 'flex',
  }),
]);

export const listItemText = style([
  {
    fontWeight: 400,
    fontFamily: vars.font.ApercuProRegular,
    color: vars.color.black,
  },
  tablet({
    fontSize: 20,
  }),
]);

export const listItemHighlight = style([
  {
    fontWeight: 700,
  },
]);

export const listItemLink = style([
  {
    color: vars.color.brand,
  },
]);

export const listIco = style([
  {
    display: 'none',
  },
  tablet({
    display: 'block',
  }),
]);

export const waitForYou = style([
  {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 25,
    lineHeight: 1,
    color: vars.color.brand,
    fontWeight: 700,
    fontFamily: vars.font.CeraCondensedCYMedium,
  },
  tablet({
    marginTop: 60,
    marginLeft: 60,
    fontSize: 35,
  }),
]);
