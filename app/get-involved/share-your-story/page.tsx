import Link from "next/link";
import { Heart, BookOpen, Camera, Send } from "lucide-react";

export const metadata = {
  title: "Share Your Story | The Living Legacy",
  description:
    "Share your story, family traditions, recipes, photographs, or acts of kindness with The Living Legacy.",
};

export default function ShareYourStoryPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-amber-300">
            The Living Legacy
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Share Your Story
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Every family has a story worth preserving. Whether it's a cherished
            recipe, a life lesson, a documentary idea, a photograph, or an act
            of kindness, your story can inspire generations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Family Stories",
              text: "Share memories, traditions and experiences passed down through generations.",
            },
            {
              icon: Camera,
              title: "Photos & Videos",
              text: "Preserve old photographs, cultural moments and documentary ideas.",
            },
            {
              icon: Heart,
              title: "Acts of Kindness",
              text: "Tell us how compassion changed a life and inspired your community.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[32px] bg-stone-900 p-10 text-white">
          <h2 className="text-3xl font-bold">Submit Your Story</h2>

          <p className="mt-4 max-w-2xl leading-8 text-stone-300">
            We're building a living archive of culture, humanity and hope.
            Selected stories may be featured on The Living Legacy website,
            documentaries or community initiatives.
          </p>

          <form className="mt-10 grid gap-6 md:grid-cols-2">
            <input
              className="rounded-xl border border-stone-700 bg-stone-800 p-4 outline-none"
              placeholder="Full Name"
            />
            <input
              className="rounded-xl border border-stone-700 bg-stone-800 p-4 outline-none"
              placeholder="Email Address"
              type="email"
            />
            <input
              className="rounded-xl border border-stone-700 bg-stone-800 p-4 outline-none md:col-span-2"
              placeholder="Story Title"
            />
            <textarea
              rows={8}
              className="rounded-xl border border-stone-700 bg-stone-800 p-4 outline-none md:col-span-2"
              placeholder="Share your story..."
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              <Send size={18} />
              Submit Story
            </button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold">
            Every Story Becomes Part of a Living Legacy
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Together we preserve memories, celebrate traditions, document
            humanity, and inspire hope for future generations.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-stone-900 px-8 py-4 font-semibold text-white transition hover:bg-stone-800"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
