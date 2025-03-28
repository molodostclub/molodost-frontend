import { FC } from 'react';

import * as styles from './Postscriptum.css';

export const Postscriptum: FC = () => {
  return (
    <>
      <div className={styles.container.top}>
        <div className={styles.content}>
          <span className={styles.description}>
            В нашем проекте очень много импровизации. Нам нравится удивлять наших гостей и
            удивляться самим, поэтому мы работаем по принципу:
          </span>
          <span className={styles.title}>ПЛАН НА ЗАВТРА ВЫ УЗНАЕТЕ ЗАВТРА</span>
          <span className={styles.caption}>
            Чтобы все неожиданности и сюрпризы были для вас приятными, перед тем, как
            принимать решение о поездке, мы рекомендуем вам узнать на нашем сайте все
            подробности предоставления услуг, точные цены и правила нашей турбазы. И
            убедиться в том, что наш необычный формат приключений и проживания вам
            подходит.
          </span>
        </div>
      </div>
    </>
  );
};
