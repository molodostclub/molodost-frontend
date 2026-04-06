import { FC } from 'react';
import * as styles from './PackageBlock.css';

export const PackageBlock: FC = () => (
	<>
		<div className={styles.packageBox}>
			<p className={styles.packageHeader}>
				Проживание и&nbsp;питание у&nbsp;нас предоставляется пакетом,
				<br />
				это сильно проще и&nbsp;дешевле:
			</p>
			<p className={styles.packagePrice}>
				от&nbsp;<strong>40&nbsp;000&nbsp;₽</strong> за&nbsp;1&nbsp;взрослого в&nbsp;хорошей спальне (5&nbsp;ночь в&nbsp;подарок)
			</p>
			<p className={styles.packagePrice}>
				доп взрослый от&nbsp;<strong>15&nbsp;000&nbsp;₽</strong> в&nbsp;сутки
			</p>
			<p className={styles.packagePrice}>
				ребёнок от&nbsp;<strong>5&nbsp;000&nbsp;₽</strong> в&nbsp;сутки (от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет)
			</p>
		</div>
		<p className={styles.packageIncluded}>
			В&nbsp;пакет входит проживание в&nbsp;выбранной категории, круглосуточное питание, кофейня, трансфер
			в/из&nbsp;аэропорта, поездки, хайкинги, оздоровительные прогулки, музеи, культурная программа
			на&nbsp;базе, групповое парения по&nbsp;расписанию, оздоровительные практики в&nbsp;рамках программы
		</p>
	</>
);
