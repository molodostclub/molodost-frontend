import { FC } from 'react';
import * as styles from './ClosingGallery.css';

export const ClosingGallery: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>ПОЖИВЕМ, ДА&nbsp;ПОРАДУЕМСЯ</h2>
      <p className={styles.description}>
        Нам очень повезло со&nbsp;страной, где мы&nbsp;родились, и&nbsp;с&nbsp;эпохой, когда
        мы&nbsp;можем перемещаться и&nbsp;наслаждаться разнообразием наших городов, традиций
        и&nbsp;ландшафтов.
      </p>
      <p className={styles.description}>
        В&nbsp;Молодости мы&nbsp;собираем не&nbsp;только самые красивые места на&nbsp;земле,
        но&nbsp;и&nbsp;те, в&nbsp;которых будет уютно и&nbsp;удобно людям, привыкшим к&nbsp;любому
        качеству сервиса и&nbsp;уровню комфорта.
      </p>
      <p className={styles.description}>
        Мы&nbsp;разработали специальную систему путешествий, соединяющую ландшафтотерапию
        со&nbsp;вкусной и&nbsp;интересной едой, качественным сервисом.
      </p>
    </section>
  );
};
