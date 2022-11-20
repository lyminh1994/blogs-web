import { ProfileResponse } from './user';

export interface CommentState {
  comments: CommentResponse[] | null;
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
