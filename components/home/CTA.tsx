"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Atmosphere */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[180px] rounded-full" />

      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <FadeIn>

          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            glass
            relative
            overflow-hidden
            rounded-[40px]
            p-12
            md:p-16
            text-center
            "
          >

            {/* Animated Glow */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[500px]
              bg-pink-500/10
              rounded-full
              blur-[120px]
              "
            />

            <div className="relative z-10">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                Join The Journey
              </p>

              <h2
                className="
                text-5xl
                md:text-6xl
                font-bold
                mt-6
                bg-gradient-to-r
                from-white
                via-pink-100
                to-pink-400
                bg-clip-text
                text-transparent
                "
              >
                Ready To Explore
                <br />
                The Future?
              </h2>

              <p className="max-w-2xl mx-auto mt-8 text-zinc-400 text-lg leading-relaxed">
                Follow my journey through cybersecurity,
                artificial intelligence, software development,
                digital innovation and content creation.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

                <Link
                  href="/projects"
                  className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600
                  text-white
                  font-medium
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]
                  transition-all
                  duration-300
                  "
                >
                  Explore Projects
                </Link>

                <Link
                  href="/contact"
                  className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-pink-500/40
                  glass
                  hover:border-pink-500
                  hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]
                  transition-all
                  duration-300
                  "
                >
                  Contact Me
                </Link>

              </div>

            </div>

          </motion.div>

        </FadeIn>

      </div>

    </section>
  );
}