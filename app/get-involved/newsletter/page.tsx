import Link from "next/link";
import { Mail, ArrowRight, Bell, BookOpen, Heart, ChefHat } from "lucide-react";

export const metadata = {
  title: "Newsletter | The Living Legacy",
  description:
    "Subscribe to The Living Legacy newsletter for inspiring stories, traditional recipes, documentaries, cultural heritage, and community updates.",
};

const benefits = [
  {
    icon: BookOpen,
    title: "Exclusive Stories",
    description:
      "Receive inspiring documentaries, human stories, and behind-the-scenes content before anyone else.",
  },
  {
    icon: ChefHat,
    title: "Traditional Recipes",
    description:
      "Discover authentic homemade recipes, regional cuisines, timeless cooking techniques, and forgotten Indian flavors.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Stay informed about volunteer opportunities, hunger-relief initiatives, and ways your support is creating meaningful change.",
  },
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 py-28 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20">
            <Mail className="h-10 w-10 text-amber-400" />
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Stay Connected
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Join The Living Legacy newsletter and receive inspiring stories,
            authentic recipes, documentaries, cultural insights, and updates
            about our mission to preserve traditions and create hope through
            kindness.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="#subscribe"
              className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Subscribe Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-amber-600">
            Why Subscribe
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Inspiration Delivered to Your Inbox
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-8 w-8 text-amber-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-stone-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Subscribe */}
      <section
        id="subscribe"
        className="mx-auto max-w-4xl px-6 pb-24"
      >
        <div className="rounded-[40px] bg-white p-10 shadow-xl">
          <div className="text-center">
            <Bell className="mx-auto h-14 w-14 text-amber-600" />

            <h2 className="mt-6 text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Receive inspiring stories, traditional recipes, documentaries,
              volunteer opportunities, and updates about The Living Legacy.
            </p>
          </div>

          <form className="mx-auto mt-12 max-w-2xl space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-6 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center text-black">
          <h2 className="text-5xl font-bold">
            More Than Recipes.
            <br />
            A Living Legacy.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
            Every recipe carries generations of memories.
            <br />
            Every documentary preserves voices that deserve to be heard.
            <br />
            Every act of kindness creates hope.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
            >
              Back to Home
            </Link>

            <Link
              href="/get-involved"
              className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}