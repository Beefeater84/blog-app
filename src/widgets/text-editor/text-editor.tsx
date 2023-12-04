import React, { useMemo } from "react";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageUploader from "quill-image-uploader";
import imgPostFormat from "@/shared/uploading/formats/blog";

Quill.register("modules/imageUploader", ImageUploader);

interface TextEditorProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

async function uploadImageToS3(file: File) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/upload-image`,
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

export default function TextEditor({ value, onChange }: TextEditorProps) {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ list: "ordered" }, { list: "bullet" }],

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          ["clean"], // remove formatting button
          ["link", "image"], // link and image, video
        ],
      },
      imageUploader: {
        upload: (file: File) => {
          return new Promise((resolve, reject) => {
            uploadImageToS3(file)
              .then((response) => {
                const { url, fields } = response;

                const formData = new FormData();
                Object.entries(fields).forEach(([key, val]) => {
                  formData.append(key, val as string);
                });

                formData.append("file", file);

                fetch(url, {
                  method: "POST",
                  body: formData,
                }).then(() => {
                  resolve(url + imgPostFormat(file.name));
                });
              })
              .catch((error) => {
                console.log("error", error);
                const message = new Error("Upload failed");
                reject(message);
              });
          });
        },
      },
    };
  }, []);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => onChange(e)}
        modules={modules}
      />
    </div>
  );
}
