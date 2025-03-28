import { GetStaticProps } from 'next';

import {
  HowWeTrip,
} from '@core/HowWeTrip';
import { InnerPageHeader, PageCover, Footer, PageCoverSmall, PageMeta } from '@shared/components';
import { TripsSplit, getTripsSplit } from '@utils';
import { TravelBureau } from '@/core/TravelBureau';
import { MovingPricing } from '@/core/MovingPricing';
import { CarRent } from '@/core/CarRent';

type Props = {
  trips: TripsSplit;
};

export default function Home({ trips }: Props) {
  return (
    <>
      <PageMeta title="Как мы путешествуем" />
      <InnerPageHeader />
      <PageCover src="/images/how-we-trip-cover.jpg" />
      <HowWeTrip trips={trips} />
      <PageCoverSmall src="/images/bureau-1.jpg" />
      <TravelBureau />
      <MovingPricing />
      <PageCoverSmall src="/images/avtoprokat-cover.jpg" />
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
