import { FC } from 'react';
import Image from 'next/image';

import * as styles from './EcosystemCard.css';

type Props = {
	cover: string | null;
	name: string;
	description: string;
};

export const EcosystemCard: FC<Props> = ({ cover, name, description }) => (
	<div className={styles.card}>
		<div className={styles.cardCover}>{!!cover && <Image fill src={cover} alt={name} unoptimized className={styles.cardCoverImage} />}</div>
		<span className={styles.cardName}>{name}</span>
		<span className={styles.cardDescription}>{description}</span>
	</div>
);
