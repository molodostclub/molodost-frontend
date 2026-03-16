import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const navRow = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 40,
    marginBottom: 40,
    padding: '0 30px',
  },
  tablet({
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 0,
    padding: 0,
    width: '100%',
    maxWidth: 825,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const navButton = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 15,
    border: `4.75px solid ${vars.color.brand}`,
    backgroundColor: vars.color.white,
    color: vars.color.brand,
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    fontWeight: 700,
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '100%',
    ':hover': {
      backgroundColor: vars.color.brand,
      color: vars.color.white,
    },
  },
  tablet({
    width: 358,
    fontSize: 25,
  }),
]);

export const container = style([
  {
    padding: '0 30px',
    marginTop: 36,
    marginBottom: 20,
  },
  tablet({
    width: '100%',
    padding: 0,
    maxWidth: 825,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const heading = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: '30px',
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 50,
    lineHeight: '45px',
  }),
]);

export const description = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '20px',
    color: vars.color.black,
    marginTop: 24,
  },
  tablet({
    fontSize: 20,
    lineHeight: '24px',
  }),
]);
