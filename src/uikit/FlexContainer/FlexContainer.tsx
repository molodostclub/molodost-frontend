import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import * as styles from './FlexContainer.css';

type JustifyContent = 'start' | 'end' | 'center' | 'between';
type AlignItems = 'start' | 'end' | 'center' | 'stretch';
type FlexDirection = 'row' | 'column' | 'columnReverse';
type FlexWrap = 'wrap' | 'nowrap';
type Gap = 10 | 20 | 30 | 40;

type Props = {
  className?: string;

  justifyContent?: JustifyContent;
  desktopJustifyContent?: JustifyContent;

  alignItems?: AlignItems;
  desktopAlignItems?: AlignItems;

  flexDirection?: FlexDirection;
  desktopFlexDirection?: FlexDirection;

  flexWrap?: FlexWrap;
  desktopFlexWrap?: FlexWrap;

  gap?: Gap;
  desktopGap?: Gap;
};

export const FlexContainer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  justifyContent,
  desktopJustifyContent,
  alignItems,
  desktopAlignItems,
  flexDirection,
  desktopFlexDirection,
  flexWrap,
  desktopFlexWrap,
  gap,
  desktopGap,
}) => {
  return (
    <div
      className={cn(
        // custom class
        className,
        
        // display flex
        styles.displayFlex,

        // justify-content
        justifyContent && styles.justifyContent[justifyContent],
        desktopJustifyContent && styles.desktopJustifyContent[desktopJustifyContent],

        // align-items
        alignItems && styles.alignItems[alignItems],
        desktopAlignItems && styles.desktopAlignItems[desktopAlignItems],

        // flex-direction
        flexDirection && styles.flexDirection[flexDirection],
        desktopFlexDirection && styles.desktopFlexDirection[desktopFlexDirection],

        // flex-wrap
        flexWrap && styles.flexWrap[flexWrap],
        desktopFlexWrap && styles.desktopFlexWrap[desktopFlexWrap],

        // gaps
        gap && styles.gap[gap],
        desktopGap && styles.desktopGap[desktopGap],
      )}
    >
      {children}
    </div>
  );
};
