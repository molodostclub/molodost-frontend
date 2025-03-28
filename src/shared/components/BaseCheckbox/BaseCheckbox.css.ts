import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const checkboxLabel = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
  },
])
export const checkboxInput = style([
  {
    margin: 0,
    width: 14,
    height: 14,
  },
])
export const checkboxText = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: 1,
    color: 'rgba(0,0,0, 0.6)',
  },
])
