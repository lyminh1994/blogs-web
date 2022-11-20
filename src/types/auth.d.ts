import type { UserResponse } from './user';

export interface AuthState {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
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

export type AuthResponse = {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
};
