import FadeIn from "@/components/animations/FadeIn";

const videos = [
  {
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
  },
  {
    title: "Introduction to AI Tools",
    category: "Artificial Intelligence",
  },
  {
    title: "Next.js Portfolio Website",
    category: "Development",
  },
  {
    title: "Linux for Beginners",
    category: "Cybersecurity",
  },
  {
    title: "Building ByteFuture",
    category: "Project",
  },
  {
    title: "Future Technology Trends",
    category: "Technology",
  },
];

export default function YoutubePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            YouTube
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Video Library
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            Educational content covering cybersecurity,
            AI, development and technology.
          </p>

        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video) => (
              <div
                key={video.title}
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
                  h-52

                  bg-linear-to-br
                  from-pink-500/30
                  via-zinc-900
                  to-black

                  flex
                  items-center
                  justify-center

                  text-5xl
                  "
                >
                  ▶
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
                    {video.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-6">
                    {video.title}
                  </h3>

                  <button
                    className="
                    mt-8

                    text-pink-500

                    group-hover:translate-x-2
                    transition
                    "
                  >
                    Watch Video →
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