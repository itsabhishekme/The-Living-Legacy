"use client";

import {
  Camera,
  FileText,
  Mic,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Collect",
    description:
      "Gather treasured photographs, handwritten letters, family heirlooms, recipes, and memories that deserve to be preserved.",
  },
  {
    icon: Mic,
    title: "Record",
    description:
      "Capture personal stories, oral histories, interviews, and life experiences through audio, video, or written narratives.",
  },
  {
    icon: FileText,
    title: "Preserve",
    description:
      "Organize and archive every story with care, ensuring future generations can discover and learn from our shared heritage.",
  },
  {
    icon: HeartHandshake,
    title: "Share",
    description:
      "Inspire empathy, strengthen communities, and connect generations by sharing authentic human stories with the world.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            How The Memory Project Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every memory has the power to outlive a lifetime. Through a simple,
            thoughtful process, we transform personal moments into a lasting
            legacy for families, communities, and future generations.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative">
                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-full top-12 hidden w-8 translate-x-2 lg:block">
                    <ArrowRight className="h-6 w-6 text-amber-500" />
                  </div>
                )}

                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-amber-500/40">
                  {/* Step Number */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:scale-110 dark:bg-amber-500/10 dark:text-amber-300">
                      <Icon className="h-8 w-8" />
                    </div>

                    <span className="text-5xl font-black text-slate-100 dark:text-slate-800">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-8 py-16 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold md:text-4xl">
            Every Story Matters.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            A photograph fades. A voice grows silent. A handwritten letter
            becomes fragile. But when memories are preserved, they continue to
            inspire, teach, and connect generations long after we're gone.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full bg-white/15 px-5 py-2 backdrop-blur">
              📸 Photos
            </div>

            <div className="rounded-full bg-white/15 px-5 py-2 backdrop-blur">
              🎙️ Voices
            </div>

            <div className="rounded-full bg-white/15 px-5 py-2 backdrop-blur">
              ✍️ Letters
            </div>

            <div className="rounded-full bg-white/15 px-5 py-2 backdrop-blur">
              ❤️ Memories
            </div>

            <div className="rounded-full bg-white/15 px-5 py-2 backdrop-blur">
              🌍 Legacy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}