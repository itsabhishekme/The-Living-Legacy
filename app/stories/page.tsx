import Link from "next/link";
import { ArrowRight, Clapperboard, Heart, Globe2, BookOpen, Users } from "lucide-react";

export const metadata = {
  title: "Stories | The Living Legacy",
  description:
    "Stories that preserve voices, inspire compassion, and celebrate humanity.",
};


const stories = [
  {
    title: "Whisper with Vihaan",
    description:
      "A storytelling movement dedicated to ending hunger through compassion, awareness, and action. Every documentary inspires empathy, every voice creates understanding, and every shared story becomes a step toward a world where kindness changes lives.",
  },
  {
    title: "One Meal • One Hope",
    description:
      "A mission-driven initiative documenting real communities, volunteers, and acts of kindness that ensure every individual has access to at least one nutritious meal a day. Every meal restores dignity, hope, and opportunity.",
  },
  {
    title: "Taste Of Traditions",
    description:
      "Preserving India's forgotten recipes, regional cuisines, authentic spices, and timeless culinary traditions through immersive storytelling that connects food with family memories and cultural heritage.",
  },
  {
    title: "Timeless Tadka",
    description:
      "Bringing emotional homemade recipes, handmade spice blends, and traditional cooking techniques back to life—one recipe at a time—while celebrating the wisdom passed through generations.",
  },
  {
    title: "The Living Legacy Originals",
    description:
      "Original documentary films and visual narratives exploring culture, humanity, history, craftsmanship, traditions, and the remarkable stories hidden in everyday lives across India.",
  },
  {
    title: "Stories of India",
    description:
      "A visual archive of India's diverse cultures, languages, villages, festivals, artisans, traditions, and communities—preserving the nation's living heritage for future generations.",
  },
  {
    title: "Voices of Humanity",
    description:
      "Authentic conversations with people whose experiences inspire compassion, understanding, resilience, and social change through honest storytelling.",
  },
  {
    title: "Behind the Documentary",
    description:
      "Go behind the scenes of documentary filmmaking, from research and scripting to cinematography, editing, and the emotional process of bringing real stories to life.",
  },
  {
    title: "Hidden Heroes",
    description:
      "Celebrating ordinary people doing extraordinary work in their communities—from volunteers and teachers to farmers, caregivers, artists, and social changemakers.",
  },
  {
    title: "Food Beyond the Plate",
    description:
      "Exploring how food preserves identity, family traditions, local history, and emotional memories while connecting generations through authentic recipes.",
  },
  {
    title: "Acts of Kindness",
    description:
      "Real stories of compassion where small gestures create meaningful change, proving that one act of kindness can transform someone's future.",
  },
  {
    title: "Community Stories",
    description:
      "Documenting inspiring initiatives, local organizations, and passionate individuals working together to build stronger, healthier, and more compassionate communities.",
  },
  {
    title: "Legacy Conversations",
    description:
      "Meaningful interviews with elders, historians, chefs, storytellers, artists, and cultural guardians preserving traditions that deserve to live forever.",
  },
  {
    title: "Future Generations",
    description:
      "Inspiring young minds to appreciate heritage, embrace compassion, preserve traditions, and become responsible storytellers for tomorrow's world.",
  },
  {
    title: "Hope in Action",
    description:
      "Following real journeys where volunteers, nonprofits, and communities unite to fight hunger, support education, and create sustainable positive impact.",
  },
  {
    title: "Preserving Memories",
    description:
      "Every photograph, recipe, voice, and documentary becomes a timeless archive—ensuring the memories, traditions, and stories of today remain alive for generations to come.",
  },
];

export default function StoriesPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-amber-300">
            Documentary & Storytelling
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Stories That
            <br />
            Preserve Humanity
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Every story deserves to be remembered. Through documentaries,
            conversations, and authentic human experiences, The Living Legacy
            preserves voices that inspire empathy, understanding, and action.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/whisper-with-vihaan"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              Watch Stories
            </Link>

            <Link
              href="/get-involved/share-your-story"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/10"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Clapperboard className="h-10 w-10 text-amber-600" />

              <h2 className="mt-6 text-2xl font-bold">
                {story.title}
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                {story.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-700"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/5 p-8">
            <BookOpen className="h-10 w-10 text-amber-400" />
            <h3 className="mt-5 text-2xl font-bold">Preserve</h3>
            <p className="mt-3 text-stone-300">
              Document stories before they are forgotten.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <Heart className="h-10 w-10 text-amber-400" />
            <h3 className="mt-5 text-2xl font-bold">Inspire</h3>
            <p className="mt-3 text-stone-300">
              Build empathy through authentic storytelling.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <Users className="h-10 w-10 text-amber-400" />
            <h3 className="mt-5 text-2xl font-bold">Connect</h3>
            <p className="mt-3 text-stone-300">
              Bring communities together through shared human experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-24 text-center text-black">
        <Globe2 className="mx-auto h-16 w-16" />
        <h2 className="mt-8 text-5xl font-bold">
          Every Voice Matters.
          <br />
          Every Story Lives On.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8">
          Join The Living Legacy and help preserve the stories that shape our
          culture, inspire compassion, and connect generations.
        </p>

        <Link
          href="/get-involved/share-your-story"
          className="mt-10 inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white hover:bg-stone-800"
        >
          Share Your Story
        </Link>
      </section>
    </main>
  );
}
