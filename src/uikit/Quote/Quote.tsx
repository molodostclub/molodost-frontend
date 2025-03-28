import { FC } from 'react';

import * as styles from './Quote.css';

type Props = {
  quoteText: string;
  author?: string;
};

export const Quote: FC<Props> = ({ quoteText, author }) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{quoteText}</p>
      {!!author && <span className={styles.quoteAuthor}>{author}</span>}
    </div>
  );
};
