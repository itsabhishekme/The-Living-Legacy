import Link from "next/link";
import { Handshake, Building2, HeartHandshake, Globe2, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Partner With Us | The Living Legacy",
  description:
    "Collaborate with The Living Legacy to preserve culture, inspire compassion, and create lasting social impact through meaningful partnerships.",
};

const benefits = [
  "CSR & Corporate Partnerships",
  "NGO & Community Collaborations",
  "Educational Institutions",
  "Media & Documentary Projects",
  "Food & Nutrition Initiatives",
  "Volunteer & Awareness Campaigns",
];

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Partnership Program
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Partner
            <br />
            <span className="text-amber-400">With Us</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Together we can preserve traditions, document meaningful stories,
            and build a future where compassion creates lasting change.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Become a Partner
            </Link>

            <Link
              href="/get-involved"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Explore Initiatives
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Corporate",
              text: "Support CSR initiatives through education, food security, culture, and community development.",
            },
            {
              icon: HeartHandshake,
              title: "NGOs",
              text: "Work together on awareness campaigns, volunteer programs, and humanitarian initiatives.",
            },
            {
              icon: Globe2,
              title: "Communities",
              text: "Preserve local traditions and strengthen communities through storytelling and collaboration.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-8 w-8 text-amber-700" />
                </div>

                <h2 className="text-2xl font-bold">{item.title}</h2>

                <p className="mt-4 leading-7 text-stone-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[36px] bg-stone-900 p-10 text-white">
            <div className="flex items-center gap-3">
              <Handshake className="h-10 w-10 text-amber-400" />
              <h2 className="text-4xl font-bold">Why Partner With Us?</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-amber-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg leading-8 text-stone-300">
              Whether you're a company, nonprofit, educator, creator, or
              community leader, your partnership helps preserve India's living
              heritage, amplify untold stories, and support initiatives that
              create hope through action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-black">
          <HeartHandshake className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-bold">
            Let's Build Something Meaningful
          </h2>

          <p className="mt-6 text-lg leading-8">
            Every partnership becomes part of a living legacy—preserving
            traditions, empowering communities, and inspiring compassion.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
