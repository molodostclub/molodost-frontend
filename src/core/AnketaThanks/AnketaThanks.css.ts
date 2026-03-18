import { style } from '@vanilla-extract/css';
import { vars } from '@styles';
import { tablet } from '@styles';

export const content = style([
  {
    textAlign: 'center',
    padding: '40px 20px',
    maxWidth: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  tablet({ padding: '60px 30px', maxWidth: 600 }),
]);

export const heading = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 28,
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  tablet({ fontSize: 36 }),
]);

export const description = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  tablet({ fontSize: 18, lineHeight: 28, marginTop: 20 }),
]);

export const nameAccent = style({
  color: vars.color.brand,
  fontStyle: 'italic',
});
