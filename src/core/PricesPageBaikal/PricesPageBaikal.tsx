import { FC } from 'react';
import * as styles from './PricesPageBaikal.css';

export const PricesPageBaikal: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>В Сибирь за свой счёт — Байкал</h1>

      <span className={styles.redTag}>ПРОЖИВАНИЕ</span>

      <h3 className={styles.sectionTitle}>Помещения в Глэмпе</h3>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Тент 1</span>
        <span className={styles.priceValue}>18 000 ₽</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Тент 2</span>
        <span className={styles.priceValue}>18 000 ₽</span>
      </div>

      <h3 className={styles.sectionTitle}>Помещения в Корпусе</h3>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Сингл</span>
        <span className={styles.priceValue}>16 000 ₽</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Дабл</span>
        <span className={styles.priceValue}>20 000 ₽</span>
      </div>

      <p className={styles.description}>
        Каждый дополнительный человек в спальне: 4 500 ₽ в сутки за взрослого, 4 000 ₽
        в сутки за ребенка от 5 до 12 лет. Дети до 5 лет — наши бесплатные гости.
      </p>

      <span className={styles.redTag}>На базе</span>
      <p className={styles.description}>
        Кухня Грузина-дедушки. Специи Бирманка на Банде.
      </p>

      <span className={styles.redTag}>СКОБЫ</span>

      <h3 className={styles.sectionTitle}>Кухня/Ресторация</h3>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Завтрак</span>
        <span className={styles.priceValue}>800 ₽</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Обед</span>
        <span className={styles.priceValue}>1 200 ₽</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>Ужин</span>
        <span className={styles.priceValue}>1 500 ₽</span>
      </div>

      <span className={styles.redTag}>ПУТЕШЕСТВИЯ</span>
      <p className={styles.description}>
        Описание разделов путешествий доступно на месте.
      </p>
    </div>
  );
};
