import FadeIn from "@/components/animations/FadeIn";

const domains = [
  {
    icon: "🛡",
    title: "Cybersecurity",
    desc: "Learn ethical hacking, security concepts and modern defense techniques.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Explore AI tools, automation and future technologies.",
  },
  {
    icon: "💻",
    title: "Development",
    desc: "Build websites, applications and software projects.",
  },
  {
    icon: "🎥",
    title: "Content Creation",
    desc: "Tutorials, YouTube videos and educational content.",
  },
];

export default function FeaturedDomains() {
  return (
    <FadeIn>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}

          <div className="text-center mb-16">

            <p className="text-pink-500 uppercase tracking-[0.3em]">
              What We Do
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Explore ByteFuture
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              Discover technology, cybersecurity,
              AI and digital creativity through projects,
              resources and educational content.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {domains.map((item) => (
              <div
                key={item.title}
                className="
                group
                relative
                bg-[#161616]
                border
                border-zinc-800
                rounded-3xl
                p-8
                overflow-hidden

                hover:border-pink-500
                hover:-translate-y-2

                hover:shadow-xl
                hover:shadow-pink-500/20

                transition-all
                duration-300
                "
              >

                {/* Glow Effect */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100

                  bg-linear-to-br
                  from-pink-500/5
                  to-transparent

                  transition-opacity
                  duration-300
                  "
                />

                <div className="relative z-10">

                  <div className="text-5xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}