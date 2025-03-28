import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const formRow = style([
  {
    display: 'flex',
    gap: 20,
  },
  tablet({}),
]);
export const fromCol = style([
  {
    width: '50%',
  },
  tablet({}),
]);
export const note = style([
  {
    display: 'block',
    marginLeft: 15,
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.33)',
    fontFamily: vars.font.ApercuProRegular,
  },
  tablet({}),
]);

export const ctaBtn = style({
  width: '100%',
  borderRadius: 30,
  minHeight: 60,
  border: 'none',
  fontSize: 25,
  lineHeight: '25px',
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  fontFamily: vars.font.CeraCondensedCYRegular,
  textTransform: 'uppercase',
  cursor: 'pointer',
})

export const agreementLink = style({
  fontSize: 13,
  lineHeight: '14px',
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
  textDecoration: 'underline',
})

export const modalDescription = style({
  fontSize: 13,
  lineHeight: '13px',
  color: vars.color.brand,
  fontFamily: vars.font.ApercuProRegular,
})
