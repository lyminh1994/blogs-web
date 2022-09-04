import { SerializedError } from '@reduxjs/toolkit';

export interface UserState {
  user: UserResponse | null;
  profile: ProfileResponse | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
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

export interface ProfileResponse {
  username: string | null;
  bio: string | null;
  image: string | null;
  following: boolean;
}
