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
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash) {
				// ждём, пока DOM отрисуется (если блок рендерится динамически)
				requestAnimationFrame(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				});
			}
		};

		// Скролл при монтировании, если уже есть hash
		handleHashChange();

		// Скролл при каждом изменении hash
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
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
