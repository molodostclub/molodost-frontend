import * as styles from './Promo.css';
import { PromoComponent } from './PromoComponent/index';

export function Promo() {
  return (
    <>
      <main className={styles.content} id="anketa">
        <PromoComponent />
      </main>
    </>
  );
}
