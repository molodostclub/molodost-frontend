import { FC } from 'react';

import * as styles from './PageCoverSmall.css';
import Image from 'next/image';

type Props = {
  src?: string | null;
  alt?: string;
  unoptimized?: boolean;
  loader?(): string;
};

export const PageCoverSmall: FC<Props> = ({ src, alt = '', unoptimized = false, loader }) => {
  return (
    <div className={styles.container}>
      {!!src ? (
        <div className={styles.imageWrap}>
          <Image
            priority
            fill
            src={src}
            unoptimized={unoptimized}
            loader={loader}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
            className={styles.image}
          />
        </div>
      ) : (
        <div className={styles.cover} />
      )}
    </div>
  );
};
