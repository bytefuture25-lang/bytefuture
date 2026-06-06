import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-pink-500">
              ByteFuture
            </h2>

            <p className="text-zinc-400 mt-4">
              Cybersecurity, AI, Development and
              Digital Creativity.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="font-bold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resources">Resources</Link>

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="font-bold mb-4">
              Content
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/blog">Blog</Link>
              <Link href="/youtube">Videos</Link>
              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-bold mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/bytefuture25-lang"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://www.youtube.com/@FutureByte-z9g"
                target="_blank"
              >
                YouTube
              </a>

              <a
                href="mailto:bytefuture25@gmail.com"
              >
                Email
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8">

          <p className="text-zinc-500 text-center">
            © 2026 ByteFuture • Built with Next.js & Vercel
          </p>

        </div>

      </div>

    </footer>
  );
}