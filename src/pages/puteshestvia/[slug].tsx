import { GetStaticPaths, GetStaticProps } from 'next';

import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { backendApi, getMediaLinkFromModel, getTripsList } from '@utils';
import { TripModel } from '@/shared/types';
import { Trip } from '@/core/Trip';

export default function TripPage({ trip }: { trip: TripModel }) {
	if (!trip) return <div>❌ Страница не найдена</div>; // 💡 защита на уровне UI

	const coverUrl = trip.attributes.pictures.data?.length ? getMediaLinkFromModel(trip.attributes.pictures.data[0]) : null;

	return (
		<>
			<PageMeta title={trip.attributes.title} />
			<InnerPageHeader />
			<PageCover src={coverUrl} unoptimized />
			<Trip trip={trip} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<{ trip: TripModel | null }, { slug: string }> = async ({ params }) => {
	const slug = params?.slug;
	if (!slug) return { notFound: true };

	try {
		const res = await backendApi.get(`slugify/slugs/trip/${slug}`, {
			params: { populate: '*' },
			timeout: 8000,
			validateStatus: (s) => s < 500,
		});

		const trip = res.data?.data as TripModel | undefined;
		if (!trip) return { notFound: true };

		return { props: { trip }, revalidate: 60 };
	} catch {
		return { notFound: true };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const trips = await getTripsList();
		const paths = trips
			.filter((t) => !!t.attributes?.slug)
			.map((trip) => ({
				params: { slug: trip.attributes.slug },
			}));

		return { paths, fallback: 'blocking' };
	} catch (error: unknown) {
		console.error('🔥 Ошибка при загрузке getStaticPaths для trips:', error instanceof Error ? error.message : error);
		return {
			paths: [],
			fallback: 'blocking',
		};
	}
};
