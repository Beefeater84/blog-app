import { getAuthOptions } from "@/application/auth/providers";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import client from "@/application/aws-client";

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request) {
  const session = await getAuthOptions();

  if (!session) {
    return Response.json(
      { message: "You are not authorized!" },
      {
        status: 401,
      },
    );
  }

  const { fileName, fileType } = await request.json();

  try {
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: `${fileName}`,
      Conditions: [
        ["content-length-range", 0, 10485760],
        ["starts-with", "$Content-Type", fileType],
      ],
      Fields: {
        acl: "public-read",
        "Content-Type": fileType,
      },
      Expires: 3600,
    });

    return Response.json({ url, fields });
  } catch (error) {
    return Response.json({ error });
  }
}
