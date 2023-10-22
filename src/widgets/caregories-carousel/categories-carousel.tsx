import { Category } from "@/entities/categories/types";
import Link from "next/link";

async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories`);
  return res.json() as Promise<Category[]>;
}

export default async function CategoriesCarousel() {
  const categories = await getCategories();
  // TODO Error handler
  // TODO Refactor getCategories, put in separate file

  return (
    <section
      className="container flex gap-[1rem] font-medium pt-[1rem] pb-[1rem]"
      aria-label="categories carusel"
    >
      {categories &&
        categories.map((cat) => {
          return (
            <Link href={`/category?cat=${cat.slug}`} key={cat.id}>
              <div className="w-[140px] h-[60px] flex items-center justify-center bg-active-color/10 rounded-md text-blue-color">
                {cat.title}
              </div>
            </Link>
          );
        })}
    </section>
  );
}
