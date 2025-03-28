import { GetStaticProps } from 'next';

import { OurEcosystem } from '@core/OurEcosystem';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { EcosystemModel } from '@shared/types';
import { backendApi } from '@utils';

type Props = {
  ecosystem: EcosystemModel;
};

export default function NashaEkosistema(props: Props) {
  const {
    ecosystem: {
      attributes: { entries },
    },
  } = props;

  return (
    <>
      <PageMeta title="Наша экосистема" />
      <InnerPageHeader />
      <PageCover src="/images/our-ecosystem-new.jpg" />
      <OurEcosystem ecosystemEntries={entries} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await backendApi.get('ecosystem', {
    params: {
      'populate[0]': 'entries',
      'populate[entries][populate]': '*',
    },
  });

  if (!data) throw new Error('No ecosystem component');

  const ecosystem: EcosystemModel = data.data;

  return {
    props: {
      ecosystem,
    },
    revalidate: 1,
  };
};
