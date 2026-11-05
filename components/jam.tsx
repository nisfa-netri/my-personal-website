"use client";

import { useEffect, useState } from "react";

export default function Jam() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p>Sekarang pukul {waktu.toLocaleTimeString("id-ID")}</p>;
}
