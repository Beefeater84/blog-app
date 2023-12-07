import Image from "next/image";
import Link from "next/link";
import { Post, User } from "@prisma/client";
import getShortDescription from "@/features/post/helpers/get-short-description";
import parse from 'html-react-parser';

interface PostLineProps {
  post: Post & {
    user: User;
  };
}

export default function PostLine({ post }: PostLineProps) {
  const { title, description, img, slug, user } = post;

  const shortDescription = getShortDescription(description);

  return (
    <article className="bg-white dark:bg-black-light-color rounded-3xl p-[1rem] flex gap-[2rem] mb-[1rem] ">
      {img && (
        <Link href={`/posts/${slug}`} className="shrink-0">
          <Image
            className="rounded-2xl drop-shadow-md"
            src={img}
            width="230"
            height="150"
            alt="How to Create an Invoice for First Time"
          />
        </Link>
      )}

      <div>
        <Link href={`posts/${slug}`}>
          <h3 className="text-normal-color dark:text-black-title-color font-semibold text-lg pb-[0.5rem]">
            {title}
          </h3>
        </Link>
        <div className="font-roboto text-grey-color mb-[1rem]">
          {parse(shortDescription)}
        </div>
        <div className="text-xs flex items-center gap-[1rem]">
          {user.image && (
            <img
              className="rounded-full"
              src={user.image}
              width="36"
              height="36"
              alt="author"
            />
          )}

          <div>
            <p className="text-blue-color dark:text-black-title-color font-semibold">
              {user.name}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
