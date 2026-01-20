import { FC } from 'react';
import Image from 'next/image';

import { OUR_BASE_ITEMS } from './BaseItems.constants';
import * as styles from './BaseItems.css';

export const BaseItems: FC = () => {
  return (
    <>
      {OUR_BASE_ITEMS.map((item) => {
        return (
          <div key={item.title} className={styles.item}>
            <div className={styles.itemImageWrapper}>
              <Image fill alt="" src={item.imageSrc} className={styles.itemImage} unoptimized />
            </div>
            <span className={styles.itemTitle}>{item.title}</span>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};
