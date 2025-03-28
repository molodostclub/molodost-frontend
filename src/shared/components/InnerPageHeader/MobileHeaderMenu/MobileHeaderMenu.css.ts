import { style } from '@vanilla-extract/css';

import { tablet } from '@styles';

export const mobileHeaderMenu = style([
  {
    display: 'block',
    marginTop: 20,
    marginLeft: -30,
    marginRight: -30,
    paddingLeft: 30,
    overflowX: 'auto',

    // hide scroll Chrome, Safari, Opera
    '::-webkit-scrollbar': {
      display: 'none',
    },

    // hide scroll IE, Edge
    msOverflowStyle: 'none',

    // hide scroll Firefox
    scrollbarWidth: 'none',
  },
  tablet({ display: 'none' }),
]);
