import PostList from "@/widgets/post-list/post-list";
import React from "react";

interface PageProps {
  searchParams: {
    page: string;
    cat?: string;
  };
}

async function getCategory(cat: string | undefined) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/category?cat=${cat}`,
  );
  return res.json();
}

export default async function Page({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page, 10) || 1;
  const { cat } = searchParams;

  const category = await getCategory(cat);

  return (
    <main>
      <div className="h-[150px] flex items-center bg-white dark:bg-black-light-color shadow-inner">
        <div className="container">
          <h1 className="page-title">{category?.title || "Resent posts"}</h1>
        </div>
      </div>
      <PostList page={page} cat={cat} />
    </main>
  );
}
