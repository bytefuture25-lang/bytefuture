import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[220px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">

        {/* Main Footer */}

        <div
          className="
          glass
          rounded-[40px]
          p-10
          md:p-14
          "
        >

          <div className="grid md:grid-cols-4 gap-12">

            {/* Brand */}

            <div>

              <h2
                className="
                text-3xl
                font-bold
                bg-gradient-to-r
                from-white
                to-pink-400
                bg-clip-text
                text-transparent
                "
              >
                ByteFuture
              </h2>

              <p className="text-zinc-400 mt-5 leading-relaxed">
                Exploring Cybersecurity, Artificial Intelligence,
                Development and the Future of Technology.
              </p>

              <div className="flex gap-3 mt-6">

                <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

              </div>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Navigation
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/" className="hover:text-pink-400 transition">
                  Home
                </Link>

                <Link href="/about" className="hover:text-pink-400 transition">
                  About
                </Link>

                <Link href="/projects" className="hover:text-pink-400 transition">
                  Projects
                </Link>

                <Link href="/resources" className="hover:text-pink-400 transition">
                  Resources
                </Link>

              </div>

            </div>

            {/* Content */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Content
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/blog" className="hover:text-pink-400 transition">
                  Blog
                </Link>

                <Link href="/youtube" className="hover:text-pink-400 transition">
                  Videos
                </Link>

                <Link href="/contact" className="hover:text-pink-400 transition">
                  Contact
                </Link>

              </div>

            </div>

            {/* Connect */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Connect
              </h3>

              <div className="flex flex-col gap-3">

                <a
                  href="https://github.com/bytefuture25-lang"
                  target="_blank"
                  className="hover:text-pink-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.youtube.com/@FutureByte-z9g"
                  target="_blank"
                  className="hover:text-pink-400 transition"
                >
                  YouTube
                </a>

                <a
                  href="mailto:bytefuture25@gmail.com"
                  className="hover:text-pink-400 transition"
                >
                  Email
                </a>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-white/10 mt-12 pt-8">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-zinc-500 text-sm">
                © 2026 ByteFuture. All Rights Reserved.
              </p>

              <p className="text-zinc-600 text-sm">
                Built with Next.js • Tailwind • Vercel
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}