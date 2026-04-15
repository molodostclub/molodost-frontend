import { FC } from 'react';
import Link from 'next/link';
import * as styles from './HowToGetHome.css';

export const HowToGetHome: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>КАК К&nbsp;НАМ ПОПАСТЬ</h2>
      <p className={styles.description}>
        Процесс бронирования у&nbsp;нас немного отличается от&nbsp;того, как это происходит
        в&nbsp;других местах. Мы&nbsp;работаем в&nbsp;режиме{' '}
        <span className={styles.accentText}>&laquo;открытого клуба для своих&raquo;</span>,
        поэтому бронирований на&nbsp;сайте у&nbsp;нас нет, и&nbsp;для того, чтобы запланировать поездку,{' '}
        <Link href="/nashi-kontakty" className={styles.accentLink}>напишите нам</Link>{' '}
        или{' '}
        <Link href="/anketa" className={styles.accentLink}>заполните анкету</Link>
      </p>

      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>НАПИСАТЬ ИЛИ ПОЗВОНИТЬ</div>
          <p className={styles.cardText}>
            Мы&nbsp;не&nbsp;искусственный интеллект и&nbsp;не&nbsp;чат-бот, любим общаться вживую,
            а&nbsp;созвониться готовы, когда вам будет удобно, чтобы более детально всё рассказать
            и&nbsp;про &laquo;Молодость&raquo;, и&nbsp;про Алтай, и&nbsp;про Байкал.
          </p>
          <p className={`${styles.cardText} ${styles.cardTextSpaced}`}>
            Мы&nbsp;будем держать с&nbsp;вами связь и&nbsp;отвечать на&nbsp;любые ваши вопросы.
          </p>
          <div className={styles.cardButtons}>
            <a
              href="https://max.ru/molodostturclub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardButton}
            >
              <span className={styles.btnMain}>НАПИСАТЬ</span>
              <span className={styles.btnSub}>В&nbsp;MAX</span>
            </a>
            <a href="tel:+79647002112" className={styles.cardButton}>
              <span className={styles.btnMain}>ПОЗВОНИТЬ</span>
              <span className={styles.btnSub}>8&nbsp;964&nbsp;700&nbsp;21&nbsp;12</span>
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>ЗАПОЛНИТЬ АНКЕТУ</div>
          <p className={styles.cardText}>
            Разумеется, мы&nbsp;не&nbsp;настолько олдскульные и&nbsp;если вам удобнее бронировать
            через форму обратной связи, то&nbsp;мы&nbsp;вам пришлём электронную анкету, которую
            вы&nbsp;сможете заполнить, мы&nbsp;её&nbsp;внимательно изучим и&nbsp;предложим лучшие
            варианты, которые подходят именно вам.
          </p>
          <div className={styles.cardButtons}>
            <Link href="/anketa" className={styles.cardButton}>
              <span className={styles.btnMain}>АНКЕТА</span>
              <span className={styles.btnSub}>АЛТАЙ</span>
            </Link>
            <Link href="/anketa-baikal" className={styles.cardButton}>
              <span className={styles.btnMain}>АНКЕТА</span>
              <span className={styles.btnSub}>БАЙКАЛ</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
