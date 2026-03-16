import { InfoCard, SectionHeading } from '@uikit';
import * as styles from './Entertainment.css';
import { ENTERTAINMENT_DATA, ENTERTAINMENT_MANJEROK_INDICES } from './Entertainment.constants';

type Props = {
  variant?: 'manjerok';
  compactTop?: boolean;
};

export const Entertainment = ({ variant, compactTop }: Props) => {
  const items = variant === 'manjerok'
    ? ENTERTAINMENT_MANJEROK_INDICES.map((i) => ENTERTAINMENT_DATA[i])
    : ENTERTAINMENT_DATA;

  const containerClass = compactTop
    ? (variant === 'manjerok' ? styles.containerManjerok : styles.containerCompactTop)
    : styles.container;

  return (
    <div className={containerClass}>
      <SectionHeading>а еще у нас есть</SectionHeading>
      <ul className={styles.list}>
        {items.map((item, i) => {
          return (
            <li key={i} className={styles.listItem}>
              <InfoCard {...item} containerClassName={variant === 'manjerok' ? styles.cardWide : undefined} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
