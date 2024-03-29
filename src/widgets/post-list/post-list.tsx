import PostLine from "@/features/post/post";
import Pagination from "@/features/pagination/pagination";
import { POST_PER_PAGE } from "@/entities/posts/const";
import { Post, User } from "@prisma/client";

async function getPosts(page: number, cat: string | undefined) {
  let queryParams = `?page=${page}`;
  if (cat !== undefined) {
    queryParams += `&cat=${cat}`;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/posts${queryParams}`,
  );
  return res.json();
}

interface PostListProps {
  page: number;
  cat?: string | undefined;
}

interface getPostsProps {
  posts: (Post & { user: User })[];
  count: number;
}

export default async function PostList({ page, cat }: PostListProps) {
  const { posts, count }: getPostsProps = await getPosts(page, cat);

  const hasPrev = page > 1;
  const hasNext = page * POST_PER_PAGE < count;

  return (
    <section>
      <div className="container">
        <h2 className="text-3xl pb-[1.5rem] pt-[2rem] font-semibold">
          Recent posts
        </h2>

        <div>
          {posts &&
            posts.map((post) => {
              return <PostLine post={post} key={post.id} />;
            })}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </section>
  );
}
