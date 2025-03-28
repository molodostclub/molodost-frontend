import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const label = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: '100%',
  },
])
export const labelText = style([
  {
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 18,
    lineHeight: 1,
    fontWeight: 400,
  },
])
