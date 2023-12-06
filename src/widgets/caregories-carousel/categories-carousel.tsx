import Link from "next/link";
import getCategories from "@/entities/categories/api/get-categories";

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
