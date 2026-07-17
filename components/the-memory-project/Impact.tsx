"use client";

import {
  Users,
  BookOpen,
  ImageIcon,
  Landmark,
  Globe2,
  HeartHandshake,
} from "lucide-react";

const impactStats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Preserved",
    description:
      "Personal stories, memories, and experiences documented for future generations.",
  },
  {
    icon: BookOpen,
    value: "2,500+",
    label: "Family Histories",
    description:
      "Family journeys, traditions, and legacies carefully archived.",
  },
  {
    icon: ImageIcon,
    value: "50,000+",
    label: "Photographs & Memories",
    description:
      "Old photographs, handwritten letters, journals, and treasured keepsakes digitized.",
  },
  {
    icon: Landmark,
    value: "500+",
    label: "Communities Documented",
    description:
      "Capturing the cultural identity and heritage of villages, towns, and local communities.",
  },
];

const goals = [
  {
    icon: HeartHandshake,
    title: "Preserve Human Legacy",
    description:
      "Every life has a story worth remembering. We ensure these memories continue to inspire generations.",
  },
  {
    icon: Globe2,
    title: "Create a Living Archive",
    description:
      "Building a digital collection where memories, traditions, voices, and history remain accessible forever.",
  },
];

export default function Impact() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Preserving Memories That
            <span className="block text-amber-600 dark:text-amber-400">
              Shape Humanity
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every family photograph, every handwritten letter, every life story,
            and every forgotten tradition is a priceless piece of our collective
            history. Together, we're building a living archive that future
            generations can learn from, cherish, and carry forward.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-600 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {item.label}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {goals.map((goal) => {
            const Icon = goal.icon;

            return (
              <div
                key={goal.title}
                className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {goal.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 px-8 py-16 text-center text-white shadow-2xl">
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed md:text-3xl">
            “A memory preserved today becomes a legacy that inspires tomorrow.”
          </p>

          <div className="mt-8 h-1 w-24 rounded-full bg-white/70 mx-auto" />

          <p className="mt-6 text-lg text-white/90">
            The Memory Project • A Living Archive by{" "}
            <span className="font-semibold">The Living Legacy</span>
          </p>
        </div>
      </div>
    </section>
  );
}