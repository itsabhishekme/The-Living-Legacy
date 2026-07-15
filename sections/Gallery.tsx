"use client";

import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  UtensilsCrossed,
  Camera,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: UtensilsCrossed,
    title: "Preserving Culinary Heritage",
    description:
      "From handwritten family recipes to forgotten regional delicacies, we document authentic Indian food traditions before they disappear.",
  },
  {
    icon: Camera,
    title: "Meaningful Storytelling",
    description:
      "Every documentary, interview, and visual narrative celebrates real people, untold histories, and the beauty hidden within everyday life.",
  },
  {
    icon: Heart,
    title: "Humanity First",
    description:
      "We believe stories can inspire compassion, strengthen communities, and encourage meaningful action that creates lasting social impact.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F5EF] py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800">
            <Sparkles className="h-4 w-4" />
            About The Living Legacy
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            More Than Recipes.
            <br />
            More Than Stories.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600 md:text-xl">
            <strong>The Living Legacy</strong> is a celebration of culture,
            humanity, and timeless traditions. We preserve authentic recipes,
            document inspiring human stories, and encourage acts of kindness
            that strengthen communities for generations to come.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-amber-100 bg-white p-10 shadow-xl">
              <div className="mb-6 inline-flex rounded-2xl bg-amber-100 p-4">
                <BookOpen className="h-9 w-9 text-amber-700" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                A Living Archive of India
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Across villages, towns, kitchens, and communities lie thousands
                of traditions that deserve to be remembered. Every spice blend,
                every forgotten recipe, every handmade craft, and every life
                story reflects generations of wisdom.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our mission is to capture these moments through documentaries,
                photography, writing, and authentic storytelling so future
                generations inherit not only information—but identity.
              </p>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                <p className="text-lg leading-8">
                  "When traditions are documented, cultures remain alive.
                  When stories are shared, humanity grows stronger."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition-all duration-300 group-hover:bg-amber-500">
                      <Icon className="h-8 w-8 text-amber-700 group-hover:text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-8 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-[#7C3A16] to-[#C96A1B] p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Every Great Legacy Begins
            <br />
            With One Small Story.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-orange-100">
            Whether it is a grandmother's cherished recipe, a forgotten village
            tradition, or an inspiring act of kindness, every story deserves to
            be preserved. Together, we can protect our heritage while inspiring
            a more compassionate future.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#7C3A16] transition hover:scale-105 hover:shadow-xl">
            Explore Our Journey
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}