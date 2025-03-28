import { style, styleVariants } from '@vanilla-extract/css';

import { tablet, tabletToDesktop } from '../utils';
import { GenerateIndentsProps, Indent } from './types';

export const pageContent = style([
  {
    boxSizing: 'content-box',
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  tablet({
    paddingTop: 45,
    paddingBottom: 60,
  }),
]);

/**
 * Generate indents classes. Example:
 * 'mt_1' { marginTop: 5px }
 * 'mt_2' { marginTop: 10px }
 * ...
 * 'mt_20' { marginTop: 100px }
 */
const generateIndents = ({
    className,
    property,
    isTablet = false,
  }: GenerateIndentsProps
): Indent => {
  const indentStep = 5
  const indentCount = 20
  const classes: Indent = {}

  for (let i = 0; i <= indentCount; i++) {
    const cn = `${className}_${i}`

    if (isTablet) {
      classes[cn] = [ tablet({[property]: indentStep * i}) ]
    } else {
      classes[cn] = { [property]: indentStep * i }
    }
  }

  return classes
}

export const indent = styleVariants({
  ...generateIndents({
    className: 'mt',
    property: 'marginTop',
  }),
  ...generateIndents({
    className: 'tablet_mt',
    property: 'marginTop',
    isTablet: true,
  }),
  ...generateIndents({
    className: 'mb',
    property: 'marginBottom',
  }),
  ...generateIndents({
    className: 'tablet_mb',
    property: 'marginBottom',
    isTablet: true,
  }),
  // ['mt']: {'marginTop': 5},
  // ['tablet_mt']: [tablet({'marginTop': 5})],
})
