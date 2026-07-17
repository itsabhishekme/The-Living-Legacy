"use client";

import { Heart, Upload, Camera, Mic, BookOpen, ArrowRight } from "lucide-react";

export default function ShareMemory() {
  const waysToShare = [
    {
      icon: BookOpen,
      title: "Write a Story",
      description:
        "Preserve family memories, life lessons, traditions, and unforgettable moments in your own words.",
    },
    {
      icon: Camera,
      title: "Share Photos",
      description:
        "Upload old family photographs, treasured albums, handwritten letters, and meaningful keepsakes.",
    },
    {
      icon: Mic,
      title: "Record Voices",
      description:
        "Capture the voices of parents, grandparents, elders, and community members before they become memories.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-300">
            <Heart className="mr-2 h-4 w-4" />
            Share Your Legacy
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Every Memory Deserves
            <span className="block text-amber-400">
              A Place in History
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every family carries stories that deserve to be remembered.
            Whether it's an old recipe, a childhood memory, a photograph,
            a handwritten letter, or the voice of a loved one—
            together we can preserve them for generations to come.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {waysToShare.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-yellow-500/15 p-10 lg:p-14">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold">
                Help Build India's Living Memory Archive
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Your family's history is part of our collective heritage.
                By sharing your memories today, you help create a living archive
                that inspires, educates, and connects future generations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  📖 Stories
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  📸 Photographs
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  🎙 Voice Recordings
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  💌 Letters
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  🍲 Family Recipes
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-amber-400">
                <Upload className="mr-2 h-5 w-5" />
                Share Your Memory
              </button>

              <button className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-amber-400 hover:bg-white/10">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}