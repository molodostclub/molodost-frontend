import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as styles from './EcosystemCard.css';

type Props = {
	cover: string | null;
	name: string;
	description: string;
};

export const EcosystemCard: FC<Props> = ({ cover, name, description }) => {
	const cardContent = (
		<div className={styles.card}>
			<div className={styles.cardCover}>{!!cover && <Image fill src={cover} alt="Философия компании" unoptimized className={styles.cardCoverImage} />}</div>
			<span className={styles.cardName}>{name}</span>
			<span className={styles.cardDescription}>{description}</span>
		</div>
	);

	if (name === 'Молодость на Марсе') {
		return <Link href="/mars">{cardContent}</Link>;
	}

	if (name === 'культурная турбаза «Молодость»') {
		return <Link href="/booking">{cardContent}</Link>;
	}

	return cardContent;
};
