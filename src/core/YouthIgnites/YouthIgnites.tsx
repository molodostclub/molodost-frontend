import { FC } from 'react';

import { pageContent, uikit } from '@styles';
import { Description, PageHeading, SectionHeading } from '@uikit';
import { PLACE_LIST, PROPERTY_LIST } from './YouthIgnites.constants';
import * as styles from './YouthIgnites.css';

export const YouthIgnites: FC = () => {
	return (
		<div className={styles.content}>
			<PageHeading>молодость зажигает</PageHeading>
			<div className={uikit.descriptionSpacing.short}>
				<Description>
					В&nbsp;&laquo;Молодость&raquo; лучше всего ехать большой компанией, тогда мы&nbsp;сможем специально под вас организовывать мероприятия на&nbsp;нашей турбазе и&nbsp;остальных площадках нашей экосистемы.
					<br />
					<br />
				</Description>
			</div>
			<ul className={styles.placeList}>
				{PLACE_LIST.map((place) => {
					return (
						<li key={place} className={styles.placeItem}>
							<Description element="span">{place}</Description>
						</li>
					);
				})}
			</ul>
			<SectionHeading accented>Для больших компаний у&nbsp;нас есть</SectionHeading>
			<div className={styles.propertyList}>
				{PROPERTY_LIST.map((property) => {
					return (
						<span key={property.name} className={styles.propertyName}>
							<span className={styles.propertyCount}>{property.count}</span>
							{property.name}
						</span>
					);
				})}
			</div>
			<div className={uikit.descriptionSpacing.short}>
				<Description>
					Аренда всей базы в&nbsp;том числе автопарка стоит 2&nbsp;500&nbsp;000&nbsp;₽/сутки (до&nbsp;50&nbsp;человек).
					<br />
					<br />
					За&nbsp;организацию мероприятия мы&nbsp;берем&nbsp;10% вознаграждения исполнителя.
				</Description>
			</div>
		</div>
	);
};
