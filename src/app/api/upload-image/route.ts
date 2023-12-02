import { getAuthOptions } from "@/application/auth/providers";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";

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
    const client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: `${fileName}`,
      Conditions: [
        ["content-length-range", 0, 10485760],
        // ["starts-with", "$Content-Type", fileType],
        // ["starts-with", "$key", "user/"],
      ],
      Fields: {
        acl: "public-read",
        "Content-Type": fileType,
      },
      Expires: 3600,
    });

    return Response.json({ url, fields });
  } catch (error) {
    console.log("error", error);
    return Response.json({ error: error?.message });
  }
}
