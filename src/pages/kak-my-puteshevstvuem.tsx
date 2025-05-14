import { useEffect } from 'react';
import { GetStaticProps } from 'next';

import { HowWeTrip } from '@core/HowWeTrip';
import { InnerPageHeader, PageCover, Footer, PageCoverSmall, PageMeta } from '@shared/components';
import { TripsSplit, getTripsSplit } from '@utils';
import { TravelBureau } from '@/core/TravelBureau';
import { MovingPricing } from '@/core/MovingPricing';
import { CarRent } from '@/core/CarRent';

type Props = {
	trips: TripsSplit;
};

export default function Home({ trips }: Props) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
				}, 100); // Даем DOM время на загрузку
			}
		}
	}, []);
	return (
		<>
			<PageMeta title="Как мы путешествуем" />
			<InnerPageHeader />
			<PageCover src="/images/how-we-trip-cover.jpg" />
			<HowWeTrip trips={trips} />
			<TravelBureau />
			<MovingPricing />
			<PageCoverSmall src="/images/carRent/one.jpg" />
			<CarRent />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const trips = await getTripsSplit();
		return {
			props: {
				trips,
			},
			revalidate: 5,
		};
	} catch (error) {
		console.error(error);
		console.log((error as any).response.data);
		throw error;
	}
};
