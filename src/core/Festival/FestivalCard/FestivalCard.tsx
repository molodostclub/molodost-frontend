import { FC } from 'react';
import Image from 'next/image';

import { telegramHref } from '@/utils';

import type { FestivalCardItem } from '../FestivalCards.constants';
import * as styles from './FestivalCard.css';

type Props = FestivalCardItem;

export const FestivalCard: FC<Props> = ({ title, subtitle, description, image }) => (
	<article className={styles.card}>
		<div className={styles.imageWrap}>
			<Image fill alt={title} src={image} className={styles.image} unoptimized sizes="(max-width: 768px) 100vw, 825px" />
			<div className={styles.overlay} />
		</div>
		<div className={styles.content}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.subtitle}>{subtitle}</p>
			<p className={styles.description}>{description}</p>
			<a href={telegramHref} target="_blank" rel="noopener noreferrer" className={styles.button}>
				ЗАБРОНИРОВАТЬ
			</a>
		</div>
	</article>
);
