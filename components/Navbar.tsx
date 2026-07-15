"use client";

import Link from "next/link";
import { Menu, X, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Heritage", href: "/heritage" },
  { name: "Stories", href: "/stories" },
  { name: "Humanity", href: "/humanity" },
  { name: "Mission", href: "/mission" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-white">
            <PlayCircle size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-stone-900">
              The Living Legacy
            </h1>

            <p className="text-xs tracking-[0.25em] uppercase text-stone-500">
              Stories • Traditions • Humanity
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-amber-700"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://youtube.com"
            target="_blank"
            className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Watch on YouTube
          </a>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-stone-700 transition hover:text-amber-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://youtube.com"
              target="_blank"
              className="mt-4 rounded-full bg-amber-700 py-3 text-center font-semibold text-white"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}