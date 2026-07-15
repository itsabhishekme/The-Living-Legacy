import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Timeless Tadka | Traditional Indian Recipes",
  description:
    "Timeless Tadka brings emotional homemade recipes, authentic spices, regional cuisines, and timeless Indian traditions back to life—one recipe at a time.",
};

const featuredRecipes = [
  {
    title: "Dal Tadka",
    region: "North India",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Masala Dosa",
    region: "South India",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sarson Ka Saag",
    region: "Punjab",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop",
  },
];

const traditions = [
  {
    icon: "🌾",
    title: "Traditional Recipes",
    description:
      "Authentic recipes passed down through generations, preserving India's culinary heritage.",
  },
  {
    icon: "🧂",
    title: "Authentic Spices",
    description:
      "Discover the flavors, aromas, and stories behind India's timeless spice traditions.",
  },
  {
    icon: "🍛",
    title: "Regional Cuisines",
    description:
      "Celebrate the unique tastes and cultural richness of every Indian region.",
  },
  {
    icon: "❤️",
    title: "Homemade with Love",
    description:
      "Every recipe reflects warmth, memories, family, and the joy of sharing meals together.",
  },
];

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Festivals",
  "Street Food",
  "Traditional Sweets",
  "Healthy Recipes",
  "Village Cooking",
];

export default function TimelessTadkaPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Preserving India's Culinary Heritage
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">
              Timeless
              <br />
              <span className="text-orange-600">Tadka</span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-700">
              Bringing emotional homemade recipes, authentic spices, regional
              cuisines, and timeless Indian traditions back to life—one recipe
              at a time.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/recipes"
                className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Explore Recipes
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-orange-300 bg-white px-8 py-4 font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop"
              alt="Traditional Indian Food"
              width={1200}
              height={900}
              className="rounded-3xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Featured Recipes</h2>

          <p className="mt-4 text-lg text-gray-600">
            Discover India's most cherished homemade recipes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={700}
                height={500}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  {recipe.region}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{recipe.title}</h3>

                <Link
                  href="/recipes"
                  className="mt-6 inline-flex font-semibold text-orange-600 hover:text-orange-700"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traditions */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Celebrating Timeless Traditions
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Every recipe carries a story, every spice carries a memory.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {traditions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-8"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Explore by Category</h2>

            <p className="mt-5 text-xl text-orange-100">
              Discover recipes for every occasion and every tradition.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-5xl font-black leading-tight">
          "Food is not just nourishment.
          <br />
          It is memory,
          <br />
          tradition,
          <br />
          and love served on every plate."
        </h2>
      </section>

      {/* CTA */}
      <section className="bg-orange-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black">
            Bring Tradition Back to Every Kitchen
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-orange-100">
            Join Timeless Tadka in preserving India's rich culinary heritage.
            Discover forgotten recipes, celebrate authentic flavors, and keep
            family traditions alive—one recipe at a time.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/recipes"
              className="rounded-xl bg-white px-8 py-4 font-bold text-orange-700 transition hover:bg-orange-100"
            >
              Explore Recipes
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-orange-700"
            >
              Share Your Family Recipe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}