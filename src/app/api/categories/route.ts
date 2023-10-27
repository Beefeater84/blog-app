import { NextResponse } from "next/server";
import prisma from "@/application/db/connets";

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 },
    );
  }
};
