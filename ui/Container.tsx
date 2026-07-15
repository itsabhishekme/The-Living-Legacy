import { JSX, ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Component>
  );
}