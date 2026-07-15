"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/utils/helpers";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
  lineClassName?: string;
  showLine?: boolean;
  showIcon?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

const widths = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  badgeClassName,
  lineClassName,
  showLine = true,
  showIcon = true,
  maxWidth = "lg",
}: SectionTitleProps) {
  const center = align === "center";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={cn(
        "relative w-full",
        widths[maxWidth],
        center ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Decorative Blur */}
      <div className="absolute inset-x-0 -top-16 -z-10 mx-auto h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" />

      {/* Badge */}

      {badge && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className={cn(
            center
              ? "flex justify-center"
              : "flex justify-start"
          )}
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 shadow-sm",
              badgeClassName
            )}
          >
            {showIcon && (
              <Sparkles
                size={14}
                className="text-amber-600"
              />
            )}

            {badge}
          </span>
        </motion.div>
      )}

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
        className={cn(
          "mt-6 font-serif font-bold leading-tight tracking-tight text-neutral-900",
          "text-4xl",
          "sm:text-5xl",
          "lg:text-6xl",
          "xl:text-7xl",
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}

      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className={cn(
            "mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl",
            !center && "mx-0",
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Description */}

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg",
            !center && "mx-0"
          )}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}

      {showLine && (
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 140,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className={cn(
            "mt-10 h-[4px] rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700",
            center ? "mx-auto" : "",
            lineClassName
          )}
        />
      )}

      {/* Bottom Decorative Dots */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.9,
        }}
        className={cn(
          "mt-6 flex items-center gap-2",
          center ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-2 w-2 rounded-full bg-amber-500" />
        <span className="h-2 w-2 rounded-full bg-orange-400" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
      </motion.div>
    </motion.div>
  );
}