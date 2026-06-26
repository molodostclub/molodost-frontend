import { GetStaticProps } from 'next';

import { InnerPageHeader, PageCover } from '@shared/components';
import { getEcosystem, resolveCmsPath } from '@utils';
import { EcosystemModel } from '@/shared/types';
import { InfoCard } from '@/uikit';

export default function CardsPage({ ecosystem }: { ecosystem: EcosystemModel }) {
	if (!ecosystem.entries.length) {
		return (
			<>
				<InnerPageHeader />
				<PageCover />
				<p style={{ padding: '2rem', textAlign: 'center' }}>Карточки временно недоступны. Попробуйте позже.</p>
			</>
		);
	}

	return (
		<>
			<InnerPageHeader />
			<PageCover />
			{ecosystem.entries.map(({ id, cover, title, pagePath, tripSlug }) => (
				<InfoCard
					image={cover ? resolveCmsPath(cover) : ''}
					title={title}
					key={id}
					linkTo={pagePath ? pagePath : tripSlug ? `/puteshestvia/${tripSlug}` : undefined}
				/>
			))}
		</>
	);
}

export const getStaticProps: GetStaticProps<{ ecosystem: EcosystemModel }> = () => ({
	props: { ecosystem: getEcosystem() },
});
