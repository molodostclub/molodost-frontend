import { pageContent, tablet } from '@styles';

import { style } from '@vanilla-extract/css';

export const container = style([
  pageContent,
  tablet({
    width: '100%',
    maxWidth: 746,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);
