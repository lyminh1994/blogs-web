import { SerializedError } from '@reduxjs/toolkit';

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

export interface UpdateUserRequest {
  email: string;
  bio: string;
  image: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  bio: string | null;
  image: string | null;
}

export interface AuthResponse {
  user: UserResponse | null;
  type: string | null;
  accessToken: string | null;
}
