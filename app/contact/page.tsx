import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <FadeIn>
        <section>

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            Contact
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Get In Touch
          </h1>

          <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
            Have a project idea, collaboration opportunity,
            or just want to connect? Reach out below.
          </p>

        </section>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12 mt-20">

        {/* Contact Form */}

        <FadeIn>
          <div
            className="
            bg-[#161616]
            border
            border-zinc-800
            rounded-3xl
            p-8
            "
          >

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
                bg-zinc-900
                border
                border-zinc-800
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                "
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                "
              />

              <button
                className="
                px-8
                py-4
                rounded-xl
                bg-pink-500
                hover:scale-105
                transition
                "
              >
                Send Message
              </button>

            </form>

          </div>
        </FadeIn>

        {/* Contact Links */}

        <FadeIn>
          <div className="space-y-6">

            <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">📧 Email</h3>
              <p className="mt-4 text-zinc-400">
                your@email.com
              </p>
            </div>

            <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">🎥 YouTube</h3>
              <p className="mt-4 text-zinc-400">
                ByteFuture Channel
              </p>
            </div>

            <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">📷 Instagram</h3>
              <p className="mt-4 text-zinc-400">
                @bytefuture
              </p>
            </div>

            <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">💻 GitHub</h3>
              <p className="mt-4 text-zinc-400">
                github.com/yourprofile
              </p>
            </div>

          </div>
        </FadeIn>

      </div>

    </main>
  );
}