import { JSX, ReactNode } from "react";
import { cn } from "@/utils/helpers";

export interface ContainerProps {
  children: ReactNode;

  /**
   * Additional Tailwind classes.
   */
  className?: string;

  /**
   * Render as different HTML element.
   * Example:
   * section
   * article
   * header
   * footer
   * main
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Container Size
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * Horizontal Padding
   */
  padding?: boolean;

  /**
   * Vertical Padding
   */
  vertical?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * Center Content
   */
  center?: boolean;

  /**
   * Full Height
   */
  fullHeight?: boolean;

  /**
   * Background Color
   */
  background?: string;

  /**
   * HTML ID
   */
  id?: string;
}

const MAX_WIDTH = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

const VERTICAL = {
  none: "",
  sm: "py-8",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

export default function Container({
  children,
  className = "",
  as: Component = "div",
  size = "xl",
  padding = true,
  vertical = "none",
  center = false,
  fullHeight = false,
  background = "",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative w-full",

        MAX_WIDTH[size],

        padding && "mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12",

        VERTICAL[vertical],

        center &&
          "flex flex-col items-center justify-center text-center",

        fullHeight && "min-h-screen",

        background,

        className
      )}
    >
      {children}
    </Component>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Helper Blocks                               */
/* -------------------------------------------------------------------------- */

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-24", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export function Grid({
  children,
  className,
  cols = 3,
}: GridProps) {
  const grid = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-8",
        grid[cols],
        className
      )}
    >
      {children}
    </div>
  );
}

interface FlexProps {
  children: ReactNode;
  className?: string;
  justify?:
    | "start"
    | "center"
    | "between"
    | "around"
    | "evenly";
  align?: "start" | "center" | "end";
  direction?: "row" | "col";
}

export function Flex({
  children,
  className,
  justify = "between",
  align = "center",
  direction = "row",
}: FlexProps) {
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <div
      className={cn(
        "flex gap-6",
        direction === "col" ? "flex-col" : "flex-row",
        justifyClass[justify],
        alignClass[align],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SpacerProps {
  size?: "sm" | "md" | "lg" | "xl";
}

export function Spacer({
  size = "md",
}: SpacerProps) {
  const spacing = {
    sm: "h-6",
    md: "h-12",
    lg: "h-20",
    xl: "h-32",
  };

  return <div className={spacing[size]} />;
}