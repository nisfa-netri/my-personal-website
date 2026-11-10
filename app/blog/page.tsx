import TombolBeranda from "@/components/tombol-beranda";
import DaftarTulisan from "./_components/daftar-tulisan";
import LikeButton from "./_components/like-button";
const TULISAN = ["belajar-nextjs", "hal-baru", "target-tahun-ini"];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="mt-4">
        <DaftarTulisan daftar={TULISAN} />
      </div>
      <LikeButton slug="belajar-nextjs" />
      <TombolBeranda />
    </main>
  );
}
