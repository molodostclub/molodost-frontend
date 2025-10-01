import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { useIsTablet } from '@shared/hooks';
import { Description, Quote, SectionHeading } from '@uikit';
import { BaseItems } from './BaseItems';
import * as styles from './OurBase.css';
import Link from 'next/link';

export const OurBase = () => {
	const isTablet = useIsTablet();

	const [emblaRef] = useEmblaCarousel({
		align: 'start',
		dragFree: false,
		slidesToScroll: 1,
		containScroll: 'trimSnaps',
		skipSnaps: true,
	});

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<SectionHeading>Наша база</SectionHeading>
			</div>

			<div className={styles.textContent}>
				<div className={styles.content}>
					<Description>
						Адрес: <br />
						<Link className={styles.descriptionRed} href="https://yandex.ru/maps/-/CLutR88d">
							Республика Алтай, Майминский район, Р-256 Чуйский тракт, 460-й километр, 6
						</Link>
					</Description>
					<br />
					<Description>Центром нашей экосистемы является культурная турбаза &laquo;Молодость&raquo;, которая находится всего в&nbsp;15&nbsp;минутах езды от&nbsp;аэропорта Горно-Алтайск на&nbsp;берегу реки Катуни. На&nbsp;территории турбазы расположены:</Description>
				</div>

				{!isTablet && (
					<div className={styles.placeList.mobile} ref={emblaRef}>
						<div className={styles.placeListContainer}>
							<BaseItems />
						</div>
					</div>
				)}
			</div>

			{isTablet && (
				<div className={styles.placeList.tablet}>
					<BaseItems />
				</div>
			)}
		</div>
	);
};
