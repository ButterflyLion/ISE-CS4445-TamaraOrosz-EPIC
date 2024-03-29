export interface Source {
  id: string | null;
  name: string;
}

export interface NewsArticle {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | undefined;
  publishedAt: string;
  content: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}
