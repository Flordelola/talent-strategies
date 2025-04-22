import Link from "next/link";
import NavLink from "./nav-link";

const links = [
  { href: "/intro", label: "Intro" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-navbar">
        <Link href="/">Alejandra Espinosa - Talent Strategies</Link>

        <ul className="nav-elements">
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