export const instant = false;
export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let judul = "";
  let paragraf = "";

  if (slug === "belajar-nextjs") {
    judul = "Belajar Next.js";
    paragraf = "Saya sedang belajar membuat website menggunakan Next.js.";
  } else if (slug === "hal-baru") {
    judul = "Hal Baru yang Saya Pelajari";
    paragraf = "Saya belajar membuat link dan menghubungkan halaman website.";
  } else if (slug === "target-tahun-ini") {
    judul = "Target Tahun Ini";
    paragraf = "Target saya adalah bisa membuat website sendiri menggunakan Next.js.";
  } else {
    judul = "Tulisan Tidak Ditemukan";
    paragraf = "Maaf, tulisan yang kamu cari belum tersedia.";
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">{judul}</h1>
      <p className="mt-4">{paragraf}</p>
    </main>
  );
}
