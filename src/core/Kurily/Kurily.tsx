import { FC } from 'react';
import Image from 'next/image';

import * as styles from './Kurily.css';

const GRID_IMAGES = [
	{ src: '/images/kurily/grid-1.jpg', alt: 'Курилы' },
	{ src: '/images/kurily/grid-2.jpg', alt: 'Курилы' },
	{ src: '/images/kurily/grid-3.jpg', alt: 'Лесопилка' },
	{ src: '/images/kurily/grid-4.jpg', alt: 'Курилы' },
	{ src: '/images/kurily/grid-5.jpg', alt: 'Курилы' },
] as const;

export const Kurily: FC = () => {
	return (
		<div className={styles.shell}>
			<div className={styles.content}>
				<h1 className={styles.title}>«Молодость» в начале Земли</h1>
				<p className={styles.subtitle}>
					Пляжный тихоокеанский курорт
					<br />
					на острове Итуруп Сахалинская область
					<br />
					Курильский архипелаг на берегу Тихого океана
					<br />
					со стороны Охотского моря.
				</p>

				<h2 className={styles.sectionHeading}>Что создаём</h2>
				<p className={styles.description}>
					«Молодость на краю света» — состоит из <span className={styles.accent}>«Лесопилки»</span> (нашего нового
					конторского дома, раньше она была японским рыболовным заводом, а после перехода острова к России стала
					лесопилкой, такой мы её приобрели, и сделаем её гостевым пространством в стиле «Молодости») и{' '}
					<span className={styles.accent}>12 хижин разных народов</span>, населявших Тихий океан, а также племён
					Маори, египтян и ещё много того, что любит наш худрук.
				</p>

				<div className={styles.imageWrapper}>
					<Image
						fill
						priority
						alt="Лесопилка"
						src="/images/kurily/lesopilka.jpg"
						className={styles.image}
						sizes="(max-width: 768px) 100vw, 746px"
					/>
				</div>
				<div className={styles.captionBlock}>
					<p className={styles.captionLine}>Лесопилка</p>
					<p className={`${styles.captionLine} ${styles.captionLineSecond}`}>октябрь 2025</p>
				</div>

				<p className={styles.description}>
					Лесопилка станет центральным общественным местом общей площадью 640&nbsp;м².
					<br />
					<br />
					Она объединит: гастротрактир, ресепшн, кофейню, Concept Store, гостиную и кинотеатр.
					<br />
					<br />
					В дизайне мы вдохновились природным стилем и поставили цель бережно сохранить в декоре все найденные нами
					на месте артефакты.
				</p>

				<div className={styles.mosaicTop}>
					<div className={styles.mosaicHalf}>
						<Image
							fill
							alt={GRID_IMAGES[0].alt}
							src={GRID_IMAGES[0].src}
							className={styles.image}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
					<div className={styles.mosaicHalf}>
						<Image
							fill
							alt={GRID_IMAGES[1].alt}
							src={GRID_IMAGES[1].src}
							className={styles.image}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</div>

				<div className={styles.mosaicBottom}>
					<div className={styles.mosaicTall}>
						<Image
							fill
							alt={GRID_IMAGES[2].alt}
							src={GRID_IMAGES[2].src}
							className={styles.image}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
					<div className={styles.mosaicStack}>
						<div className={styles.mosaicStackItem}>
							<Image
								fill
								alt={GRID_IMAGES[3].alt}
								src={GRID_IMAGES[3].src}
								className={styles.image}
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
						<div className={styles.mosaicStackItem}>
							<Image
								fill
								alt={GRID_IMAGES[4].alt}
								src={GRID_IMAGES[4].src}
								className={styles.image}
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>

				{/* CTA: URL пока нет у заказчика — вернуть Link на /nashi-kontakty или актуальный адрес
				<Link href="/nashi-kontakty" className={styles.ctaButton} prefetch={false}>
					Нас тут ещё нет, но есть наши партнёры и друзья
				</Link>
				*/}
			</div>
		</div>
	);
};
