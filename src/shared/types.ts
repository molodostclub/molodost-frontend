export {}

export type ID = number;

export interface NoteModel {
	id: ID;
	text: string;
}

/** Строка футера карточки Байкал: слева услуга / справа цена, со сносками под каждой колонкой */
export type TripPriceFooterRowTwoCols = {
	variant: 'twoCols';
	left: string;
	leftNote?: string;
	right: string;
	rightNote?: string;
};

/** Заголовок блока цен на всю ширину (жёлтый) */
export type TripPriceFooterRowPlain = {
	variant: 'plain';
	text: string;
};

/** Три колонки: название | цена | длительность (+ сноски) */
export type TripPriceFooterRowThreeCols = {
	variant: 'threeCols';
	left: string;
	mid: string;
	right: string;
	leftNote?: string;
	midNote?: string;
	rightNote?: string;
	/** Сноска под правой колонкой жёлтая (как «25–27 км» в макете) */
	rightNoteAccent?: boolean;
};

export type TripPriceFooterRow =
	| TripPriceFooterRowTwoCols
	| TripPriceFooterRowPlain
	| TripPriceFooterRowThreeCols;

export type TripModel = {
	id: ID;
	slug: string;
	title: string;
	subtitle: string;
	/**
	 * Короткая подпись слева под заголовком (макет карточек Байкал: «на байдарках», «(нерпы — здесь!)»).
	 * Вместе с `subtitle` даёт две колонки: слева подпись, справа основной текст.
	 */
	titleNote?: string;
	/**
	 * Строка под блоком описания, по правому краю (напр. «Никакого интернета.»).
	 */
	subtitleClosing?: string;
	description: string;
	priceAdult: number;
	priceChild: number;
	isAllDay: boolean;
	durationText: string | null;
	notes: NoteModel[];
	pictures: string[];
	/** Локальная обложка карточки (`/images/...`) без CMS */
	staticCoverPath?: string;
	/** Несколько кадров — слайдер внутри карточки (Байкал) */
	staticCoverPaths?: string[];
	/** Левая часть жёлтого футера («Весь день») */
	footerDuration?: string;
	/** Правая часть жёлтого футера (цена строкой) */
	footerPrice?: string;
	/** Структурированный футер (колонки и сноски), приоритетнее `priceFooterLines` */
	priceFooterRows?: TripPriceFooterRow[];
	/** Многострочный жёлтый футер (простые строки), если нет `priceFooterRows` */
	priceFooterLines?: string[];
};

export type HouseModel = {
	id: ID;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	area: number;
	peopleMin: number;
	peopleMax: number;
	basePrice: number;
	basePrice2?: number;
	pictures: string[];
	video?: string;
	videoPreview?: string;
	isIndividual: boolean;
	isMars?: boolean;
	isBaikal?: boolean;
	/** Люкспинг на Байкале — отдельный блок с карточкой и фото */
	isLuxiping?: boolean;
};

export interface EcosystemEntryModel {
	id: ID;
	title: string;
	pagePath: string | null;
	description: string;
	cover: string | null;
	tripSlug: string | null;
}

export type EcosystemModel = {
	entries: EcosystemEntryModel[];
};

declare global {
	interface Window {
		TL?: unknown;
		travelline?: {
			integration?: {
				__cq?: unknown;
				__loader?: boolean;
				loaded?: boolean;
				embed?: (widget: string, options?: { container?: string }) => void;
			};
		};
	}
}
