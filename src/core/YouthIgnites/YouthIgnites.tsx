import { FC } from 'react';

import { pageContent, uikit } from '@styles';
import { Description, PageHeading, SectionHeading } from '@uikit';
import { PLACE_LIST, PROPERTY_LIST } from './YouthIgnites.constants';
import * as styles from './YouthIgnites.css';

export const YouthIgnites: FC = () => {
  return (
    <div className={styles.content}>
      <PageHeading>молодость зажигает</PageHeading>
      <div className={uikit.descriptionSpacing.short}>
        <Description>
          В&nbsp;&laquo;Молодость&raquo; лучше всего ехать большой компанией, тогда
          мы&nbsp;сможем специально под вас организовывать мероприятия на&nbsp;нашей
          турбазе и&nbsp;остальных площадках нашей экосистемы.
          <br />
          <br />
        </Description>
      </div>
      <ul className={styles.placeList}>
        {PLACE_LIST.map((place) => {
          return (
            <li key={place} className={styles.placeItem}>
              <Description element="span">{place}</Description>
            </li>
          );
        })}
      </ul>
      <SectionHeading accented>Для больших компаний у нас есть</SectionHeading>
      <div className={styles.propertyList}>
        {PROPERTY_LIST.map((property) => {
          return (
            <span key={property.name} className={styles.propertyName}>
              <span className={styles.propertyCount}>{property.count}</span>
              {property.name}
            </span>
          );
        })}
      </div>
      <div className={uikit.descriptionSpacing.short}>
        <Description>
          Аренда всей базы в том числе автопарка стоит 2 000 000 ₽/сутки.
          <br />
          <br />
          В&nbsp;организации корпоративных заездов от&nbsp;10&nbsp;человек и&nbsp;частных
          мероприятий нам помогает наш постоянный партнер агентство &laquo;Маури&raquo;,
          которые берут сервисный сбор в&nbsp;10% без учета стоимости проживания
        </Description>
      </div>
    </div>
  );
};
