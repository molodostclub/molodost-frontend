import { tablet } from '@styles';

import { StyleRule, style, styleVariants } from '@vanilla-extract/css';

// displayFlex
export const displayFlex = style([
  {
    width: '100%',
    display: 'flex',
  },
]);
export const desktopDisplayFlex = style([
  tablet({
    width: '100%',
    display: 'flex',
  }),
]);

// justifyContent
const justifyContentStart = { justifyContent: 'flex-start' }
const justifyContentEnd = { justifyContent: 'flex-end' }
const justifyContentCenter = { justifyContent: 'center' }
const justifyContentBetween = { justifyContent: 'space-between' }

export const justifyContent = styleVariants({
  start: justifyContentStart,
  end: justifyContentEnd,
  center: justifyContentCenter,
  between: justifyContentBetween,
});
export const desktopJustifyContent = styleVariants({
  start: [tablet(justifyContentStart)],
  end: [tablet(justifyContentEnd)],
  center: [tablet(justifyContentCenter)],
  between: [tablet(justifyContentBetween)],
});

// alignItems
const alignItemsStart = { alignItems: 'flex-start' }
const alignItemsEnd = { alignItems: 'flex-end' }
const alignItemsCenter = { alignItems: 'center' }
const alignItemsStretch = { alignItems: 'stretch' }

export const alignItems = styleVariants({
  start: alignItemsStart,
  end: alignItemsEnd,
  center: alignItemsCenter,
  stretch: alignItemsStretch,
});
export const desktopAlignItems = styleVariants({
  start: [tablet(alignItemsStart)],
  end: [tablet(alignItemsEnd)],
  center: [tablet(alignItemsCenter)],
  stretch: [tablet(alignItemsStretch)],
});

// flexDirection
const flexDirectionColumn: StyleRule = { flexDirection: 'column' }
const flexDirectionColumnReverse: StyleRule = { flexDirection: 'column-reverse' }
const flexDirectionRow: StyleRule = { flexDirection: 'row' }

export const flexDirection = styleVariants({
  columnReverse: flexDirectionColumnReverse,
  column: flexDirectionColumn,
  row: flexDirectionRow,
});
export const desktopFlexDirection = styleVariants({
  columnReverse: flexDirectionColumnReverse,
  column: [tablet(flexDirectionColumn)],
  row: [tablet(flexDirectionRow)],
});

// flexWrap
const flexWrapWrap: StyleRule = { flexWrap: 'wrap' }
const flexWrapNowrap: StyleRule = { flexWrap: 'nowrap' }

export const flexWrap = styleVariants({
  wrap: flexWrapWrap,
  nowrap: flexWrapNowrap,
});
export const desktopFlexWrap = styleVariants({
  wrap: [tablet(flexWrapWrap)],
  nowrap: [tablet(flexWrapNowrap)],
});

// gaps
const gaps = {
  10: 10,
  20: 20,
  30: 30,
  40: 40,
}
export const gap = styleVariants(
  gaps,
  (value) => [{ gap: value }]
);
export const desktopGap = styleVariants(
  gaps,
  (value) => [tablet({ gap: value })]
);
