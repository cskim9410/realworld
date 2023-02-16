import type { Profile } from "./profile";

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

export interface resArticle {
  article: Article;
}

export interface MultipleArticle {
  articles: Article[];
  articlesCount: number;
}
