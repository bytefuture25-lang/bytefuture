import FadeIn from "@/components/animations/FadeIn";

const skills = [
  {
    icon: "🛡",
    title: "Cybersecurity",
    desc: "Ethical hacking, penetration testing, security research and digital defense.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "AI tools, automation, machine learning and future technologies.",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Modern websites, applications and scalable digital experiences.",
  },
  {
    icon: "🎥",
    title: "Content Creation",
    desc: "Educational videos, tutorials and technology-focused content.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "The Beginning",
    desc: "Started focusing seriously on programming, cybersecurity and technology learning.",
  },
  {
    year: "2026",
    title: "Building ByteFuture",
    desc: "Created projects, explored AI and started building the ByteFuture ecosystem.",
  },
  {
    year: "Future",
    title: "Beyond Limits",
    desc: "Creating innovative platforms, learning continuously and helping future developers.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background Atmosphere */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

        <div className="absolute top-[40%] right-20 w-96 h-96 bg-pink-500/5 blur-[180px] rounded-full" />

        <div className="absolute bottom-20 left-1/2 w-[500px] h-[500px] bg-pink-500/5 blur-[220px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Hero */}

        <section className="py-32">

          <FadeIn>

            <div className="text-center max-w-4xl mx-auto">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                About ByteFuture
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
                Building The Future
                <br />
                Through Technology
              </h1>

              <p className="text-zinc-400 text-lg mt-8 leading-relaxed">
                ByteFuture is a technology-focused platform dedicated to
                cybersecurity, artificial intelligence, software development
                and digital innovation. The mission is simple:
                learn, build, create and inspire.
              </p>

            </div>

          </FadeIn>

        </section>

        {/* Skills */}

        <section className="py-20">

          <FadeIn>

            <div className="text-center mb-20">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                Core Expertise
              </p>

              <h2
                className="
                text-5xl
                md:text-6xl
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
                Skills & Domains
              </h2>

            </div>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {skills.map((skill, index) => (
              <FadeIn
                key={skill.title}
                delay={index * 0.15}
              >

                <div
                  className="
                  glass
                  rounded-3xl
                  p-8
                  h-full
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >

                  <div className="text-6xl mb-6">
                    {skill.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {skill.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {skill.desc}
                  </p>

                </div>

              </FadeIn>
            ))}

          </div>

        </section>

        {/* Timeline */}

        <section className="py-24">

          <FadeIn>

            <div className="text-center mb-20">

              <p className="text-pink-500 uppercase tracking-[0.35em]">
                Journey
              </p>

              <h2
                className="
                text-5xl
                md:text-6xl
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
                Learning Timeline
              </h2>

            </div>

          </FadeIn>

          <div className="space-y-8 max-w-4xl mx-auto">

            {timeline.map((item, index) => (
              <FadeIn
                key={item.year}
                delay={index * 0.15}
              >

                <div
                  className="
                  glass
                  rounded-3xl
                  p-8
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                      <span
                        className="
                        inline-block
                        px-4
                        py-1
                        rounded-full
                        bg-pink-500/10
                        text-pink-400
                        text-sm
                        mb-4
                        "
                      >
                        {item.year}
                      </span>

                      <h3 className="text-3xl font-bold">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  <p className="text-zinc-400 mt-5 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </FadeIn>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}