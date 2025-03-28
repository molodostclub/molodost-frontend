import { FC } from 'react';
import Image from 'next/image';

import * as styles from './Intro.css';
import { PageHeading } from '@/uikit';

export const Intro: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <PageHeading>&laquo;Молодость&raquo; на&nbsp;Алтае</PageHeading>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            «Молодость» на Алтае — это туристическая экосистема, которая позволяет побывать
            в самых интересных и красивых местах региона и сохранить привычный уровень
            комфорта и уюта.
            <br />
            <br />
            Мы помогаем путешественникам разного уровня подготовки сориентироваться на
            местности — с момента прибытия и до самого отлёта.
          </p>
        </div>
        <div className={styles.movementList}>
          <div className={styles.movementItem}>
            <Image src="/icons/our-base-air.svg" alt="" width={99} height={79} />
            <span className={styles.movementItemTitle}>
              15 минут{'\n'}от аэропорта{'\n'}Горно-Алтайска{' '}
            </span>
          </div>

          <div className={styles.movementItem}>
            <Image src="/icons/our-base-river.svg" alt="" width={90} height={79} />
            <span className={styles.movementItemTitle}>На берегу{'\n'}реки Катунь</span>
          </div>

          <div className={styles.movementItem}>
            <Image src="/icons/our-base-route.svg" alt="" width={99} height={79} />
            <span className={styles.movementItemTitle}>
            от нас удобно {'\n'}  строить все маршруты 
            </span>
          </div>

          <div className={styles.movementItem}>
            <Image src="/icons/our-base-beauty.svg" alt="" width={99} height={79} />
            <span className={styles.movementItemTitle}> У нас есть 4 гостевых {'\n'} дома  в самых красивых {'\n'} местах </span>
          </div>
        </div>
      </div>
    </div>
  );
};
