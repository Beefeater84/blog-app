"use client";

import "react-quill/dist/quill.snow.css";
import "./ReactQuill.css";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import toSlug from "@/shared/utilities/toSlug";
import FixMountProvider from "@/application/providers/fix-mount-provider/FixMountProvider";

export default function Page() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState<string>("");
  const { status, data } = useSession();

  const DynamicTextEditor = useMemo(() => {
    return dynamic(() => import("@/widgets/text-editor/text-editor"), {
      ssr: false,
    });
  }, []);

  const createPostHandler = async () => {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: toSlug(title),
        title,
        description: value,
        categorySlug: "popular-hikes",
        userEmail: data?.user?.email,
      }),
    });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") return <div>Unauthenticated</div>;

  return (
    <FixMountProvider>
      <main>
        <div className="h-[150px] flex items-center bg-white dark:bg-black-light-color shadow-inner">
          <div className="container">
            <h1 className="page-title">
              <input
                placeholder="Title"
                className="w-[100%] bg-transparent outline-0"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </h1>
          </div>
        </div>
        <div className="container">
          <article>
            <DynamicTextEditor value={value} onChange={setValue} />
          </article>
          <button type="button" onClick={createPostHandler}>
            Create a post
          </button>
        </div>
      </main>
    </FixMountProvider>
  );
}
