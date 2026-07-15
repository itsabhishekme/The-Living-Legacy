"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "gradient";

export type ButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  href?: string;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;

  rounded?: boolean;

  icon?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  loading?: boolean;

  external?: boolean;

  target?: "_blank" | "_self";

  rel?: string;

  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-amber-700
    text-white
    hover:bg-amber-800
    hover:shadow-xl
    active:bg-amber-900
    shadow-lg
  `,

  secondary: `
    bg-stone-900
    text-white
    hover:bg-black
    hover:shadow-xl
    shadow-lg
  `,

  outline: `
    border-2
    border-amber-700
    text-amber-700
    hover:bg-amber-700
    hover:text-white
  `,

  ghost: `
    text-stone-800
    hover:bg-stone-100
  `,

  danger: `
    bg-red-600
    text-white
    hover:bg-red-700
    shadow-lg
  `,

  success: `
    bg-green-600
    text-white
    hover:bg-green-700
    shadow-lg
  `,

  gradient: `
    bg-gradient-to-r
    from-amber-600
    via-orange-600
    to-red-600
    text-white
    hover:scale-105
    shadow-xl
  `,
};

const sizes: Record<ButtonSize, string> = {
  xs: `
    px-3
    py-1.5
    text-xs
  `,

  sm: `
    px-4
    py-2
    text-sm
  `,

  md: `
    px-6
    py-3
    text-base
  `,

  lg: `
    px-8
    py-4
    text-lg
  `,

  xl: `
    px-10
    py-5
    text-xl
  `,

  icon: `
    h-12
    w-12
    p-0
  `,
};

const baseStyles = `
inline-flex
items-center
justify-center
gap-2
font-semibold
tracking-wide
transition-all
duration-300
ease-in-out
select-none
focus:outline-none
focus:ring-4
focus:ring-amber-300
disabled:pointer-events-none
disabled:opacity-50
active:scale-95
group
`;

export default function Button({
  children,

  href,

  variant = "primary",

  size = "md",

  fullWidth = false,

  rounded = true,

  icon = false,

  leftIcon,

  rightIcon,

  loading = false,

  external = false,

  target,

  rel,

  className = "",

  disabled,

  ...props
}: ButtonProps) {
  const classes = [
    baseStyles,

    variants[variant],

    sizes[size],

    rounded ? "rounded-full" : "rounded-lg",

    fullWidth ? "w-full" : "",

    className,
  ].join(" ");

  const content = (
    <>
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
        />
      ) : (
        leftIcon
      )}

      <span className="flex items-center">
        {children}
      </span>

      {icon && (
        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      )}

      {!icon && rightIcon}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : target}
        rel={
          external
            ? "noopener noreferrer"
            : rel
        }
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}