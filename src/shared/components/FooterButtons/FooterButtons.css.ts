import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@styles';
export const container = styleVariants({
  top: [
    {
      width: '100%',
    },
  ],
  bottom: [
    {
      paddingTop: 45,
      paddingLeft: 30,
      paddingRight: 30,
    },
    tablet({
      paddingTop: 45,
    }),
  ],
});

export const linksWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 1200,
  gap: 34,
  margin: '0 auto',
});

export const footerButton = style({
  display: "flex",
  justifyContent: "center",
  textDecoration: 'none',
  color: vars.color.brand,
  fontFamily: vars.font.CeraCondensedCYBold,
  fontSize: 25,
  fontWeight: 700,
  border: `4px solid ${vars.color.brand}`,
  borderRadius: 4,
  width: 240,
  padding: '10px 0',
  textAlign: 'center',
  transitionProperty: 'opacity',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease-in-out',
  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
  marginBottom: 20
})

export const noteBlack = style([
  {
    fontSize: 16,
    color: vars.color.black,
    fontFamily: vars.font.ApercuProRegular,
    width: 240
  },
  tablet({}),
]);