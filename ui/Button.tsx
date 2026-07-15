"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-700 text-white hover:bg-amber-800 shadow-lg hover:shadow-xl",

  secondary:
    "bg-stone-900 text-white hover:bg-black shadow-lg hover:shadow-xl",

  outline:
    "border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white",

  ghost:
    "text-stone-800 hover:bg-stone-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  disabled = false,
  icon = false,
}: ButtonProps) {
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>

        {icon && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span>{children}</span>

      {icon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300"
        />
      )}
    </button>
  );
}