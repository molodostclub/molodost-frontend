import { style } from '@vanilla-extract/css';

import { pageContent, tablet } from '@styles';
import { descriptionSpacing } from '@styles/uikit.css';

export const content = style([
  pageContent,
  tablet({ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', marginBottom: 60 }),
]);

export const headingWrapper = style(
  { marginTop: 15, marginBottom: 15 },
  tablet({ marginBottom: 0 }),
);

export const grid = style([
  {
    display: 'grid',
    gridTemplateAreas: '"pricing" "text" "notes"',
    gridTemplateColumns: '100%',
  },
  tablet({
    marginTop: 60,
    gap: '60px 60px',
    gridTemplateAreas: '"text text" "pricing notes"',
    gridTemplateColumns: '0.6fr 0.5fr',
  }),
]);

export const attentionList = style([
  {
    listStyle: 'none',
    gridArea: 'notes',
    marginTop: 24,
  },
  tablet({ marginTop: 0 }),
]);

export const attentionListItem = style({
  selectors: {
    '&:not(:first-child)': {
      marginTop: 5,
    },
  },
});

export const text = style([
  descriptionSpacing.short,
  {
    gridArea: 'text',
  },
  tablet({ maxWidth: 600, marginTop: 0 }),
]);

export const backLink = style([
  {
    marginTop: 45,
  },
  tablet({ marginTop: 90 }),
]);

export const pricing = style({
  gridArea: 'pricing',
});
