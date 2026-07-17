"use client";

import { CalendarDays, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    title: "Grandmother's Kitchen",
    location: "Bihar, India",
    year: "1968",
    description:
      "A family's treasured recipes, handwritten notes, and kitchen traditions passed down through four generations.",
    image:
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80",
    href: "/stories/grandmothers-kitchen",
  },
  {
    title: "Letters from Home",
    location: "Punjab, India",
    year: "1984",
    description:
      "Preserving heartfelt letters exchanged across generations that tell stories of love, sacrifice, hope, and resilience.",
    image:
      "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=1200&q=80",
    href: "/stories/letters-from-home",
  },
  {
    title: "Voices of the Village",
    location: "Rajasthan, India",
    year: "1975",
    description:
      "Oral histories from village elders sharing forgotten traditions, festivals, folk songs, and everyday life.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    href: "/stories/voices-of-the-village",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Featured Memories
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Stories That Deserve
            <span className="text-amber-600"> To Live Forever</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every family carries stories that shape identities, preserve
            traditions, and connect generations. The Memory Project documents
            these priceless memories before they disappear.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-2xl font-bold">{story.title}</h3>

                  <div className="mt-2 flex items-center gap-4 text-sm opacity-90">
                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {story.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <CalendarDays size={15} />
                      {story.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 leading-7">
                  {story.description}
                </p>

                <Link
                  href={story.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  Read Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Every Memory Matters.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            A photograph, a handwritten letter, a family recipe, or a simple
            conversation with a grandparent can become part of a living archive
            that inspires future generations.
          </p>

          <Link
            href="/share-memory"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:scale-105"
          >
            Share Your Memory
          </Link>
        </div>
      </div>
    </section>
  );
}