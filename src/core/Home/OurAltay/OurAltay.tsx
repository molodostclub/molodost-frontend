import Link from 'next/link';
import Image from 'next/image';

import { Description, SectionHeading } from '@uikit';
import * as styles from './OurAltay.css';

export const OurAltay = () => {
	return (
		<div className={styles.container}>
			<SectionHeading>Наш алтай</SectionHeading>
			<div className={styles.imageWrap}>
				<Image fill alt="" src="/images/our-altay/our-altay.jpg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className={styles.image} />
			</div>
			<div className={styles.textContent}>
				<Description>
					Алтай &mdash; это географический центр Евразии, одно из&nbsp;красивейших и многозначительнейших мест на&nbsp;Земле.
					<br />
					<br />
					От&nbsp;разнообразия местных пейзажей, антропологических пластов и&nbsp;смыслов, оставленных тут разными цивилизациями, голова идет кругом, как после посещения Метрополитен-музея или Венецианской биеннале.
					<br />
					<br />
					Наша культурная турбаза находится на&nbsp;месте турбазы &laquo;Юность&raquo;, которая была одной из&nbsp;первых в&nbsp;стране и&nbsp;открылась в&nbsp;1958&nbsp;году. Важной частью нашей работы является установление связи между прошлым и&nbsp;настоящим, между местными традициями
					и&nbsp;нашим современным образом жизни и&nbsp;мысли.
					<br />
					<br />
					Мы&nbsp;ищем точки для взаимодействия с&nbsp;тем наследием, которое на&nbsp;Алтае после себя оставили Шукшин, Рерих, союзники Чингисхана, скифы и&nbsp;даже современники неандертальцев&nbsp;&mdash; денисовские люди.
					<br />
					<br />
					Наш вкусный и&nbsp;уютный праздник жизни и&nbsp;молодости проходит на&nbsp;берегах Катуни и&nbsp;в аутентичных деревнях, полях, степях и&nbsp;горах.
					<br />
					<br />
					Мы&nbsp;сами любим Алтай и&nbsp;хотим поделиться с&nbsp;нашими гостями тем, что сами тут обрели.
				</Description>

				<div className={styles.card}>
					<Link href="/mars">
						<p className={styles.cardTitleAccented}>На Марс раньше Илона Маска</p>
						<p className={styles.cardDescription}>В&nbsp;нашем новом гостевом доме &laquo;Молодость на&nbsp;Марсе&raquo; в&nbsp;селе Тобелер в&nbsp;20км от&nbsp;границы с&nbsp;Монголией</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
