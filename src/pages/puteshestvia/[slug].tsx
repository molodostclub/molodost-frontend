import { GetStaticProps } from 'next';

import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { getTripBySlug, getTripsList, resolveCmsPath } from '@utils';
import { TripModel } from '@/shared/types';
import { Trip } from '@/core/Trip';

export default function TripPage({ trip }: { trip: TripModel }) {
	if (!trip) return <div>❌ Страница не найдена</div>;

	const coverUrl = trip.pictures[0] ? resolveCmsPath(trip.pictures[0]) : null;

	return (
		<>
			<PageMeta title={trip.title} />
			<InnerPageHeader />
			<PageCover src={coverUrl} unoptimized />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Как мы путешествуем', href: '/kak-my-puteshevstvuem' }, { label: trip.title }]} />
			<Trip trip={trip} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<{ trip: TripModel | null }, { slug: string }> = async ({ params }) => {
	const slug = params?.slug;
	if (!slug) return { notFound: true };

	const trip = getTripBySlug(slug);
	if (!trip) return { notFound: true };

	return { props: { trip } };
};

export const getStaticPaths = () => {
	const trips = getTripsList();
	const paths = trips
		.filter((t) => !!t.slug)
		.map((trip) => ({
			params: { slug: trip.slug },
		}));

	return { paths, fallback: false };
};
