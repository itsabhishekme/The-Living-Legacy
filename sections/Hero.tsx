"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Heart, BookOpen, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
              Preserving Culture Through Stories & Food
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
              More Than
              <span className="block bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Recipes.
              </span>
              A Living Legacy.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Every recipe carries generations of memories.
              Every documentary preserves voices that deserve to be heard.
              Every act of kindness creates hope.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              The Living Legacy celebrates India's culinary heritage,
              authentic storytelling, and social impact—connecting
              tradition, humanity, and the future through meaningful
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center rounded-full bg-amber-700 px-7 py-4 font-semibold text-white transition hover:bg-amber-800">
                Explore Stories
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-amber-600 hover:text-amber-700">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Trailer
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-black text-amber-700">100+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Traditional Recipes
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-amber-700">50+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Documentary Stories
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-amber-700">∞</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Lives Inspired
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-amber-700 via-orange-700 to-red-700 p-12 shadow-2xl">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5" />

              <div className="relative space-y-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <Utensils className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Culinary Heritage
                    </h3>
                    <p className="text-amber-100">
                      Authentic regional recipes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <BookOpen className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Documentary Stories
                    </h3>
                    <p className="text-amber-100">
                      Real lives. Real emotions.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <Heart className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Community Impact
                    </h3>
                    <p className="text-amber-100">
                      Fighting hunger through kindness
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                  <h2 className="text-3xl font-bold">
                    Stories That Feed the Soul.
                  </h2>

                  <p className="mt-4 leading-8 text-amber-100">
                    We preserve recipes that time almost forgot,
                    document people whose stories deserve to be heard,
                    and inspire communities to create meaningful change—
                    one meal, one story, one life at a time.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 right-8 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-sm font-semibold text-gray-500">
                Community First
              </p>

              <h3 className="mt-2 text-3xl font-black text-red-600">
                ❤️ Humanity
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}