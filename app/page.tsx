import Menu from "@/components/menu";
import TombolTema from "@/components/tombol-tema";
import Penghitung from "@/components/penghitung";
import Jam from "@/components/jam";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl p-6 space-y-8">
      <section>
        <h1 className="text-2xl font-bold">Beranda</h1>
        <p className="mt-2 text-sm text-gray-500">Halaman utama — tempat belajar Next.js.</p>
      </section>

      <section className="space-y-4">
        <Penghitung />
        <Jam />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pilihan Tema</h2>
        <p className="text-sm text-gray-500">
          Tombol ini membaca tema dari Context dan dapat mengubahnya.
        </p>
        <TombolTema />
        <Menu />
      </section>
    </main>
  );
}
