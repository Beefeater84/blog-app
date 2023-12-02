import { NextResponse } from "next/server";
import prisma from "@/application/db/connets";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url || "");
    const slug = searchParams.get("cat") || undefined;
    const where = slug ? { slug } : {};

    const category = await prisma.category.findFirst({
      where,
    });

    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 },
    );
  }
};
