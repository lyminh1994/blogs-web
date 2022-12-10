export interface NewArticle {
  title: string;
  description: string;
  body: string;
  tagNames: string[];
}

export interface UpdateArticle {
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

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
}

export interface NewCommentRequest {
  body: string;
}

export interface CommentResponse {
  id: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  user: Profile;
}

export interface Tag {
  id: number;
  name: string;
}

export interface UpdateAccountRequest {
  email: string;
  bio: string;
  image: string;
}

export interface UpdateAccountPassword {
  newPassword: string;
  oldPassword: string;
  confirmPassword?: string;
}

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export interface AccountResponse {
  publicId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: Date;
  gender: Gender;
  profileImage: string;
  authorities: string[];
}

export interface Profile {
  username: string | null;
  bio: string | null;
  image: string | null;
  following: boolean;
}
