"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={cn(
          isActive ? "bold" : ""
        )}
      >
        {children}
      </Link>
    </li>
  );
}