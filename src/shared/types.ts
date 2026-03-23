export {}

export type ID = number;

type WithSlug<T> = T & {
  slug: string;
};

type Entity<T> = {
  id: ID;
  attributes: T;
};

type StrapiResponse<T> = { data: T };

export type MediaUploadFormat = 'large' | 'small' | 'medium' | 'thumbnail';
export interface MediaUploadFormatModel {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export type MediaUploadModel = Entity<{
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    [type in MediaUploadFormat]: MediaUploadFormatModel;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}>;

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

export type TripModel = Entity<
  WithSlug<{
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
    pictures: StrapiResponse<MediaUploadModel[] | null>;
    /** Локальная обложка карточки (`/images/...`) без Strapi */
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
  }>
>;

export type HouseModel = Entity<
  WithSlug<{
    title: string;
    subtitle: string;
    description: string;
    area: number;
    peopleMin: number;
    peopleMax: number;
    basePrice: number;
    basePrice2?: number;
    pictures: StrapiResponse<MediaUploadModel[] | null>;
    video?: StrapiResponse<MediaUploadModel | null>;
    videoPreview?: StrapiResponse<MediaUploadModel | null>;
    isIndividual: boolean;
    isMars?: boolean;
    isBaikal?: boolean;
    /** Люкспинг на Байкале — отдельный блок со слайдером */
    isLuxiping?: boolean;
  }>
>;

export interface EcosystemEntryModel {
  id: ID;
  title: string;
  pagePath: string | null;
  description: string;
  cover: { data: MediaUploadModel };
  trip: TripModel['attributes'] | null;
}

export type EcosystemModel = Entity<{
  entries: EcosystemEntryModel[];
}>;

declare global {
	interface Window {
		travelline?: {
			integration?: {
				__cq?: any[];
			};
		};
	}
}