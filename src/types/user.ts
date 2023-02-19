export interface CurrentUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface ResUser {
  user: CurrentUser;
}
