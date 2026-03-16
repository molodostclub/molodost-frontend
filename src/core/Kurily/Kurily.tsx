import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './Kurily.css';

export const Kurily: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>«Молодость» в начале Земли</h1>
      <p className={styles.subtitle}>
        ПЛЯЖНЫЙ ТИХООКЕАНСКИЙ КУРОРТ НА ОСТРОВЕ ИТУРУП САХАЛИНСКАЯ ОБЛАСТЬ
        КУРИЛЬСКИЙ АРХИПЕЛАГ НА БЕРЕГУ ТИХОГО ОКЕАНА СО СТОРОНЫ ОХОТСКОГО МОРЯ.
      </p>
      <h2 className={styles.heading}>Что создаём</h2>
      <p className={styles.description}>
        «Молодость на краю света» — состоит из «Лесопилки» бывшего кожевенного
        дома, раньше она была японским рыбоперерабатывающим заводом, а после перехода островов к
        России стала лесопилкой, такой мы ее приобрели, и сделали из гостевого
        пространства в стиле «Молодости» в 12 океан разных народов, населявших Тихий
        океан, а также племен Маори, Египтян и еще много того, что любят наш художник.
      </p>
      <div className={styles.imageWrapper}>
        <Image fill alt="Курилы" src="/images/kurily/kurily-beach.jpg" className={styles.image} unoptimized />
      </div>
      <h3 className={styles.heading} style={{ marginTop: 40, fontSize: 28 }}>Лесопилка</h3>
      <p className={styles.description} style={{ fontStyle: 'italic' }}>октябрь 2025</p>
      <p className={styles.description}>
        Лесопилка станет центральным общественным местом общей площадью 640 м².
        Она объединит: гастротрактир, ресепшн, кофейню, Concept Store, гостиную и кинотеатр.
      </p>
      <p className={styles.description}>
        В дизайне мы вдохновились природными стилями и поставили цель бережно сохранить
        в декоре все найденные нами на месте артефакты.
      </p>
      <Link href="/nashi-kontakty" className={styles.ctaButton} prefetch={false}>
        НАС ТУТ ЕЩЁ НЕТ, НО ЕСТЬ НАШИ ПАРТНЁРЫ И ДРУЗЬЯ
      </Link>
    </div>
  );
};
