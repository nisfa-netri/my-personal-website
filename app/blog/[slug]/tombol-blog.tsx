"use client";

import { useRouter } from "next/navigation";

export default function TombolBlog() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="mt-6 rounded-lg border px-4 py-2">
      Kembali
    </button>
  );
}
