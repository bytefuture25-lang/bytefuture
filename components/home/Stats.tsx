"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "100+",
    label: "Videos",
  },
  {
    value: "50+",
    label: "Resources",
  },
  {
    value: "∞",
    label: "Learning",
  },
];

export default function Stats() {
  return (
    <FadeIn>
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-pink-500 uppercase tracking-[0.3em]">
              Statistics
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Growing Every Day
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              Building projects, sharing knowledge,
              and continuously learning new technologies.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="
                group
                relative

                bg-[#161616]

                border
                border-zinc-800

                rounded-3xl

                p-10

                overflow-hidden

                hover:border-pink-500
                hover:-translate-y-2

                hover:shadow-xl
                hover:shadow-pink-500/20

                transition-all
                duration-300
                "
              >

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  bg-linear-to-br
                  from-pink-500/10
                  to-transparent

                  transition-opacity
                  duration-300
                  "
                />

                <div className="relative z-10">

                  <h3 className="text-6xl font-bold text-pink-500">
                    {stat.value}
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    {stat.label}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>
    </FadeIn>
  );
}