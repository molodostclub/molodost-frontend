import { InfoCard } from '@uikit';
import * as styles from './WhatWeEat.css';

export const WhatWeEat = () => {
  return (
    <div className={styles.container}>
      <InfoCard
        image="/images/what-we-eat-card.jpg"
        title="Что мы&nbsp;едим и&nbsp;пьем"
        text="Все основные продукты нам поставляют местные фермеры, в полях Кош-Агача пасутся наши собственные бараны, а в огороде, где в детстве гулял Василий Шукшин, мы выращиваем свой картофель."
        linkTo="/chto-my-edim"
      />
    </div>
  );
};
