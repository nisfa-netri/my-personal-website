import Link from "next/link";
import TombolBlog from "../[slug]/_components/tombol-blog";
export default function BelajarNextjsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Belajar Next.js</h1>

      <ul className="mt-4 list-disc pl-5 underline">
        <li>
          <Link href="/blog/artikel-pertama">Artikel pertama</Link>
        </li>

        <li>
          <Link href="/blog/artikel-kedua">Artikel Kedua</Link>
        </li>
      </ul>

      <TombolBlog />
    </main>
  );
}
