"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  HeartHandshake,
  Camera,
  Film,
  ArrowRight,
} from "lucide-react";

const stories = [
  {
    icon: Film,
    title: "Documentary Films",
    description:
      "Thought-provoking documentaries exploring identity, culture, resilience, heritage, and untold human journeys from across India.",
  },
  {
    icon: Camera,
    title: "Real Human Stories",
    description:
      "Authentic voices, inspiring lives, and meaningful conversations that celebrate courage, hope, compassion, and community.",
  },
  {
    icon: Clapperboard,
    title: "Visual Storytelling",
    description:
      "Cinematic narratives crafted through beautiful visuals, immersive sound, and emotional storytelling that leaves a lasting impact.",
  },
  {
    icon: HeartHandshake,
    title: "Stories That Create Change",
    description:
      "Every film encourages empathy, inspires action, and reminds us that even one small act of kindness can transform someone's life.",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      className="bg-white py-24 px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold tracking-wider uppercase text-amber-700">
            Documentary Storytelling
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Every Story Deserves
            <br />
            <span className="text-amber-700">To Be Remembered.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At <strong>The Living Legacy</strong>, storytelling is more than
            filmmaking. It is about preserving voices, documenting humanity,
            celebrating culture, and inspiring meaningful change through every
            frame.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stories.map((story, index) => {
            const Icon = story.icon;

            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {story.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-700 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 px-8 py-20 text-center text-white shadow-2xl"
        >
          <h3 className="text-4xl font-black leading-tight md:text-5xl">
            Stories Have The Power
            <br />
            To Change The World.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
            Every documentary we create is a bridge between generations,
            cultures, and communities. Through authentic storytelling, we hope
            to preserve forgotten histories, inspire compassion, and encourage
            people to become part of something greater than themselves.
          </p>

          <div className="mt-12">
            <blockquote className="text-2xl italic font-medium md:text-3xl">
              “When a story is remembered, a legacy lives forever.”
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}