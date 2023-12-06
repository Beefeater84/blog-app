import { Category } from "@prisma/client";

export default async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories`);
  return res.json() as Promise<Category[]>;
}
