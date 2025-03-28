import { FC } from 'react';

import * as styles from './MobileHeaderMenu.css';
import { HeaderMenuList } from '../HeaderMenuList';

export const MobileHeaderMenu: FC = () => {
  return (
    <div className={styles.mobileHeaderMenu}>
      <HeaderMenuList />
    </div>
  );
};
