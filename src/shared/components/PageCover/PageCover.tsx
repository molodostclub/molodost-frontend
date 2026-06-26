import { FC } from 'react';
import Head from 'next/head';

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
  priority = true,
  sizes = '100vw',
}) => {
  const isLocalMedia =
    typeof src === 'string' && (src.startsWith('/images/') || src.startsWith('/cms/'));
  const shouldUnoptimize = unoptimized !== undefined ? unoptimized : isLocalMedia;
  const useStaticImg = Boolean(src && shouldUnoptimize);

  return (
    <>
      {useStaticImg && priority ? (
        <Head>
          <link rel="preload" as="image" href={src!} />
        </Head>
      ) : null}
      <div className={styles.container}>
        {!!src ? (
          <div className={styles.imageWrap}>
            {useStaticImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt}
                className={styles.imageStatic}
                decoding="async"
              />
            ) : (
              <Image
                priority={priority}
                fill
                src={src}
                unoptimized={shouldUnoptimize}
                loader={loader}
                alt={alt}
                sizes={sizes}
                className={styles.image}
              />
            )}
          </div>
        ) : (
          <div className={styles.cover} />
        )}

        {mobileMenu && <MobileHeaderMenu />}
      </div>
    </>
  );
};
