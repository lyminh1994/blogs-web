import type { SerializedError } from '@reduxjs/toolkit';

export type UserState = {
  user: UserResponse | null;
  profile: ProfileResponse | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
};

export type UpdateUserRequest = {
  email: string;
  bio: string;
  image: string;
};

export type Gender = 0 | 1 | 2;

export interface UserResponse {
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

export type ProfileResponse = {
  username: string | null;
  bio: string | null;
  image: string | null;
  following: boolean;
};
