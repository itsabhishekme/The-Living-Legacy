import Link from "next/link";
import { Heart, Users, HandHeart, ArrowRight, Globe2, Lightbulb, Globe, BookOpen, Camera, ChefHat, UtensilsCrossed, Sparkles, Leaf } from "lucide-react";

export const metadata = {
  title: "Humanity | The Living Legacy",
  description:
    "Humanity is the heart of The Living Legacy, inspiring compassion, community, and meaningful action.",
};

export default function HumanityPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-amber-900 to-orange-900 py-28 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-amber-300">
            Humanity
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Every Act of Kindness
            <br />
            Creates Hope
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Humanity is where compassion becomes action. Together we preserve
            dignity, strengthen communities, and create opportunities for a
            better tomorrow.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/get-involved/become-a-volunteer"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400 transition"
            >
              Become a Volunteer
            </Link>

            <Link
              href="/get-involved/donate-a-meal"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition"
            >
              Donate a Meal
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Heart,
            title: "Compassion",
            text: "Every meaningful change begins with compassion. We believe that empathy, kindness, and respect have the power to restore dignity, inspire hope, and transform lives—one person, one meal, and one story at a time.",
          },
          {
            icon: Users,
            title: "Community",
            text: "Real impact happens when communities come together. By connecting volunteers, families, organizations, storytellers, and local leaders, we create a network of people committed to preserving traditions and supporting one another.",
          },
          {
            icon: HandHeart,
            title: "Impact",
            text: "Every contribution—whether sharing a story, preserving a recipe, donating a meal, volunteering your time, or inspiring someone else—creates a ripple effect that reaches far beyond a single moment.",
          },
          {
            icon: Globe,
            title: "Humanity",
            text: "Humanity has no boundaries. We celebrate diversity, embrace different cultures, and believe every individual deserves dignity, opportunity, compassion, and a place where their voice is valued.",
          },
          {
            icon: BookOpen,
            title: "Living Heritage",
            text: "Recipes, traditions, languages, customs, and memories are living treasures. We document and preserve them so future generations can continue learning from the wisdom of those who came before us.",
          },
          {
            icon: Camera,
            title: "Storytelling",
            text: "Every documentary, photograph, and conversation captures a moment that might otherwise be forgotten. Through authentic storytelling, we preserve voices, inspire empathy, and encourage meaningful action.",
          },
          {
            icon: ChefHat,
            title: "Food Heritage",
            text: "Food is more than nourishment—it's history, identity, and culture. We revive forgotten regional recipes, traditional cooking techniques, homemade spice blends, and family kitchens that have shaped generations.",
          },
          {
            icon: UtensilsCrossed,
            title: "Zero Hunger",
            text: "No one should experience the pain of an empty plate. Through One Meal • One Hope, we work toward a future where every individual has access to at least one nutritious meal every day.",
          },
          {
            icon: Sparkles,
            title: "Hope",
            text: "Hope grows through small acts of kindness. Every volunteer, every donation, every shared meal, and every preserved story reminds us that positive change starts with one simple action.",
          },
          {
            icon: Leaf,
            title: "Sustainability",
            text: "We encourage sustainable cooking, support local farmers and artisans, reduce food waste, and promote practices that protect our cultural and natural heritage for generations to come.",
          },
          {
            icon: Lightbulb,
            title: "Education",
            text: "Knowledge should never disappear. We educate communities through documentaries, workshops, cultural archives, recipes, and storytelling that inspire learning, curiosity, and lifelong appreciation of heritage.",
          },
          {
            icon: Globe2,
            title: "The Living Legacy",
            text: "More Than Recipes. A Living Legacy. Our mission unites food, culture, documentaries, humanity, and social impact under one purpose: preserving the past, empowering the present, and inspiring a better future.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                <Icon className="h-8 w-8 text-amber-700" />
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-amber-500 py-24 text-center text-black">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-bold">
            Together We Can Make a Difference
          </h2>

          <p className="mt-8 text-lg leading-8">
            Every story shared, every meal donated, and every volunteer who
            joins our mission helps build a more compassionate world.
          </p>

          <Link
            href="/get-involved"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white hover:bg-stone-800 transition"
          >
            Join the Movement
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
