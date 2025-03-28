import { FC } from 'react';

import * as styles from './RulesList.css';
import { LINKS } from './RulesList.constants';

export const RulesList: FC = () => {
  return (
    <>
      <div className={styles.container.bottom}>
        <div className={styles.linksWrapper}>
          {
            LINKS.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target='_blank'
                className={styles.linkItem}
              >
                {item.label}
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}