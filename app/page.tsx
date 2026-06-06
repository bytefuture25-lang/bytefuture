import Hero from "@/components/home/Hero";
import FeaturedDomains from "@/components/home/FeaturedDomains";
import ProjectPreview from "@/components/home/ProjectPreview";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />

      <FeaturedDomains />

      <ProjectPreview />

      <Stats />

      <CTA />
    </main>
  );
}