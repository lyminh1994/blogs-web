import { Profile } from './user';

export interface Comment {
  id: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: Profile;
}
