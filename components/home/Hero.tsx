"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Effects */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          rounded-full
          bg-pink-500/20
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-10
          right-10
          w-96
          h-96
          rounded-full
          bg-pink-500/10
          blur-3xl
          "
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-pink-500 uppercase tracking-[0.35em] mb-5">
            Future Byte • Elowen Studio
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Building The Future
            <br />
            Through Technology
          </h1>

          <h2 className="text-xl md:text-2xl mt-6 text-zinc-400">
            Cybersecurity • Artificial Intelligence • Development
          </h2>

          <p className="max-w-xl mt-8 text-zinc-500 text-lg">
            ByteFuture is a modern technology platform focused on
            cybersecurity, artificial intelligence, software
            development and digital creativity. Learn, build and
            explore the future of technology.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/projects"
              className="
              px-7
              py-3.5
              rounded-xl
              bg-pink-500
              hover:scale-105
              transition
              font-medium
              "
            >
              Explore Projects
            </Link>

            <Link
              href="/youtube"
              className="
              px-7
              py-3.5
              rounded-xl
              border
              border-pink-500
              hover:bg-pink-500/10
              transition
              "
            >
              Watch Videos
            </Link>

            <Link
              href="https://github.com/bytefuture25-lang"
              target="_blank"
              className="
              px-7
              py-3.5
              rounded-xl
              border
              border-zinc-700
              hover:border-pink-500
              transition
              "
            >
              GitHub
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center"
        >

          <div className="relative w-[450px] h-[450px]">

            <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="
              absolute
              top-8
              left-8
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              px-8
              py-5
              "
            >
              🛡 Cybersecurity
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="
              absolute
              top-40
              right-0
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              px-8
              py-5
              "
            >
              🤖 Artificial Intelligence
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="
              absolute
              bottom-24
              left-0
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              px-8
              py-5
              "
            >
              💻 Development
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="
              absolute
              bottom-0
              right-10
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              px-8
              py-5
              "
            >
              🎥 Content Creation
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-zinc-500 text-2xl"
        >
          ↓
        </motion.div>

      </div>

    </section>
  );
}