"use client";

import {
  BookOpen,
  Camera,
  Heart,
  Landmark,
  Mic,
  ScrollText,
} from "lucide-react";

const categories = [
  {
    title: "Family Stories",
    description:
      "Preserve cherished family memories, life lessons, traditions, and unforgettable moments passed through generations.",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Oral Histories",
    description:
      "Record conversations with elders, community leaders, and everyday people before their stories are lost forever.",
    icon: Mic,
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Letters & Diaries",
    description:
      "Protect handwritten letters, journals, memoirs, and personal reflections that capture moments in time.",
    icon: ScrollText,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Photographs",
    description:
      "Archive old photographs and the meaningful stories behind every image, preserving memories beyond generations.",
    icon: Camera,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Culture & Traditions",
    description:
      "Celebrate festivals, rituals, folk customs, local practices, and cultural heritage unique to every community.",
    icon: Landmark,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Life Lessons",
    description:
      "Capture wisdom, experiences, values, and inspiring journeys that can guide future generations.",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-600",
  },
];

export default function MemoryCategories() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            Memory Archive
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            What We Preserve
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every photograph, every conversation, every handwritten letter,
            every tradition, and every life story carries a piece of humanity.
            The Memory Project exists to ensure these priceless memories live on
            for generations to come.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                    Living Archive
                  </span>

                  <div className="rounded-full bg-slate-100 p-2 transition-all duration-300 group-hover:bg-amber-500 dark:bg-slate-800">
                    <Icon className="h-5 w-5 text-slate-700 group-hover:text-white dark:text-slate-200" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            "A memory shared today becomes a legacy tomorrow."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Together, we're building a living archive of human experiences,
            preserving voices, traditions, photographs, wisdom, and stories that
            deserve to be remembered forever.
          </p>
        </div>
      </div>
    </section>
  );
}