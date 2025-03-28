import { desktop, hexToRgba, tablet, vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const item = style([
  {
    width: 240,
    minHeight: 353,
    borderRadius: 15,
    backgroundColor: vars.color.white,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.02), 0px 9px 24px rgba(0, 0, 0, 0.03)',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  desktop({
    width: 240 + 30 / 2 + 20 / 3,
  }),
]);

export const itemImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: 190,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  flexShrink: 0,
});

export const itemImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const itemContent = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '22px 12px 10px 12px',
});

export const itemMainInfo = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 38,
});

export const itemTitle = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 21,
  lineHeight: '19px',
  textTransform: 'uppercase',
  color: vars.color.black,
});

export const itemDescription = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 14,
  lineHeight: '15px',
  color: hexToRgba('#000000', 0.4),
  marginTop: 7,
});

export const itemPriceWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
});

export const itemCapacity = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
});

export const itemCapacityIcon = style({
  marginLeft: 4,
});

export const itemPrice = style({
  fontFamily: vars.font.ApercuProRegular,
  fontSize: 14,
  lineHeight: '15px',
  color: vars.color.green,
  fontFeatureSettings: "'pnum' on, 'onum' on, 'ss01' on, 'salt' on",
});
