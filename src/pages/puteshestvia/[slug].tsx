import { GetStaticPaths, GetStaticProps } from 'next';

import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { backendApi, getMediaLinkFromModel } from '@utils';
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

export const getStaticProps: GetStaticProps<{ trip: TripModel }, { slug: string }> = async ({ params }) => {
	if (!params?.slug) {
		console.warn('⛔️ No slug provided to getStaticProps');
		return { notFound: true };
	}

	try {
		const res = await backendApi.get(`slugify/slugs/trip/${params.slug}`, {
			params: { populate: '*' },
			validateStatus: (status) => status < 500,
		});

		const trip = res.data?.data;

		if (!trip || typeof trip !== 'object') {
			console.warn(`❌ Trip not found or invalid for slug: ${params.slug}`);
			return { notFound: true };
		}

		return {
			props: { trip },
			revalidate: 60,
		};
	} catch (error: any) {
		console.error(`🔥 Ошибка при загрузке trip ${params.slug}:`, error?.message || error);
		return { notFound: true };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data } = await backendApi.get(`trips/`);
		const trips: TripModel[] = data.data;

		const paths = trips
			.filter((t) => !!t.attributes.slug)
			.map((trip) => ({
				params: {
					slug: trip.attributes.slug,
				},
			}));

		return {
			paths,
			fallback: 'blocking',
		};
	} catch (error: any) {
		console.error('🔥 Ошибка при загрузке getStaticPaths для trips:', error?.message || error);
		return {
			paths: [],
			fallback: 'blocking', // 👈 всё ещё можно генерировать по запросу
		};
	}
};
