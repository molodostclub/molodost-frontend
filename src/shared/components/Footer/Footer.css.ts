import { tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const footer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.brand,
    padding: '54px 30px 100px 30px',
  },
  tablet({
    padding: '48px 0 96px 0',
  }),
]);

export const contactList = style({
  display: 'flex',
  listStyle: 'none',
  marginTop: 30,
});

export const contactItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginRight: 21,
    },
  },
});

export const contactLink = style({
  fontSize: 15,
  lineHeight: '15px',
  fontFamily: vars.font.CeraCondensedCYMedium,
  color: vars.color.white,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

export const contactLinkUnderlined = style([
  contactLink,
  { textDecorationLine: 'underline' },
]);

export const attentionList = style([
  {
    listStyle: 'none',
    marginTop: 30,
  },
  tablet({
    marginTop: 60,
    marginLeft: 30,
  }),
]);

export const attentionListItem = style({
  selectors: {
    '&:not(:first-child)': {
      marginTop: 10,
    },
  },
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginTop: '30px',
});
export const logoItem = style({
  maxWidth: '50px',
});