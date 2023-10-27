import LeaveCommentForm from "@/features/leaveComment/leave-comment";
import { User, Comment } from "@prisma/client";

type CommentWithAuthor = Comment & {
  author: User;
};

async function getComment(slug: string): Promise<CommentWithAuthor[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/comments?postSlug=${slug}`,
    { next: { tags: ["comments"] } },
  );
  return res.json();
}

interface CommentProps {
  slug: string;
}

export default async function Comments({ slug }: CommentProps) {
  const comments = await getComment(slug);

  return (
    <div className="container">
      <LeaveCommentForm postSlug={slug} />
      <h2> Comments </h2>
      {comments &&
        comments.map((comment) => {
          const { id, description, createdAt, author } = comment;
          const { name, image } = author;

          return (
            <div
              key={id}
              className="flex gap-[1rem] bg-white dark:bg-black-light-color rounded-xl p-[1rem] mb-[1rem]"
            >
              {image && (
                <div className="shrink-0">
                  <img
                    src={image}
                    alt="comment author"
                    className="rounded-full w-[40px] h-[40px]"
                  />
                </div>
              )}
              <div className="w-[100%]">
                <div className="flex justify-between items-start pb-[0.5rem]">
                  <span className="text-sm text-blue-color dark:text-black-title-color font-medium">
                    {name}
                  </span>
                  <span className="text-xs text-menu-color font-roboto">
                    {createdAt.toString()}
                  </span>
                </div>
                <div className="text-xs font-roboto text-menu-color ">
                  {description}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
