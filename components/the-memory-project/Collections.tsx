"use client";

import {
  Archive,
  Camera,
  FileText,
  BookOpen,
  Mic,
  HeartHandshake,
} from "lucide-react";

const collections = [
  {
    icon: Camera,
    title: "Family Photographs",
    description:
      "Preserve treasured photographs that capture generations, celebrations, traditions, and everyday moments before they fade away.",
  },
  {
    icon: Mic,
    title: "Oral Histories",
    description:
      "Record the voices, experiences, and wisdom of parents, grandparents, elders, and community members for future generations.",
  },
  {
    icon: FileText,
    title: "Letters & Journals",
    description:
      "Protect handwritten letters, diaries, recipes, journals, and personal notes that tell meaningful stories of life.",
  },
  {
    icon: BookOpen,
    title: "Cultural Traditions",
    description:
      "Document festivals, rituals, local customs, folklore, languages, and practices that shape our collective identity.",
  },
  {
    icon: HeartHandshake,
    title: "Acts of Kindness",
    description:
      "Celebrate inspiring stories of compassion, resilience, generosity, and humanity that deserve to be remembered.",
  },
  {
    icon: Archive,
    title: "Digital Legacy",
    description:
      "Create a secure living archive where memories, stories, photographs, videos, and historical records can live on for generations.",
  },
];

export default function Collections() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
            Living Archive
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            What We Preserve
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every photograph, every voice, every handwritten letter, and every
            forgotten tradition carries a piece of human history. The Memory
            Project safeguards these priceless moments so they continue to
            inspire future generations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-300">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 font-semibold text-amber-600 transition-colors group-hover:text-amber-700 dark:text-amber-400">
                    Preserve Forever
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-center text-white shadow-xl">
          <Archive className="mx-auto h-14 w-14" />

          <h3 className="mt-6 text-3xl font-bold">
            Every Memory Matters
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
            History is not only written in books—it lives in family albums,
            conversations, handwritten notes, recipes, traditions, and everyday
            moments. By preserving these memories today, we leave a meaningful
            legacy for tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}