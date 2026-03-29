import { HouseModel } from '@/shared/types';
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Icon } from '@/uikit/icons';
import { formatPriceWithSign, getMediaLinkFromModel } from '@/utils';

import { carouseled } from '../WhereWeLive.css';
import { HouseCarousel } from './HouseCarousel';
import * as styles from './Housing.css';

interface HousingProps {
	house: HouseModel;
	/** Одно фото без карусели (блок люкспинга на странице Байкала) */
	staticCover?: boolean;
}

const Pricing: FC<{
	peopleMin?: number;
	price?: number;
	price2?: number;
	isMars?: boolean;
	isBaikal?: boolean;
}> = ({ peopleMin, price, price2, isMars, isBaikal }) => {
	const numberEnding = peopleMin === 1 ? 'го' : 'х';
	const textEnding = peopleMin === 1 ? 'а' : '';

	return (
		<div className={styles.parameters}>
			{isMars !== true && price != null && price > 0 && (
				<div className={styles.parameter}>
					<div className={styles.paramName}>
						цена за {peopleMin}-{numberEnding} человек{textEnding}
					</div>
					<div className={styles.paramValue}>{formatPriceWithSign(price)}</div>
				</div>
			)}

			{isMars !== true && isBaikal !== true && price2 != null && price2 > 0 && (
				<div className={styles.parameter}>
					<div className={styles.paramName}>
						высокий сезон за {peopleMin}-{numberEnding} человек{textEnding}
					</div>
					<div className={styles.paramValue}>{formatPriceWithSign(price2)}</div>
				</div>
			)}
		</div>
	);
};

export const Housing: FC<HousingProps> = ({
	house: {
		attributes: {
			title,
			description,
			subtitle,
			basePrice,
			basePrice2,
			area,
			peopleMax, //min==max
			peopleMin, //max==min
			pictures,
			video,
			videoPreview,
			isMars,
			isBaikal,
		},
	},
	staticCover = false,
}) => {
	const firstPicture = pictures.data?.[0];
	const showCarousel = !staticCover && !!pictures.data?.length;

	return (
		<div className={cn(styles.container, staticCover && styles.containerLuxipingStatic)}>
			{staticCover && firstPicture ? (
				<div className={styles.staticCoverWrap}>
					<Image
						fill
						src={getMediaLinkFromModel(firstPicture)}
						alt={title ? `Фото: ${title}` : ''}
						className={styles.staticCoverImage}
						sizes="(max-width: 768px) 100vw, 50vw"
						unoptimized
					/>
				</div>
			) : null}
			{showCarousel && pictures.data ? (
				<HouseCarousel pictures={pictures.data} video={video?.data} videoPreview={videoPreview?.data} />
			) : null}
			<div className={carouseled}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.areaInfo}>
					<div className={styles.capacity}>
						{peopleMin < 2 ? (
							<>
								<Icon name="user" className={styles.capacityIcon} />
								<p>
									{peopleMin}-{peopleMax}
								</p>
							</>
						) : (
							<>
								<Icon name="user" className={styles.capacityIcon} />
								<p>
									{peopleMax}-{peopleMin}
								</p>
							</>
						)}
					</div>
					<div>{area} м²</div>
				</div>
				<p className={styles.description}>{description || subtitle}</p>
				<Pricing peopleMin={peopleMin} price={basePrice} price2={basePrice2} isMars={isMars} isBaikal={isBaikal} />
			</div>
		</div>
	);
};
