import { FC } from 'react';
import Image from 'next/image';

import * as styles from './SmallLogo.css';
import { ArrowButton } from '../Button';

export const SmallLogo: FC<{ color?: 'white' | 'brand' }> = ({ color = 'brand' }) => {
  return (
    <div className={styles.logo}>
      <ArrowButton direction="right" color={color} isLogo>
        М
      </ArrowButton>
    </div>
  );
};
