import { CategorySlug } from "@/entities/categories/types";

export type Post = {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  description: string;
  img?: string;
  views: number;
  category: CategorySlug[];
  userEmail: string;
};
