import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <FadeIn>
      <section className="py-32">

        <div className="max-w-5xl mx-auto px-6">

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            border
            border-pink-500/20

            bg-[#161616]

            p-12

            text-center
            "
          >

            {/* Background Glow */}

            <div
              className="
              absolute

              top-0
              left-1/2

              -translate-x-1/2

              w-125
              h-125

              bg-pink-500/10

              rounded-full

              blur-3xl
              "
            />

            <div className="relative z-10">

              <p className="text-pink-500 uppercase tracking-[0.3em]">
                Join The Journey
              </p>

              <h2 className="text-5xl font-bold mt-6">
                Ready To Explore The Future?
              </h2>

              <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
                Follow my journey through cybersecurity,
                artificial intelligence, software development
                and content creation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

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
                  Explore Projects
                </button>

                <button
                  className="
                  px-8
                  py-4

                  rounded-xl

                  border
                  border-pink-500

                  hover:bg-pink-500/10

                  transition
                  "
                >
                  Contact Me
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}