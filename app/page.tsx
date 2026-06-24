import Hero from "@/components/home/Hero";
import FeaturedDomains from "@/components/home/FeaturedDomains";
import ProjectPreview from "@/components/home/ProjectPreview";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import SocialLinks from "@/components/home/SocialLinks";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Global Background Effects */}

      <div className="fixed inset-0 -z-50">

        <div className="absolute top-0 left-0 w-full h-full bg-[#0D0D0D]" />

        {/* Glow 1 */}

        <div
          className="
          absolute
          top-0
          left-0
          w-[700px]
          h-[700px]
          bg-pink-500/5
          rounded-full
          blur-[180px]
          "
        />

        {/* Glow 2 */}

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[800px]
          h-[800px]
          bg-pink-500/5
          rounded-full
          blur-[220px]
          "
        />

        {/* Grid Overlay */}

        <div
          className="
          absolute
          inset-0
          opacity-[0.03] grid-bg
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* Hero */}

      <section
        id="hero"
        className="relative z-10"
      >
        <Hero />
      </section>

      {/* Domains */}

      <section
        id="domains"
        className="relative z-10"
      >
        <FeaturedDomains />
      </section>

      {/* Projects */}

      <section
        id="projects"
        className="relative z-10"
      >
        <ProjectPreview />
      </section>

      {/* Stats */}

      <section
        id="stats"
        className="relative z-10"
      >
        <Stats />
      </section>

      {/* Social */}

      <section
        id="social"
        className="relative z-10"
      >
        <SocialLinks />
      </section>

      {/* CTA */}

      <section
        id="contact"
        className="relative z-10"
      >
        <CTA />
      </section>

    </main>
  );
}