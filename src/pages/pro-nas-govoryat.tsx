import { TalkAboutUs } from '@/core/TalkAboutUs';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="Про нас говорят" />
      <InnerPageHeader />
      <PageCover src="/images/pro-nas-govoryat-cover.jpg" />
      <TalkAboutUs />
      <Footer />
    </>
  );
}
