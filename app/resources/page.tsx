import FadeIn from "@/components/animations/FadeIn";

const resources = [
  {
    icon: "🛡",
    title: "Cybersecurity Roadmap",
    category: "Cybersecurity",
    description:
      "A structured path for learning ethical hacking and modern security practices.",
  },
  {
    icon: "🐍",
    title: "Python Programming Guide",
    category: "Development",
    description:
      "Beginner to advanced Python learning resources and project paths.",
  },
  {
    icon: "🤖",
    title: "AI Tools Collection",
    category: "Artificial Intelligence",
    description:
      "Useful AI tools, automation platforms and productivity resources.",
  },
  {
    icon: "🐧",
    title: "Linux Essentials",
    category: "Cybersecurity",
    description:
      "Linux commands, workflows, administration and security basics.",
  },
  {
    icon: "💻",
    title: "Web Development Stack",
    category: "Development",
    description:
      "HTML, CSS, JavaScript, React and Next.js learning resources.",
  },
  {
    icon: "🎥",
    title: "Content Creation Toolkit",
    category: "Content Creation",
    description:
      "Tools, workflows and strategies for YouTube and digital content.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-pink-500/5 blur-[220px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}

        <FadeIn>
          <section className="text-center max-w-4xl mx-auto">

            <p className="text-pink-500 uppercase tracking-[0.35em]">
              Resources
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
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
              Learning Library
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
              Curated resources covering cybersecurity,
              artificial intelligence, development,
              Linux and content creation.
            </p>

          </section>
        </FadeIn>

        {/* Resources Grid */}

        <section className="mt-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {resources.map((resource, index) => (
              <FadeIn
                key={resource.title}
                delay={index * 0.1}
              >

                <div
                  className="
                  glass
                  group
                  relative
                  rounded-3xl
                  p-8
                  min-h-[320px]
                  overflow-hidden

                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >

                  {/* Hover Glow */}

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

                    <div className="text-6xl mb-6">
                      {resource.icon}
                    </div>

                    <span
                      className="
                      inline-block
                      px-3
                      py-1

                      rounded-full

                      bg-pink-500/10
                      border
                      border-pink-500/20

                      text-pink-400
                      text-sm
                      "
                    >
                      {resource.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-6">
                      {resource.title}
                    </h2>

                    <p className="text-zinc-400 mt-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <button
                      className="
                      mt-8

                      text-pink-400
                      font-medium

                      group-hover:translate-x-2
                      transition
                      duration-300
                      "
                    >
                      View Resource →
                    </button>

                  </div>

                </div>

              </FadeIn>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}