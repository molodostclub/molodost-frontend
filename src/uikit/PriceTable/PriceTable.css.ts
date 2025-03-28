import { vars } from '@styles';
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
  width: 160,
  // paddingBottom: 15,
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
      marginBottom: 30,
      color: vars.color.brand,
    },
  ],
  rowWrapper: [rowWrapperBase],
  rowWrapperWithNote: [
    rowWrapperBase,
    {
      marginBottom: 30,
    },
  ],
  row: [baseFlex, fontColorBase],
  options: [
    {
      ...baseFlex,
      gap: 15,
    },
  ],
  /**
   * Cell for non-first row item
   */
  cell: [cellBase],
  cellAccent: [
    {
      ...cellBase,
      color: vars.color.brand,
    },
  ],
  titleCell: [{ width: 130, marginRight: 30 }],
  titleCellLarge: [{ width: 160, marginRight: 15 }],
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
      maxWidth: 210,
      fontFamily: vars.font.CeraCompactCYRegular,
      fontSize: 13,
      lineHeight: '14px',
      alignSelf: 'stretch',
      color: vars.color.brand,
      marginTop: 5,
      textTransform: 'none',
    },
  ],
});
