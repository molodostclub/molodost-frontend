import { GetStaticProps } from 'next';

import { InnerPageHeader, PageCover } from '@shared/components';
import { backendApi, getMediaLinkFromModel } from '@utils';
import { EcosystemModel } from '@/shared/types';
import { InfoCard } from '@/uikit';

export default function CardsPage({ ecosystem }: { ecosystem: EcosystemModel }) {
  const { attributes: { entries } } = ecosystem;

  return (
    <>
      <InnerPageHeader />
      <PageCover />
      {entries.map(({ id, cover, title, pagePath, trip }) => (
        <InfoCard image={getMediaLinkFromModel(cover.data)} title={title} key={id} linkTo={pagePath ? pagePath : trip ? `/puteshestvia/${trip.slug}` : undefined} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<{ ecosystem: EcosystemModel }> = async () => {
  const { data } = await backendApi.get('ecosystem', {
    params: {
      'populate[0]': 'entries',
      'populate[entries][populate]': '*'
    }
  });

  if (!data) throw new Error('No ecosystem component');

  const ecosystem: EcosystemModel = data.data;

  return {
    props: {
      ecosystem,
    },
    revalidate: 1,
  };
}
