"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={
        pathname === href
          ? "text-pink-500 font-medium"
          : "hover:text-pink-500 transition"
      }
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex justify-between items-center">

          <Link
            href="/"
            className="text-3xl font-bold text-pink-500"
          >
            ByteFuture
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-8">
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/projects", "Projects")}
            {navLink("/youtube", "Videos")}
            {navLink("/resources", "Resources")}
            {navLink("/blog", "Blog")}
            {navLink("/contact", "Contact")}
          </div>

        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4">

            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/projects", "Projects")}
            {navLink("/youtube", "Videos")}
            {navLink("/resources", "Resources")}
            {navLink("/blog", "Blog")}
            {navLink("/contact", "Contact")}

          </div>
        )}

      </nav>
    </header>
  );
}