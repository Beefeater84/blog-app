import CategoriesCarousel from "@/widgets/caregories-carousel/categories-carousel";
import PostList from "@/widgets/post-list/post-list";

interface HomeProps {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const page = parseInt(searchParams.page, 10) || 1;

  return (
    <main>
      <div className="h-[150px] flex items-center bg-white dark:bg-black-light-color shadow-inner">
        <div className="container">
          <h1 className="page-title">Blog about hiking</h1>
        </div>
      </div>
      <CategoriesCarousel />
      <PostList page={page} />
    </main>
  );
}
