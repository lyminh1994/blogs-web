import { SerializedError } from '@reduxjs/toolkit';

export interface TagState {
  tags: TagResponse[] | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: SerializedError;
}

export interface TagResponse {
  tagNames: string[];
}
