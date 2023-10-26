import prisma from "@/application/db/connets";
import { getAuthOptions } from "@/application/auth/providers";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url || "");
  const postSlug: string | null = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: postSlug ? { postSlug } : {},
      include: {
        author: true,
      },
    });

    return Response.json(comments, {
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

export const POST = async (req: Request) => {
  // user verification on the server side
  const session = await getAuthOptions();

  if (!session) {
    return Response.json(
      { message: "You are not authorized!" },
      {
        status: 401,
      },
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, authorEmail: session.user?.email },
    });

    return Response.json(comment, {
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
