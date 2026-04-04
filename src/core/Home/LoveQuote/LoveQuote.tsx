import { FC } from 'react';
import * as styles from './LoveQuote.css';

export const LoveQuote: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.overlayText}>
        В МОЛОДОСТИ ДАЖЕ ОШИБКИ И&nbsp;ТЕ ПО-ЛЮБВИ
      </h2>
    </section>
  );
};
