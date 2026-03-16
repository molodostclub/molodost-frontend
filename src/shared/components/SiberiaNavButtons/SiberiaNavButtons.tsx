import { FC } from 'react';
import Link from 'next/link';
import * as styles from './SiberiaNavButtons.css';

export const SiberiaNavButtons: FC = () => (
  <div className={styles.container}>
    <Link href="/v-sibir-za-svoy-schet" className={styles.button} prefetch={false}>
      В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ АЛТАЙ
    </Link>
    <Link href="/v-sibir-za-svoy-schet-baikal" className={styles.button} prefetch={false}>
      В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ БАЙКАЛ
    </Link>
  </div>
);
