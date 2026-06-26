import { FC } from 'react';

import { MobileHeaderMenu } from '@shared/components/InnerPageHeader/MobileHeaderMenu';
import { isPrebuiltStaticImage } from '@utils';
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
  unoptimized = false,
  loader,
  mobileMenu = true,
  priority = true,
  sizes = '(max-width: 768px) 100vw, (max-width: 1920px) 90vw, 1920px',
}) => {
  const skipOptimization = unoptimized || isPrebuiltStaticImage(src);

  return (
    <div className={styles.container}>
      {!!src ? (
        <div className={styles.imageWrap}>
          <Image
            priority={priority}
            fill
            src={src}
            unoptimized={skipOptimization}
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
