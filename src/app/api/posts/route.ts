import prisma from "@/application/db/connets";
import { POST_PER_PAGE } from "@/entities/posts/const";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url || "");
  const page = searchParams.get("page") || 1;
  const cat = searchParams.get("cat") || undefined;

  const where = cat ? { categorySlug: cat } : {};

  const queryParams = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (+page - 1),
    include: {
      user: true,
    },
    where,
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(queryParams),
      prisma.post.count({
        where,
      }),
    ]);

    return Response.json({ posts, count });

    // return res.status(200).json({  });
  } catch (e) {
    return Response.json({ message: "Something went wrong!" });
  }
};
