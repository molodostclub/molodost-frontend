import * as styles from './AnketaPage.css';
import { AnketaBaikalComponent } from './AnketaBaikalComponent';

export function AnketaPageBaikal() {
  return (
    <>
      <main className={styles.content} id="anketa">
        <AnketaBaikalComponent />
      </main>
    </>
  );
}
