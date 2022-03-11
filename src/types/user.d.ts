export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  bio?: string;
  image?: string;
  authorities?: string[];
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
}

export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following?: boolean;
}