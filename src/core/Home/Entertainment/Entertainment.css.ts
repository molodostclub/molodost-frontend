import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const container = style([
  {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 45,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tablet({
    maxWidth: 'calc(825px + 60px)',
    marginTop: 95,
  }),
]);

export const containerCompactTop = style([
  {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tablet({
    maxWidth: '100%',
  }),
]);

export const cardWide = style({
  maxWidth: '100%',
});

export const containerManjerok = style([
  {
    width: '100%',
    maxWidth: 920,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
]);

export const list = style([
  {
    listStyle: 'none',
    marginTop: 24,
  },
  tablet({
    marginTop: 50,
  }),
]);

export const listItem = style([
  {
    selectors: {
      '&:not(:first-child)': {
        marginTop: 15,
      },
    },
  },
  tablet({
    selectors: {
      '&:not(:first-child)': {
        marginTop: 30,
      },
    },
  }),
]);
