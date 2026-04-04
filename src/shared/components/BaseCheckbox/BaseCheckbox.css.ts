import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const checkboxLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
  position: 'relative',
});

export const checkboxInput = style({
  position: 'absolute',
  opacity: 0,
  width: 11,
  height: 11,
  margin: 0,
  cursor: 'pointer',
});

export const checkboxIcon = style({
  flexShrink: 0,
  width: 11,
  height: 11,
  backgroundColor: vars.color.white,
  border: '1px solid #999999',
  borderRadius: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s',
  boxSizing: 'border-box',
  selectors: {
    [`input:checked + &`]: {
      backgroundColor: vars.color.white,
      borderColor: '#999999',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 10' fill='none' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 5l3 3 7-7'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '7px 6px',
    },
  },
});

export const checkboxText = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 20,
  lineHeight: 1,
  color: 'rgba(0,0,0, 0.6)',
});
