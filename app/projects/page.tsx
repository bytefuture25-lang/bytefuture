import FadeIn from "@/components/animations/FadeIn";

const projects = [
  {
    title: "RAVEN-JARVIS",
    category: "AI Assistant",
    description:
      "Voice-controlled modular AI assistant with cybersecurity integrations.",
    tech: ["Python", "AI", "Automation"],
  },
  {
    title: "ByteFuture",
    category: "Platform",
    description:
      "Technology platform for cybersecurity, development and content creation.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Future Labs",
    category: "Research",
    description:
      "Experimental projects focused on future technologies and innovation.",
    tech: ["Research", "AI", "Development"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            Projects
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Featured Projects
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            A collection of projects, experiments and platforms
            built around technology, cybersecurity and AI.
          </p>

        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">

          <div className="grid lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="
                group
                bg-[#161616]
                border
                border-zinc-800
                rounded-3xl
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
                  h-48

                  bg-linear-to-br
                  from-pink-500/30
                  via-zinc-900
                  to-black

                  flex
                  items-center
                  justify-center
                  "
                >
                  <h2 className="text-3xl font-bold">
                    {project.title}
                  </h2>
                </div>

                <div className="p-8">

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
                    {project.category}
                  </span>

                  <p className="text-zinc-400 mt-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                        px-3
                        py-1

                        rounded-lg

                        bg-zinc-800
                        text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  <button
                    className="
                    mt-8

                    text-pink-500

                    group-hover:translate-x-2
                    transition
                    "
                  >
                    View Details →
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>
      </FadeIn>

    </main>
  );
}