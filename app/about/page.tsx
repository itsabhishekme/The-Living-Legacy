import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Leaf,
  Sparkles,
  UtensilsCrossed,
  Clapperboard,
  Globe2,
  HandHeart,
  Target,
  Eye,
  Archive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | The Living Legacy",
  description:
    "The Living Legacy preserves culture through food, storytelling, documentaries, and acts of kindness.",
};

const pillars = [
  {
    icon: UtensilsCrossed,
    title: "Taste of Traditions",
    description:
      "Preserving authentic homemade recipes, regional cuisines, traditional spices, and India's timeless culinary heritage.",
    href: "/taste-of-traditions",
  },
  {
    icon: BookOpen,
    title: "Timeless Tadka",
    description:
      "Documenting forgotten recipes and culinary traditions so future generations never lose their roots.",
    href: "/timeless-tadka",
  },
  {
    icon: Clapperboard,
    title: "Whisper with Vihaan",
    description:
      "Documentary storytelling that inspires empathy, awareness, and meaningful social change.",
    href: "/whisper-with-vihaan",
  },
  {
    icon: HandHeart,
    title: "One Meal • One Hope",
    description:
      "A mission dedicated to ending hunger through compassion, community, and collective action.",
    href: "/one-meal-one-hope",
  },
  {
    icon: Archive,
    title: "The Memory Project",
    description:
      "Preserving personal memories, family histories, oral traditions, and untold human stories to build a living archive for future generations.",
    href: "/the-memory-project",
  },
];

const values = [
  "Preserve India's cultural heritage.",
  "Document authentic human stories.",
  "Celebrate regional traditions.",
  "Inspire compassion through storytelling.",
  "Support communities with meaningful action.",
  "Leave a legacy for future generations.",
];

export default function AboutPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            About The Living Legacy
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            More Than Recipes.
            <br />
            <span className="text-amber-400">
              A Living Legacy.
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-stone-300">
            The Living Legacy is a purpose-driven platform preserving culture,
            documenting authentic human stories, and inspiring kindness through
            food, documentaries, and community action.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/stories"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Explore Stories
            </Link>

            <Link
              href="/get-involved"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <Target className="h-12 w-12 text-amber-600" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              To preserve India's living heritage through authentic recipes,
              documentaries, community stories, and acts of compassion that
              inspire positive change across generations.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-900 p-10 text-white shadow-lg">
            <Eye className="h-12 w-12 text-amber-400" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-stone-300">
              A world where traditions are preserved, every meaningful story is
              remembered, and kindness becomes a shared legacy for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our Initiatives
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Five Ways We Create Impact
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-stone-200 bg-stone-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold group-hover:text-amber-700">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-stone-600">
                    {item.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-700">
                    Learn More
                    <ArrowRight size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[40px] bg-gradient-to-br from-stone-950 to-stone-900 p-12 text-white">
          <div className="text-center">
            <Sparkles className="mx-auto h-12 w-12 text-amber-400" />

            <h2 className="mt-6 text-4xl font-bold">
              What We Believe
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-6"
              >
                <Leaf className="mt-1 h-6 w-6 text-amber-400" />

                <p className="leading-7 text-stone-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">
        <Globe2 className="mx-auto h-16 w-16" />

        <h2 className="mt-8 text-5xl font-bold">
          Every Story Matters.
          <br />
          Every Tradition Lives On.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
          Every recipe carries generations of memories.
          <br />
          Every documentary preserves voices that deserve to be heard.
          <br />
          Every act of kindness creates hope.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/gallery"
            className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
          >
            Explore Gallery
          </Link>

          <Link
            href="/contact"
            className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-lg font-semibold">
          <Heart className="text-red-600" />
          Built with Purpose. Shared with Humanity.
        </div>
      </section>
    </main>
  );
}