import { FC } from 'react';

import { MobileHeaderMenu } from '@shared/components/InnerPageHeader/MobileHeaderMenu';
import * as styles from './PageCover.css';
import Image from 'next/image';

type Props = {
  src?: string | null;
  alt?: string;
  unoptimized?: boolean;
  loader?(): string;
  mobileMenu?: boolean;
  priority?: boolean;
  sizes?: string;
};

export const PageCover: FC<Props> = ({
  src,
  alt = '',
  unoptimized,
  loader,
  mobileMenu = true,
  priority = false,
  sizes = '100vw',
}) => {
  return (
    <div className={styles.container}>
      {!!src ? (
        <div className={styles.imageWrap}>
          <Image
            priority={priority}
            fetchPriority={priority ? 'high' : undefined}
            fill
            src={src}
            unoptimized={unoptimized}
            loader={loader}
            alt={alt}
            sizes={sizes}
            className={styles.image}
          />
        </div>
      ) : (
        <div className={styles.cover} />
      )}

      {mobileMenu && <MobileHeaderMenu />}
    </div>
  );
};
