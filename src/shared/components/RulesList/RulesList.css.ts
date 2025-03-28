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
      paddingBottom: 60,
      paddingLeft: 30,
      paddingRight: 30,
    },
    tablet({
      paddingTop: 60,
      paddingBottom: 80,
    }),
  ],
});

export const linksWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 1200,
  gap: 5,
  margin: '0 auto',
});

export const linkItem = style({
  textAlign: 'center',
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 12,
  lineHeight: '1',
  color: vars.color.brand,
  textTransform: 'uppercase',
  textDecoration: 'underline',
});
