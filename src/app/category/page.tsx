import PostList from "@/widgets/post-list/post-list";

interface PageProps {
  searchParams: {
    page: string;
    cat?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page, 10) || 1;
  const { cat } = searchParams;
  return (
    <main>
      <div className="h-[150px] flex items-center bg-white dark:bg-black shadow-inner">
        <div className="container">
          <h1 className="page-title">{cat}</h1>
        </div>
      </div>
      <PostList page={page} cat={cat} />
    </main>
  );
}
