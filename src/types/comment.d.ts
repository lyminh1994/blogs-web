import { SerializedError } from '@reduxjs/toolkit';
import { ProfileResponse } from './profile';

export interface CommentState {
  comments: CommentResponse[] | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
}

export interface NewCommentRequest {
  body: string;
}

export interface CommentResponse {
  id: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  user: ProfileResponse;
}
