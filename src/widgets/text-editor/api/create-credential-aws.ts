import imgPostFormat from "@/shared/uploading/formats/blog";

export default async function createCredentialsImg(file: File) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/create-credential-for-img`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: imgPostFormat(file.name),
        fileType: file.type,
      }),
    },
  );

  const { url, fields } = await result.json();
  return { url, fields };
}
