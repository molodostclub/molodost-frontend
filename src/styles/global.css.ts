import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { fonts, vars } from './theme.css';

globalStyle('.x-tl-booking-widget-container', {
  top: "unset !important",
  bottom: 20
})

globalStyle('html', {
  scrollBehavior: "smooth",
  overflowX: "hidden",
})

globalStyle('body', {
  backgroundColor: vars.color.mainBackground,
  overflowX: "hidden",
});

globalFontFace(fonts.ApercuProRegular, {
  src: "local('ApercuPro-Regular'), url('/fonts/ApercuPro-Regular.woff2') format('woff2')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.ApercuProBold, {
  src: "local('ApercuPro-Bold'), url('/fonts/ApercuPro-Bold.woff2') format('woff2')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYRegular, {
  src: "local('CeraCondensedCY-Desktop-Regular'), url('/fonts/CeraCondensedCY-Desktop-Regular.woff2') format('woff2')",
  fontWeight: 'normal',
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYBold, {
  src: "local('CeraCondensedCY-Desktop-Bold'), url('/fonts/CeraCondensedCY-Desktop-Bold.woff2') format('woff2')",
  fontWeight: 700,
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCondensedCYMedium, {
  src: "local('CeraCondensedCY-Desktop-Medium'), url('/fonts/CeraCondensedCY-Desktop-Medium.woff2') format('woff2')",
  fontWeight: 500,
  fontDisplay: 'swap',
});

globalFontFace(fonts.CeraCompactCYRegular, {
  src: "local('CeraCompactCY-Desktop-Regular'), url('/fonts/CeraCompactCY-Desktop-Regular.woff2') format('woff2')",
  fontWeight: 400,
  fontDisplay: 'swap',
});
