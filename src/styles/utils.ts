import { CSSProperties, ComplexStyleRule, StyleRule, style } from '@vanilla-extract/css';

export const paddingHorizontal = (value: number) => ({
  padding: `0 ${value}px 0 ${value}px`,
});

export const paddingVertical = (value: number) => ({
  padding: `${value}px 0 ${value}px 0`,
});

export const flexCenterHorizontal: ComplexStyleRule = {
  display: 'flex',
  justifyContent: 'center',
};

export const paddingHome = paddingHorizontal(30);

export const hexToRgba = (hex: string, alpha: number) => {
  const hexColor = hex.length === 4 ? hex + hex.slice(1) : hex;

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export enum Breakpoint {
  tablet = 768,
  desktop = 1024,
}

const createMediaQuery = (breakpoint: Breakpoint) => (styles: StyleRule) => {
  return style({
    '@media': {
      [`screen and (min-width: ${breakpoint}px)`]: {
        ...styles,
      },
    },
  });
};
const createMediaQueryBetween =
  (breakpointMin: Breakpoint, breakpointMax: Breakpoint) => (styles: StyleRule) => {
    return style({
      '@media': {
        [`screen and (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px)`]:
          {
            ...styles,
          },
      },
    });
  };

export const tablet = createMediaQuery(Breakpoint.tablet);
export const desktop = createMediaQuery(Breakpoint.desktop);
export const tabletToDesktop = createMediaQueryBetween(
  Breakpoint.tablet,
  Breakpoint.desktop,
);

export const makeScopeDesktop = (display: CSSProperties['display'] = 'block') =>
  style([
    { display: 'none' },
    tablet({
      display,
    }),
  ]);
