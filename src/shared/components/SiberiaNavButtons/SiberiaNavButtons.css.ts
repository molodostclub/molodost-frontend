import { style } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const container = style([
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

export const button = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    border: `3px solid ${vars.color.brand}`,
    backgroundColor: vars.color.white,
    color: vars.color.brand,
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    fontWeight: 700,
    padding: '10px 18px',
    boxSizing: 'border-box',
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
    borderWidth: 4.75,
    padding: '12px 24px',
    width: 358,
    fontSize: 25,
  }),
]);
