import { SerializedError } from '@reduxjs/toolkit';
import { ProfileResponse } from './profile';

export interface ArticleState {
  articles: ArticleResponse[] | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
}
export interface NewArticleRequest {
  title: string;
  description: string;
  body: string;
  tagNames: string[];
}

export interface UpdateArticleRequest {
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
