"use client";

import { useSession } from "next-auth/react";
import AuthButton from "@/features/authButton/authButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LeaveCommentFormProps {
  postSlug: string;
}

export default function LeaveCommentForm({ postSlug }: LeaveCommentFormProps) {
  const { status } = useSession();
  const router = useRouter();
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ description, postSlug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await fetch("/api/revalidate?tag=comments", {
        method: "POST",
      });
      router.refresh();
    }
  };

  if (status !== "authenticated") {
    return <AuthButton />;
  }

  return (
    <form action="#" className="mt-[2rem] mb-[2rem]" onSubmit={handleSubmit}>
      <label
        htmlFor="addNewComment"
        className="font-semibold text-grey-color tracking-{1.17px} pb-[1rem] block "
      >
        LEAVE A COMMENT
      </label>
      <textarea
        rows={3}
        className="w-[100%] p-[1rem] mb-[1rem] rounded-xl outline-active-color dark:text-white dark:bg-black-light-color"
        id="addNewComment"
        name="addNewComment"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Add the comment"
      />
      <button type="submit">Send a comment</button>
    </form>
  );
}
