import { TalkAboutUs } from '@/core/TalkAboutUs';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function ChtoMyEdim() {
  return (
    <>
      <PageMeta title="О нас говорят" />
      <InnerPageHeader />
      <PageCover src="/images/pro-nas-govoryat-cover.jpg" />
      <Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'О нас говорят' }]} />
      <TalkAboutUs />
      <Footer />
    </>
  );
}
