import { FC } from 'react';

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
      <SectionHeading>Наша экосистема</SectionHeading>
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
