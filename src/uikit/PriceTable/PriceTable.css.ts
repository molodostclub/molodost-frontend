import { tablet, vars } from '@styles';
import {
  styleVariants,
  CSSProperties,
  style,
  ComplexStyleRule,
} from '@vanilla-extract/css';

const baseFlex: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
};

const cellBase: CSSProperties = {
  minWidth: 0,
  flex: '1 1 80px',
  maxWidth: '100%',
};

const fontColorBase = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 15,
  lineHeight: '18px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

const rowWrapperBase = style({
  marginBottom: 45,
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const priceTable = styleVariants({
  table: [fontColorBase],
  headerRow: [
    fontColorBase,
    {
      ...baseFlex,
      width: '100%',
      marginBottom: 20,
      color: vars.color.brand,
      flexWrap: 'wrap',
    },
    tablet({ marginBottom: 30, flexWrap: 'nowrap' }),
  ],
  rowWrapper: [rowWrapperBase],
  rowWrapperWithNote: [
    rowWrapperBase,
    {
      marginBottom: 30,
    },
  ],
  row: [
    baseFlex,
    fontColorBase,
    { flexWrap: 'wrap', gap: 8 },
    tablet({ flexWrap: 'nowrap', gap: 15 }),
  ],
  options: [
    {
      ...baseFlex,
      gap: 8,
      minWidth: 0,
      flex: '1 1 100%',
    },
    tablet({ gap: 15, flex: 'none' }),
  ],
  /**
   * Cell for non-first row item
   */
  cell: [
    cellBase,
    tablet({ width: 160, flex: 'none' }),
  ],
  cellAccent: [
    {
      ...cellBase,
      color: vars.color.brand,
    },
    tablet({ width: 160, flex: 'none' }),
  ],
  titleCell: [
    { minWidth: 0, flex: '0 1 100px', marginRight: 12 },
    tablet({ width: 130, flex: 'none', marginRight: 30 }),
  ],
  titleCellLarge: [
    { minWidth: 0, flex: '0 1 120px', marginRight: 12 },
    tablet({ width: 160, flex: 'none', marginRight: 15 }),
  ],
  titleBreak: { wordBreak: 'break-word' },
  accent: [
    {
      color: vars.color.brand,
    },
  ],
  accentNo: [
    {
      color: vars.color.black,
    },
  ],
  rowNote: [
    {
      maxWidth: '100%',
      fontFamily: vars.font.CeraCompactCYRegular,
      fontSize: 12,
      lineHeight: '14px',
      alignSelf: 'stretch',
      color: vars.color.brand,
      marginTop: 5,
      textTransform: 'none',
    },
    tablet({ maxWidth: 210, fontSize: 13 }),
  ],
});
