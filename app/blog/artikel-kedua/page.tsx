import TombolFavorit from "@/components/tombol-favorit";
import TombolBlog from "../[slug]/_components/tombol-blog";
import LikeButton from "../_components/like-button";
export default function ArtikelKeduaPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Artikel Kedua</h1>
      <p className="mt-4">Alamatnya /blog/artikel-kedua — dua tingkat di dalam app/.</p>

      <LikeButton slug="belajar-nextjs" />
      <TombolFavorit slug="artikel-kedua" />
      <TombolBlog />
    </main>
  );
}
