"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`w-full max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          {subtitle}
        </p>
      )}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`mt-6 h-1 rounded-full bg-amber-600 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}