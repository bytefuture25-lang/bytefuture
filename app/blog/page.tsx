import FadeIn from "@/components/animations/FadeIn";

const posts = [
  {
    icon: "🛡",
    title: "Getting Started With Cybersecurity",
    category: "Cybersecurity",
    date: "June 2026",
  },
  {
    icon: "🐍",
    title: "Learning Python From Scratch",
    category: "Programming",
    date: "June 2026",
  },
  {
    icon: "🤖",
    title: "Understanding Artificial Intelligence",
    category: "AI",
    date: "June 2026",
  },
  {
    icon: "🚀",
    title: "How I Built ByteFuture",
    category: "Project",
    date: "June 2026",
  },
  {
    icon: "🐧",
    title: "Linux Essentials For Beginners",
    category: "Linux",
    date: "June 2026",
  },
  {
    icon: "💻",
    title: "Web Development Roadmap",
    category: "Development",
    date: "June 2026",
  },
];

export default function BlogPage() {
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
              Blog
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
              Articles & Tutorials
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
              Insights, tutorials, learning notes,
              cybersecurity research and technology articles.
            </p>

          </section>
        </FadeIn>

        {/* Blog Grid */}

        <section className="mt-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {posts.map((post, index) => (
              <FadeIn
                key={post.title}
                delay={index * 0.1}
              >

                <article
                  className="
                  glass
                  group
                  relative
                  rounded-3xl
                  overflow-hidden
                  min-h-[380px]

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

                  {/* Cover Area */}

                  <div
                    className="
                    h-52

                    flex
                    items-center
                    justify-center

                    text-7xl

                    bg-gradient-to-br
                    from-pink-500/10
                    via-transparent
                    to-transparent
                    "
                  >
                    {post.icon}
                  </div>

                  {/* Content */}

                  <div className="relative z-10 p-8">

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
                      {post.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-5">
                      {post.title}
                    </h2>

                    <p className="text-zinc-500 mt-4">
                      {post.date}
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
                      Read Article →
                    </button>

                  </div>

                </article>

              </FadeIn>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}