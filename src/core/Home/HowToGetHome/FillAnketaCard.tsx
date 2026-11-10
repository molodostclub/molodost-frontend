import { FC } from 'react';
import Link from 'next/link';
import * as styles from './HowToGetHome.css';

export const FillAnketaCard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>ЗАПОЛНИТЬ АНКЕТУ</div>
      <p className={styles.cardText}>
        Разумеется, мы&nbsp;не&nbsp;настолько олдскульные и&nbsp;если вам удобнее бронировать
        через форму обратной связи, то&nbsp;мы&nbsp;вам пришлём электронную анкету, которую
        вы&nbsp;сможете заполнить, мы&nbsp;её&nbsp;внимательно изучим и&nbsp;предложим лучшие
        варианты, которые подходят именно вам.
      </p>
      <div className={styles.cardButtons}>
        <Link href="/anketa" className={styles.cardButton} prefetch={false}>
          <span className={styles.btnMain}>АНКЕТА</span>
          <span className={styles.btnSub}>АЛТАЙ</span>
        </Link>
        <Link href="/anketa-baikal" className={styles.cardButton} prefetch={false}>
          <span className={styles.btnMain}>АНКЕТА</span>
          <span className={styles.btnSub}>БАЙКАЛ</span>
        </Link>
      </div>
    </div>
  );
};
