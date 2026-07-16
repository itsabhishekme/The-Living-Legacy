import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, ScrollText, Globe2, Sparkles, Leaf, TreePine, UtensilsCrossed, ChefHat, Camera, Film, HeartHandshake, HandHeart, Users, Mountain, Music4 } from "lucide-react";

export const metadata = {
  title: "Heritage | The Living Legacy",
  description:
    "Discover India's living heritage through culture, traditions, food, craftsmanship, and stories.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Cultural Traditions",
    description:
      "Celebrating India's diverse festivals, customs, rituals, folklore, family values, and spiritual practices that have been lovingly passed from one generation to another, preserving the identity of communities across the country.",
  },
  {
    icon: ScrollText,
    title: "Oral Histories",
    description:
      "Documenting authentic human experiences, personal memories, family narratives, forgotten legends, and community wisdom before they disappear, ensuring that every voice becomes a permanent part of our collective history.",
  },
  {
    icon: Leaf,
    title: "Food Heritage",
    description:
      "Protecting authentic homemade recipes, regional cuisines, traditional cooking techniques, handmade spice blends, seasonal ingredients, and culinary traditions that define India's rich and diverse food culture.",
  },
  {
    icon: Landmark,
    title: "Living Legacy",
    description:
      "Connecting generations through meaningful stories, heritage, traditions, and shared experiences that continue to inspire identity, belonging, and cultural continuity in a rapidly changing world.",
  },
  {
    icon: UtensilsCrossed,
    title: "Traditional Recipes",
    description:
      "Reviving forgotten family recipes, village delicacies, festive dishes, and regional specialties that carry generations of memories, emotions, and authentic flavors from Indian kitchens.",
  },
  {
    icon: ChefHat,
    title: "Authentic Cooking",
    description:
      "Preserving traditional cooking methods including clay-pot cooking, wood-fired kitchens, slow cooking, hand-ground spices, and techniques that have shaped Indian cuisine for centuries.",
  },
  {
    icon: Film,
    title: "Documentary Storytelling",
    description:
      "Creating cinematic documentaries that capture extraordinary human journeys, untold stories, cultural heritage, social impact, and the resilience of communities across India.",
  },
  {
    icon: Camera,
    title: "Visual Archive",
    description:
      "Building a timeless digital collection of photographs, films, interviews, traditions, festivals, recipes, and cultural moments for future generations to explore and learn from.",
  },
  {
    icon: HeartHandshake,
    title: "Community Impact",
    description:
      "Empowering individuals through compassion, volunteerism, education, collaboration, and community-driven initiatives that encourage meaningful social change and collective responsibility.",
  },
  {
    icon: HandHeart,
    title: "One Meal • One Hope",
    description:
      "Supporting hunger relief through food drives, community kitchens, volunteer programs, and partnerships that ensure every individual has access to at least one nutritious meal every day.",
  },
  {
    icon: Users,
    title: "People & Communities",
    description:
      "Celebrating local communities, indigenous cultures, artisans, farmers, home cooks, storytellers, and changemakers whose knowledge and traditions form the foundation of India's living heritage.",
  },
  {
    icon: Globe2,
    title: "Heritage Preservation",
    description:
      "Using technology, storytelling, education, and creative media to preserve India's tangible and intangible heritage while making it accessible to audiences around the world.",
  },
  {
    icon: Sparkles,
    title: "Inspiring Future Generations",
    description:
      "Encouraging young people to embrace their roots, preserve family traditions, appreciate cultural diversity, and become responsible custodians of India's living legacy.",
  },
  {
    icon: Mountain,
    title: "Regional Diversity",
    description:
      "Exploring the unique traditions, languages, architecture, food, crafts, music, and lifestyles that make every region of India culturally distinct and historically significant.",
  },
  {
    icon: Music4,
    title: "Arts & Folk Culture",
    description:
      "Preserving folk music, dance, storytelling, theatre, traditional craftsmanship, and artistic expressions that have enriched Indian civilization for centuries.",
  },
  {
    icon: TreePine,
    title: "Nature & Sustainability",
    description:
      "Promoting sustainable living inspired by traditional wisdom, seasonal agriculture, indigenous knowledge, ecological balance, and harmonious relationships between people and nature.",
  },
];

export default function HeritagePage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-amber-300">
            Heritage
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Preserving the
            <br />
            Living Heritage of India
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Heritage is more than monuments—it lives in recipes, stories,
            languages, traditions, craftsmanship, and the people who carry them
            forward every day.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/taste-of-traditions"
              className="rounded-full bg-amber-500 px-7 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Explore Traditions
            </Link>

            <Link
              href="/stories"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold hover:bg-white/10"
            >
              Read Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-600">
            Our Focus
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Protecting What Time Should Never Erase
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-700" />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-stone-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Globe2 className="mx-auto h-16 w-16 text-amber-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Every Generation Leaves
            <br />
            A Legacy Behind
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-300">
            Our mission is to preserve India's living heritage through
            documentaries, traditional recipes, cultural archives, and acts of
            compassion—ensuring the past continues to inspire the future.
          </p>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              <Sparkles size={18} />
              Discover The Living Legacy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
