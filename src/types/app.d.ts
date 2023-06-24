export interface CreateArticleRequest {
  title: string;
  description: string;
  body: string;
  tagNames?: string[];
}

export interface UpdateArticleRequest {
  slug: string;
  title: string;
  body: string;
  description: string;
}

export interface ArticleResponse {
  id: number;
  author: Profile;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  favorite: boolean;
  favoritesCount: number;
  tagNames: Array<string>;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  isAllowEmails?: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: AccountResponse;
  type: string;
  accessToken: string;
}

export interface CreateCommentRequest {
  body: string;
}

export interface CommentResponse {
  id: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  user: Profile;
}

export interface TagResponse {
  id: number;
  name: string;
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
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

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export interface UserResponse {
  publicId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  gender: Gender;
  profileImage: string;
  authorities: string[];
}

export interface UserProfileResponse {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
