import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';
import { flexSb } from '@/styles/uikit.css';
import { headingAccented } from '@/uikit/SectionHeading/SectionHeading.css';

export const main = style([
  tablet({
    marginBottom: 60,
  }),
]);

export const content = style([
  pageContent,
  tablet({
    maxWidth: 890,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const carouseled = style([
  { margin: '0 30px' },
  tablet({
    margin: '0 auto',
  }),
]);

export const gridTop = style([
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
  },
  tablet({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const textTop = style({ flex: '1', maxWidth: 406 });
export const titleWrapper = style([{ marginBottom: 30 }, tablet({ marginBottom: 60 })]);

export const noteBlock = style([
  {
    marginTop: 30,
    maxWidth: 300,
  },
  tablet({ marginTop: 0 }),
]);

const textBase = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontWeight: 500,
  fontSize: 25,
  lineHeight: '25px',
  textTransform: 'uppercase',
});

export const priceText = style([
  textBase,
  {
    color: vars.color.black,
  },
]);

export const accentText = style([
  textBase,
  {
    color: vars.color.brand,
  },
]);

export const contacts = style({
  margin: '30px 0 40px',
});

export const heading = style([
  headingAccented,
  {
    fontSize: 25,
    lineHeight: '25px',
    margin: '12px 0 0',
  },
]);

export const housingBlock = style([
  {
    marginBottom: 110,
    display: 'flex',
    flexDirection: 'column',
  },
  tablet({
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    columnGap: 15,
    rowGap: 40,
    maxWidth: 890,
    margin: '0 auto 80px',
    width: '100%',
  }),
]);

export const pricingInfoContent = style([
  {
    marginBottom: 30,
  },
  tablet({ marginBottom: 0 }),
]);
export const pricingInfoContainer = style([
  flexSb,
  {
    margin: '22px 0',
  },
]);

export const border = style({
  height: 2,
  width: '100%',
  backgroundColor: vars.color.brand,
});

export const pricingInfoText = style([
  accentText,
  {
    marginTop: 20,
    fontSize: 18,
    lineHeight: '20px',
  },
]);

export const priceDesktop = style([
  {
    display: 'none',
  },
  tablet({
    display: 'block',
    marginTop: 60,
  }),
])

export const priceMobile = style([
  {
    display: 'block',
    marginTop: 30,
  },
  tablet({
    display: 'none',
  }),
])

export const ctaBtn = style({
  width: '100%',
  borderRadius: 30,
  minHeight: 60,
  border: 'none',
  fontSize: 25,
  lineHeight: '25px',
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  fontFamily: vars.font.CeraCondensedCYRegular,
  textTransform: 'uppercase',
  cursor: 'pointer',
})

export const attention = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 22,
    lineHeight: 1,
    color: vars.color.black,
    textTransform: 'uppercase',
    marginTop: 30
  },
  tablet({
    fontSize: 26,
  }),
]);

export const attentionRed = style([
  {
    color: vars.color.brand,
  },
  tablet({
  }),
]);