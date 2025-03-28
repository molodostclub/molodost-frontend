import { createTheme } from '@vanilla-extract/css';

export const fonts = {
  ApercuProRegular: 'ApercuPro-Regular',
  ApercuProBold: 'ApercuPro-Bold',
  CeraCondensedCYRegular: 'CeraCondensedCY-Desktop-Regular',
  CeraCondensedCYBold: 'CeraCondensedCY-Desktop-Bold',
  CeraCondensedCYMedium: 'CeraCondensedCY-Desktop-Medium',
  CeraCompactCYRegular: 'CeraCompactCY-Desktop-Regular',
};

export const [themeClass, vars] = createTheme({
  color: {
    brand: '#E03823',
    black: '#000',
    white: '#fff',
    gray: '#929292;',
    mainBackground: '#EEECE8',
    green: '#289942',
    blue: '#043BFF',
    mustard: '#B3BD25',
  },
  borderRadius: {
    image: '14px',
  },
  font: {
    ...fonts,
  },
}, 'molodost');
