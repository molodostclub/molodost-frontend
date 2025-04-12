import { PageContainer, Postscriptum } from '@core/Home';
import { InnerPageHeader, PageCover, Footer, PageMeta } from '@shared/components';
import { BaikalPage } from '@/core/Baikal';
import { HousesSplit } from '@/utils';
import { GetStaticProps } from 'next';
import { getHousesSplit } from '@/utils';

type Props = HousesSplit;

export default function Baikal(pageProps: Props) {
  return (
    <>
      <PageMeta title="Молодость на Байкале" />
      <InnerPageHeader />
      <PageCover src="/images/baikal/main.png" />
      <PageContainer>
        <BaikalPage {...pageProps} />
        <Postscriptum />
      </PageContainer>
      <Footer />
    </>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   try {
//     const data = await getHousesSplit();

//     return {
//       props: { ...data },
//       revalidate: 1,
//     };
//   } catch (error) {
//     console.error(error);
//     console.log((error as any).response.data)

//     throw error
//   }
// }