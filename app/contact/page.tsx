import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock3,
  Heart,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | The Living Legacy",
  description:
    "Get in touch with The Living Legacy. Let's preserve traditions, document human stories, and create hope together.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@thelivinglegacy.in",
    href: "mailto:hello@thelivinglegacy.in",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.thelivinglegacy.in",
    href: "/",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "Monday – Saturday",
    href: "#",
  },
];

const collaborations = [
  "Documentary Collaborations",
  "Traditional Recipe Contributions",
  "Volunteer Opportunities",
  "NGO & CSR Partnerships",
  "Community Projects",
  "Media & Press",
];

export default function ContactPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Let's Build
            <br />
            A Living Legacy
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Whether you want to preserve family traditions, collaborate on a
            documentary, volunteer, or support our mission, we'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-8 w-8 text-amber-700" />
                </div>

                <h2 className="text-xl font-bold">{item.title}</h2>

                <p className="mt-3 break-words text-stone-600">
                  {item.value}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Contact Form + Collaborate */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-2 lg:px-10">
        {/* Form */}
        <div className="rounded-[32px] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold">
            Send Us a Message
          </h2>

          <p className="mt-3 text-stone-600">
            We'd love to hear your story or discuss a collaboration.
          </p>

          <form className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your message..."
              className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Collaboration */}
        <div className="rounded-[32px] bg-stone-900 p-8 text-white">
          <Heart className="h-14 w-14 text-amber-400" />

          <h2 className="mt-6 text-3xl font-bold">
            Work With Us
          </h2>

          <p className="mt-5 leading-8 text-stone-300">
            The Living Legacy brings together storytellers, filmmakers,
            volunteers, chefs, educators, organizations, and communities to
            preserve culture and inspire positive change.
          </p>

          <div className="mt-10 space-y-4">
            {collaborations.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
            <Phone className="mb-3 h-6 w-6 text-amber-400" />

            <h3 className="font-semibold">
              Every Conversation Matters
            </h3>

            <p className="mt-2 text-sm leading-7 text-stone-300">
              Every story shared, every partnership formed, and every act of
              kindness helps preserve traditions and create hope for future
              generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}