import { vars } from './theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { makeScopeDesktop, tablet } from './utils';

const descriptionBaseSpacing = style({ marginTop: 30 });

export const pageSection = style([
  {
    padding: '20px 0',
  },
  tablet({
    padding: '30px 0',
  }),
]);

export const pageContainer = style([
  {
    width: '100%',
    maxWidth: 'none',
    padding: '0 30px',
    margin: '0 auto',
  },
  tablet({
    width: '100%',
    maxWidth: 'calc(825px + 60px)',
  }),
]);

export const descriptionSpacing = styleVariants({
  short: [
    descriptionBaseSpacing,
    tablet({
      marginTop: 60,
    }),
  ],
  tall: [
    descriptionBaseSpacing,
    tablet({
      marginTop: 90,
    }),
  ],
});

export const featureText = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 18,
  lineHeight: '18px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

export const featureAccentText = style([
  featureText,
  {
    color: vars.color.brand,
  },
]);

export const scopeDesktop = makeScopeDesktop('block');
export const spanDesktop = makeScopeDesktop('inline-block');
export const scopeMobile = style([
  tablet({
    display: 'none',
  }),
]);

export const pageSubtitle = style({
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 24,
  lineHeight: 1,
  textTransform: 'uppercase',
  color: vars.color.brand,
});

export const pageSubtitleBlack = style([
  pageSubtitle,
  {
    color: vars.color.black,
  },
]);

export const pageSubtitleRegular = style([
  pageSubtitle,
  {
    fontFamily: vars.font.CeraCondensedCYRegular,
  },
]);

export const headingWrapper = style(
  { marginTop: 15, marginBottom: 15 },
  tablet({ marginBottom: 0 }),
);

export const titleVaryingSize = style([
  pageSubtitle,
  { margin: '30px 0' },
  tablet({
    margin: '45px 0 60px',
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 50,
    lineHeight: '45px',
    color: vars.color.black,
  }),
]);

export const pageImage = style([
  {
    maxWidth: '100%',
    height: 287,
    objectFit: 'cover',
    objectPosition: 'center',
    filter:
      'drop-shadow(0px 9px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.12))',
    borderRadius: 14,
    backgroundColor: '#ffaacc',
  },
  tablet({ height: 332 }),
]);

export const preWrap = style({ whiteSpace: 'pre-wrap' });

export const flexSb = style({
  display: 'flex',
  justifyContent: 'space-between',
});