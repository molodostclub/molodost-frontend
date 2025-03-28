import { style } from '@vanilla-extract/css';

import { pageContent, tablet } from '@styles';

export const content = style([
  pageContent,
  tablet({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 68,
  }),
]);

export const list = style([
  {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: 30,
    listStyle: 'none',
    marginTop: 30,
  },
  tablet({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: 15,
    rowGap: 60,
    maxWidth: 825,
    marginTop: 60,
  }),
]);
