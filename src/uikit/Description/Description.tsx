import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import * as styles from './Description.css';
import { uikit } from '@/styles';

type Props = PropsWithChildren<{
  element?: 'p' | 'span' | 'div';
  pre?: boolean;
  colorBrand?: boolean;
  sizeSmallOnDesktop?: boolean;
  inlineBlock?: boolean;
  className?: string;
  bold?: boolean;
  uppercase?: boolean;
}>;

export const Description: FC<Props> = ({
  children,
  element = 'p',
  pre = false,
  colorBrand = false,
  sizeSmallOnDesktop = false,
  inlineBlock = false,
  className,
  bold,
  uppercase,
}) => {
  const Tag = element;

  return (
    <Tag
      className={cn(
        className,
        styles.description,
        pre && uikit.preWrap,
        colorBrand && styles.colorBrand,
        sizeSmallOnDesktop && styles.sizeSmallOnDesktop,
        inlineBlock && styles.inlineBlock,
        bold && styles.bold,
        uppercase && styles.uppercase,
      )}
    >
      {children}
    </Tag>
  );
};
