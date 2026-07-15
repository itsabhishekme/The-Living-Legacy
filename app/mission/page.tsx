import Link from "next/link";

export const metadata = {
  title: "Mission | The Living Legacy",
};

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Our Mission
        </span>

        <h1 className="mt-6 text-5xl font-bold text-stone-900">
          More Than Recipes.
          <br />
          A Living Legacy.
        </h1>

        <p className="mt-8 text-lg leading-8 text-stone-600">
          We believe that every recipe preserves a memory, every documentary
          preserves a voice, and every act of kindness creates hope.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">Heritage</h2>
            <p className="mt-4 text-stone-600">
              Preserve India's culinary traditions, forgotten recipes, and
              regional food culture.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">Stories</h2>
            <p className="mt-4 text-stone-600">
              Create documentaries and authentic human stories that inspire
              empathy and positive change.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">Humanity</h2>
            <p className="mt-4 text-stone-600">
              Support communities through One Meal • One Hope and meaningful
              volunteer initiatives.
            </p>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] bg-stone-900 p-10 text-white">
          <h2 className="text-3xl font-bold">Our Promise</h2>

          <ul className="mt-8 space-y-4 text-stone-300">
            <li>✓ Preserve culture for future generations.</li>
            <li>✓ Document stories that matter.</li>
            <li>✓ Fight hunger through compassion and action.</li>
            <li>✓ Build communities through kindness.</li>
            <li>✓ Inspire positive change around the world.</li>
          </ul>

          <Link
            href="/get-involved"
            className="mt-10 inline-block rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
          >
            Join Our Mission
          </Link>
        </div>
      </section>
    </main>
  );
}
