import { User } from "./user";

export interface Article {
  id: string;
  slug?: string;
  title: string;
  description: string;
  body: string;
  favorite: boolean;
  favoritesCount: number;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  author: User;
}
