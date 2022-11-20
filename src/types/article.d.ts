import { ProfileResponse } from './user';

export interface ArticleState {
  articles: ArticleResponse[] | null;
}
export interface NewArticleRequest {
  title: string;
  description: string;
  body: string;
  tagNames: string[];
}

export interface UpdateArticleRequest {
  slug: string;
  title: string;
  body: string;
  description: string;
}
export interface ArticleResponse {
  id: number;
  author: ProfileResponse;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  favorite: boolean;
  favoritesCount: number;
  tagNames: string[];
}
