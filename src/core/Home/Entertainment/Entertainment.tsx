import { InfoCard, SectionHeading } from '@uikit';
import * as styles from './Entertainment.css';
import { ENTERTAINMENT_DATA } from './Entertainment.constants';

export const Entertainment = () => {
  return (
    <div className={styles.container}>
      <SectionHeading>а еще у нас есть</SectionHeading>
      <ul className={styles.list}>
        {ENTERTAINMENT_DATA.map((item, i) => {
          return (
            <li key={i} className={styles.listItem}>
              <InfoCard {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
