import Link from 'next/link';
import Image from 'next/image';

import { Description, SectionHeading } from '@uikit';
import * as styles from './OurAltay.css';

export const OurAltay = () => {
  return (
    <div className={styles.container}>
      <SectionHeading>Наш алтай</SectionHeading>
      <div className={styles.imageWrap}>
        <Image
          fill
          alt=""
          src="/images/our-altay-cover.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <Description>
          Алтай — это географический центр Евразии, одно из красивейших и
          многозначительнейших мест на Земле.
          <br />
          <br />
          От разнообразия местных пейзажей, антропологических пластов и смыслов,
          оставленных тут разными цивилизациями, голова идет кругом, как после посещения
          Метрополитен-музея или Венецианской биеннале.
          <br />
          <br />
          Наша культурная турбаза находится на месте турбазы «Юность», которая была одной
          из первых в стране и открылась в 1958 году. Важной частью нашей работы является
          установление связи между прошлым и настоящим, между местными традициями и нашим
          современным образом жизни и мысли.
          <br />
          <br />
          Мы ищем точки для взаимодействия с тем наследием, которое на Алтае после себя
          оставили Шукшин, Рерих, союзники Чингисхана, скифы и даже современники
          неандертальцев — денисовские люди.
          <br />
          <br />
          Наш вкусный и уютный праздник жизни и молодости проходит на берегах Катуни и в
          аутентичных деревнях, полях, степях и горах.
          <br />
          <br />
          Мы сами любим Алтай и хотим поделиться с нашими гостями тем, что сами тут
          обрели.
        </Description>

        <div className={styles.card}>
          <Link href="/mars">
            <p className={styles.cardTitleAccented}>На Марс раньше Илона Маска</p>
            <p className={styles.cardDescription}>
            В&nbsp;нашем новом гостевом доме &laquo;Молодость на&nbsp;Марсе&raquo; в&nbsp;селе Тобелер в&nbsp;20км от&nbsp;границы с&nbsp;Монголией
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
