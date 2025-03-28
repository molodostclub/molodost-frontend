import { tablet } from '@styles';
import { style } from '@vanilla-extract/css';

export const scopeMobile = style([
  tablet({
    display: 'none',
  }),
]);

export const scopeDesktop = style([
  { display: 'none' },
  tablet({
    display: 'block',
  }),
]);
