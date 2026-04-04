import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeading } from '@uikit';
import { getMediaLinkFromModel } from '@utils';
import { EcosystemEntryModel } from '@shared/types';
import { EcosystemCard } from './EcosystemCard';
import * as styles from './OurEcosystem.css';

type Props = {
	ecosystemEntries: EcosystemEntryModel[];
};

export const OurEcosystem: FC<Props> = ({ ecosystemEntries }) => {
	return (
		<div className={styles.content}>
			<div className={styles.navButtonsWrapper}>
				<div className={styles.navButtons}>
					<Link href="/manjerok" className={styles.navButton} prefetch={false}>
						МОЛОДОСТЬ В&nbsp;МАНЖЕРОКЕ
					</Link>
					<Link href="/mars" className={styles.navButton} prefetch={false}>
						ПРИЮТ НА МАРСЕ
					</Link>
				</div>
			</div>
			<div className={styles.headingWrapper}>
				<SectionHeading>Наша экосистема на Алтае</SectionHeading>
			</div>
			<div className={styles.introBlock}>
				<p className={styles.paragraph}>
					<span className={styles.bold}>АЛТАЙ</span>&nbsp;&mdash; это географический центр Евразии, одно из красивейших и&nbsp;многозначительнейших мест на&nbsp;Земле.
				</p>
				<p className={styles.paragraph}>От&nbsp;разнообразия местных пейзажей, антропологических пластов и&nbsp;смыслов, оставленных тут разными цивилизациями, голова идёт кругом, как после посещения Метрополитен-музея или Венецианской биеннале.</p>
				<p className={styles.paragraph}>
					Сердцем нашей экосистемы является <span className={styles.accent}>культурная турбаза &laquo;Молодость в&nbsp;Манжероке&raquo;</span>, она находится на&nbsp;месте турбазы &laquo;Юность&raquo;, которая была одной из&nbsp;первых в&nbsp;стране и&nbsp;открылась в 1958&nbsp;году.
					Важной частью нашей работы является установление связи между прошлым и настоящим, между местными традициями и&nbsp;нашим современным образом жизни и&nbsp;мысли.
				</p>
				<p className={styles.paragraph}>
					Мы&nbsp;ищем точки для взаимодействия с&nbsp;тем наследием, которое на&nbsp;Алтае после себя оставили <span className={styles.accent}>Шукшин, Рерих, союзники Чингисхана, скифы и&nbsp;даже современники неандертальцев &mdash; денисовские люди</span>.
				</p>
				<p className={styles.paragraph}>
					Наш вкусный и&nbsp;уютный праздник жизни и&nbsp;молодости проходит на <span className={styles.accent}>берегах Катуни</span> и&nbsp;в&nbsp;аутентичных деревнях, полях, степях и&nbsp;горах.
				</p>
				<p className={styles.paragraph}>
					Мы&nbsp;сами <span className={styles.accent}>любим Алтай и&nbsp;хотим поделиться с&nbsp;нашими гостями тем, что сами тут обрели</span>.
				</p>
			</div>
			<div className={styles.mapImageWrap}>
				<Image src="/images/ecosystem/map.png" alt="" width={740} height={400} className={styles.mapImage} unoptimized />
			</div>
			<ul className={styles.list}>
				{ecosystemEntries.map((ecosystemEntry) => {
					const cover = ecosystemEntry.cover.data ? getMediaLinkFromModel(ecosystemEntry.cover.data, 'medium') : null;

					return (
						<li key={ecosystemEntry.id}>
							<EcosystemCard cover={cover} name={ecosystemEntry.title} description={ecosystemEntry.description} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
