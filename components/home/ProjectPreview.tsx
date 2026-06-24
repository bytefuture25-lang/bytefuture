"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const projects = [
  {
    title: "RAVEN-JARVIS",
    desc: "Voice Controlled AI Assistant with automation, productivity tools and future AI integrations.",
    tag: "AI Project",
    icon: "🤖",
  },
  {
    title: "ByteFuture",
    desc: "Technology, Cybersecurity and AI content platform designed for learning and innovation.",
    tag: "Main Platform",
    icon: "🚀",
  },
  {
    title: "Future Labs",
    desc: "Experimental projects, futuristic concepts and next-generation development ideas.",
    tag: "Research",
    icon: "🧪",
  },
];

export default function ProjectPreview() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 blur-[150px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <FadeIn>
          <div className="mb-20 text-center">

            <p className="text-pink-500 uppercase tracking-[0.35em]">
              Projects
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
              Featured Work
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
              Explore the projects that power ByteFuture,
              from AI assistants to development experiments.
            </p>

          </div>
        </FadeIn>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{
                  y: -12,
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
                overflow-hidden
                min-h-[420px]
                "
              >

                {/* Glow Overlay */}

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
                  to-purple-500/10
                  "
                />

                {/* Top Visual Area */}

                <div
                  className="
                  relative
                  h-56
                  flex
                  flex-col
                  items-center
                  justify-center
                  "
                >

                  <div className="text-7xl mb-4">
                    {project.icon}
                  </div>

                  <h3
                    className="
                    text-3xl
                    font-bold
                    group-hover:scale-105
                    transition
                    duration-500
                    "
                  >
                    {project.title}
                  </h3>

                </div>

                {/* Content */}

                <div className="relative p-8">

                  <span
                    className="
                    inline-block
                    px-4
                    py-1.5
                    rounded-full
                    bg-pink-500/10
                    text-pink-400
                    text-sm
                    border
                    border-pink-500/20
                    "
                  >
                    {project.tag}
                  </span>

                  <p className="text-zinc-400 mt-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <motion.button
                    whileHover={{ x: 8 }}
                    className="
                    mt-8
                    text-pink-400
                    font-medium
                    "
                  >
                    View Project →
                  </motion.button>

                </div>

                {/* Glow Dot */}

                <div
                  className="
                  absolute
                  top-5
                  right-5
                  w-2
                  h-2
                  rounded-full
                  bg-pink-500
                  shadow-[0_0_15px_rgba(236,72,153,0.8)]
                  "
                />

              </motion.div>
            </FadeIn>
          ))}

        </div>

      </div>

    </section>
  );
}