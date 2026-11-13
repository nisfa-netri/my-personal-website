"use client";
import { useFavorit } from "@/context/favorit-context";
import { useTema } from "@/context/tema-context";

export default function Menu() {
  const { gelap } = useTema();
  const { daftar } = useFavorit();
  return (
    <>
      <p>Tema saat ini: {gelap ? "Gelap" : "Terang"}</p>
      <span>Daftar favorit: {daftar.length}</span>
    </>
  );
}
