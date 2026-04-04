import { FC } from 'react';
import Image from 'next/image';

import { BAIKAL_MAP_LEGEND_ITEMS } from './legend.constants';
import { LegendListItem } from './LegendListItem';
import * as styles from './BaikalTerritoryMapSection.css';

const MAP_SRC = '/images/baikal/baikal-map-color.jpg';

export const BaikalTerritoryMapSection: FC = () => (
	<section className={styles.section} aria-label="Схема территории базы">
		<div className={styles.mapWrap}>
			<Image
				src={MAP_SRC}
				alt="Схема территории пляжного курорта на Байкале"
				width={1200}
				height={800}
				className={styles.mapImage}
				sizes="(max-width: 768px) 100vw, 1200px"
				unoptimized
				priority={false}
			/>
		</div>
		<ul className={styles.list}>
			{BAIKAL_MAP_LEGEND_ITEMS.map((item) => (
				<LegendListItem key={item.number} {...item} />
			))}
		</ul>
	</section>
);
