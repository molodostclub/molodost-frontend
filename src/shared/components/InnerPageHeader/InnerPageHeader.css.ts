import { style } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';

export const header = style([
  {
    padding: '30px 30px 0',
  },
  tablet({
    position: 'absolute',
    zIndex: 10000,
    width: '100%',
    padding: '40px 60px 65px 40px',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0) 100%)',
    top: 0,
  }),
]);

export const container = style([
  {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  tablet({ alignItems: 'flex-start' }),
]);

export const smallLogoWrapper = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
  tablet({ display: 'none' }),
]);

export const smallLogoWrapperBranded = style([
  smallLogoWrapper,
  {
    marginBottom: 28,
  },
]);

export const logoWrapper = style([
  {
    display: 'none',
  },
  tablet({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
]);

export const logoIcon = style({
  marginLeft: 16,
});

export const indentTop = style([
  { marginTop: 0 },
  tablet({ marginTop: 30 }),
]);

export const headerLeftWrapper = style({
    display: 'flex',
});

export const headerMenu = style([
  { display: 'none' },
  tablet({
    display: 'block',
    marginLeft: 60,
  }),
]);

export const button = style({
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

export const line = style([
  {
    width: 40,
    height: 4,
    backgroundColor: vars.color.brand,
    selectors: {
      '&:not(:last-child)': {
        marginBottom: 8,
      },
    },
  },
  tablet({
    backgroundColor: vars.color.white,
  }),
]);
