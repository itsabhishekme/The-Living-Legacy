import type { Metadata } from "next";
import Hero from "@/components/the-memory-project/Hero";
import Mission from "@/components/the-memory-project/Mission";
import Collections from "@/components/the-memory-project/Collections";
import FeaturedStories from "@/components/the-memory-project/FeaturedStories";
import MemoryCategories from "@/components/the-memory-project/MemoryCategories";
import HowItWorks from "@/components/the-memory-project/HowItWorks";
import Impact from "@/components/the-memory-project/Impact";
import ShareMemory from "@/components/the-memory-project/ShareMemory";
import CTA from "@/components/the-memory-project/CTA";

export const metadata: Metadata = {
  title: "The Memory Project | The Living Legacy",
  description:
    "The Memory Project preserves family histories, oral traditions, personal memories, photographs, letters, and untold human stories—building a living archive for future generations.",
  keywords: [
    "The Memory Project",
    "The Living Legacy",
    "Human Stories",
    "Oral History",
    "Family Heritage",
    "Indian Culture",
    "Living Archive",
    "Story Preservation",
    "Legacy",
    "Documentary",
    "History",
    "Memories",
  ],
};

export default function TheMemoryProjectPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Hero />
      <Mission />
      <Collections />
      <FeaturedStories />
      <MemoryCategories />
      <HowItWorks />
      <Impact />
      <ShareMemory />
      <CTA />
    </main>
  );
}