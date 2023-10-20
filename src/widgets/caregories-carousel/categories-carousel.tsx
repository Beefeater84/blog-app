import { Category } from "@/entities/categories/types";

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
            <div
              key={cat.id}
              className="w-[140px] h-[60px] flex items-center justify-center bg-active-color rounded-md"
            >
              {cat.title}
            </div>
          );
        })}
    </section>
  );
}
