import { Manjerok } from '@/core/Manjerok';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { HousesSplit, getHousesSplit, getTripsSplit, TripsSplit } from '@/utils';
import { GetStaticProps } from 'next';

type Props = HousesSplit & { trips: TripsSplit };

export default function ManjerokPage({ individual, inHouse, luxiping, trips }: Props) {
	return (
		<>
			<PageMeta title="Молодость в Манжероке" />
			<InnerPageHeader />
			<PageCover src="/images/main-cover2.webp" />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Экосистема Алтай', href: '/nasha-ekosistema' }, { label: 'Молодость в Манжероке' }]} />
			<Manjerok houses={{ individual, inHouse, luxiping }} trips={trips} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = () => ({
	props: {
		...getHousesSplit(),
		trips: getTripsSplit(),
	},
});
