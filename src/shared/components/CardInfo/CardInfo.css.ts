import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const cardWrapper = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 30,
  },
  tablet({
    gap: 60,
    marginTop: 60,
    flexDirection: 'row',
  }),
]);

export const imageContainer = style({
  position: 'relative',
  width: 315,
  height: 285,
  boxShadow: '0px 24px 24px 0px rgba(0, 0, 0, 0.12), 0px 9px 8px 0px rgba(0, 0, 0, 0.10)',
  overflow: 'hidden',
  borderRadius: 14,
  flexShrink: 0,
});
export const image = style({
  objectFit: 'cover',
});
export const content = style([
   
]);
