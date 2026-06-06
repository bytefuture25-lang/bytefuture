"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">

     <div className="absolute inset-0 -z-10 overflow-hidden">

  <div
    className="
    absolute
    top-20
    left-20
    w-72
    h-72
    bg-pink-500/20
    rounded-full
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
    bg-pink-500/10
    rounded-full
    blur-3xl
    "
  />

</div>
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}

        <div>

          <p className="text-pink-500 uppercase tracking-[0.3em] mb-4">
            Elowen Studio
          </p>

          <h1 className="text-7xl font-bold">
            ByteFuture
          </h1>

          <h2 className="text-2xl mt-4 text-zinc-400">
            Cybersecurity • AI • Development • Content Creation
          </h2>

          <p className="max-w-xl mt-8 text-zinc-500 text-lg">
            Building the future through technology,
            cybersecurity, artificial intelligence
            and digital creativity.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 rounded-xl bg-pink-500 hover:scale-105 transition">
              Explore Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-pink-500">
              Watch Videos
            </button>
          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center">

          <div className="relative w-112.5">

            <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="absolute top-10 left-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              🛡 Cybersecurity
            </div>

            <div className="absolute top-40 right-0 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              🤖 AI
            </div>

            <div className="absolute bottom-20 left-0 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              💻 Development
            </div>

            <div className="absolute bottom-0 right-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              🎥 Content
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <div className="animate-bounce text-zinc-500">
    ↓
  </div>
</div>