"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/tv-shows",
    label: "Tv Shows",
  },
  {
    href: "/movies",
    label: "Movies",
  },
  {
    href: "/recently-added",
    label: "Recently Added",
  },
  {
    href: "/My List",
    label: "My List",
  },
];

const NavItem = () => {
  const pathname = usePathname();
  return (
    <>
      {navData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "lg:text-background hover:text-primary transition duration-300 ease-in-out",
            pathname === item.href && "font-semibold"
          )}>
          {item.label}
        </Link>
      ))}
    </>
  );
};
export default NavItem;
