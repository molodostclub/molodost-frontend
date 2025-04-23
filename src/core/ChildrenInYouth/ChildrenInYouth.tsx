import { FC } from 'react';

import { Description, PageHeading } from '@uikit';
import { descriptionSpacing } from '@styles/uikit.css';
import * as styles from './ChildrenInYouth.css';
import cn from 'classnames';
import { indent } from '@/styles';

export const ChildrenInYouth: FC = () => {
  return (
    <main className={styles.content}>
      <PageHeading>Дети в молодости</PageHeading>
      <div className={descriptionSpacing.short}>
        <Description>
          В&nbsp;&laquo;Молодости&raquo; есть все для отдыха с&nbsp;детьми разного возраста. У&nbsp;нас отлично провели время даже младенцы 4&nbsp;месяцев. Дети в&nbsp;&laquo;Молодости&raquo; считаются от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет.
          <br />
          <br />
          По&nbsp;нашему опыту детям нравятся поездки на&nbsp;пасеку с&nbsp;пчелами, в&nbsp;палеопарк к&nbsp;динозаврам, побывать на&nbsp;лазилках в&nbsp;лесу, покататься на&nbsp;рафтах и&nbsp;моторных лодках по&nbsp;Катуни, заехать в&nbsp;гости к&nbsp;зубрам или в&nbsp;домик бабы Яги в&nbsp;ботаническом саду.
          <br />
          <br />
          Мы регулярно проводим поездки в&nbsp;эти и&nbsp;другие места.
          <br />
          <br />
          Детские поездки стоят от&nbsp;2&nbsp;000&nbsp;₽ в зависимости от продолжительности поездки.
          <br />
          <br />
          На территории базы есть:
          <br />
          <br />
        </Description>
      </div>

      <ul className={styles.list}>
        {['Детская площадка имени Дамблдора', 'Домашний и уличный кинотеатры', 'Спортивные игры', 'Услуги няни (8 часов / 15 000  ₽)'].map((label) => {
          return (
            <li key={label}>
              <Description element="span">{label}</Description>
            </li>
          );
        })}
      </ul>

      <div className={descriptionSpacing.tall}>
        <Description>У нас регулярно проходят специальные детские заезды совместно с нашим партнером — бюро семейных впечатлений и образования «Искра». У них отличная развивающая и развлекательная программа для детей с семейными мастер-классами, театральными студиями, спортивными соревнованиями.</Description>
      </div>
    </main>
  );
};
