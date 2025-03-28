import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const container = style([
  {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 45,
  },
  tablet({
    maxWidth: 'calc(825px + 60px)',
    marginTop: 95,
  }),
]);
