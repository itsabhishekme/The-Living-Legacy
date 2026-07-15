import Link from "next/link";
import { Heart, ArrowRight, Utensils, Users, HandHeart } from "lucide-react";

export const metadata = {
  title: "Donate a Meal | The Living Legacy",
  description:
    "Support One Meal • One Hope by donating meals and helping end hunger through compassion and community action.",
};

const impacts = [
  {
    icon: Utensils,
    title: "Feed Someone Today",
    text: "Your contribution helps provide fresh, nutritious meals to people experiencing food insecurity.",
  },
  {
    icon: Users,
    title: "Strengthen Communities",
    text: "Partner with volunteers, local organizations, and supporters to create lasting change.",
  },
  {
    icon: HandHeart,
    title: "Create Hope",
    text: "Every donation represents dignity, compassion, and another opportunity for a brighter tomorrow.",
  },
];

export default function DonateMealPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-orange-950 via-amber-900 to-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm tracking-[0.2em] uppercase text-amber-300">
            One Meal • One Hope
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Donate a Meal.
            <br />
            Share Hope.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Every contribution provides more than food. It offers comfort,
            dignity, and hope to someone facing hunger.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Donate Now
            </Link>

            <Link
              href="/get-involved/become-a-volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Become a Volunteer
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Why Your Donation Matters</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Hunger affects health, education, opportunity, and dignity. Together,
            we can ensure that every individual has access to at least one meal a day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-8 w-8 text-amber-700" />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-amber-500 py-24 text-center text-black">
        <Heart className="mx-auto h-16 w-16" />

        <h2 className="mt-8 text-5xl font-bold">
          One Meal Can Change
          <br />
          Someone's Tomorrow.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
          Your support is more than a donation—it is a warm meal, a smile,
          and a second chance for someone who needs it most.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
        >
          Support the Mission
        </Link>
      </section>
    </main>
  );
}
