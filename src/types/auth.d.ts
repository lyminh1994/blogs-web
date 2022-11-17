import type { SerializedError } from '@reduxjs/toolkit';
import type { UserResponse } from './user';

export type RequestState = 'pending' | 'fulfilled' | 'rejected';

export interface AuthState {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
  status?: RequestState;
  error?: SerializedError;
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
