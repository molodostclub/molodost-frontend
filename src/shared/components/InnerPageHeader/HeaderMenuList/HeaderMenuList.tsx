import { FC } from 'react';

import { HEADER_MENU_LIST } from './HeaderMenuList.constants'
import * as styles from './HeaderMenuList.css';
import Link from 'next/link';

export const HeaderMenuList: FC = () => {
  return (
    <ul className={styles.headerMenu}>
      {HEADER_MENU_LIST.map(item => (
        <li key={item.id}>
          <Link
            className={styles.menuLink}
            href={item.href}
            target={item.openInNewWindow ? '_blank' : '_self'}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
