import Link from "next/link";
import { Heart, Users, HandHeart, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Humanity | The Living Legacy",
  description:
    "Humanity is the heart of The Living Legacy, inspiring compassion, community, and meaningful action.",
};

export default function HumanityPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 py-28 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-amber-300">
            Humanity
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Every Act of Kindness
            <br />
            Creates Hope
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Humanity is where compassion becomes action. Together we preserve
            dignity, strengthen communities, and create opportunities for a
            better tomorrow.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/get-involved/become-a-volunteer"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400 transition"
            >
              Become a Volunteer
            </Link>

            <Link
              href="/get-involved/donate-a-meal"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition"
            >
              Donate a Meal
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Heart,
            title: "Compassion",
            text: "Helping people with empathy, respect, and dignity."
          },
          {
            icon: Users,
            title: "Community",
            text: "Building stronger communities through collective action."
          },
          {
            icon: HandHeart,
            title: "Impact",
            text: "Every contribution creates lasting positive change."
          }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                <Icon className="h-8 w-8 text-amber-700" />
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-amber-500 py-24 text-center text-black">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-bold">
            Together We Can Make a Difference
          </h2>

          <p className="mt-8 text-lg leading-8">
            Every story shared, every meal donated, and every volunteer who
            joins our mission helps build a more compassionate world.
          </p>

          <Link
            href="/get-involved"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white hover:bg-stone-800 transition"
          >
            Join the Movement
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
