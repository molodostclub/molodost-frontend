import { pageContent, tablet } from '@styles';
import { style } from '@vanilla-extract/css';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 870,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const tableContainer = style([
  {
    maxWidth: 320,
    width: '100%',
    marginTop: 30,
  },
  tablet({ marginTop: 0 }),
]);

export const movementTitle = style([
  { marginBottom: 30 },
]);

export const tableWrapper = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 40,
  },
]);

