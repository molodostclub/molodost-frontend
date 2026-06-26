import { globalStyle, style } from '@vanilla-extract/css';
import { tablet } from '@styles';
import { BOOKING_FORM_CONTAINER_ID } from '@/utils/travelline';

const bookingFormSelector = `#${BOOKING_FORM_CONTAINER_ID}`;

/** Clips horizontal overflow for the whole booking section (incl. TravelLine DOM). */
export const pageRoot = style({
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: '100vw',
	minWidth: 0,
	overflowX: 'clip',
});

/**
 * Standalone content wrapper — do NOT compose with Container/pageContent.
 * pageContent uses content-box; in prod CSS bundle order that wins over border-box
 * and width:100% + 30px padding overflows the viewport.
 */
export const content = style([
	{
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: '100%',
		minWidth: 0,
		paddingTop: 15,
		paddingBottom: 30,
		paddingLeft: 30,
		paddingRight: 30,
		overflowX: 'clip',
	},
	tablet({
		paddingTop: 45,
		paddingBottom: 60,
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const heading = style([
	{
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: '100%',
		minWidth: 0,
	},
	tablet({
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const widget = style([
	{
		boxSizing: 'border-box',
		marginTop: 30,
		width: '100%',
		maxWidth: '100%',
		minWidth: 0,
		minHeight: 120,
		overflowX: 'clip',
	},
	tablet({
		marginTop: 45,
	}),
]);

globalStyle(bookingFormSelector, {
	display: 'block',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: '100%',
	minWidth: '0 !important',
	overflowX: 'clip',
});

globalStyle(`${bookingFormSelector} *`, {
	boxSizing: 'border-box',
	maxWidth: '100%',
});

globalStyle(`${bookingFormSelector} iframe`, {
	display: 'block',
	maxWidth: '100% !important',
	width: '100% !important',
	minWidth: '0 !important',
});

globalStyle(`${bookingFormSelector} .x-tl-booking-widget-container`, {
	display: 'block',
	boxSizing: 'border-box',
	maxWidth: '100% !important',
	width: '100% !important',
	minWidth: '0 !important',
	overflowX: 'clip',
});

globalStyle(`${bookingFormSelector} table`, {
	boxSizing: 'border-box',
	maxWidth: '100% !important',
	width: '100% !important',
	minWidth: '0 !important',
	tableLayout: 'fixed',
});

globalStyle(`${bookingFormSelector} [style*="width"]`, {
	maxWidth: '100% !important',
});
