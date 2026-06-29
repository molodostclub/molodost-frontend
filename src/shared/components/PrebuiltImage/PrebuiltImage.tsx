/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { isPrebuiltStaticImage } from '@utils';

type Props = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	className?: string;
	sizes?: string;
	priority?: boolean;
	loading?: 'lazy' | 'eager';
	fetchPriority?: 'high' | 'low' | 'auto';
};

export const PrebuiltImage: FC<Props> = ({
	src,
	alt,
	width,
	height,
	fill,
	className,
	sizes,
	priority = false,
	loading,
	fetchPriority,
}) => {
	const resolvedLoading = loading ?? (priority ? 'eager' : 'lazy');
	const resolvedFetchPriority = fetchPriority ?? (priority ? 'high' : 'auto');

	if (isPrebuiltStaticImage(src)) {
		return (
			<img
				src={src}
				alt={alt}
				width={fill ? undefined : width}
				height={fill ? undefined : height}
				className={className}
				loading={resolvedLoading}
				fetchPriority={resolvedFetchPriority}
				decoding="async"
				sizes={sizes}
				style={
					fill
						? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
						: undefined
				}
			/>
		);
	}

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			fill={fill}
			className={className}
			sizes={sizes}
			priority={priority}
		/>
	);
};
