"use client";

import { HeartHandshake, HandPlatter, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const initiatives = [
  {
    icon: HeartHandshake,
    title: "Community Support",
    description:
      "Partnering with volunteers, local organizations, and compassionate individuals to create meaningful impact where it matters most.",
  },
  {
    icon: HandPlatter,
    title: "Fight Against Hunger",
    description:
      "Promoting food-sharing initiatives, community kitchens, and awareness campaigns so every meal has the power to nourish another life.",
  },
  {
    icon: Users,
    title: "Volunteer Together",
    description:
      "Encouraging people from every background to contribute their time, skills, and kindness to strengthen communities.",
  },
  {
    icon: Sparkles,
    title: "Inspire Change",
    description:
      "Through documentaries and authentic stories, we inspire empathy, compassion, and action that creates lasting social impact.",
  },
];

export default function Humanity() {
  return (
    <section
      id="humanity"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-24"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Humanity First
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Every Great Change Begins with
            <span className="block text-orange-600">
              One Small Act of Kindness
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Living Legacy believes stories can transform lives. Through
            documentaries, awareness campaigns, volunteer programs, and
            community partnerships, we strive to build a future where empathy
            becomes action and no one has to face the pain of an empty plate.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 transition group-hover:bg-orange-600">
                  <Icon className="h-8 w-8 text-orange-600 transition group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[2rem] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            "Kindness is remembered long after words are forgotten."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Every meal shared, every hand extended, every story documented, and
            every voice amplified becomes part of a living legacy that inspires
            generations to care, connect, and create meaningful change.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h4 className="text-5xl font-bold text-orange-600">100+</h4>
            <p className="mt-3 text-gray-600">Stories to Preserve</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h4 className="text-5xl font-bold text-orange-600">50+</h4>
            <p className="mt-3 text-gray-600">Traditional Recipes</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h4 className="text-5xl font-bold text-orange-600">∞</h4>
            <p className="mt-3 text-gray-600">Acts of Kindness</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h4 className="text-5xl font-bold text-orange-600">1</h4>
            <p className="mt-3 text-gray-600">
              Shared Mission for Humanity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}