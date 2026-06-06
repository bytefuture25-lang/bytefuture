import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      {/* Hero */}

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            About
          </p>

          <h1 className="text-6xl font-bold mt-4">
            About ByteFuture
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            ByteFuture is a platform focused on cybersecurity,
            artificial intelligence, software development and
            content creation. The goal is to learn, build,
            share knowledge and create impactful projects.
          </p>

        </section>
      </FadeIn>

      {/* Skills */}

      <FadeIn>
        <section className="mt-32">

          <h2 className="text-4xl font-bold mb-12">
            Core Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Cybersecurity",
              "Artificial Intelligence",
              "Web Development",
              "Content Creation",
            ].map((skill) => (
              <div
                key={skill}
                className="
                bg-[#161616]
                border
                border-zinc-800
                rounded-3xl
                p-8

                hover:border-pink-500
                hover:-translate-y-2

                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-bold">
                  {skill}
                </h3>
              </div>
            ))}

          </div>

        </section>
      </FadeIn>

      {/* Timeline */}

      <FadeIn>
        <section className="mt-32">

          <h2 className="text-4xl font-bold mb-12">
            Learning Journey
          </h2>

          <div className="space-y-10">

            <div className="border-l-2 border-pink-500 pl-8">
              <h3 className="text-2xl font-bold">
                2025
              </h3>

              <p className="text-zinc-400 mt-2">
                Started focusing on programming,
                cybersecurity and technology learning.
              </p>
            </div>

            <div className="border-l-2 border-pink-500 pl-8">
              <h3 className="text-2xl font-bold">
                2026
              </h3>

              <p className="text-zinc-400 mt-2">
                Building ByteFuture, projects and
                expanding knowledge in AI and development.
              </p>
            </div>

            <div className="border-l-2 border-pink-500 pl-8">
              <h3 className="text-2xl font-bold">
                Future
              </h3>

              <p className="text-zinc-400 mt-2">
                Creating innovative platforms,
                learning continuously and helping others.
              </p>
            </div>

          </div>

        </section>
      </FadeIn>

    </main>
  );
}