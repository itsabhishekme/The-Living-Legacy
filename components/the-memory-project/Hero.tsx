"use client";

import Link from "next/link";
import { ArrowRight, Archive, BookOpen, Heart, Images } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24 lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content */}
        <div className="max-w-3xl flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            <Archive className="h-4 w-4" />
            Initiative • The Living Legacy
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
            The Memory
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Project
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every family carries stories. Every village holds memories. Every
            generation leaves behind wisdom.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <strong>The Memory Project</strong> is a living archive dedicated to
            preserving personal memories, family histories, photographs,
            handwritten letters, oral traditions, and untold human stories
            before they disappear forever.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              Share Your Memory
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/stories"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Explore Stories
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-bold text-amber-600">1000+</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Stories Preserved
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-bold text-amber-600">500+</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Family Memories
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-bold text-amber-600">28</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Indian States
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-3xl font-bold text-amber-600">∞</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Legacy for Future
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-16 flex flex-1 items-center justify-center lg:mt-0">
          <div className="grid w-full max-w-xl gap-6">
            <div className="rounded-3xl border bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <Archive className="mb-5 h-12 w-12 text-amber-600" />
              <h2 className="text-2xl font-bold">
                Building a Living Archive
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                We preserve memories that rarely appear in history books—
                everyday lives, handwritten letters, old photographs,
                grandparents' wisdom, cultural traditions, and personal
                experiences that define who we are.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <BookOpen className="mb-4 h-8 w-8 text-orange-500" />
                <h3 className="font-semibold">Life Stories</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Documenting real experiences across generations.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <Images className="mb-4 h-8 w-8 text-orange-500" />
                <h3 className="font-semibold">Photo Archive</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Preserving treasured photographs and family albums.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <Heart className="mb-4 h-8 w-8 text-orange-500" />
                <h3 className="font-semibold">Family Heritage</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Celebrating values, traditions, and generational wisdom.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <Archive className="mb-4 h-8 w-8 text-orange-500" />
                <h3 className="font-semibold">Digital Legacy</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Creating a permanent archive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}