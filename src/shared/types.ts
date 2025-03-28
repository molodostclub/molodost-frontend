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

export type TripModel = Entity<
  WithSlug<{
    title: string;
    subtitle: string;
    description: string;
    priceAdult: number;
    priceChild: number;
    isAllDay: boolean;
    durationText: string | null;
    notes: NoteModel[];
    pictures: StrapiResponse<MediaUploadModel[] | null>;
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
    pictures: StrapiResponse<MediaUploadModel[] | null>;
    video?: StrapiResponse<MediaUploadModel | null>;
    videoPreview?: StrapiResponse<MediaUploadModel | null>;
    isIndividual: boolean;
    isMars?: boolean;
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
