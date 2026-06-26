import Script from 'next/script';
import { Booking } from '@core/Booking';
import '@core/Booking/Booking.css';
import { Breadcrumb, Footer, InnerPageHeader, PageCover, PageMeta } from '@shared/components';
import {
	BOOKING_FORM_CONTAINER_ID,
	onTravellineLoaderReady,
	TRAVELLINE_LOADER_URL,
} from '@/utils/travelline';

export default function BookingPage() {
	return (
		<>
			<PageMeta title="Забронировать проживание" />
			<Script
				id="travelline-loader"
				src={TRAVELLINE_LOADER_URL}
				strategy="afterInteractive"
				onLoad={() => onTravellineLoaderReady(BOOKING_FORM_CONTAINER_ID)}
			/>
			<InnerPageHeader />
			<PageCover src="/images/booking/main.webp" />
			<Breadcrumb items={[{ label: 'Главная', href: '/' }, { label: 'Забронировать' }]} />
			<Booking />
			<Footer />
		</>
	);
}
