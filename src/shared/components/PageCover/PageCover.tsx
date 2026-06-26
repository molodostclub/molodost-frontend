import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

import { MobileHeaderMenu } from '@shared/components/InnerPageHeader/MobileHeaderMenu';
import { isPrebuiltStaticImage } from '@utils';
import * as styles from './PageCover.css';

const MOBILE_COVER_MAX_WIDTH = 767;

const STATIC_MOBILE_VARIANTS: Record<string, string> = {
	'/images/main-cover2.webp': '/images/main-cover2-mobile.webp',
};

type Props = {
	src?: string | null;
	mobileSrc?: string | null;
	alt?: string;
	unoptimized?: boolean;
	loader?(): string;
	mobileMenu?: boolean;
	priority?: boolean;
	sizes?: string;
};

function resolveMobileSrc(src: string | null | undefined, mobileSrc?: string | null) {
	if (mobileSrc) return mobileSrc;
	if (src && STATIC_MOBILE_VARIANTS[src]) return STATIC_MOBILE_VARIANTS[src];
	return undefined;
}

export const PageCover: FC<Props> = ({
	src,
	mobileSrc,
	alt = '',
	unoptimized = false,
	loader,
	mobileMenu = true,
	priority = true,
	sizes = '(max-width: 768px) 100vw, (max-width: 1920px) 90vw, 1920px',
}) => {
	const skipOptimization = unoptimized || isPrebuiltStaticImage(src);
	const resolvedMobileSrc = resolveMobileSrc(src, mobileSrc);
	const mobileMedia = `(max-width: ${MOBILE_COVER_MAX_WIDTH}px)`;
	const desktopMedia = `(min-width: ${MOBILE_COVER_MAX_WIDTH + 1}px)`;

	return (
		<div className={styles.container}>
			{priority && src ? (
				<Head>
					{resolvedMobileSrc ? (
						<>
							<link
								rel="preload"
								href={resolvedMobileSrc}
								as="image"
								media={mobileMedia}
								// @ts-expect-error fetchpriority is valid in HTML
								fetchpriority="high"
							/>
							<link
								rel="preload"
								href={src}
								as="image"
								media={desktopMedia}
								// @ts-expect-error fetchpriority is valid in HTML
								fetchpriority="high"
							/>
						</>
					) : (
						<link
							rel="preload"
							href={src}
							as="image"
							// @ts-expect-error fetchpriority is valid in HTML
							fetchpriority="high"
						/>
					)}
				</Head>
			) : null}

			{!!src ? (
				<div className={styles.imageWrap}>
					{skipOptimization ? (
						<picture>
							{resolvedMobileSrc ? (
								<source media={mobileMedia} srcSet={resolvedMobileSrc} />
							) : null}
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={src}
								alt={alt}
								className={styles.imageStatic}
								fetchPriority={priority ? 'high' : 'auto'}
								loading={priority ? 'eager' : 'lazy'}
								decoding="async"
							/>
						</picture>
					) : (
						<Image
							priority={priority}
							fill
							src={src}
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
	);
};
