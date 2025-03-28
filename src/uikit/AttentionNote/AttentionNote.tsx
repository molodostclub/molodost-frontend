import { FC, ReactNode } from 'react';

import * as styles from './AttentionNote.css';

type Props = {
  whiteTheme?: boolean
  children: ReactNode
}

export const AttentionNote: FC<Props> = ({ children, whiteTheme = false }) => {
  return (
    <div className={styles.container}>
      <div className={whiteTheme ? styles.iconWhite : styles.icon}>
        <div className={whiteTheme ? styles.iconLineWhite : styles.iconLine} />
        <div className={whiteTheme ? styles.iconDotWhite : styles.iconDot} />
      </div>
      <span className={whiteTheme ? styles.captionWhite : styles.caption}>{children}</span>
    </div>
  );
};
