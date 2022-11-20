export type UserState = {
  user: UserResponse | null;
  profile: ProfileResponse | null;
};

export type UpdateUserRequest = {
  email: string;
  bio: string;
  image: string;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

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
