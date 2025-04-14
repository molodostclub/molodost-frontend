import { FC } from 'react';

import { ContactsBox } from '@/shared/components';
import { Description, SectionHeading } from '@/uikit';
import { HousesSplit } from '@/utils';
import { LiveItems } from './LiveItems';
import * as styles from './WhereDoWeLive.css';
import Link from 'next/link';

type Props = {
  houses: HousesSplit;
};

export const WhereDoWeLive: FC<Props> = ({ houses }) => {
  const filteredIndividual = houses.individual.filter((house) => !house.attributes.isMars && !house.attributes.isBaikal);
	const filteredInHouse = houses.inHouse.filter((house) => !house.attributes.isMars && !house.attributes.isBaikal);
  
  return (
    <>
      <div className={styles.container.withMargin}>
        <div className={styles.content}>
          <SectionHeading linkTo="/rooms">Где живём?</SectionHeading>
          <div className={styles.descriptionWrapper}>
            <Description>
              Все дома перестроены по индивидуальному
              проекту, интерьер каждой спальни имеет авторский дизайн. Вы живете в
              деревянных домах со всеми удобствами. Здесь легко дышится и тут тихо. В
              общем, привычные условия жизни на даче, только не возле мегаполиса, а с
              живописным видом на реку Катунь и скалистые холмы.
            </Description>
          </div>

          <div className={styles.subheadingWrapper.top}>
            <SectionHeading accented>размещение в номерах</SectionHeading>
          </div>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <LiveItems houses={filteredIndividual} />
      </div>

      <div className={styles.container.default}>
        <div className={styles.content}>
          <div className={styles.subheadingWrapper.middle}>
            <SectionHeading accented>РАЗМЕЩЕНИЕ В ДОМАХ</SectionHeading>
          </div>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <LiveItems houses={filteredInHouse} />
      </div>

      <div className={styles.container.default}>
        <div className={styles.content}>
          <div className={styles.subheadingWrapper.bottom}>
            <span className={styles.subheading}>
              Чтобы забронировать проживание в Молодости перейдите{' '}
              <Link href="/rooms" className={styles.link}>
                по ссылке
              </Link>{' '}
              или свяжитесь с нами по телефону
            </span>
          </div>
          <div className={styles.contactsWrapper}>
            <ContactsBox />
          </div>
        </div>
      </div>
    </>
  );
};
