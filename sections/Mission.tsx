"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, UtensilsCrossed, Sparkles } from "lucide-react";

const values = [
  {
    icon: UtensilsCrossed,
    title: "Preserve Culinary Heritage",
    description:
      "Document authentic regional recipes, forgotten traditions, handmade spice blends, and timeless cooking techniques before they disappear forever.",
  },
  {
    icon: BookOpen,
    title: "Tell Meaningful Stories",
    description:
      "Capture real human experiences, cultures, identities, and untold journeys through documentaries that inspire understanding and empathy.",
  },
  {
    icon: Heart,
    title: "Create Social Impact",
    description:
      "Use storytelling to encourage compassion, strengthen communities, fight hunger, and remind people that even the smallest act of kindness can change a life.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#f8f5ef] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Our Mission
          </div>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            More Than Recipes.
            <br />
            More Than Stories.
            <span className="block text-amber-700">
              A Living Legacy.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We believe that every recipe carries generations of memories,
            every documentary preserves voices that deserve to be heard,
            and every act of kindness creates hope for tomorrow.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-200"
        >
          <blockquote className="text-center">
            <p className="text-2xl font-medium leading-10 text-gray-800 md:text-3xl">
              “Our mission is to preserve India's culinary heritage,
              document authentic human stories, and inspire compassion
              through meaningful storytelling—so that traditions are never
              forgotten, voices are never lost, and no one has to face the
              pain of an empty plate.”
            </p>
          </blockquote>
        </motion.div>

        {/* Values */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-amber-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-amber-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-600">
                  <Icon className="h-8 w-8 text-amber-700 transition group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Every Great Change Begins
            <br />
            With One Small Act of Kindness.
          </h3>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-amber-100">
            Whether you're preserving a family recipe, sharing a forgotten
            tradition, watching a documentary, volunteering in your community,
            or simply offering a helping hand—you become part of a legacy that
            lives beyond generations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              🍲 Preserve Heritage
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              🎥 Inspire Through Stories
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              ❤️ Build Compassion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}