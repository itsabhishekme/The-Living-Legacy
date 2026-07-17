// components/Footer.tsx

import Link from "next/link";
import {
  Camera,
  Globe,
  Mail,
  Heart,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Heritage", href: "/heritage" },
  { name: "Stories", href: "/stories" },
  { name: "Gallery", href: "/gallery" },
  { name: "Humanity", href: "/humanity" },
  { name: "Mission", href: "/mission" },
  { name: "Contact", href: "/contact" },
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
                  href="/get-involved/become-a-volunteer"
                  className="transition hover:text-amber-400"
                >
                  Become a Volunteer
                </a>
              </li>

              <li>
                <a
                  href="/get-involved/donate-a-meal"
                  className="transition hover:text-amber-400"
                >
                  Donate a Meal
                </a>
              </li>

              <li>
                <a
                  href="/get-involved/partner-with-us"
                  className="transition hover:text-amber-400"
                >
                  Partner With Us
                </a>
              </li>

              <li>
                <a
                  href="/get-involved/share-your-story"
                  className="transition hover:text-amber-400"
                >
                  Share Your Story
                </a>
              </li>

              <li>
                <a
                  href="/get-involved/newsletter"
                  className="transition hover:text-amber-400"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* ============================ Connect With Us ============================ */}
          <div className="relative overflow-hidden rounded-[32px] border border-stone-800 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 p-8 lg:col-span-4">

            {/* Background Blur */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              {/* Left */}
              <div className="max-w-3xl">

                <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                  Let's Connect
                </span>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  Every Story Begins
                  <br />
                  With a Conversation.
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
                  Whether you want to preserve your family's recipes, collaborate on a
                  documentary, become a volunteer, support our mission, or simply share
                  your story—we'd love to hear from you.

                  <br />
                  <br />

                  Together we can preserve traditions, inspire compassion, and create
                  meaningful change through storytelling, food, and humanity.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/mission"
                    className="rounded-full border border-stone-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10"
                  >
                    Join Our Mission
                  </Link>

                </div>

              </div>

              {/* Right */}
              <div className="w-full max-w-md">

                <div className="rounded-3xl border border-stone-800 bg-white/5 p-8 backdrop-blur">

                  <h4 className="mb-8 text-2xl font-semibold text-white">
                    Contact Information
                  </h4>

                  <div className="space-y-6">

                    {/* Email */}
                    <a
                      href="mailto:hello@thelivinglegacy.in"
                      className="group flex items-start gap-5 rounded-2xl border border-stone-800 p-5 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10"
                    >

                      <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-400">
                        <Mail size={22} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                          Email
                        </p>

                        <p className="mt-2 text-white transition group-hover:text-amber-400">
                          hello@thelivinglegacy.in
                        </p>

                      </div>

                    </a>

                    {/* Website */}
                    <Link
                      href="/"
                      className="group flex items-start gap-5 rounded-2xl border border-stone-800 p-5 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10"
                    >

                      <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-400">
                        <Globe size={22} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                          Website
                        </p>

                        <p className="mt-2 text-white transition group-hover:text-amber-400">
                          www.thelivinglegacy.in
                        </p>

                      </div>

                    </Link>

                    {/* Location */}
                    <div className="flex items-start gap-5 rounded-2xl border border-stone-800 p-5">

                      <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-400">
                        <MapPin size={22} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                          Based In
                        </p>

                        <p className="mt-2 text-white">
                          India
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Divider */}

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent" />

                  <h5 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                    Follow The Living Legacy
                  </h5>

                  <div className="flex flex-wrap gap-4">

                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          aria-label={social.name}
                          className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-700 bg-stone-900 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                        >
                          <Icon
                            size={22}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </Link>
                      );
                    })}

                  </div>

                </div>

              </div>

          </div>

          {/* Quote */}

          <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6">

            <p className="text-lg italic leading-8 text-stone-200">
              "More Than Recipes.
              <br />
              A Living Legacy."
            </p>

            <p className="mt-4 text-sm leading-7 text-stone-400">
              Together we preserve traditions, document human stories,
              celebrate culture, and inspire compassion—one meal,
              one story, and one act of kindness at a time.
            </p>

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
    </footer >
  );
}