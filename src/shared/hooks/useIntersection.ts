import { RefObject, useEffect, useRef, useState } from 'react';

type Options = {
	rootMargin?: string;
	threshold?: number;
};

/** Срабатывает один раз, когда элемент попадает в viewport (с запасом rootMargin). */
export function useIntersection<T extends Element = HTMLDivElement>(
	options: Options = {},
): { ref: RefObject<T>; isInView: boolean } {
	const { rootMargin = '250px', threshold = 0 } = options;
	const ref = useRef<T>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node || isInView) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
				}
			},
			{ rootMargin, threshold },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [rootMargin, threshold, isInView]);

	return { ref, isInView };
}
