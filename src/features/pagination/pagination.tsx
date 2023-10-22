"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Pagination({
  page,
  hasPrev,
  hasNext,
}: PaginationProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mt-[2rem] pb-[3rem]">
      <button
        className="font-semibold text-xs text-white bg-blue-color rounded-lg px-[1.2rem] py-[0.7rem] min-w-[120px] hover:bg-blue-600 disabled:opacity-50"
        type="button"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="font-semibold text-xs text-white bg-blue-color rounded-lg px-[1.2rem] py-[0.7rem] min-w-[120px] hover:bg-blue-600 disabled:opacity-50"
        type="button"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
