import type { Profile } from "./profile";
export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}

export interface ResComments {
  comments: Comment[];
}
