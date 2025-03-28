import { FC, PropsWithChildren } from 'react';

import * as styles from './Label.css'

type Props = {
  caption: string,
}

export const Label: FC<PropsWithChildren<Props>> = (
  {
    caption,
    children,
  }
) => {
  return (
    <label className={styles.label}>
      <span className={styles.labelText}>{caption}</span>
      {children}
    </label>
  )
}
