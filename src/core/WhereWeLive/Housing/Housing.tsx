import { HouseModel } from '@/shared/types';
import { FC } from 'react';
import * as styles from './Housing.css';
import { formatPriceWithSign } from '@/utils';
import { Icon } from '@/uikit/icons';
import { HouseCarousel } from './HouseCarousel';
import { carouseled } from '../WhereWeLive.css';

interface HousingProps {
	house: HouseModel;
}

const Pricing: FC<{
	peopleMin?: number;
	price: number;
	price2?: number;
	isMars?: boolean;
	isBaikal?: boolean;
}> = ({ peopleMin, price, price2, isMars, isBaikal }) => {
	const numberEnding = peopleMin === 1 ? 'го' : 'х';
	const textEnding = peopleMin === 1 ? 'а' : '';

	return (
		<div className={styles.parameters}>
			{isMars !== true && (
				<div className={styles.parameter}>
					<div className={styles.paramName}>
						цена за {peopleMin}-{numberEnding} человек{textEnding}
					</div>
					<div className={styles.paramValue}>{formatPriceWithSign(price)}</div>
				</div>
			)}

			{isMars !== true && isBaikal !== true && price2 !== undefined && (
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
}) => {
	return (
		<div className={styles.container}>
			{!!pictures.data?.length && <HouseCarousel pictures={pictures.data} video={video?.data} videoPreview={videoPreview?.data} />}
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
