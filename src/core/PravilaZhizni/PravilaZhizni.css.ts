import { style } from '@vanilla-extract/css';

import { pageContent, tablet, vars } from '@styles';

export const content = style([
  pageContent,
  tablet({
    maxWidth: 870,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
]);

export const pageTitle = style({
  fontFamily: vars.font.CeraCondensedCYMedium,
  fontSize: 50,
  lineHeight: '40px',
  fontWeight: 500,
  textTransform: 'uppercase',
  color: vars.color.black,
  marginBottom: 56,
});

export const block1TitleRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    width: '100%',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: `1px solid ${vars.color.brand}`,
  },
  tablet({
    gap: 16,
  }),
]);

export const block1Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 12,
    lineHeight: 1,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 35,
    lineHeight: '32px',
  }),
]);

export const block1Intro = style([
  {
    marginTop: 10,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 32,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block1IntroP = style({
  marginTop: 16,
});

export const block1IntroPFirst = style({
  marginTop: 0,
});

export const ruleHeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 10,
    borderTop: `1px solid ${vars.color.brand}`,
  },
  tablet({
    gap: 16,
  }),
]);

export const ruleHeader = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 24,
    lineHeight: '28px',
  }),
]);

export const ruleDescription = style([
  {
    marginTop: 10,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block2 = style([
  {
    marginTop: 10,
    width: '100%',
  },
  tablet({
    paddingLeft: 78,
  }),
]);

export const block2Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.brand,
    textAlign: 'center',
    marginBottom: 24,
  },
  tablet({
    fontSize: 32,
    lineHeight: '36px',
    marginBottom: 32,
  }),
]);

export const block2Body = style([
  {
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    fontSize: 20,
    lineHeight: '28px',
  }),
]);

export const block2Paragraph = style({
  marginTop: 16,
});

export const block2ParagraphFirst = style({
  marginTop: 0,
});

export const block2BottomLine = style([
  {
    marginTop: 10,
    paddingBottom: 10,
    width: '100%',
    marginLeft: 0,
    borderBottom: `1px solid ${vars.color.brand}`,
  },
  tablet({
    width: 'calc(100% + 78px)',
    marginLeft: -78,
  }),
]);

export const block3 = style({
  marginTop: 10,
});

export const block3HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block3Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
  }),
]);

export const block3Paragraph = style({
  marginTop: 16,
});

export const block3ParagraphRed = style([
  {
    marginTop: 16,
    color: vars.color.brand,
    fontWeight: 700,
  },
]);

export const block3BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block4 = style({
  marginTop: 10,
});

export const block4HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block4Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block4Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block4Paragraph = style({
  marginTop: 16,
});

export const block4BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block5 = style({
  marginTop: 10,
});

export const block5HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block5Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block5Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block5Paragraph = style({
  marginTop: 16,
});

export const block5BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block6 = style({
  marginTop: 10,
});

export const block6HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block6Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block6Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block6Paragraph = style({
  marginTop: 16,
});

export const block6BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block7 = style({
  marginTop: 10,
});

export const block7HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block7Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block7Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block7Paragraph = style({
  marginTop: 16,
});

export const block7BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block8 = style({
  marginTop: 10,
});

export const block8HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block8Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block8Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block8Paragraph = style({
  marginTop: 16,
});

export const block8BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block9 = style({
  marginTop: 10,
});

export const block9HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block9Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block9Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block9Paragraph = style({
  marginTop: 16,
});

export const block9BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block10 = style({
  marginTop: 10,
});

export const block10HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block10Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block10Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block10Paragraph = style({
  marginTop: 16,
});

export const block10BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block11 = style({
  marginTop: 10,
});

export const block11HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block11Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block11Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block11Paragraph = style({
  marginTop: 16,
});

export const block11BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block12 = style({
  marginTop: 10,
});

export const block12HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block12Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block12Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block12BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block13 = style({
  marginTop: 10,
});

export const block13HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block13Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.brand,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block13Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block13Paragraph = style({
  marginTop: 16,
});

export const block13BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const block14 = style({
  marginTop: 10,
});

export const block14HeaderRow = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  tablet({
    gap: 16,
  }),
]);

export const block14Title = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: vars.color.black,
  },
  tablet({
    fontSize: 28,
    lineHeight: '32px',
  }),
]);

export const block14Body = style([
  {
    marginTop: 16,
    fontFamily: vars.font.ApercuProRegular,
    fontSize: 16,
    lineHeight: '24px',
    color: vars.color.black,
  },
  tablet({
    marginTop: 20,
    fontSize: 20,
    lineHeight: '28px',
    paddingLeft: 78,
  }),
]);

export const block14Paragraph = style({
  marginTop: 16,
});

export const block14BottomLine = style({
  marginTop: 10,
  paddingBottom: 10,
  width: '100%',
  borderBottom: `1px solid ${vars.color.brand}`,
});

export const subtitle = style([
  {
    width: '100%',
    marginTop: 30,
    fontSize: 25,
    lineHeight: 1,
    color: vars.color.brand,
    fontWeight: 700,
    fontFamily: vars.font.CeraCondensedCYMedium,
  },
  tablet({
    marginTop: 45,
    fontSize: 35,
    maxWidth: 530,
  }),
]);

export const lead = style([
  {
    width: '100%',
    marginTop: 30,
    fontSize: 20,
    color: vars.color.brand,
    fontFamily: vars.font.ApercuProRegular,
    borderTop: `1px solid ${vars.color.brand}`,
    borderBottom: `1px solid ${vars.color.brand}`,
    lineHeight: 1,
    padding: '26px 0',
    fontWeight: 400,
    margin: '30px 0',
  },
  tablet({
    margin: '60px 0',
    fontSize: 25,
    maxWidth: 580,
  }),
]);

export const list = style([
  {
    listStyle: 'disc',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginLeft: 20,
    marginTop: 32,
  },
  tablet({
    listStyle: 'none',
    gap: 60,
    marginLeft: 0,
    marginTop: 48,
  }),
]);

export const listItem = style([
  {
    display: 'list-item',
  },
  tablet({
    display: 'flex',
  }),
]);

export const listItemText = style([
  {
    fontWeight: 400,
    fontFamily: vars.font.ApercuProRegular,
    color: vars.color.black,
  },
  tablet({
    fontSize: 20,
  }),
]);

export const listItemHighlight = style([
  {
    fontWeight: 700,
  },
]);

export const listItemLink = style([
  {
    color: vars.color.brand,
  },
]);

export const listIco = style([
  {
    display: 'none',
  },
  tablet({
    display: 'block',
  }),
]);

export const waitForYou = style([
  {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 25,
    lineHeight: 1,
    color: vars.color.brand,
    fontWeight: 700,
    fontFamily: vars.font.CeraCondensedCYMedium,
  },
  tablet({
    marginTop: 60,
    marginLeft: 60,
    fontSize: 35,
  }),
]);
