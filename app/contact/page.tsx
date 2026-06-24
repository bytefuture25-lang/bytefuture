import FadeIn from "@/components/animations/FadeIn";

const contacts = [
  {
    icon: "📧",
    title: "Email",
    value: "hello@bytefuture.dev",
  },
  {
    icon: "🎥",
    title: "YouTube",
    value: "ByteFuture Channel",
  },
  {
    icon: "📷",
    title: "Instagram",
    value: "@bytefuture",
  },
  {
    icon: "💻",
    title: "GitHub",
    value: "github.com/bytefuture25-lang",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background Atmosphere */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-pink-500/5 blur-[220px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}

        <FadeIn>

          <section className="text-center max-w-4xl mx-auto">

            <p className="text-pink-500 uppercase tracking-[0.35em]">
              Contact
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
              Get In Touch
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
              Have a project idea, collaboration opportunity,
              or simply want to connect? Let's build something
              amazing together.
            </p>

          </section>

        </FadeIn>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Form */}

          <FadeIn direction="left">

            <div className="glass rounded-[32px] p-8 md:p-10">

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  transition
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  transition
                  "
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="
                  w-full
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  transition
                  resize-none
                  "
                />

                <button
                  className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]
                  transition-all
                  duration-300
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          </FadeIn>

          {/* Contact Cards */}

          <div className="space-y-6">

            {contacts.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.15}
                direction="right"
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

                  <div className="flex items-center gap-5">

                    <div className="text-4xl">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-zinc-400">
                        {item.value}
                      </p>

                    </div>

                  </div>

                </div>

              </FadeIn>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}