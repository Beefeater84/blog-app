import prisma from "@/application/db/connets";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (req: Request, { params }) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: params.slug,
      },
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
