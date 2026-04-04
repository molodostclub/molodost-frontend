import { style } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '16px 20px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  tablet({ margin: '16px 30px', maxWidth: 405 }),
]);

export const quote = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 20,
  lineHeight: '19px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: vars.color.brand,
});

export const quoteAuthor = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 13,
  lineHeight: '14px',
  textAlign: 'center',
  color: vars.color.brand,
  marginTop: 8,
});
