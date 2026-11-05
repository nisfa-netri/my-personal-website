"use client";

import { useState } from "react";

export default function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <main className="flex flex-col items-center pt-20">
      <h1 className="mb-4 text-3xl font-bold">Penghitung</h1>

      <p className="mb-4 text-xl">Jumlah: {jumlah}</p>

      <div className="flex gap-2">
        <button
          onClick={() => setJumlah(jumlah + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Tambah
        </button>

        <button
          onClick={() => setJumlah(jumlah - 1)}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Kurang
        </button>

        <button onClick={() => setJumlah(0)} className="rounded bg-gray-500 px-4 py-2 text-white">
          Ulangi dari nol
        </button>
      </div>
    </main>
  );
}
