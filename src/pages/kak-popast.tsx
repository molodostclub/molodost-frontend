import { HousesSplit, getHousesSplit } from '@/utils';
import { HowToGet } from '@core/HowToGet';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import { GetStaticProps } from 'next';

type Props = HousesSplit;

export default function KakPopast(pageProps: Props) {
  return (
    <>
      <PageMeta title="Как к нам попасть" />
      <InnerPageHeader />
      <PageCover src="/images/kak-popast-cover.jpg" />
      <HowToGet {...pageProps} />
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
