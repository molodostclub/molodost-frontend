import { style, styleVariants } from '@vanilla-extract/css';

import { desktop, tablet, vars } from '@styles';

const containerBase = style([
  {
    width: '100%',
  },
  tablet({
    maxWidth: 'calc(825px + 60px)',
  }),
]);

export const container = styleVariants({
  default: [containerBase],
  withMargin: [containerBase, { marginTop: 45 }, tablet({ marginTop: 90 })],
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 30,
  marginRight: 30,
});

export const descriptionWrapper = style([
  { marginTop: 21 },
  tablet({
    marginTop: 60,
  }),
]);

export const subheadingWrapper = styleVariants({
  top: [
    {
      marginTop: 18,
    },
    tablet({
      marginTop: 56,
    }),
  ],
  middle: [
    {
      marginTop: 33,
    },
    tablet({
      marginTop: 40,
    }),
  ],
  bottom: [
    {
      maxWidth: 555,
      marginTop: 23,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    tablet({
      marginTop: 77,
    }),
  ],
});

export const subheading = style([
  {
    fontFamily: vars.font.CeraCondensedCYMedium,
    fontSize: 25,
    lineHeight: '25px',
    color: vars.color.brand,
    textTransform: 'uppercase',
  },
  tablet({
    fontSize: 35,
    lineHeight: '35px',
    textAlign: 'center',
  }),
]);

export const contactsWrapper = style({
  alignSelf: 'center',
  marginTop: 32,
});

export const carouselWrapper = style([
  { width: '100%' },
  desktop({
    maxWidth: 'calc(825px + 60px)',
  }),
]);

export const link = style({
  textDecoration: 'underline',
  color: vars.color.brand,
  transition: 'opacity 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },
});
