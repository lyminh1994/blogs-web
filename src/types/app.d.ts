export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  isAllowEmails?: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: UserResponse;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export type Gender = MALE | FEMALE | OTHER | null;

export interface UserResponse {
  publicId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  gender: Gender;
  profileImage: string;
}

export interface UpdateUserRequest {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  gender?: Gender;
  profileImage?: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ProfileResponse {
  publicId: string;
  fullName: string;
  phone: string;
  birthday: string;
  gender: Gender;
  profileImage: string;
  following: boolean;
}

export interface ArticlesResponse {
  contents: ArticleResponse[];
  totalElements: number;
}

export type ArticleResponse = {
  id: number;
  author: Author;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  favorite: boolean;
  favoritesCount: number;
  tagNames: Array<string>;
};

export type Author = {
  publicId: string;
  fullName: string;
  phone: string;
  birthday: string;
  gender: Gender;
  profileImage: string;
  following: boolean;
};

export interface CreateArticleRequest {
  title: string;
  description: string;
  body: string;
  tagNames?: Array<string>;
}

export interface UpdateArticleRequest {
  title: string;
  description: string;
  body: string;
  tagNames?: Array<string>;
}

export interface TagResponse {
  contents: Array<Tag>;
  totalElements: number;
}

export type Tag = {
  id: number;
  name: string;
};

export interface CreateCommentRequest {
  body: string;
}

export interface CommentsResponse {
  contents: Array<CommentResponse>;
  totalElements: number;
}

export type CommentResponse = {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: ProfileResponse;
};
