import { FC } from 'react';

import { MobileHeaderMenu } from '@shared/components';
import * as styles from './PageCover.css';
import Image from 'next/image';

type Props = {
  src?: string | null;
  alt?: string;
  unoptimized?: boolean;
  loader?(): string;
  mobileMenu?: boolean;
};

export const PageCover: FC<Props> = ({
  src,
  alt = '',
  unoptimized,
  loader,
  mobileMenu = true,
}) => {
  // Автоматически отключаем оптимизацию для статических изображений из /images/
  // Это ускоряет загрузку, так как они уже оптимизированы в билде
  const isStaticImage = typeof src === 'string' && src.startsWith('/images/');
  const shouldUnoptimize = unoptimized !== undefined ? unoptimized : isStaticImage;

  return (
    <div className={styles.container}>
      {!!src ? (
        <div className={styles.imageWrap}>
          <Image
            priority
            fill
            src={src}
            unoptimized={shouldUnoptimize}
            loader={loader}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
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
