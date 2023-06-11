export interface CreateArticleParams {
  title: string;
  description: string;
  body: string;
  tagNames: string[];
}

export interface UpdateArticleParams {
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

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
  isAllowEmails: boolean;
}

export interface SignInParams {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: AccountResponse;
  type: string;
  accessToken: string;
}

export interface CreateCommentParams {
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

export interface UpdateUserParams {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  gender: Gender;
  profileImage: string;
}

export interface UpdatePasswordParams {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
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
