import { FC } from 'react';

import { PageHeading } from '@uikit';
import { AccordionSection } from '@shared/components';
import { ProzhivanieGrid } from '../PricesPage/PricesPage';
import * as styles from '../PricesPage/PricesPage.css';
import {
	BLAGODAT_SAUNA,
	COMFORT,
	POEZDKI,
	PUTESHESTVIYA,
	DLYA_DETEY,
	CONCEPT_STORE,
	WHAT_WE_DRINK,
	WHAT_WE_EAT,
	ZOZH_ZOM,
} from '../PricesPage/PricesPage.constants';
import {
	PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON,
	PROZHIVANIE_BAIKAL_CUBES,
	PROZHIVANIE_BAIKAL_GERAH,
	PROZHIVANIE_BAIKAL_PROGRAM,
} from './PricesPageBaikal.constants';

export const PricesPageBaikal: FC = () => {
	return (
		<main className={styles.content} id="vsibirzasvoyschet-baikal">
			<PageHeading>В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ&nbsp;&mdash; БАЙКАЛ</PageHeading>
			<br />
			<AccordionSection title="ПРОЖИВАНИЕ">
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В ГЭРАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_BAIKAL_GERAH} />
				<h3 className={styles.subsectionHeading}>РАЗМЕЩЕНИЕ В КУБИКАХ</h3>
				<ProzhivanieGrid items={PROZHIVANIE_BAIKAL_CUBES} />
				<p className={styles.additionalPersonNote}>{PROZHIVANIE_BAIKAL_ADDITIONAL_PERSON}</p>
				<h3 className={styles.subsectionHeading}>НАША ПРОГРАММА:</h3>
				<ul className={styles.list}>
					{PROZHIVANIE_BAIKAL_PROGRAM.map((item, i) => (
						<li key={i} className={styles.listItem}>
							{item}
						</li>
					))}
				</ul>
			</AccordionSection>
			<AccordionSection title={WHAT_WE_EAT.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={WHAT_WE_DRINK.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={COMFORT.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={BLAGODAT_SAUNA.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={ZOZH_ZOM.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={POEZDKI.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={PUTESHESTVIYA.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={DLYA_DETEY.title}>
				<></>
			</AccordionSection>
			<AccordionSection title={CONCEPT_STORE.title}>
				<></>
			</AccordionSection>
		</main>
	);
};
