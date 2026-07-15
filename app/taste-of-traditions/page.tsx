import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Clock3,
  Flame,
  Globe2,
  Leaf,
  MapPinned,
  ScrollText,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

export const metadata = {
  title: "Taste Of Traditions | The Living Legacy",
  description:
    "Reviving India's forgotten flavors through emotional homemade recipes, authentic spices, regional cuisines, and timeless culinary traditions.",
};

const pillars = [
  {
    icon: ChefHat,
    title: "Authentic Homemade Recipes",
    description:
      "Traditional family recipes lovingly passed down through generations, preserving the true taste of Indian homes.",
  },
  {
    icon: Flame,
    title: "Traditional Cooking",
    description:
      "Age-old cooking techniques using clay pots, iron cookware, wood-fired methods, and slow cooking.",
  },
  {
    icon: Leaf,
    title: "Authentic Spices",
    description:
      "Discover handmade spice blends, regional masalas, and forgotten ingredients that define India's diverse cuisine.",
  },
  {
    icon: MapPinned,
    title: "Regional Cuisines",
    description:
      "Explore hidden culinary treasures from every corner of India—from villages to royal kitchens.",
  },
];

const values = [
  "Preserve India's culinary heritage.",
  "Document forgotten regional recipes.",
  "Celebrate homemade cooking traditions.",
  "Support local food culture.",
  "Pass authentic recipes to future generations.",
  "Keep traditional flavors alive.",
];

export default function TasteOfTraditionsPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* ================= Hero ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-950 via-amber-900 to-stone-950 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#f59e0b,transparent_60%)]" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="max-w-3xl">

            <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Culinary Heritage Initiative
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Taste Of
              <br />
              <span className="text-amber-400">
                Traditions
              </span>
            </h1>

            <h2 className="mt-8 text-3xl font-semibold leading-tight md:text-5xl">
              Reviving India's
              <br />
              Forgotten Flavors
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-300 md:text-xl">
              Bringing emotional homemade recipes, authentic spices,
              regional cuisines, and timeless Indian traditions
              back to life—one recipe at a time.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
              >
                Explore Recipes

                <ArrowRight size={20} />
              </Link>

              <Link
                href="/share-story"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-amber-400 hover:bg-white/10"
              >
                Share Family Recipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= About ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our Purpose
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              More Than Recipes.
              <br />
              A Living Legacy.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Every recipe tells a story.
              Every spice carries tradition.
              Every meal connects generations.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Taste Of Traditions is dedicated to preserving India's
              rich culinary heritage by documenting authentic recipes,
              regional cuisines, forgotten ingredients, handmade spice
              blends, and traditional cooking methods before they disappear.
            </p>

          </div>

          <div className="rounded-[40px] bg-gradient-to-br from-amber-100 to-orange-100 p-10 shadow-xl">

            <ScrollText className="mb-6 h-16 w-16 text-amber-700" />

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              To preserve India's culinary wisdom so future generations
              can continue experiencing authentic flavors, family traditions,
              and cultural memories through food.
            </p>

          </div>

        </div>
      </section>

      {/* ================= Features ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[0.3em] text-amber-600 font-semibold">
              What We Preserve
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Protecting India's Culinary Heritage
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {pillars.map((item) => {
              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-stone-600">
                    {item.description}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </section>

      {/* ================= Values ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="rounded-[40px] bg-stone-900 p-12 text-white">

          <span className="uppercase tracking-[0.3em] text-amber-400">
            Our Commitment
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Preserving Flavor, Culture & Memory
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {values.map((value) => (

              <div
                key={value}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-5"
              >

                <Sparkles className="mt-1 h-6 w-6 text-amber-400" />

                <p className="leading-7 text-stone-300">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= Quote ================= */}

      <section className="bg-amber-50 py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <UtensilsCrossed className="mx-auto h-16 w-16 text-amber-700" />

          <blockquote className="mt-10 text-3xl font-bold leading-relaxed text-stone-900 md:text-5xl">
            "When a recipe is forgotten,
            <br />
            a part of our history disappears."
          </blockquote>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            Taste Of Traditions exists so that the flavors, memories,
            and stories of Indian kitchens continue to inspire
            generations to come.
          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">

        <div className="mx-auto max-w-4xl px-6">

          <Globe2 className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-bold">
            Help Preserve
            <br />
            India's Living Food Heritage
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
            Share your grandmother's recipe.
            <br />
            Document your family's traditions.
            <br />
            Keep India's timeless flavors alive for generations.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/recipes"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
            >
              Explore Recipes
            </Link>

            <Link
              href="/share-story"
              className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Share Your Tradition
            </Link>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm font-medium uppercase tracking-widest text-stone-800">

            <div className="flex items-center gap-2">
              <ChefHat size={18} />
              Homemade Recipes
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              Timeless Traditions
            </div>

            <div className="flex items-center gap-2">
              <Leaf size={18} />
              Authentic Spices
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}