import prisma from "@/application/db/connets";
import { POST_PER_PAGE } from "@/entities/posts/const";
import { getAuthOptions } from "@/application/auth/providers";
import { Post } from "@prisma/client";

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
    const [posts, count]: [Post[], number] = await prisma.$transaction([
      prisma.post.findMany(queryParams),
      prisma.post.count({
        where,
      }),
    ]);

    return Response.json(
      { posts, count },
      {
        status: 200,
      },
    );
  } catch (e) {
    return Response.json(
      { message: "Something went wrong!" },
      {
        status: 500,
      },
    );
  }
};

export const POST = async (req: Request) => {
  const session = await getAuthOptions();

  if (!session || !session.user) {
    return Response.json(
      { message: "Not Authenticated!" },
      {
        status: 401,
      },
    );
  }

  try {
    const body = await req.json();

    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return Response.json(post, {
      status: 200,
    });
  } catch (e) {
    return Response.json(
      { message: "Something went wrong!" },
      {
        status: 500,
      },
    );
  }
};
