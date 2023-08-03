export interface CreateArticleRequest {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}

export interface UpdateArticleRequest {
  slug: string;
  title: string;
  body: string;
  description: string;
  tagList?: string[];
}

export interface ArticleResponse {
  articles: Article[];
  articlesCount: number;
}

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  isAllowEmails?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: UserResponse;
}

export type UserResponse = {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
};

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
  tags: string[];
}

export interface UpdateUserRequest {
  email: string;
  username: string;
  password?: string;
  image: string;
  bio: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ProfileResponse {
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
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
