import FadeIn from "@/components/animations/FadeIn";

const posts = [
  {
    title: "Getting Started With Cybersecurity",
    category: "Cybersecurity",
    date: "June 2026",
  },
  {
    title: "Learning Python From Scratch",
    category: "Programming",
    date: "June 2026",
  },
  {
    title: "Understanding Artificial Intelligence",
    category: "AI",
    date: "June 2026",
  },
  {
    title: "How I Built ByteFuture",
    category: "Project",
    date: "June 2026",
  },
  {
    title: "Linux Essentials For Beginners",
    category: "Linux",
    date: "June 2026",
  },
  {
    title: "Web Development Roadmap",
    category: "Development",
    date: "June 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            Blog
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Articles & Tutorials
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            Insights, tutorials, learning notes and technology articles.
          </p>

        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {posts.map((post) => (
              <article
                key={post.title}
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
                <div className="h-48 bg-linear-to-br from-pink-500/20 via-zinc-900 to-black" />

                <div className="p-8">

                  <span className="text-pink-400 text-sm">
                    {post.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-4">
                    {post.title}
                  </h2>

                  <p className="text-zinc-500 mt-4">
                    {post.date}
                  </p>

                  <button
                    className="
                    mt-6
                    text-pink-500

                    group-hover:translate-x-2
                    transition
                    "
                  >
                    Read Article →
                  </button>

                </div>

              </article>
            ))}

          </div>

        </section>
      </FadeIn>

    </main>
  );
}