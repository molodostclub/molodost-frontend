import { FC } from 'react';
import * as styles from './BookingTickets.css';

export const BookingTickets: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>ЗАБРОНИРОВАТЬ БИЛЕТ</h2>
      <p className={styles.description}>
        Напишите в мессенджер или позвоните — подскажем по билетам и бронированию.
      </p>
      <div className={styles.cardsGrid}>
        <a href="https://t.me/molodostturclub" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.cardGreen}`}>
          <span className={styles.cardTitle}>НАПИСАТЬ</span>
          <span className={styles.cardSubtitle}>в мессенджер</span>
        </a>
        <a href="tel:+79647002112" className={`${styles.card} ${styles.cardRed}`}>
          <span className={styles.cardTitle}>ЗВОНОК</span>
          <span className={styles.cardSubtitle}>8 964 700 21 12</span>
        </a>
      </div>
    </section>
  );
};
