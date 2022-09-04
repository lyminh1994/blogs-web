import { SerializedError } from '@reduxjs/toolkit';
import { UserResponse } from './user';

export interface AuthState {
  user?: UserResponse | null;
  type?: string | null;
  accessToken?: string | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
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

export interface AuthResponse {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
}
