"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50

      border-b
      border-zinc-800

      bg-black/60
      backdrop-blur-md
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Logo />

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="hover:text-pink-500 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-pink-500 transition"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="hover:text-pink-500 transition"
            >
              Projects
            </Link>

            <Link
              href="/youtube"
              className="hover:text-pink-500 transition"
            >
              Videos
            </Link>

            <Link
              href="/resources"
              className="hover:text-pink-500 transition"
            >
              Resources
            </Link>

            <Link
              href="/blog"
              className="hover:text-pink-500 transition"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="hover:text-pink-500 transition"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div
            className="
            md:hidden

            flex
            flex-col

            gap-4
            mt-6
            pb-4
            "
          >

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