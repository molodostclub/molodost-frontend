import { pageContent, tablet, vars } from '@styles';
import { style } from '@vanilla-extract/css';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const contentLarge = style([
  pageContent,
  tablet({
    maxWidth: 920,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const textContent = style([
  { marginTop: 30 },
  tablet({ marginTop: 40 })
]);

export const reviewTextSmall = style([
  {
    fontSize: 20,
    lineHeight: '20px',
    textAlign: 'center',
    fontFamily: vars.font.ApercuProRegular,
  },
]);

export const reviewTextMedium = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 28,
    lineHeight: '28px',
    textAlign: 'center',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  tablet({
    fontSize: 35,
    lineHeight: '35px',
  })
]);

export const reviewTextLarge = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 75,
    lineHeight: '75px',
    textAlign: 'center',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  tablet({
    fontSize: 115,
    lineHeight: '115px',
  })
]);

export const reviewAuthor = style([
  {
    fontSize: 13,
    lineHeight: '14px',
    fontFamily: vars.font.ApercuProRegular,
    textAlign: 'center',
    color: vars.color.brand,
    marginTop: 10,
  },
]);

export const reviewLink = style([
  {
    textDecoration: 'underline',
    color: vars.color.brand,
  },
]);

export const reviewWrap = style([
  {
    display: 'flex',
    flexDirection: 'column',
  },
  tablet({
    columnGap: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  })
]);

export const reviewCol = style([
  {
    width: '100%',
  },
  tablet({
    width: '50%',
  })
]);

