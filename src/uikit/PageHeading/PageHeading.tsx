import { FC, PropsWithChildren } from 'react';
import cn from 'classnames'

import * as styles from './PageHeading.css';

type Props = {
  colorBrand?: boolean,
}

export const PageHeading: FC<PropsWithChildren<Props>> = ({ children, colorBrand }) => {
  return (
    <h1 className={cn(styles.heading, colorBrand && styles.colorBrand)}>
      {children}
    </h1>
  )
};
