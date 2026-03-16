import { FC } from 'react';

import * as styles from './Postscriptum.css';

export const Postscriptum: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        ПЛАН НА&nbsp;ЗАВТРА ВЫ&nbsp;УЗНАЕТЕ ЗАВТРА
      </h2>
      <p className={styles.text}>
        Первое правило &laquo;Молодости&raquo; полностью соответствует второму закону термодинамики:
        энтропия в&nbsp;замкнутых системах возрастает.
      </p>
      <p className={styles.text}>
        Наши организаторы мероприятий, повара, дизайнеры путешествий, банщики и&nbsp;следопыты
        ежедневно корректируют планы на&nbsp;день и&nbsp;свою работу&nbsp;&mdash; с&nbsp;учетом погоды,
        индивидуальных особенностей и&nbsp;настроения наших гостей.
      </p>
      <p className={styles.text}>
        Доверьтесь нашему опыту, и&nbsp;вы&nbsp;получите от&nbsp;поездки в&nbsp;&laquo;Молодость&raquo;
        больше, чем ожидаете! А&nbsp;мы&nbsp;сможем показать вам мир таким, каким мы&nbsp;его сами знаем и&nbsp;любим.
      </p>

      <h2 className={styles.heading} style={{ marginTop: 48 }}>
        В&nbsp;МОЛОДОСТИ ДАЖЕ ОШИБКИ И&nbsp;ТЕ ПО-ЛЮБВИ
      </h2>
      <p className={styles.text}>
        У&nbsp;нас работает много помощников разных возрастов из&nbsp;соседних деревень и&nbsp;разных
        регионов России, мы&nbsp;считаем важным для себя поддерживать{' '}
        <span className={styles.brandText}>local community и&nbsp;талантливых ребят со&nbsp;всей страны</span>.
      </p>
      <p className={styles.text}>
        Наши сотрудники&nbsp;&mdash; это не&nbsp;роботы, выдрессированные на&nbsp;конкретную сервисную модель,
        и&nbsp;наш приоритет&nbsp;&mdash; это не&nbsp;выученность и&nbsp;вышколенность, а&nbsp;
        <span className={styles.brandText}>искреннее гостеприимство</span>.
      </p>
      <p className={styles.text}>
        Мы&nbsp;ищем не&nbsp;клиентов, а&nbsp;союзников и&nbsp;единомышленников. Ведь{' '}
        <span className={styles.brandText}>ГОСТЬ&nbsp;&mdash; НЕ&nbsp;КЛИЕНТ И&nbsp;ПОЭТОМУ НЕ&nbsp;ВСЕГДА ПРАВ</span>.
        Не&nbsp;забывайте, что{' '}
        <span className={styles.brandText}>ошибки, случившиеся в&nbsp;Молодости и&nbsp;те&nbsp;&mdash; случились по&nbsp;любви</span>.
      </p>
    </section>
  );
};
