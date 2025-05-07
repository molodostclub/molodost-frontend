import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles';
import { pageContent, tablet } from '@styles';

export const content = style([
	pageContent,
	tablet({
		maxWidth: `calc(100% - 120px)`,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);

export const marginTop = style([
    {marginTop: 150},
    tablet({
        marginTop: 220,
    })
])

export const titleWrapper = style([
	pageContent,
	tablet({
		maxWidth: 825,
		marginLeft: 'auto',
		marginRight: 'auto',
	}),
]);
