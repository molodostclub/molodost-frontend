import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { SEARCH_FORM_BUTTON_SELECTOR } from '@/utils/travelline';
import { fonts, vars } from './theme.css';

globalStyle('html', {
  scrollBehavior: "smooth",
  overflowX: "hidden",
})

globalStyle('body', {
  backgroundColor: vars.color.mainBackground,
  overflowX: "hidden",
});

globalStyle(`html.travelline-booking-page ${SEARCH_FORM_BUTTON_SELECTOR}, html.menu-overlay-open ${SEARCH_FORM_BUTTON_SELECTOR}`, {
  display: 'none !important',
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
