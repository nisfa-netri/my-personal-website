import MenuProfil from "./menu-profil";
export default function Header({ namaUser }: { namaUser: string }) {
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4">
      <span>Blog Saya</span>
      <MenuProfil namaUser={namaUser} />
    </header>
  );
}
