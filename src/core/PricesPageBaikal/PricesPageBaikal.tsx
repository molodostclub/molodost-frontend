import { FC } from 'react';

import { PageHeading } from '@uikit';
import { AccordionSection } from '@shared/components';
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

export const PricesPageBaikal: FC = () => {
	return (
		<main className={styles.content} id="vsibirzasvoyschet-baikal">
			<PageHeading>В&nbsp;СИБИРЬ ЗА&nbsp;СВОЙ СЧЁТ&nbsp;&mdash; БАЙКАЛ</PageHeading>
			<br />
			<AccordionSection title="ПРОЖИВАНИЕ">
				<></>
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
