import { GetStaticProps } from 'next';

import { OurEcosystem } from '@core/OurEcosystem';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { EcosystemModel } from '@shared/types';
import { getEcosystem } from '@utils';

type Props = {
	ecosystem: EcosystemModel;
};

export default function NashaEkosistema({ ecosystem }: Props) {
	const entries = ecosystem.entries;

	return (
		<>
			<PageMeta title="Наша экосистема" />
			<InnerPageHeader />
			<PageCover src="/images/ecosystem/ecosystem-new.webp" />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Экосистема Алтай' }]} />
			{entries.length > 0 ? <OurEcosystem ecosystemEntries={entries} /> : <p style={{ padding: '2rem' }}>⛔️ Раздел временно недоступен</p>}
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = () => {
	return {
		props: {
			ecosystem: getEcosystem(),
		},
	};
};
