import TombolBeranda from "@/components/tombol-beranda";

export default function TentangPage() {
  return (
    <main className="tentang">
      <h1 className="judul text-blue-500">Tentang Saya</h1>

      <h2>Assalamu&apos;alaikum!</h2>

      <p>Halo, saya Nisfa.</p>

      <p>
        Saya seorang ibu yang baru saja resign dari perusahaan Semen untuk fokus mengurus
        keluarga{" "}
      </p>

      <p>Saat ini saya sedang belajar pemrograman web dengan Next.js .</p>

      <h2>Hal yang Saya Sukai</h2>

      <ul>
        <li>Belajar hal-hal baru</li>
        <li>Memasak</li>
        <li>Membaca yang bermanfaat</li>
      </ul>

      <p>Terima kasih sudah berkunjung!</p>

      <TombolBeranda />
    </main>
  );
}
