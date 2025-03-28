import { Description } from '@uikit';
import * as styles from './AnketaPage.css';
import { AnketaComponent } from '../AnketaComponent';

export function AnketaPage() {
  return (
    <>
      <main className={styles.content} id="anketa">
        <AnketaComponent />
      </main>
    </>
  );
}
