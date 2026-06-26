import { FC } from 'react';
import Head from 'next/head';

import * as styles from './PageCoverSmall.css';
import Image from 'next/image';

type Props = {
  src?: string | null;
  alt?: string;
  unoptimized?: boolean;
  loader?(): string;
};

export const PageCoverSmall: FC<Props> = ({ src, alt = '', unoptimized, loader }) => {
  const isStaticImage = typeof src === 'string' && src.startsWith('/images/');
  const shouldUnoptimize = unoptimized !== undefined ? unoptimized : isStaticImage;
  const useStaticImg = Boolean(src && shouldUnoptimize);

  return (
    <>
      {useStaticImg && src ? (
        <Head>
          <link rel="preload" as="image" href={src} />
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
                fetchpriority="high"
                decoding="async"
              />
            ) : (
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
            )}
          </div>
        ) : (
          <div className={styles.cover} />
        )}
      </div>
    </>
  );
};
