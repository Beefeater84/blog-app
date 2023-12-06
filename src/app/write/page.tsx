"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./ReactQuill.css";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import toSlug from "@/shared/utilities/toSlug";
import Button from "@/shared/ui/buttons";
import getCategories from "@/entities/categories/api/get-categories";
import { Category } from "@prisma/client";

export default function Page() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState<string>("");
  const { status, data } = useSession();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoriesFromServer = useCallback(async () => {
    const res = await getCategories();
    setCategories(res);
    setSelectedCategory(res[0].slug);
  }, []);

  useEffect(() => {
    categoriesFromServer();
  }, [categoriesFromServer]);

  const onChoseCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

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
        categorySlug: selectedCategory,
        userEmail: data?.user?.email,
      }),
    });
  };

  if (status === "loading") {
    return (
      <div className="container">
        <div>Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated")
    return (
      <div className="container">
        <div>You need to login to create a post</div>
      </div>
    );

  return (
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
        <div>
          Choose a category:
          <select
            className="bg-white dark:bg-black-light-color"
            defaultValue={selectedCategory || undefined}
            name="category"
            id="category"
            onInput={onChoseCategory}
          >
            {categories.map((category) => (
              <option
                value={category.slug}
                key={category.slug}
                selected={
                  selectedCategory ? selectedCategory === category.slug : false
                }
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <Button onClick={createPostHandler}>Create a post</Button>
      </div>
    </main>
  );
}
