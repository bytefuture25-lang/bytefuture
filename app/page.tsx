import Hero from "@/components/home/Hero";
import FeaturedDomains from "@/components/home/FeaturedDomains";
import ProjectPreview from "@/components/home/ProjectPreview";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import SocialLinks from "@/components/home/SocialLinks";

export default function Home() {
  return (
    <main className="relative">

      <section id="hero">
        <Hero />
      </section>

      <section id="domains">
        <FeaturedDomains />
      </section>

      <section id="projects">
        <ProjectPreview />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="social">
        <SocialLinks />
      </section>

      <section id="contact">
        <CTA />
      </section>

    </main>
  );
}