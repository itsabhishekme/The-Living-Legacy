import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Utensils,
  Users,
  HandHeart,
  Globe,
  Target,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "One Meal • One Hope | The Living Legacy",
  description:
    "One Meal • One Hope is a mission-driven initiative dedicated to ending hunger by ensuring every individual has access to at least one nutritious meal a day.",
};

const impact = [
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description:
      "Providing freshly prepared meals to individuals and families facing food insecurity.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Working with volunteers, NGOs, schools, local businesses, and communities to create lasting impact.",
  },
  {
    icon: HandHeart,
    title: "Acts of Kindness",
    description:
      "Transforming generosity into hope through food drives, donations, and volunteer initiatives.",
  },
];

const goals = [
  "Provide at least one nutritious meal every day.",
  "Reduce hunger through sustainable community programs.",
  "Support children, elderly people, and vulnerable families.",
  "Build partnerships with volunteers and organizations.",
  "Promote compassion through storytelling and awareness.",
  "Create a future where no one sleeps hungry.",
];

export default function OneMealOneHopePage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-stone-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Social Impact Initiative
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              One Meal
              <br />
              <span className="text-amber-400">One Hope</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-stone-300 md:text-xl">
              A mission-driven initiative dedicated to ending hunger by ensuring
              every individual has access to at least one nutritious meal every
              day.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-400">
              Your support is more than a donation—it is a warm meal, a moment
              of relief, renewed dignity, and a step toward a better future for
              someone in need.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/donate"
                className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
              >
                Donate Now
                <Heart size={20} />
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-amber-400 hover:bg-white/10"
              >
                Become a Volunteer
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our Purpose
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Every Meal Has the Power to Change a Life.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Hunger is more than an empty stomach—it affects education,
              health, opportunity, confidence, and dignity.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              One Meal • One Hope believes that no individual should have to
              wonder where their next meal will come from. By bringing people
              together through kindness and community action, we can create a
              future where everyone has access to nutritious food.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-10 shadow-xl">
            <Target className="mb-6 h-14 w-14 text-amber-700" />

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              To build a compassionate world where no child, family, or
              individual goes to bed hungry and every act of kindness creates
              lasting hope.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-amber-600">
              What We Do
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Turning Compassion into Action
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impact.map((item) => {
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

      {/* Goals */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[40px] bg-stone-900 p-12 text-white">
          <span className="uppercase tracking-[0.3em] text-amber-400">
            Our Goals
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Together We Can End Hunger
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {goals.map((goal) => (
              <div
                key={goal}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-5"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 text-amber-400" />

                <p className="leading-7 text-stone-300">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">
        <div className="mx-auto max-w-4xl px-6">
          <Globe className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-bold">
            Every Great Change Begins
            <br />
            With One Small Act of Kindness
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
            One meal can restore hope.
            <br />
            One volunteer can inspire a community.
            <br />
            One act of kindness can transform a life.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/donate"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
            >
              Donate a Meal
            </Link>

            <Link
              href="/volunteer"
              className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}