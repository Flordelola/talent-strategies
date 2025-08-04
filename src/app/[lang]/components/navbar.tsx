import Link from "next/link";
import NavLink from "./nav-link";
import Button from "./button/button";

interface Navbar {
  titleLink?: string;
  button?: Button;
  link?: {
    url: string
    label?: string
  }[]
}

export default function Navbar(
  {data}: {data:Navbar}){
  const {titleLink, button, link} = data

  return (
    <header className="main-header">
      <nav className="main-navbar">
        <Link href="/">{titleLink}</Link>
        <div className="right-elements">
          <ul className="nav-elements">
            {link?.map((item) => (
              <NavLink key={item.url} href={item.url}>
                {item.label}
              </NavLink>
            ))}
          </ul>
          <Button key={Math.random()} color={button?.color} size={button?.size}
          url={button?.url} outsideWeb={button?.outsideWeb} label={button?.label} outline={button?.outline}/>
        </div>
      </nav>
    </header>
  );
}