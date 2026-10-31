"use client";

import { useRouter } from "next/navigation";

export default function TombolBeranda() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Kembali ke Beranda
    </button>
  );
}
