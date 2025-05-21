import { HousesSplit, getHousesSplit } from '@/utils';
import { HowToGet } from '@core/HowToGet';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function KakPopast() {
  return (
    <>
      <PageMeta title="Как к нам попасть" />
      <InnerPageHeader />
      <PageCover src="/images/kak-popast/tourbase.jpg" />
      <HowToGet />
      <Footer />
    </>
  );
}
