"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (href: string) => ({
    fontWeight: pathname === href ? "bold" : "normal",
    color: pathname === href ? "blue" : "black",
    marginRight: "16px",
    textDecoration: pathname === href ? "underline" : "none",
  });

  return (
    <nav>
      <Link href="/" style={linkStyle("/")}>
        Beranda
      </Link>

      <Link href="/tentang" style={linkStyle("/tentang")}>
        Tentang
      </Link>

      <Link href="/kontak" style={linkStyle("/kontak")}>
        Kontak
      </Link>

      <Link href="/blog" style={linkStyle("/blog")}>
        Blog
      </Link>
    </nav>
  );
}
