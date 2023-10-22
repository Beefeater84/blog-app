import prisma from "@/application/db/connets";
import { POST_PER_PAGE } from "@/entities/posts/const";
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@prisma/client";

// eslint-disable-next-line import/prefer-default-export

type Data = {
  posts: Post[];
  count: number;
};

type ErrorResponse = {
  message: string;
};

// eslint-disable-next-line import/prefer-default-export
export const GET = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) => {
  const { searchParams } = new URL(req.url || "");
  const page = searchParams.get("page") || 1;

  const queryParams = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (+page - 1),
    include: {
      user: true,
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(queryParams),
      prisma.post.count(),
    ]);

    return res.status(200).json({ posts, count });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
