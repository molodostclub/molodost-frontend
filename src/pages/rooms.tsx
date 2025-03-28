import { WhereWeLive } from '@/core/WhereWeLive';
import { HousesSplit, getHousesSplit } from '@/utils';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { GetStaticProps } from 'next';

type Props = HousesSplit;

export default function GdeZhivem(pageProps: Props) {
  return (
    <>
      <PageMeta title="Где живем?" />
      <InnerPageHeader />
      <PageCover src="/images/gde-zhivem-cover.jpg" />
      <WhereWeLive {...pageProps} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const data = await getHousesSplit();

    return {
      props: { ...data },
      revalidate: 1,
    };
  } catch (error) {
    console.error(error);
    console.log((error as any).response.data)

    throw error
  }
}
