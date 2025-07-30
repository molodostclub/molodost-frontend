import { GetStaticProps } from 'next';

import { InnerPageHeader, PageCover } from '@shared/components';
import { backendApi, getMediaLinkFromModel } from '@utils';
import { EcosystemModel } from '@/shared/types';
import { InfoCard } from '@/uikit';

export default function CardsPage({ ecosystem }: { ecosystem: EcosystemModel | null }) {
	if (!ecosystem || !ecosystem.attributes?.entries?.length) {
		return (
			<>
				<InnerPageHeader />
				<PageCover />
				<p style={{ padding: '2rem', textAlign: 'center' }}>Карточки временно недоступны. Попробуйте позже.</p>
			</>
		);
	}

	const {
		attributes: { entries },
	} = ecosystem;

	return (
		<>
			<InnerPageHeader />
			<PageCover />
			{entries.map(({ id, cover, title, pagePath, trip }) => (
				<InfoCard image={getMediaLinkFromModel(cover?.data)} title={title} key={id} linkTo={pagePath ? pagePath : trip?.slug ? `/puteshestvia/${trip.slug}` : undefined} />
			))}
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
			validateStatus: (status) => status < 500, // 💡 важно
		});

		const ecosystem = res.data?.data;

		if (!ecosystem || typeof ecosystem !== 'object') {
			console.warn('❌ Invalid or missing ecosystem data');
			return {
				props: {
					ecosystem: null,
				},
				revalidate: 60,
			};
		}

		return {
			props: {
				ecosystem,
			},
			revalidate: 60,
		};
	} catch (error: any) {
		console.error('🔥 Ошибка при загрузке ecosystem:', error.message);
		return {
			props: {
				ecosystem: null,
			},
			revalidate: 60,
		};
	}
};
