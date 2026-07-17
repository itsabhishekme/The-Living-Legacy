"use client";

import { Heart, BookOpen, Archive, Globe2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Every Life Matters",
    description:
      "Every individual carries experiences, wisdom, and memories worth preserving. No story is too small to become part of our shared human legacy.",
  },
  {
    icon: BookOpen,
    title: "Preserve Living History",
    description:
      "We document personal journeys, oral traditions, family histories, handwritten letters, and everyday moments before they disappear with time.",
  },
  {
    icon: Archive,
    title: "Create a Living Archive",
    description:
      "The Memory Project builds a growing digital archive that connects generations through authentic stories, photographs, voices, and cultural heritage.",
  },
  {
    icon: Globe2,
    title: "Inspire Future Generations",
    description:
      "By safeguarding memories today, we leave future generations a deeper understanding of identity, compassion, resilience, and humanity.",
  },
];

export default function Mission() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Preserving Humanity,
            <span className="block text-amber-600 dark:text-amber-400">
              One Memory at a Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every family photograph, handwritten letter, childhood memory,
            traditional practice, and life lesson tells a story that deserves
            to live beyond a single lifetime. The Memory Project exists to
            preserve these invaluable moments so they continue to inspire,
            educate, and connect generations around the world.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-10 shadow-lg dark:border-amber-500/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="text-2xl font-semibold leading-relaxed text-slate-900 dark:text-white md:text-3xl">
              “Memories are more than moments from the past—they are the roots
              of our identity, the wisdom of our ancestors, and the legacy we
              leave for those yet to come.”
            </p>

            <footer className="mt-8 text-base font-medium text-amber-600 dark:text-amber-400">
              — The Memory Project
            </footer>
          </blockquote>
        </div>

        {/* Core Values */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="inline-flex rounded-2xl bg-amber-100 p-4 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision */}
        <div className="mt-24 rounded-3xl bg-slate-900 px-8 py-14 text-center text-white dark:bg-slate-950">
          <h3 className="text-3xl font-bold">
            Our Vision for the Future
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            We envision a world where no meaningful story is forgotten. A world
            where children can hear the voices of their grandparents, where
            communities preserve their traditions, and where future generations
            inherit not only history—but humanity itself.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-4xl font-bold text-amber-400">∞</h4>
              <p className="mt-2 text-slate-300">
                Stories Preserved Forever
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-amber-400">100+</h4>
              <p className="mt-2 text-slate-300">
                Cultures Worth Celebrating
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-amber-400">1 Legacy</h4>
              <p className="mt-2 text-slate-300">
                Shared by Humanity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}