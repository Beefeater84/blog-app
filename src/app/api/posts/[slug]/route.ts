import prisma from "@/application/db/connets";
import {ParsedUrlQuery} from "querystring";
import getFirstStringOrUndefined from "@/shared/utilities/getFirstStringOrUndefined";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (
  req: Request,
  { params }: { params: ParsedUrlQuery },
) => {
  try {
    const { slug } = params;

    const post = await prisma.post.findUnique({
      where: {
        slug: getFirstStringOrUndefined({ value: slug }),
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
