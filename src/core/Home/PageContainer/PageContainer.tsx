import { FC, PropsWithChildren } from 'react';

import { Quote, SmallLogo } from '@uikit';
import * as styles from './PageContainer.css';

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
