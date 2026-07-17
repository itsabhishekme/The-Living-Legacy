"use client";

import Link from "next/link";
import { ArrowRight, Heart, Upload, BookOpen } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl dark:bg-orange-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-200/60 bg-white/80 p-10 text-center shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-16">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Heart className="h-10 w-10 text-amber-600 dark:text-amber-400" />
          </div>

          <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold tracking-wide text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Preserve Today • Inspire Tomorrow
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Every Memory Deserves to Live Forever
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every family has stories waiting to be told. Every photograph
            carries a forgotten moment. Every handwritten letter preserves a
            piece of history.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            <strong>The Memory Project</strong> is building a living archive of
            humanity—preserving memories, traditions, voices, and experiences
            before they disappear, so future generations can understand where
            they came from.
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <Upload className="mx-auto h-10 w-10 text-amber-600 dark:text-amber-400" />
              <h3 className="mt-4 text-lg font-bold">Share Your Memory</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Upload family photographs, letters, videos, and meaningful
                stories to preserve them forever.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <BookOpen className="mx-auto h-10 w-10 text-amber-600 dark:text-amber-400" />
              <h3 className="mt-4 text-lg font-bold">
                Build a Living Archive
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Help create a global collection of authentic human experiences
                that educate and inspire future generations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <Heart className="mx-auto h-10 w-10 text-amber-600 dark:text-amber-400" />
              <h3 className="mt-4 text-lg font-bold">
                Leave a Lasting Legacy
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Ensure your family's history, values, and memories continue to
                inspire long after today.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-xl"
            >
              Share Your Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/whisper-with-vihaan"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Explore Human Stories
            </Link>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm italic text-slate-500 dark:text-slate-400">
              "Memories are more than moments—they are the threads that connect
              generations, preserve identity, and remind us what it truly means
              to be human."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}