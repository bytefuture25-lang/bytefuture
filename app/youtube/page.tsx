import FadeIn from "@/components/animations/FadeIn";

const videos = [
  {
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    icon: "🛡",
  },
  {
    title: "Introduction to AI Tools",
    category: "Artificial Intelligence",
    icon: "🤖",
  },
  {
    title: "Next.js Portfolio Website",
    category: "Development",
    icon: "💻",
  },
  {
    title: "Linux for Beginners",
    category: "Cybersecurity",
    icon: "🐧",
  },
  {
    title: "Building ByteFuture",
    category: "Project",
    icon: "🚀",
  },
  {
    title: "Future Technology Trends",
    category: "Technology",
    icon: "⚡",
  },
];

export default function YoutubePage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/10 blur-[160px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-pink-500/5 blur-[220px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero Section */}

        <FadeIn>

          <section
            className="
            glass
            rounded-[40px]
            p-12
            md:p-16
            overflow-hidden
            relative
            "
          >

            <div
              className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[500px]
              bg-pink-500/10
              rounded-full
              blur-[120px]
              "
            />

            <div className="relative z-10 text-center">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                YouTube Channel
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
                ByteFuture Media
              </h1>

              <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
                Educational content focused on Cybersecurity,
                Artificial Intelligence, Development,
                Linux, Technology and Digital Innovation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">

                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Subscribe Channel
                </a>

                <a
                  href="/contact"
                  className="
                  glass
                  px-8
                  py-4
                  rounded-xl
                  hover:border-pink-500
                  transition-all
                  duration-300
                  "
                >
                  Collaborate
                </a>

              </div>

            </div>

          </section>

        </FadeIn>

        {/* Video Grid */}

        <section className="mt-24">

          <FadeIn>

            <div className="text-center mb-16">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                Latest Content
              </p>

              <h2
                className="
                text-5xl
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
                Video Library
              </h2>

            </div>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video, index) => (
              <FadeIn
                key={video.title}
                delay={index * 0.1}
              >

                <div
                  className="
                  glass
                  group
                  relative
                  rounded-3xl
                  overflow-hidden

                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >

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

                  {/* Thumbnail */}

                  <div
                    className="
                    h-56

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
                    {video.icon}
                  </div>

                  {/* Content */}

                  <div className="p-8">

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
                      {video.category}
                    </span>

                    <h3 className="text-2xl font-bold mt-5">
                      {video.title}
                    </h3>

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
                      Watch Video →
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