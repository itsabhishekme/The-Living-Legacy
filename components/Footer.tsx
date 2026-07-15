// components/Footer.tsx

import Link from "next/link";
import {
  Camera,
  Globe,
  Mail,
  Heart,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Heritage", href: "#heritage" },
  { name: "Stories", href: "#stories" },
  { name: "Humanity", href: "#humanity" },
  { name: "Mission", href: "#mission" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: Camera,
  },
  {
    name: "Facebook",
    href: "#",
    icon: Globe,
  },

];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              The Living Legacy
            </h2>

            <p className="mt-5 leading-7 text-stone-400">
              More Than Recipes. More Than Stories.
              <br />
              <span className="font-semibold text-amber-400">
                A Living Legacy.
              </span>
            </p>

            <p className="mt-5 text-sm leading-7">
              Preserving India's culinary heritage, documenting authentic human
              stories, and inspiring acts of kindness for generations to come.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-amber-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Initiatives */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Initiatives
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <a
                  href="/taste-of-traditions"
                  className="group block transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-medium text-white group-hover:text-amber-400">
                    🍛 Taste Of Traditions
                  </span>

                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Reviving India's Forgotten Flavors through emotional homemade
                    recipes, authentic spices, regional cuisines, and timeless Indian
                    traditions.
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="/timeless-tadka"
                  className="group block transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-medium text-white group-hover:text-amber-400">
                    🌿 Timeless Tadka
                  </span>

                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Preserving authentic regional recipes and India's culinary heritage.
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="/whisper-with-vihaan"
                  className="group block transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-medium text-white group-hover:text-amber-400">
                    🎬 Whisper with Vihaan
                  </span>

                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Documentary films and powerful human stories that inspire compassion
                    and meaningful change.
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="/one-meal-one-hope"
                  className="group block transition-all duration-300 hover:translate-x-1"
                >
                  <span className="font-medium text-white group-hover:text-amber-400">
                    ❤️ One Meal • One Hope
                  </span>

                  <p className="mt-1 text-xs leading-5 text-stone-400">
                    Ending hunger through compassion, community support, and action.
                  </p>
                </a>
              </li>

            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Get Involved
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/become-a-volunteer"
                  className="transition hover:text-amber-400"
                >
                  Become a Volunteer
                </a>
              </li>

              <li>
                <a
                  href="/donate-a-meal"
                  className="transition hover:text-amber-400"
                >
                  Donate a Meal
                </a>
              </li>

              <li>
                <a
                  href="/partner-with-us"
                  className="transition hover:text-amber-400"
                >
                  Partner With Us
                </a>
              </li>

              <li>
                <a
                  href="/share-your-story"
                  className="transition hover:text-amber-400"
                >
                  Share Your Story
                </a>
              </li>

              <li>
                <a
                  href="/newsletter"
                  className="transition hover:text-amber-400"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <a
              href="mailto:hello@thelivinglegacy.in"
              className="mb-6 flex items-center gap-3 transition hover:text-amber-400"
            >
              <Mail size={18} />
              hello@thelivinglegacy.in
            </a>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="rounded-full border border-stone-700 p-3 transition duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-stone-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              The Living Legacy
            </span>
            . All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-stone-400">
            Crafted with
            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />
            to preserve stories, traditions & humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}