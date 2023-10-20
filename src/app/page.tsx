import CategoriesCarousel from "@/widgets/caregories-carousel/categories-carousel";

export default function Home() {
  return (
    <main className="shadow-inner">
      <div className="container h-[150px] flex items-center bg-white dark:bg-black">
        <h1 className="page-title text-center">Blog about hiking</h1>
      </div>
      <CategoriesCarousel />

      <section>
        <div className="container">Popular Posts</div>
      </section>
    </main>
  );
}
