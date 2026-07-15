"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  UtensilsCrossed,
  Film,
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Preserving Culinary Heritage",
    description:
      "From forgotten village recipes to royal kitchens, we document authentic flavors, handmade spice blends, and traditional cooking methods that deserve to live on for generations.",
  },
  {
    icon: Film,
    title: "Documenting Human Stories",
    description:
      "Every documentary uncovers untold journeys, inspiring resilience, culture, identity, and the extraordinary lives hidden in everyday moments.",
  },
  {
    icon: HeartHandshake,
    title: "Creating Meaningful Impact",
    description:
      "We believe storytelling should inspire action. Through awareness, community initiatives, and acts of kindness, we strive to help build a more compassionate world.",
  },
  {
    icon: BookOpen,
    title: "Building a Living Legacy",
    description:
      "More than a platform, The Living Legacy is an archive of memories, traditions, and stories—created to preserve the past while inspiring the future.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F5EF] py-24 px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold tracking-wider text-amber-700 uppercase">
            About Us
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            More Than Recipes.
            <br />
            More Than Stories.
            <br />
            <span className="text-amber-700">A Living Legacy.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            The Living Legacy was created with a simple belief:
            <span className="font-semibold text-neutral-900">
              {" "}
              culture survives when its stories are remembered.
            </span>
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every traditional recipe carries generations of wisdom.
            Every documentary preserves voices that deserve to be heard.
            Every act of kindness creates hope for someone else's tomorrow.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-amber-200 bg-white p-10 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-neutral-900">
            Our Mission
          </h3>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We preserve authentic regional cuisines, forgotten traditions,
            handmade cooking techniques, inspiring documentaries, and real human
            experiences that shape our collective identity.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Through storytelling, filmmaking, community initiatives, and cultural
            preservation, we hope to inspire empathy, celebrate heritage, and
            encourage people to make meaningful change—one story, one meal, and
            one act of kindness at a time.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon
                    className="h-8 w-8 text-amber-700"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-neutral-900 px-8 py-16 text-center text-white"
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed md:text-4xl">
            “History lives through traditions.
            <br />
            Traditions live through stories.
            <br />
            Stories become a Living Legacy.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}