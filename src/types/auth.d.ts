import { User } from './user';

export interface Auth {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
}

export interface LoginValues {
  username: string;
  password: string;
}

export interface RegisterValues {
  username: string;
  password: string;
  email: string;
}
