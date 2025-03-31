import { FC } from 'react';

import * as styles from './FooterButtons.css';

export const FooterButtons: FC = () => {
  return (
    <>
      <div className={styles.container.bottom}>
        <div className={styles.linksWrapper}>
          <div>
            <a className={styles.footerButton} href="/pravila-zhizni">
              Правила&nbsp;жизни
            </a>
            <p className={styles.noteBlack}>
              Вы&nbsp;проведете с&nbsp;нами много времени, потратьте 10&nbsp;минут, чтобы
              ппросмотреть или ознакомиться с нашими правилами. У&nbsp;нас многое не&nbsp;так, как
              в&nbsp;других местах.
            </p>
          </div>
          <div>
            <a className={styles.footerButton} href="/v-sibir-za-svoy-schet">
              В&nbsp;Сибирь&nbsp;за&nbsp;свой&nbsp;счет
            </a>
            <p className={styles.noteBlack}>Узнайте все цены на&nbsp;все услуги.</p>
          </div>
        </div>
      </div>
    </>
  );
};
