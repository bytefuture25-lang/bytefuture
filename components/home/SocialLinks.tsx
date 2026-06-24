import FadeIn from "@/components/animations/FadeIn";

const socials = [
  {
    icon: "💻",
    title: "GitHub",
    description:
      "Explore ByteFuture projects, source code and future developments.",
    link: "https://github.com/bytefuture25-lang",
    button: "Visit GitHub →",
  },
  {
    icon: "🎥",
    title: "YouTube",
    description:
      "Tutorials, cybersecurity, AI and technology content.",
    link: "https://www.youtube.com/@FutureByte-z9g",
    button: "Visit Channel →",
  },
  {
    icon: "📧",
    title: "Email",
    description:
      "Contact me for collaborations, projects and opportunities.",
    link: "mailto:bytefuture25@gmail.com",
    button: "Send Email →",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/5 blur-[180px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <FadeIn>
          <div className="text-center mb-20">

            <p className="text-pink-500 uppercase tracking-[0.35em]">
              Connect
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
              Connect With ByteFuture
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
              Follow my journey in cybersecurity,
              artificial intelligence, development
              and content creation.
            </p>

          </div>
        </FadeIn>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {socials.map((social, index) => (
            <FadeIn
              key={social.title}
              delay={index * 0.15}
            >
              <a
                href={social.link}
                target={
                  social.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className="
                glass
                group
                relative
                rounded-3xl
                p-8
                min-h-[300px]
                overflow-hidden

                hover:-translate-y-2
                transition-all
                duration-300
                block
                "
              >

                {/* Glow Overlay */}

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

                  <div className="text-6xl mb-8">
                    {social.icon}
                  </div>

                  <h3 className="text-3xl font-bold">
                    {social.title}
                  </h3>

                  <p className="text-zinc-400 mt-5 leading-relaxed">
                    {social.description}
                  </p>

                  <p
                    className="
                    mt-8
                    text-pink-400
                    font-medium

                    group-hover:translate-x-2
                    transition
                    duration-300
                    "
                  >
                    {social.button}
                  </p>

                </div>

              </a>
            </FadeIn>
          ))}

        </div>

      </div>

    </section>
  );
}