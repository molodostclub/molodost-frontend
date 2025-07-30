import { GetStaticProps } from 'next';

import { OurEcosystem } from '@core/OurEcosystem';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { EcosystemModel } from '@shared/types';
import { backendApi } from '@utils';

type Props = {
	ecosystem: EcosystemModel;
};

export default function NashaEkosistema({ ecosystem }: Props) {
	const entries = ecosystem?.attributes?.entries || [];

	return (
		<>
			<PageMeta title="Наша экосистема" />
			<InnerPageHeader />
			<PageCover src="/images/ecosystem/ecosystem-new.jpg" />
			{entries.length > 0 ? <OurEcosystem ecosystemEntries={entries} /> : <p style={{ padding: '2rem' }}>⛔️ Раздел временно недоступен</p>}
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<{ ecosystem: EcosystemModel | null }> = async () => {
	try {
		const res = await backendApi.get('ecosystem', {
			params: {
				'populate[0]': 'entries',
				'populate[entries][populate]': '*',
			},
			validateStatus: (status) => status < 500,
		});

		const ecosystem = res.data?.data;

		if (!ecosystem || typeof ecosystem !== 'object') {
			console.warn('❌ Invalid ecosystem data');
			return {
				props: { ecosystem: null },
				revalidate: 60,
			};
		}

		return {
			props: { ecosystem },
			revalidate: 60,
		};
	} catch (error: any) {
		console.error('🔥 Ошибка при загрузке экосистемы:', error.message);
		return {
			props: { ecosystem: null },
			revalidate: 60,
		};
	}
};

