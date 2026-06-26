import { globalStyle, style } from '@vanilla-extract/css';
import { tablet } from '@styles';
import { BOOKING_FORM_CONTAINER_ID } from '@/utils/travelline';

const bookingFormSelector = `#${BOOKING_FORM_CONTAINER_ID}`;

export const content = style({
	paddingTop: 15,
	paddingBottom: 30,
	width: '100%',
	maxWidth: '100%',
	minWidth: 0,
	overflowX: 'hidden',
	boxSizing: 'border-box',
});

export const heading = style([
	{
		width: '100%',
	},
	tablet({
		maxWidth: 746,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const widget = style([
	{
		marginTop: 30,
		width: '100%',
		maxWidth: '100%',
		minWidth: 0,
		minHeight: 120,
		overflowX: 'hidden',
		boxSizing: 'border-box',
	},
	tablet({
		marginTop: 45,
	}),
]);

globalStyle(bookingFormSelector, {
	width: '100%',
	maxWidth: '100%',
	minWidth: 0,
	overflowX: 'hidden',
});

globalStyle(`${bookingFormSelector} iframe`, {
	maxWidth: '100% !important',
	width: '100% !important',
});

globalStyle(`${bookingFormSelector} .x-tl-booking-widget-container`, {
	maxWidth: '100% !important',
	width: '100% !important',
	minWidth: '0 !important',
});
