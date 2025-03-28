import { pageContent, tablet, vars } from '@styles';
import { style } from '@vanilla-extract/css';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 820,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const textContent = style([
  { marginTop: 30 },
  tablet({ marginTop: 40 })
]);
