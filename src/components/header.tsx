"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 border-b border-white/90">
        <nav className="flex justify-between items-center container mx-auto py-4">
          <Link href="/" className="text-2xl font-bold">
            Home
          </Link>
          <div className="space-x-8">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${pathname === link.href ? "border-b" : ""} text-lg font-light py-2`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
