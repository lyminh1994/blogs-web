import { SerializedError } from '@reduxjs/toolkit';

export interface ProfileState {
  profile: ProfileResponse | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
}

export interface ProfileResponse {
  username: string | null;
  bio: string | null;
  image: string | null;
  following: boolean;
}
