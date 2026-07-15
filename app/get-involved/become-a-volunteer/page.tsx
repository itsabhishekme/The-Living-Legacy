import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  UtensilsCrossed,
  Globe2,
  Heart,
  Clock3,
  HandHelping,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Become a Volunteer | The Living Legacy",
  description:
    "Join The Living Legacy as a volunteer. Help preserve traditions, support communities, fight hunger, and create meaningful impact through compassion and action.",
};

const opportunities = [
  {
    title: "Food Distribution",
    icon: UtensilsCrossed,
    description:
      "Help prepare, pack, and distribute nutritious meals to individuals and families in need.",
  },
  {
    title: "Community Events",
    icon: Users,
    description:
      "Support awareness campaigns, food drives, workshops, and cultural events across communities.",
  },
  {
    title: "Storytelling",
    icon: HeartHandshake,
    description:
      "Document inspiring stories, interviews, photographs, and documentaries that create lasting impact.",
  },
  {
    title: "Digital Volunteer",
    icon: Globe2,
    description:
      "Contribute remotely through design, writing, video editing, social media, development, or research.",
  },
];

const benefits = [
  "Make a meaningful impact in someone's life.",
  "Support hunger relief initiatives.",
  "Meet passionate changemakers.",
  "Develop leadership and teamwork skills.",
  "Receive volunteer recognition.",
  "Become part of The Living Legacy community.",
];

export default function BecomeVolunteerPage() {
  return (
    <main className="bg-stone-50 text-stone-900">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-stone-950 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b,transparent_60%)] opacity-20" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-10">

          <div className="max-w-3xl">

            <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Get Involved
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Become a
              <br />
              <span className="text-amber-400">
                Volunteer
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-stone-300 md:text-xl">
              Every great movement begins with ordinary people choosing to make
              an extraordinary difference.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-400">
              Join The Living Legacy and help preserve traditions, document
              stories, support communities, and ensure that hope reaches those
              who need it most.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
              >
                Join Our Team
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/get-involved"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-amber-400 hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="uppercase tracking-[0.3em] text-amber-600 font-semibold">
              Why Volunteer
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Every Helping Hand
              <br />
              Creates Hope.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Volunteers are the heart of every meaningful movement.
              Whether you're serving meals, documenting stories,
              organizing events, or supporting communities, your time
              creates lasting impact.
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Together we can preserve India's heritage, inspire compassion,
              and ensure that kindness reaches every corner of society.
            </p>

          </div>

          <div className="rounded-[40px] bg-gradient-to-br from-amber-100 to-orange-100 p-10 shadow-xl">

            <Heart className="mb-6 h-16 w-16 text-amber-700" />

            <h3 className="text-3xl font-bold">
              Our Promise
            </h3>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              Every volunteer becomes part of a growing family dedicated
              to preserving traditions, sharing stories, and creating
              hope through meaningful action.
            </p>

          </div>

        </div>

      </section>

      {/* Volunteer Opportunities */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[0.3em] text-amber-600 font-semibold">
              Volunteer Opportunities
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Find Your Place
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {opportunities.map((item) => {
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

      {/* Benefits */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="rounded-[40px] bg-stone-900 p-12 text-white">

          <span className="uppercase tracking-[0.3em] text-amber-400">
            Volunteer Benefits
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Why Join Us?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {benefits.map((benefit) => (

              <div
                key={benefit}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-5"
              >

                <CheckCircle2 className="mt-1 h-6 w-6 text-amber-400" />

                <p className="leading-7 text-stone-300">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">

        <div className="mx-auto max-w-4xl px-6">

          <HandHelping className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-bold">
            Be the Reason
            <br />
            Someone Smiles Today.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
            Your time, kindness, and compassion can change lives.
            Join thousands of volunteers building a better tomorrow—
            one story, one meal, and one act of kindness at a time.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
            >
              Apply Now
            </Link>

            <Link
              href="/get-involved/donate-a-meal"
              className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Donate Instead
            </Link>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm font-semibold uppercase tracking-widest text-stone-900">

            <div className="flex items-center gap-2">
              <Heart size={18} />
              Compassion
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              Dedication
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              Community
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}