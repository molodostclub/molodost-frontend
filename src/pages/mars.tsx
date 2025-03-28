import { PageContainer, Postscriptum } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { Mars } from '@/core/Mars';
import { HousesSplit } from '@/utils';
import { GetStaticProps } from 'next';
import { getHousesSplit } from '@/utils';

type Props = HousesSplit;

export default function MarsPage(pageProps: Props) {
  return (
    <>
      <PageMeta title="Приют на марсе" />
      <InnerPageHeader />
      <PageCover src="/images/mars/main.jpeg" />
      <PageContainer>
        <Mars {...pageProps} />
        <Postscriptum />
      </PageContainer>
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