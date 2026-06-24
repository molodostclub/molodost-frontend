import { useEffect } from 'react';

import { mountTravellineBookingWidget } from '@/utils/travelline';

/** Client-side fallback if the early _document bootstrap did not run. */
export function TravellineSearch() {
	useEffect(() => mountTravellineBookingWidget(), []);

	return null;
}
