import { GetStaticPaths, GetStaticProps } from 'next';

import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { backendApi, getMediaLinkFromModel } from '@utils';
import { TripModel } from '@/shared/types';
import { Trip } from '@/core/Trip';

export default function TripPage({ trip }: { trip: TripModel }) {
  const coverUrl = trip.attributes.pictures.data?.length
    ? getMediaLinkFromModel(trip.attributes.pictures.data[0])
    : null;

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

export const getStaticProps: GetStaticProps<
  { trip: TripModel },
  { slug: string }
> = async ({ params }) => {
  if (!params) throw new Error('Not found');

  try {
    const { data } = await backendApi.get(`slugify/slugs/trip/${params.slug}`, {
      params: { populate: '*' },
    });

    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const trip: TripModel = data.data;

    return {
      props: {
        trip,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error(error);
    console.log((error as any).response.data);

    throw error;
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
  } catch (error) {
    console.error(error);

    throw error;
  }
};
