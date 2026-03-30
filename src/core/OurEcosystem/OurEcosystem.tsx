import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeading } from '@uikit';
import { getMediaLinkFromModel } from '@utils';
import { EcosystemEntryModel } from '@shared/types';
import { EcosystemCard } from './EcosystemCard';
import * as styles from './OurEcosystem.css';

type Props = {
  ecosystemEntries: EcosystemEntryModel[];
};

export const OurEcosystem: FC<Props> = ({ ecosystemEntries }) => {
  return (
    <div className={styles.content}>
      <div className={styles.navButtonsWrapper}>
        <div className={styles.navButtons}>
          <Link href="/manjerok" className={styles.navButton} prefetch={false}>
            МОЛОДОСТЬ В&nbsp;МАНЖЕРОКЕ
          </Link>
          <Link href="/mars" className={styles.navButton} prefetch={false}>
            ПРИЮТ НА МАРСЕ
          </Link>
        </div>
      </div>
      <div className={styles.headingWrapper}>
        <SectionHeading>Наша экосистема на Алтае</SectionHeading>
      </div>
      <div className={styles.introBlock}>
        <p className={styles.paragraph}>
          <span className={styles.bold}>АЛТАЙ</span> — это географический центр Евразии, одно из
          красивейших и многозначительнейших мест на Земле.
        </p>
        <p className={styles.paragraph}>
          От разнообразия местных пейзажей, антропологических пластов и смыслов, оставленных тут
          разными цивилизациями, голова идёт кругом, как после посещения Метрополитен-музея или
          Венецианской биеннале.
        </p>
        <p className={styles.paragraph}>
          Сердцем нашей экосистемы является{' '}
          <span className={styles.accent}>культурная турбаза «Молодость в Манжероке»</span>, которая
          находится на месте турбазы «Юность», которая была одной из первых в стране и открылась в
          1958 году. Важной частью нашей работы является установление связи между прошлым и
          настоящим, между местными традициями и нашим современным образом жизни и мысли.
        </p>
        <p className={styles.paragraph}>
          Мы ищем точки для взаимодействия с тем наследием, которое на Алтае после себя оставили{' '}
          <span className={styles.accent}>
            Шукшин, Рерих, союзники Чингисхана, скифы и даже современники неандертальцев —
            денисовские люди
          </span>
          .
        </p>
        <p className={styles.paragraph}>
          Наш вкусный и уютный праздник жизни и молодости проходит на{' '}
          <span className={styles.accent}>берегах Катуни</span> и в аутентичных деревнях, полях,
          степях и горах.
        </p>
        <p className={styles.paragraph}>
          Мы сами{' '}
          <span className={styles.accent}>
            любим Алтай и хотим поделиться с нашими гостями тем, что сами тут обрели
          </span>
          .
        </p>
      </div>
      <div className={styles.mapImageWrap}>
        <Image src="/images/ecosystem/map.png" alt="" width={740} height={400} className={styles.mapImage} unoptimized />
      </div>
      <ul className={styles.list}>
        {ecosystemEntries.map((ecosystemEntry) => {
          const cover = ecosystemEntry.cover.data
            ? getMediaLinkFromModel(ecosystemEntry.cover.data, 'medium')
            : null;

          return (
            <li key={ecosystemEntry.id}>
              <EcosystemCard
                cover={cover}
                name={ecosystemEntry.title}
                description={ecosystemEntry.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
