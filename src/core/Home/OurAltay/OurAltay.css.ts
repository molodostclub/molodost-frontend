import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style([
  {
    width: 'calc(100% - 60px)',
    maxWidth: 825,
    marginTop: 45,
    marginLeft: 30,
    marginRight: 30,
  },
  tablet({
    marginTop: 75,
  }),
]);

export const imageWrap = style([
  {
    position: 'relative',
    width: '100%',
    height: 226,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 24,
  },
  tablet({
    height: 400,
    marginTop: 30,
  }),
]);

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const textContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    alignItems: 'flex-start',
  },
  tablet({
    flexDirection: 'row',
    marginTop: 56,
  }),
]);

export const card = style([
  {
    backgroundColor: vars.color.white,
    filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.13))',
    borderRadius: 14,
    padding: '24px 15px 24px 15px',
    marginTop: 30,
    maxWidth: 240,
    alignSelf: 'center',
  },
  tablet({
    alignSelf: 'flex-start',
    minWidth: 175,
    marginTop: 0,
    marginLeft: 60,
  }),
]);

export const cardTitle = style({
  fontSize: 20,
  lineHeight: '19px',
  textTransform: 'uppercase',
  fontFamily: vars.font.CeraCondensedCYBold,
  color: vars.color.black,
  marginTop: 4,
});

export const cardTitleAccented = style([
  cardTitle,
  {
    color: vars.color.brand,
    marginTop: 0,
  },
]);

export const cardDescription = style({
  fontSize: 14,
  lineHeight: '1',
  fontFamily: vars.font.CeraCompactCYRegular,
  color: vars.color.gray,
  marginTop: 22,
});