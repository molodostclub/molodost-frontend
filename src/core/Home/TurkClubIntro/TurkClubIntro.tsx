import { FC } from 'react';
import Image from 'next/image';

import * as styles from './TurkClubIntro.css';

export const TurkClubIntro: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        ТУРКЛУБ &laquo;МОЛОДОСТЬ&raquo;
      </h2>
      <p className={styles.description}>
        Это авторский формат туристического отдыха, разработанный путешественником{' '}
        <span className={styles.accentText}>Алексеем Караханом</span> и&nbsp;его командой, который позволяет побывать в&nbsp;самых интересных
        и&nbsp;красивых местах и&nbsp;сохранить привычный уровень комфорта и&nbsp;уюта.
      </p>
      <p className={styles.description}>
        Мы&nbsp;помогаем путешественникам разного уровня подготовки сориентироваться на&nbsp;местности&nbsp;&mdash;
        с&nbsp;момента прибытия и&nbsp;до&nbsp;самого отлёта.
      </p>
    </section>
  );
};
