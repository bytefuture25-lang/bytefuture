import FadeIn from "@/components/animations/FadeIn";

const resources = [
  {
    title: "Cybersecurity Roadmap",
    category: "Cybersecurity",
    description:
      "A structured path for learning ethical hacking and security.",
  },
  {
    title: "Python Programming Guide",
    category: "Development",
    description:
      "Beginner to advanced Python learning resources.",
  },
  {
    title: "AI Tools Collection",
    category: "Artificial Intelligence",
    description:
      "Useful AI tools and platforms for productivity and learning.",
  },
  {
    title: "Linux Essentials",
    category: "Cybersecurity",
    description:
      "Linux commands, workflows and system administration basics.",
  },
  {
    title: "Web Development Stack",
    category: "Development",
    description:
      "HTML, CSS, JavaScript, React and Next.js resources.",
  },
  {
    title: "Content Creation Toolkit",
    category: "Content Creation",
    description:
      "Tools and workflows for YouTube and digital content.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            Resources
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Learning Library
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            Curated resources covering cybersecurity,
            AI, development and content creation.
          </p>

        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {resources.map((resource) => (
              <div
                key={resource.title}
                className="
                group
                bg-[#161616]
                border
                border-zinc-800
                rounded-3xl
                p-8

                hover:border-pink-500
                hover:-translate-y-2

                hover:shadow-xl
                hover:shadow-pink-500/20

                transition-all
                duration-300
                "
              >

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
                  {resource.category}
                </span>

                <h2 className="text-2xl font-bold mt-6">
                  {resource.title}
                </h2>

                <p className="text-zinc-400 mt-4">
                  {resource.description}
                </p>

                <button
                  className="
                  mt-8

                  text-pink-500

                  group-hover:translate-x-2
                  transition
                  "
                >
                  View Resource →
                </button>

              </div>
            ))}

          </div>

        </section>
      </FadeIn>

    </main>
  );
}