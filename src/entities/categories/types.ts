import { Post } from "@/entities/posts/types";

export type CategoryTitle = string;
export type CategorySlug = string;
export type CategoryId = string;
export type CategoryImgUrl = string;

export type Category = {
  id: CategoryId;
  slug: CategorySlug;
  title: CategoryTitle;
  img?: CategoryImgUrl;
  posts: Post[];
};
