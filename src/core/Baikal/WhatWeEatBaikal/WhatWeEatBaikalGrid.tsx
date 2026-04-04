import { FC } from 'react';
import Image from 'next/image';

import * as styles from './WhatWeEatBaikalGrid.css';

const PHOTOS = [
	{ src: '/images/baikal/chto-edim1.jpg', alt: 'Гриль, стейки на огне' },
	{ src: '/images/baikal/chto-edim2.jpg', alt: 'Интерьер общего пространства Дома приёмов' },
	{ src: '/images/baikal/chto-edim3.jpg', alt: 'Терраса с видом на Байкал' },
	{ src: '/images/baikal/chto-edim4.jpg', alt: 'Завтрак и сервировка' },
] as const;

export const WhatWeEatBaikalGrid: FC = () => {
	return (
		<div className={styles.grid}>
			{PHOTOS.map(({ src, alt }) => (
				<div key={src} className={styles.cell}>
					<Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 50vw" className={styles.image} />
				</div>
			))}
		</div>
	);
};
