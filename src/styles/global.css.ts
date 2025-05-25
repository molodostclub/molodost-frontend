import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { fonts, vars } from './theme.css';

globalStyle('.x-tl-booking-widget-container', {
  top: "unset !important",
  bottom: 20
})

globalStyle('html', {
  scrollBehavior: "smooth",
})

globalStyle('body', {
  backgroundColor: vars.color.mainBackground,
});

globalFontFace(fonts.ApercuProRegular, {
  src: "local('ApercuPro-Regular'), url('/fonts/ApercuPro-Regular.otf') format('opentype')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.ApercuProBold, {
  src: "local('ApercuPro-Bold'), url('/fonts/ApercuPro-Bold.otf') format('opentype')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYRegular, {
  src: "local('CeraCondensedCY-Desktop-Regular'), url('/fonts/CeraCondensedCY-Desktop-Regular.otf') format('opentype')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYBold, {
  src: "local('CeraCondensedCY-Desktop-Bold'), url('/fonts/CeraCondensedCY-Desktop-Bold.otf') format('opentype')",
  fontWeight: 700,
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYBold, {
  src: "local('CeraCondensedCY-Desktop-Bold'), url('/fonts/CeraCondensedCY-Desktop-Bold.otf') format('opentype')",
  fontWeight: 700,
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYMedium, {
  src: "local('CeraCondensedCY-Desktop-Medium'), url('/fonts/CeraCondensedCY-Desktop-Medium.otf') format('opentype')",
  fontWeight: 500,
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCompactCYRegular, {
  src: "local('CeraCompactCY-Desktop-Regular'), url('/fonts/CeraCompactCY-Desktop-Regular.otf') format('opentype')",
  fontWeight: 400,
  fontDisplay: 'swap',
});
