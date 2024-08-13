export interface imageTypes {
  alternative_slugs: { en: string; de: string; es: string; fr: string; it: string; ja: string; ko: string; pt: string };
  breadcrumbs: { slug: string; title: string; index: number; type: string }[];
  links: { download: string; download_location: string; html: string; self: string };
  tags: { type: string; title: string; sourse: object; }
  topic_submissions: object;
  urls: { full: string; raw: string; regular: string; small: string; small_s3: string; thumb: string; };
  user: object;
  alt_description: string;
  asset_type: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  promoted_at: string;
  slug: string;
  sponsorship: null | string;
  updated_at: string;
  width: number;
}