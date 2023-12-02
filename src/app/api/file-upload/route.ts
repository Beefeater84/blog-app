import prisma from "@/application/db/connets";
import { getAuthOptions } from "@/application/auth/providers";

export const GET = async () => {
  try {
    return Response.json("", {
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

    return Response.json("", {
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
