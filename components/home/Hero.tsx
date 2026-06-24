"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/animations/ParallaxSection";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Magnetic from "@/components/cursor/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Effects */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Left Glow */}

        <ParallaxSection>
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
        </ParallaxSection>

        {/* Right Glow */}

        <ParallaxSection>
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
        </ParallaxSection>

      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-pink-500 uppercase tracking-[0.35em] mb-5"
          >
            Future Byte • Elowen Studio
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            "
          >
            Building The Future
            <br />
            Through Technology
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mt-6 text-zinc-400"
          >
            Cybersecurity • Artificial Intelligence • Development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xl mt-8 text-zinc-500 text-lg"
          >
            ByteFuture is a modern technology platform focused on
            cybersecurity, artificial intelligence, software
            development and digital creativity. Learn, build and
            explore the future of technology.
          </motion.p>

         <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="flex flex-wrap gap-4 mt-10"
    >
      <Magnetic strength={28}>
        <Link
          href="/projects"
          className="
          inline-flex
          items-center
          justify-center
          px-7
          py-3.5
          rounded-xl
          bg-pink-500
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]
          transition-all
          duration-300
          font-medium
          "
        >
          Explore Projects
        </Link>
      </Magnetic>

      <Magnetic strength={24}>
        <Link
          href="/youtube"
          className="
          inline-flex
          items-center
          justify-center
          px-7
          py-3.5
          rounded-xl
          border
          border-pink-500
          hover:bg-pink-500/10
          hover:border-pink-400
          hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]
          transition-all
          duration-300
          "
        >
          Watch Videos
        </Link>
      </Magnetic>

      <Magnetic strength={20}>
        <Link
          href="https://github.com/bytefuture25-lang"
          target="_blank"
          className="
          inline-flex
          items-center
          justify-center
          px-7
          py-3.5
          rounded-xl
          border
          border-zinc-700
          hover:border-pink-500
          hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]
          transition-all
          duration-300
          "
        >
          GitHub
        </Link>
      </Magnetic>
    </motion.div>
  </motion.div>

        {/* RIGHT SIDE PARALLAX */}

        <ParallaxSection>
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
                backdrop-blur-md
                bg-white/5
                border
                border-white/10
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
                top-8
                right-0
                backdrop-blur-md
                bg-white/5
                border
                border-white/10
                rounded-2xl
                hover:scale-105
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
                backdrop-blur-md
                bg-white/5
                border
                border-white/10
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
                backdrop-blur-md
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-8
                py-5
                "
              >
                🎥 Content Creation
              </motion.div>

            </div>

          </motion.div>
        </ParallaxSection>

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