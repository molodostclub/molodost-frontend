import { FC, PropsWithChildren } from 'react';

import * as styles from './CardInfo.css';
import Image from 'next/image';

type Props = {
  src: string
}

export const CardInfo: FC<PropsWithChildren<Props>> = ({ children, src }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src={src}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
