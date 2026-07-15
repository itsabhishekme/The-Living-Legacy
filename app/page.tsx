import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Heritage from "@/sections/Heritage";
import Stories from "@/sections/Stories";
import Humanity from "@/sections/Humanity";
import Mission from "@/sections/Mission";
import Gallery from "@/sections/Gallery";
import CTA from "@/sections/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Heritage */}
      <Heritage />

      {/* Stories */}
      <Stories />

      {/* Humanity */}
      <Humanity />

      {/* Mission */}
      <Mission />

      {/* Gallery */}
      <Gallery />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}