export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    username: string;
    email: string;
    bio: string;
    image: string;
    enabled: boolean;
  } | null;
  status: 'idle' | 'loading' | 'failed';
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
