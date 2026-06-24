"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Videos", href: "/youtube" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "glass-navbar border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              text-2xl
              hover:text-pink-500
              transition
            "
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-zinc-300
                  hover:text-pink-400
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-pink-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/signup"
              className="
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-pink-500
                to-pink-600
                text-white
                font-medium
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]
                transition-all
                duration-300
              "
            >
              Signup
            </Link>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                mt-6
                glass
                rounded-2xl
                p-5
                flex
                flex-col
                gap-4
                overflow-hidden
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-zinc-300
                    hover:text-pink-400
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="
                  mt-2
                  text-center
                  px-4
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600
                  hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]
                  transition
                "
              >
                Signup
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}