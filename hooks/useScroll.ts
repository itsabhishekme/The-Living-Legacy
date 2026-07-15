"use client";

import { useEffect, useState } from "react";

interface UseScrollReturn {
  scrollY: number;
  scrollDirection: "up" | "down";
  isScrolled: boolean;
  progress: number;
}

export default function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Current scroll position
      setScrollY(currentScrollY);

      // Navbar state
      setIsScrolled(currentScrollY > 50);

      // Scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;

      // Scroll progress
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        documentHeight > 0
          ? (currentScrollY / documentHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    scrollDirection,
    isScrolled,
    progress,
  };
}