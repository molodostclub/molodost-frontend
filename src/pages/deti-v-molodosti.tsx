import { ChildrenInYouth } from '@core/ChildrenInYouth';
import { Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';

export default function DetiVMolodosti() {
  return (
    <>
      <PageMeta title="Дети в молодости" />
      <InnerPageHeader />
      <PageCover src="/images/deti-v-molodosti-cover.jpg" />
      <ChildrenInYouth />
      <Footer />
    </>
  );
}
