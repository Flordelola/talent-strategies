import Link from "next/link";
import NavLink from "./nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/intro", label: "Intro" },
  { href: "/my-story", label: "My Story" },
];

export default function Navbar() {
  return (
    <header className="bg-white/50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">Alejandra Espinosa - Talent Strategies</Link>

        <ul className="flex gap-4">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}