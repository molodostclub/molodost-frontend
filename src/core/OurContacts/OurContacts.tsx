import { FC } from 'react';

import { descriptionSpacing } from '@styles/uikit.css';
import { Description, SectionHeading } from '@uikit';
import * as styles from './OurContacts.css';

export const OurContacts: FC = () => {
  return (
    <div className={styles.content}>
      <SectionHeading>Наши контакты</SectionHeading>

      <div className={descriptionSpacing.short}>
        <Description>
          Чтобы стать членом турклуба &laquo;Молодость&raquo;, связывайтесь с&nbsp;нами
          по&nbsp;телефону
          <a href="tel:+79647002112" className={styles.link}>
            + 7&nbsp;964&nbsp;700 21 12
          </a>
          <br />
          <br />
          Мы&nbsp;просим Вас писать на&nbsp;этот номер в&nbsp;телеграме или вотсапе даты
          приезда и количество гостей.
          <br />
          <br />
          С&nbsp;учетом разницы во&nbsp;времени, мы&nbsp;оставляем за&nbsp;собой право
          ответить на&nbsp;ваше сообщение в&nbsp;течение 24&nbsp;часов.
          <br />
          <br />
          И&nbsp;мы&nbsp;договоримся с&nbsp;Вами об&nbsp;удобном времени для звонка, чтобы
          обсудить все детали поездки и&nbsp;подтвердить бронирование.
        </Description>
      </div>

      {/* <div className={descriptionSpacing.short}>
        <Description>
          С турагентствами сотрудничает
          <br />
          <br />
          <span className={styles.descriptionBold}>Настя Баскакова</span>
          <br />
          <a href="tel:+79130853148" className={styles.link}>
            +7 913 085 31 48
          </a>
          <br />
          <br />
          Корпоративными или частными мероприятиями от&nbsp;10&nbsp;человек занимается наш
          постоянный партнер Агентство &laquo;Маури&raquo;, а&nbsp;именно
          <br />
          <br />
          <span className={styles.descriptionBold}>Маша Лампарадзе</span>
          <br />
          <a href="tel:+7 963 685 17 17" className={styles.link}>
            +7 963 685 17 17
          </a>
          <br />
          <br />
          За организацию групповых заездов мы добавляем к стоимости поездки 10%
          <br />
          <br />
          Если вы хотите получить персональный сервис Black Khan по цене 23 456₽ — звоните
          и пишите на{' '}
          <a href="tel:+7 913 085 31 48" className={styles.linkBlack}>
            +7 913 085 31 48
          </a>
          <br />
          <br />
          Если вы хотите договориться с нами о совместных проектах, являетесь журналистом,
          художником, йогом или человеком другой творческой профессии — звоните:
          <br />
          <br />
          Даша Шинко{' '}
          <a href="tel:+7 953 871 46 47" className={styles.link}>
            +7 953 871 46 47
          </a>
          <br />
          <br />
          Если вы хотите поработать в нашей команде — отправляйте письма на нашу почту{' '}
          <a href="mailto:altay@clubmolodost.ru" className={styles.link}>
            altay@clubmolodost.ru
          </a>
        </Description>
      </div> */}
    </div>
  );
};
