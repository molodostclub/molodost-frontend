import { style } from '@vanilla-extract/css';
import { tablet, vars } from '@styles';

export const contentWrapper = style([
  {
    margin: '30px 0',
  },
  tablet({ margin: 30, }),
]);

export const contentWrapperManjerok = style({
  margin: '30px 0',
});

/** Байкал: первая секция после цитаты — без верхнего отступа у заголовка */
export const contentWrapperBaikalIntro = style({
  marginTop: 0,
  marginBottom: 30,
});
export const carouselWrapper = style([
  {
    maxWidth: 746,
    margin: '0 auto',
  },
  tablet({}),
]);

export const carouselWrapperManjerok = style({
  maxWidth: 920,
});

/** Байкал: ряд карточек на всю ширину блока (не карусель Embla по карточкам) */
export const baikalTripsRowOuter = style({
  width: '100%',
  maxWidth: '100%',
  marginLeft: 0,
  marginRight: 0,
  boxSizing: 'border-box',
});

export const headingsBlockManjerok = style({
  width: '100%',
  maxWidth: 920,
  margin: '0 auto',
  padding: 0,
});

/** Байкал: заголовки и вступление «Как мы путешествуем» — ширина контента 825px */
export const headingsBlockBaikal = style({
  width: '100%',
  maxWidth: 825,
  margin: '0 auto',
  padding: 0,
  boxSizing: 'border-box',
});

/** Байкал: обёртка секций (отступы как у Манжерока, без лимита 980) */
export const tripsBlockBaikal = style([
  {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: 'border-box',
  },
  tablet({
    paddingLeft: 0,
    paddingRight: 0,
  }),
]);

/** Байкал: ряд карточек поездок — max 932px по макету */
export const baikalCardsShell = style({
  width: '100%',
  maxWidth: 932,
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
});

/** Первая секция HowWeTrip на Байкале: без верхнего padding pageSection (зазор задаётся снаружи) */
export const baikalHowWeTripIntroSection = style([
  {
    paddingTop: 0,
    paddingBottom: 20,
  },
  tablet({
    paddingBottom: 30,
  }),
]);

export const carouselListNoPadding = style({
  paddingLeft: 0,
  paddingRight: 0,
});

export const carouselNoMargin = style({
  marginLeft: 0,
  marginRight: 0,
});

export const tripsBlockManjerok = style([
  {
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 980,
    margin: '0 auto',
  },
  tablet({
    paddingLeft: 0,
    paddingRight: 0,
  }),
]);

/**
 * Первая секция поездок на Манжероке: выше блока с оленями/лошадью (у того z-index у слоёв 0–1),
 * чтобы отрицательный margin и текст/кнопка не оказывались под картинками.
 */
export const manjerokFirstTripsAboveTravel = style({
  position: 'relative',
  zIndex: 2,
});

/** Манжерок: «Как мы путешествуем» + «Подробнее» — на планшете визуально заходит на блок с картинками выше */
export const manjerokTravelHeroHeading = style([
  {
    position: 'relative',
    zIndex: 3,
    marginTop: 0,
  },
  tablet({
    marginTop: -105,
  }),
]);

export const manjerokTravelHeroRow = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 14,
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    paddingBottom: 0,
  },
  tablet({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  }),
]);

export const manjerokTravelHeroTitle = style([
  {
    fontFamily: vars.font.CeraCondensedCYBold,
    fontSize: 30,
    lineHeight: 1.1,
    textTransform: 'uppercase',
    color: vars.color.black,
    margin: 0,
    maxWidth: '100%',
    width: '100%',
    boxSizing: 'border-box',
  },
  tablet({
    fontSize: 50,
    lineHeight: 1,
    width: 'auto',
  }),
]);

/** На мобиле кнопку не показываем — только заголовок */
export const manjerokTravelHeroMoreLink = style([
  {
  },
  tablet({
    display: 'inline-block',
    textDecoration: 'none',
    color: 'inherit',
    alignSelf: 'center',
    flexShrink: 0,
    maxWidth: '100%',
  }),
]);

export const manjerokTravelHeroMoreLabel = style({
  fontSize: 13,
  lineHeight: '13px',
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 12,
  paddingRight: 32,
  whiteSpace: 'nowrap',
});

export const baikalIntro = style([
  {
    marginTop: 20,
    marginBottom: 0,
    textAlign: 'left',
    maxWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
  tablet({
    marginTop: 24,
  }),
]);
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
