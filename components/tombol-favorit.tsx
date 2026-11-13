"use client";
import { useFavorit } from "@/context/favorit-context";

export default function TombolFavorit({ slug }: { slug: string }) {
  const { daftar, ubahFavorit } = useFavorit();
  const sudahDisimpan = daftar.includes(slug);

  return (
    <button
      onClick={() => ubahFavorit(slug)}
      className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      {sudahDisimpan ? "★ Tersimpan" : "☆ Simpan ke favorit"}
    </button>
  );
}
