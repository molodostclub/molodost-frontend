import { InfoCard } from '@uikit';
import * as styles from './OurEcosystem.css';

export const OurEcosystem = () => {
  return (
    <div className={styles.container}>
      <InfoCard
        image="/images/our-ecosystem-new.jpg"
        title="Наша экосистема"
        linkTo="/nasha-ekosistema"
      />
    </div>
  );
};
