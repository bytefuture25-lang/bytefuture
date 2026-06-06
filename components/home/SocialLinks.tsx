export default function SocialLinks() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-pink-500 uppercase tracking-[0.3em]">
            Connect
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Connect With ByteFuture
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Follow my journey in cybersecurity, artificial intelligence,
            development and content creation.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* GitHub */}

          <a
            href="https://github.com/bytefuture25-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            bg-[#161616]
            border
            border-zinc-800
            rounded-3xl
            p-8

            hover:border-pink-500
            hover:-translate-y-2

            hover:shadow-xl
            hover:shadow-pink-500/20

            transition-all
            duration-300
            block
            "
          >

            <div className="text-5xl mb-6">
              💻
            </div>

            <h3 className="text-2xl font-bold">
              GitHub
            </h3>

            <p className="text-zinc-400 mt-4">
              Explore ByteFuture projects,
              source code and future developments.
            </p>

            <p
              className="
              mt-6
              text-pink-500

              group-hover:translate-x-2
              transition
              "
            >
              Visit GitHub →
            </p>

          </a>

          {/* YouTube */}

          <a
            href="https://www.youtube.com/@FutureByte-z9g"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            bg-[#161616]
            border
            border-zinc-800
            rounded-3xl
            p-8

            hover:border-pink-500
            hover:-translate-y-2

            hover:shadow-xl
            hover:shadow-pink-500/20

            transition-all
            duration-300
            block
            "
          >

            <div className="text-5xl mb-6">
              🎥
            </div>

            <h3 className="text-2xl font-bold">
              YouTube
            </h3>

            <p className="text-zinc-400 mt-4">
              Tutorials, cybersecurity,
              AI and technology content.
            </p>

            <p
              className="
              mt-6
              text-pink-500

              group-hover:translate-x-2
              transition
              "
            >
              Visit Channel →
            </p>

          </a>

          {/* Email */}

          <a
            href="mailto:bytefuture25@gmail.com"
            className="
            group
            bg-[#161616]
            border
            border-zinc-800
            rounded-3xl
            p-8

            hover:border-pink-500
            hover:-translate-y-2

            hover:shadow-xl
            hover:shadow-pink-500/20

            transition-all
            duration-300
            block
            "
          >

            <div className="text-5xl mb-6">
              📧
            </div>

            <h3 className="text-2xl font-bold">
              Email
            </h3>

            <p className="text-zinc-400 mt-4">
              Contact me for collaborations,
              projects and opportunities.
            </p>

            <p
              className="
              mt-6
              text-pink-500

              group-hover:translate-x-2
              transition
              "
            >
              Send Email →
            </p>

          </a>

        </div>

      </div>

    </section>
  );
}