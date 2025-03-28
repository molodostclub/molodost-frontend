import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
});

export const icon = style({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 14,
  height: 14,
  borderRadius: 7,
  border: `1px solid ${vars.color.brand}`,
});

export const iconLine = style({
  width: 1,
  height: 3,
  borderRadius: 1.5,
  backgroundColor: vars.color.brand,
});

export const iconDot = style({
  width: 1,
  height: 1,
  borderRadius: 0.5,
  backgroundColor: vars.color.brand,
  marginTop: 2,
});

export const caption = style({
  fontFamily: vars.font.CeraCompactCYRegular,
  fontSize: 16,
  lineHeight: '14px',
  color: vars.color.brand,
  marginLeft: 10,
});



// ______________________

export const iconWhite = style([
  icon,
  { border: `1px solid ${vars.color.white}` },
]);

export const iconLineWhite = style([
  iconLine,
  { backgroundColor: vars.color.white },
]);

export const iconDotWhite = style([
  iconDot,
  { backgroundColor: vars.color.white },
]);

export const captionWhite = style([
  caption,
  { color: vars.color.white },
]);


