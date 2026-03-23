import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import type { HouseModel } from '@/shared/types';
import { Housing } from '@/core/WhereWeLive/Housing/Housing';

import 'swiper/css';
import 'swiper/css/pagination';

import * as styles from './LuxipingSection.css';

const SIDE_PHOTO = '/images/baikal/luxiping.jpg';

type Props = {
	houses: HouseModel[];
};

export const LuxipingSection: FC<Props> = ({ houses }) => {
	return (
		<div className={styles.block}>
			<p className={styles.intro}>
				<span className={styles.introBrand}>Люкспинг</span>
				<span>
					{' '}
					— новая концепция размещения, которая позволяет организовать отдых на природе в близком соединении с ней и с
					привычными городскому жителю условиями комфорта. Для тех кто всегда мечтал пожить в палатке на берегу
					Байкала, но не готов жертвовать привычным комфортом
				</span>
			</p>

			<div className={styles.row}>
				<div className={styles.colSlider}>
					{houses.length > 0 ? (
						<Swiper
							className={styles.swiperRoot}
							modules={[Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							pagination={{ clickable: true }}
						>
							{houses.map((house) => (
								<SwiperSlide key={house.id}>
									<div className={styles.housingSlide}>
										<Housing house={house} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className={styles.emptySlider} aria-hidden />
					)}
				</div>

				<div className={styles.colPhoto}>
					<div className={styles.sideImageWrap}>
						<Image
							fill
							src={SIDE_PHOTO}
							alt="Люкспинг"
							className={styles.sideImage}
							sizes="(max-width: 768px) 100vw, 50vw"
							unoptimized
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
