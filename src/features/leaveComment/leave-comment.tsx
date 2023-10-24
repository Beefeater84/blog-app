"use client";

import { useSession } from "next-auth/react";
import AuthButton from "@/features/authButton/authButton";

export default function LeaveCommentForm() {
  const { status } = useSession();

  if (status !== "authenticated") {
    return <AuthButton />;
  }

  return (
    <form action="#" className="mt-[2rem] mb-[2rem]">
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
        placeholder="Add the comment"
      />
      <button type="submit">Send a comment</button>
    </form>
  );
}
