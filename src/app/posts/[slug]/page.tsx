import Comments from "@/widgets/comments/comments";

async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`);
  return res.json();
}

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.slug);

  const { title, description } = post;

  return (
    <main>
      <article>
        <div className="h-[150px] flex items-center bg-white dark:bg-black-light-color shadow-inner">
          <div className="container">
            <h1 className="page-title">{title}</h1>
          </div>
        </div>
        <div
          className="container font-roboto text-base text-menu-color pt-[2rem] dark:text-black-title-color"
          dangerouslySetInnerHTML={{ __html: `${description}` }}
        />
      </article>
      <Comments slug={params.slug} />
    </main>
  );
}
