import Link from "next/link";
import NavLink from "./nav-link";
import Button from "./button/button";

const links = [
  { href: "/intro", label: "Intro" },
  { href: "/about", label: "About" },
  { href: "/my-services", label: "My Services" },
];

export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-navbar">
        <Link href="/">Alejandra Espinosa - Talent Strategies</Link>
        <div className="right-elements">
        <ul className="nav-elements">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
        <Button key={Math.random()} color={'white'} size={'small'} 
          url={'https://outlook.office.com/bookwithme/user/b1caf79ed49f42378eee351544324e11@talentstrategiesconsulting.com?anonymous&isanonymous=true'} 
          outsideWeb={true} label={'Contact me'} outline={false}/>
        </div>
      </nav>
    </header>
  );
}