import PostLine from "@/features/post/post";
import Pagination from "@/features/pagination/pagination";
import { POST_PER_PAGE } from "@/entities/posts/const";

async function getPosts(page: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/posts?page=${page}`,
  );
  return res.json();
}

interface PostListProps {
  page: number;
}

export default async function PostList({ page }: PostListProps) {
  const { posts, count } = await getPosts(page);

  const hasPrev = page > 1;
  const hasNext = page * POST_PER_PAGE < count;

  return (
    <section>
      <div className="container">
        <h2>Popular Posts</h2>

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
