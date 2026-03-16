import { Manjerok } from '@/core/Manjerok';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { HousesSplit, getHousesSplit, getTripsSplit, TripsSplit } from '@/utils';
import { GetStaticProps } from 'next';

type Props = HousesSplit & { trips: TripsSplit };

export default function ManjerokPage({ individual, inHouse, trips }: Props) {
	return (
		<>
			<PageMeta title="Молодость в Манжероке" />
			<InnerPageHeader />
			<PageCover src="/images/main-cover2.jpg" />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Экосистема Алтай', href: '/nasha-ekosistema' }, { label: 'Молодость в Манжероке' }]} />
			<Manjerok houses={{ individual, inHouse }} trips={trips} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const [housesData, trips] = await Promise.all([getHousesSplit(), getTripsSplit()]);
		return {
			props: { ...housesData, trips },
			revalidate: 60,
		};
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		console.warn('getStaticProps error:', message);
		return {
			props: {
				individual: [],
				inHouse: [],
				trips: { allDay: [], notAllDay: [] },
			},
			revalidate: 300,
		};
	}
};
