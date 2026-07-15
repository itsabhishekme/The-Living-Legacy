"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  CookingPot,
  Leaf,
  BookOpen,
  Flame,
  HeartHandshake,
  MapPinned,
  Sparkles,
} from "lucide-react";

const heritageItems = [
  {
    icon: ChefHat,
    title: "Authentic Family Recipes",
    description:
      "Handwritten recipes lovingly preserved and passed down through generations, carrying the true taste of home.",
  },
  {
    icon: CookingPot,
    title: "Traditional Cooking",
    description:
      "From clay pots to iron kadais, discover timeless cooking methods that celebrate patience and craftsmanship.",
  },
  {
    icon: Leaf,
    title: "Handcrafted Spice Blends",
    description:
      "Explore regional masalas, freshly ground spices, and forgotten flavors that define India's culinary identity.",
  },
  {
    icon: MapPinned,
    title: "Regional Cuisines",
    description:
      "Journey through villages, towns, and communities to preserve the unique food traditions of every region.",
  },
  {
    icon: BookOpen,
    title: "Forgotten Food Stories",
    description:
      "Every dish has a story—of festivals, family traditions, migrations, celebrations, and everyday life.",
  },
  {
    icon: Flame,
    title: "Timeless Techniques",
    description:
      "Learn age-old techniques including slow roasting, wood-fire cooking, fermentation, sun drying, and stone grinding.",
  },
];

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-[#faf7f2] py-24"
    >
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold tracking-wide text-orange-700">
            <Sparkles size={16} />
            Heritage & Tradition
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2B1F18] md:text-5xl">
            More Than Recipes.
            <br />
            <span className="text-orange-600">A Living Legacy.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every meal carries the wisdom of generations. Every ingredient tells
            a story. At <strong>The Living Legacy</strong>, we preserve India's
            authentic culinary traditions so that future generations can
            continue experiencing the true taste of culture, family, and
            belonging.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {heritageItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-600">
                  <Icon
                    size={30}
                    className="text-orange-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#2B1F18]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-5xl rounded-[32px] bg-gradient-to-r from-orange-600 to-amber-500 p-12 text-center text-white shadow-2xl"
        >
          <HeartHandshake className="mx-auto mb-6" size={48} />

          <h3 className="text-3xl font-bold md:text-4xl">
            Preserving Culture, One Recipe at a Time
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Food is more than nourishment—it is memory, identity, love, and
            heritage. By documenting authentic recipes, traditional techniques,
            regional cuisines, and the stories behind every meal, we ensure that
            India's rich culinary legacy continues to inspire generations yet to
            come.
          </p>
        </motion.div>
      </div>
    </section>
  );
}