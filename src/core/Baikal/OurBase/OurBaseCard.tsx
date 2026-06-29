import { FC } from 'react';

import { PrebuiltImage } from '@shared/components';
import type { OurBaseCardData } from './ourBase.constants';
import * as styles from './OurBaseCard.css';

type Props = OurBaseCardData;

export const OurBaseCard: FC<Props> = ({ imageSrc, imageAlt, title, description }) => {
	const paragraphs = description.split(/\n\n+/).filter(Boolean);

	return (
		<article className={styles.card}>
			<div className={styles.imageWrap}>
				<PrebuiltImage
					fill
					src={imageSrc}
					alt={imageAlt}
					className={styles.image}
					sizes="(max-width: 768px) 100vw, 50vw"
					loading="lazy"
				/>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.descriptionBlock}>
				{paragraphs.map((p, i) => (
					<p key={i} className={styles.descriptionParagraph}>
						{p}
					</p>
				))}
			</div>
		</article>
	);
};
