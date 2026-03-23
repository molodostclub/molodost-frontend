import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from './TripsItems.css';
import { TripModel } from '@/shared/types';
import { formatPriceWithSign, getMediaLinkFromModel } from '@/utils';
import { CardsCarousel } from '@/shared/components';

type Props = {
	trips: TripModel[];
	listClassName?: string;
	carouselClassName?: string;
};

export const TripsItems: FC<Props> = ({ trips, listClassName, carouselClassName }) => {
	return (
		<CardsCarousel itemsCount={trips.length} listClassName={listClassName} carouselClassName={carouselClassName}>
			{trips.map(({ id, attributes }) => {
				const { pictures, title, slug, durationText, priceAdult, subtitle, staticCoverPath, priceFooterLines } =
					attributes;

				const urlFromCms = pictures?.data?.[0]
					? getMediaLinkFromModel(pictures.data[0].attributes, 'medium')
					: null;
				const src = staticCoverPath ?? urlFromCms;

				if (!slug && !staticCoverPath) {
					console.warn(`⚠️ У поездки "${title}" (ID: ${id}) нет slug и обложки — проверьте данные`);
				}

				const content = (
					<div key={id} className={styles.item}>
						{!!src && (
							<div className={styles.itemImageWrapper}>
								<Image src={src} fill alt="" className={styles.itemImage} unoptimized />
							</div>
						)}

						<div className={styles.shade} />
						<div className={styles.itemContent}>
							<div className={styles.itemMainInfo.top}>
								<div className={styles.title}>{title}</div>
								<div className={styles.subtitle}>{subtitle}</div>
								{slug ? <span className={styles.mustardText}>подробнее →</span> : null}
							</div>
							<div>
								<div className={styles.line} />
								{priceFooterLines && priceFooterLines.length > 0 ? (
									<div className={styles.priceFooterStack}>
										{priceFooterLines.map((line, i) => (
											<span key={i} className={styles.mustardText}>
												{line}
											</span>
										))}
									</div>
								) : (
									<div className={styles.priceWrapper}>
										{durationText ? <span className={styles.mustardText}>{durationText}</span> : null}
										{Boolean(priceAdult && priceAdult !== 0) && (
											<span className={styles.mustardText}>{formatPriceWithSign(priceAdult)}</span>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				);

				return slug ? (
					<Link key={id} href={`/puteshestvia/${slug}`} prefetch={false}>
						{content}
					</Link>
				) : (
					<div key={id}>{content}</div>
				);
			})}
		</CardsCarousel>
	);
};
