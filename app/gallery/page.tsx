import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    title: "Whisper With Vihaan",
    category: "Storytelling",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Timeless Tadka",
    category: "Food Heritage",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Taste Of Traditions",
    category: "Traditional Recipes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "One Meal • One Hope",
    category: "Community Impact",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Traditional Indian Spices",
    category: "Authentic Spices",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Regional Indian Cuisine",
    category: "Cuisine",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Village Cooking",
    category: "Traditional Lifestyle",
    image:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Grandmother's Kitchen",
    category: "Family Heritage",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Forgotten Recipes",
    category: "Living Legacy",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Documentary Production",
    category: "Behind The Scenes",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Human Stories",
    category: "Compassion",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Volunteer Movement",
    category: "Social Impact",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Community Kitchen",
    category: "Hope",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Indian Festivals",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b3c2c63d2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Temple Traditions",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Craft & Culture",
    category: "Artisans",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Rural India",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Children of Hope",
    category: "Future",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Stories That Matter",
    category: "Documentary",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Living Legacy",
    category: "Our Journey",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="rounded-full border border-orange-500/40 px-5 py-2 text-sm uppercase tracking-[0.35em] text-orange-300">
            The Living Legacy
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Every frame preserves a story. Every photograph carries emotion.
            Every documentary captures a legacy that deserves to live forever.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-orange-500/50"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-white/10 bg-white/5 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            "Stories fade only when they are forgotten."
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Through photography, documentaries, culture, food, fashion, and
            human experiences, The Living Legacy exists to preserve moments that
            inspire generations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-5xl font-bold">
          Become Part of the Legacy
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Every photograph tells a story worth remembering.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="/contact"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Contact Us
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-400"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}