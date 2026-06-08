import FadeIn from "@/components/animations/FadeIn";

const projects = [
  {
    title: "RAVEN-JARVIS",
    desc: "Voice Controlled AI Assistant",
    tag: "AI Project",
  },
  {
    title: "ByteFuture",
    desc: "Technology & Content Platform",
    tag: "Main Platform",
  },
  {
    title: "Future Labs",
    desc: "Experimental Development Projects",
    tag: "Research",
  },
];

export default function ProjectPreview() {
  return (
    <FadeIn>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-pink-500 uppercase tracking-[0.3em]">
              Projects
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Featured Work
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl">
              Explore the projects that power ByteFuture,
              from AI assistants to development experiments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                group
                relative

                bg-[#161616]
                border
                border-zinc-800

                rounded-3xl
                overflow-hidden

                transition-all
                duration-500

                hover:border-pink-500
                hover:shadow-2xl
                hover:shadow-pink-500/30

                hover:-translate-y-4
                hover:rotate-1
                "
              >
                {/* Glow Effect */}

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-500

                  bg-linear-to-br
                  from-pink-500/10
                  via-transparent
                  to-purple-500/10
                  "
                />

                {/* Top Area */}

                <div
                  className="
                  relative

                  h-56

                  bg-linear-to-br
                  from-pink-500/30
                  via-zinc-900
                  to-black

                  flex
                  items-center
                  justify-center
                  "
                >
                  <h3
                    className="
                    text-3xl
                    font-bold

                    group-hover:scale-110
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

                    px-3
                    py-1

                    rounded-full

                    bg-pink-500/10
                    text-pink-400
                    text-sm
                    "
                  >
                    {project.tag}
                  </span>

                  <p className="text-zinc-400 mt-6">
                    {project.desc}
                  </p>

                  <button
                    className="
                    mt-8

                    text-pink-500

                    group-hover:translate-x-3
                    transition
                    duration-300
                    "
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}