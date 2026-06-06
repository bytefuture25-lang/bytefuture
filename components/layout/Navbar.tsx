"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

            <Link href="/" className="hover:text-pink-500 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-pink-500 transition">
              About
            </Link>

            <Link href="/projects" className="hover:text-pink-500 transition">
              Projects
            </Link>

            <Link href="/youtube" className="hover:text-pink-500 transition">
              Videos
            </Link>

            <Link href="/resources" className="hover:text-pink-500 transition">
              Resources
            </Link>

            <Link href="/blog" className="hover:text-pink-500 transition">
              Blog
            </Link>

            <Link href="/contact" className="hover:text-pink-500 transition">
              Contact
            </Link>

          </div>

        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/projects">Projects</Link>

            <Link href="/youtube">Videos</Link>

            <Link href="/resources">Resources</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/contact">Contact</Link>

          </div>
        )}

      </nav>
    </header>
  );
}