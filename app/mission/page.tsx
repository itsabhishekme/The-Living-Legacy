import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Camera,
  ChefHat,
  Globe2,
  HandHeart,
  HeartHandshake,
  Leaf,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const metadata = {
  title: "Mission | The Living Legacy",
  description:
    "Our mission is to preserve culture, document authentic stories, and create hope through food, storytelling, and humanity.",
};

const pillars = [
  {
    icon: ChefHat,
    title: "Preserve Heritage",
    description:
      "Safeguarding India's authentic recipes, forgotten regional cuisines, handmade spice blends, and timeless culinary traditions before they disappear.",
  },
  {
    icon: Camera,
    title: "Document Stories",
    description:
      "Creating documentaries and authentic human stories that inspire empathy, preserve voices, and celebrate the beauty of ordinary lives.",
  },
  {
    icon: HandHeart,
    title: "Serve Humanity",
    description:
      "Supporting communities through One Meal • One Hope by encouraging compassion, volunteering, and meaningful social action.",
  },
];

const promises = [
  "Preserve India's culinary heritage for future generations.",
  "Document stories that deserve to be remembered.",
  "Celebrate culture through food, traditions, and people.",
  "Fight hunger through compassion and community action.",
  "Support volunteers and purpose-driven initiatives.",
  "Create educational content that inspires positive change.",
  "Promote sustainability and responsible storytelling.",
  "Build a global community united by kindness.",
];

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "We believe kindness has the power to transform lives and strengthen communities.",
  },
  {
    icon: BookOpen,
    title: "Legacy",
    description:
      "Every tradition, recipe, and story deserves to be preserved for future generations.",
  },
  {
    icon: Globe2,
    title: "Impact",
    description:
      "Our work aims to create meaningful change that reaches beyond borders.",
  },
];

export default function MissionPage() {
  return (
    <main className="bg-stone-50 text-stone-900">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-amber-900 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b22,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">

          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Our Mission
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            More Than Recipes.
            <br />
            <span className="text-amber-400">
              A Living Legacy.
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-stone-300 md:text-xl">
            We believe every recipe preserves a memory,
            every documentary preserves a voice,
            and every act of kindness creates hope.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/get-involved"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
            >
              Join Our Mission
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* Introduction */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="font-semibold uppercase tracking-[0.3em] text-amber-700">
              Why We Exist
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Protecting Culture.
              <br />
              Preserving Humanity.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              The Living Legacy was founded with a simple belief that traditions,
              stories, and compassion should never disappear.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Through food heritage, documentary storytelling, and community
              initiatives, we preserve the wisdom of yesterday while creating
              hope for tomorrow.
            </p>

          </div>

          <div className="rounded-[40px] bg-gradient-to-br from-amber-100 to-orange-100 p-10 shadow-xl">

            <Target className="h-16 w-16 text-amber-700" />

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              To become one of the world's most trusted platforms for preserving
              cultural heritage, documenting meaningful stories, and inspiring
              humanity through action.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Pillars */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.3em] text-amber-700 font-semibold">
              Three Pillars
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Our Foundation
            </h2>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {pillars.map((item) => {
              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                    <Icon className="h-8 w-8 text-amber-700" />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
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

      {/* Promise */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-[40px] bg-stone-900 p-12 text-white">

          <span className="uppercase tracking-[0.3em] text-amber-400">
            Our Promise
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            What We Stand For
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {promises.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-5"
              >

                <Sparkles className="mt-1 h-6 w-6 text-amber-400" />

                <p className="leading-7 text-stone-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.3em] text-amber-700 font-semibold">
              Our Values
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Principles That Guide Us
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {values.map((item) => {
              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl bg-stone-50 p-8 shadow"
                >

                  <Icon className="h-12 w-12 text-amber-700" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-stone-600">
                    {item.description}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="bg-amber-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <UtensilsCrossed className="mx-auto h-16 w-16 text-amber-700" />

          <blockquote className="mt-10 text-4xl font-bold leading-relaxed">

            "Culture lives through traditions.
            <br />
            Humanity lives through kindness.
            <br />
            Legacy lives through action."

          </blockquote>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">

        <div className="mx-auto max-w-4xl px-6">

          <Leaf className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-bold">
            Together We Can Build
            <br />
            A Living Legacy
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
            Whether you preserve a recipe,
            document a story,
            volunteer your time,
            or simply choose kindness—
            you become part of something greater.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/get-involved"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
            >
              Join Our Mission
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm font-semibold uppercase tracking-[0.3em]">

            <div className="flex items-center gap-2">
              <ChefHat size={18} />
              Heritage
            </div>

            <div className="flex items-center gap-2">
              <Camera size={18} />
              Storytelling
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              Humanity
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}