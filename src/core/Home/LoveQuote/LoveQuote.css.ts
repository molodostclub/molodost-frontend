import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const container = style([
  {
    width: '100%',
    minHeight: 300,
    marginTop: 40,
    backgroundColor: vars.color.brand,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 30px',
  },
  tablet({
    minHeight: 400,
    padding: '80px 48px',
  }),
]);

export const overlayText = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 36,
    textTransform: 'uppercase',
    color: vars.color.white,
    textAlign: 'center',
    lineHeight: 1,
    maxWidth: 600,
  },
  tablet({
    fontSize: 56,
  }),
]);
