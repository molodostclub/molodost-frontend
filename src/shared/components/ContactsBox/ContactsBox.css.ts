import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, vars } from '@/styles';

const boxBase = style({
  backgroundColor: vars.color.white,
  borderRadius: 55,
  padding: '16px 56px 16px 16px',
  display: 'flex',
  alignItems: 'center',
});

export const box = styleVariants({
  small: [boxBase],
  default: [
    boxBase,
    tablet({
      padding: '24px 56px 24px 24px',
    }),
  ],
});

export const socialIcons = style({ display: 'flex', columnGap: 10 });

const phoneNumberBase = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 25,
  lineHeight: '23px',
  textTransform: 'uppercase',
  color: vars.color.blue,
  marginLeft: 11,
  whiteSpace: 'nowrap',
});

export const phoneNumber = styleVariants({
  small: [phoneNumberBase],
  default: [phoneNumberBase, tablet({ fontSize: 36, lineHeight: '33px' })],
});
