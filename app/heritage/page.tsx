import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, ScrollText, Globe2, Sparkles, Leaf } from "lucide-react";

export const metadata = {
  title: "Heritage | The Living Legacy",
  description:
    "Discover India's living heritage through culture, traditions, food, craftsmanship, and stories.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Cultural Traditions",
    description:
      "Celebrating festivals, customs, rituals, and values passed from one generation to the next.",
  },
  {
    icon: ScrollText,
    title: "Oral Histories",
    description:
      "Documenting stories that preserve identity, memory, and community wisdom.",
  },
  {
    icon: Leaf,
    title: "Food Heritage",
    description:
      "Protecting authentic recipes, regional cuisines, and traditional cooking methods.",
  },
  {
    icon: Landmark,
    title: "Living Legacy",
    description:
      "Connecting people with the traditions that continue to shape India's future.",
  },
];

export default function HeritagePage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-amber-300">
            Heritage
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Preserving the
            <br />
            Living Heritage of India
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Heritage is more than monuments—it lives in recipes, stories,
            languages, traditions, craftsmanship, and the people who carry them
            forward every day.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/taste-of-traditions"
              className="rounded-full bg-amber-500 px-7 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Explore Traditions
            </Link>

            <Link
              href="/stories"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold hover:bg-white/10"
            >
              Read Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-600">
            Our Focus
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Protecting What Time Should Never Erase
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-700" />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-stone-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Globe2 className="mx-auto h-16 w-16 text-amber-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Every Generation Leaves
            <br />
            A Legacy Behind
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-300">
            Our mission is to preserve India's living heritage through
            documentaries, traditional recipes, cultural archives, and acts of
            compassion—ensuring the past continues to inspire the future.
          </p>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              <Sparkles size={18} />
              Discover The Living Legacy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
