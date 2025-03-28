import { FC } from 'react';

import * as styles from './Motto.css';

export const Motto: FC = () => {
  return (
    <>
      <div className={styles.container.top}>
        <div className={styles.content}>
          <p className={styles.title}>
            Первое правило «Молодости»:
            <br />
            <span className={styles.accent}>План на завтра вы узнаете завтра</span> полностью соответствует второму закону
            термодинамики: <span className={styles.accent}>энтропия в замкнутых системах возрастает</span>
          </p>
        </div>
      </div>
    </>
  );
};
