export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: true;
}

export interface ResProfile {
  profile: Profile;
}
