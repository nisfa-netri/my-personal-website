"use client";

import { useState } from "react";
import Link from "next/link";
import KotakCari from "./kotak-cari";

export default function DaftarTulisan({ daftar }: { daftar: string[] }) {
  const [cari, setCari] = useState("");

  const hasil = daftar.filter((slug) => slug.includes(cari));

  return (
    <div>
      <KotakCari nilai={cari} saatBerubah={setCari} />

      {hasil.length > 0 ? (
        <ul className="mt-4 list-disc pl-5 underline">
          {hasil.map((slug) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{slug}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-500">Maaf artikel tidak tersedia.</p>
      )}
    </div>
  );
}
