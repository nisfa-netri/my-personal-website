"use client";

import { useEffect, useState } from "react";

export default function Jam() {
  const [waktu, setWaktu] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (waktu === null) {
    return <p>Memuat jam...</p>;
  }

  return <p>Sekarang pukul {waktu.toLocaleTimeString("id-ID")}</p>;
}
