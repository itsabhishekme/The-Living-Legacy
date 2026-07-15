import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Whisper with Vihaan | Every Meal Creates Hope",
  description:
    "Whisper with Vihaan is a storytelling movement dedicated to ending hunger through compassion, awareness, and action. Every contribution helps provide meals, hope, and dignity.",
};

const impactStats = [
  {
    value: "1 Meal",
    label: "Can Change Someone's Day",
  },
  {
    value: "100%",
    label: "Driven by Compassion",
  },
  {
    value: "∞",
    label: "Hope Shared Together",
  },
];

const waysToHelp = [
  {
    title: "Feed Someone Today",
    description:
      "Your contribution provides nourishing meals to people experiencing hunger and hardship.",
    icon: "🍛",
  },
  {
    title: "Share the Mission",
    description:
      "Help spread awareness through stories that inspire kindness and collective action.",
    icon: "📖",
  },
  {
    title: "Become a Volunteer",
    description:
      "Join hands with compassionate individuals dedicated to creating lasting social impact.",
    icon: "🤝",
  },
];

const stories = [
  {
    title: "A Warm Plate. A New Beginning.",
    description:
      "Sometimes hope begins with a simple meal. Every act of kindness reminds someone they are seen, valued, and never forgotten.",
  },
  {
    title: "Beyond Charity",
    description:
      "We believe every meal represents dignity, compassion, and the opportunity for someone to dream again.",
  },
  {
    title: "Together We Can End Hunger",
    description:
      "Real change happens when communities unite to care for one another through meaningful action.",
  },
];

export default function WhisperWithVihaanPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8">
          <span className="rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Whisper with Vihaan
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Every Meal
            <br />
            <span className="text-orange-600">Creates Hope.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Whisper with Vihaan is a storytelling movement dedicated to ending
            hunger through compassion, awareness, and action.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Your support is more than a donation—it is a warm meal, a smile, and
            a second chance for someone who needs it most.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/donate"
              className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Donate Now
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {impactStats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-orange-100 bg-orange-50 p-10 text-center shadow-sm"
            >
              <h2 className="text-5xl font-black text-orange-600">
                {item.value}
              </h2>

              <p className="mt-4 text-lg text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="font-semibold uppercase tracking-widest text-orange-600">
              Our Mission
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Stories That Feed Hearts.
              <br />
              Meals That Save Lives.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Whisper with Vihaan believes storytelling has the power to inspire
              compassion. Every shared story builds awareness, every donation
              becomes nourishment, and every act of kindness restores hope to
              those who need it most.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Together, we are creating a future where no one sleeps hungry and
              every individual is treated with dignity.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
              alt="Sharing meals"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How You Can Make a Difference
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Every action matters. Every meal creates hope.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {waysToHelp.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Stories of Compassion
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Every meal has a story. Every story inspires hope.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.title}
                className="rounded-3xl bg-white p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold">{story.title}</h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {story.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <blockquote className="text-3xl font-bold leading-relaxed text-gray-900 md:text-5xl">
          “No act of kindness is ever too small.
          <br />
          One meal can restore strength.
          <br />
          One story can inspire millions.”
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-extrabold">
            Every Meal Creates Hope
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-orange-100">
            Join Whisper with Vihaan in building a world where compassion
            replaces hunger and every person receives the dignity of a warm
            meal.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-100"
            >
              Support the Mission
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-orange-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}