export interface BookItem {
  id: string;
  title: string;
  slug?: string;
  author: string;
  category: string;
  categoryKey: string;
  publisher: string;
  regularPrice?: number;
  salePrice?: number;
  coverImage?: string;
  rokomariId?: string;
  rokomariUrl?: string;
  wafilifeUrl?: string;
  kitabghorUrl?: string;
  isMeshkOriginal: boolean;
  isPocketEdition?: boolean;
  featured?: boolean;
  pages?: string;
  synopsis?: string;
  edition?: string;
  tableOfContents?: string[];
  hasRokomariPreview?: boolean;
}

export interface SiteConfig {
  brandName: string;
  englishBrandName: string;
  slogan: string;
  authorName: string;
  authorTitle: string;
  authorBio: string;
  authorDetailedBio: string;
  authorQuote: string;
  authorQuoteAuthor: string;
  officialAddress: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  phoneDisplay: string;
  facebookPage: string;
  facebookProfile: string;
  rokomariPublisherUrl: string;
  rokomariAuthorUrl: string;
  wafilifePublisherUrl: string;
  kitabghorPublisherUrl: string;
  bdbooksPublisherUrl: string;
}
