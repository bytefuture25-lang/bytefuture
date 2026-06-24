"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  {
    value: "10+",
    label: "Projects",
    icon: "🚀",
  },
  {
    value: "100+",
    label: "Videos",
    icon: "🎥",
  },
  {
    value: "50+",
    label: "Resources",
    icon: "📚",
  },
  {
    value: "∞",
    label: "Learning",
    icon: "🧠",
  },
];

export default function Stats() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-20 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/5 blur-[150px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <FadeIn>
          <div className="text-center mb-20">

            <p className="text-pink-500 uppercase tracking-[0.35em]">
              Statistics
            </p>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              mt-5
              bg-gradient-to-r
              from-white
              via-pink-100
              to-pink-400
              bg-clip-text
              text-transparent
              "
            >
              Growing Every Day
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
              Building projects, sharing knowledge,
              and continuously learning new technologies.
            </p>

          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                glass
                group
                relative
                rounded-3xl
                p-10
                overflow-hidden
                min-h-[250px]
                "
              >

                {/* Glow Layer */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-pink-500/10
                  via-transparent
                  to-transparent
                  "
                />

                {/* Glow Dot */}

                <div
                  className="
                  absolute
                  top-4
                  right-4
                  w-2
                  h-2
                  rounded-full
                  bg-pink-500
                  shadow-[0_0_15px_rgba(236,72,153,0.8)]
                  "
                />

                <div className="relative z-10">

                  <div className="text-5xl mb-6">
                    {stat.icon}
                  </div>

                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="
                    text-6xl
                    font-bold
                    text-pink-500
                    drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]
                    "
                  >
                    {stat.value}
                  </motion.h3>

                  <p className="mt-4 text-zinc-400 text-lg">
                    {stat.label}
                  </p>

                </div>

              </motion.div>
            </FadeIn>
          ))}

        </div>

      </div>

    </section>
  );
}