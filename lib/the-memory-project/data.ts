import {
  Archive,
  AudioLines,
  BookMarked,
  Camera,
  Globe2,
  HeartHandshake,
  ImageIcon,
  Landmark,
  MapPinned,
  Mic,
  ScrollText,
  Users,
} from "lucide-react";

export const hero = {
  badge: "The Living Legacy Initiative",
  title: "The Memory Project",
  subtitle:
    "Every Memory Matters. Every Story Lives On.",
  description:
    "The Memory Project is a living archive dedicated to preserving personal memories, family histories, oral traditions, photographs, handwritten letters, cultural practices, and untold human stories before they disappear forever.",
  primaryButton: {
    label: "Share Your Memory",
    href: "/contact",
  },
  secondaryButton: {
    label: "Explore Stories",
    href: "#collections",
  },
};

export const mission = {
  title: "Our Mission",
  description:
    "We believe every person carries a story worth preserving. By documenting memories, traditions, photographs, and lived experiences, we create a digital legacy that connects generations and protects our shared human heritage.",
};

export const collections = [
  {
    icon: BookMarked,
    title: "Family Histories",
    description:
      "Preserving family journeys, ancestry, traditions, values, and generational memories.",
  },
  {
    icon: Camera,
    title: "Historic Photographs",
    description:
      "Digitising treasured family albums and photographs with the stories behind every image.",
  },
  {
    icon: Mic,
    title: "Oral Histories",
    description:
      "Recording voices, conversations, interviews, and life experiences before they are forgotten.",
  },
  {
    icon: ScrollText,
    title: "Letters & Diaries",
    description:
      "Protecting handwritten letters, journals, memoirs, and personal documents for future generations.",
  },
  {
    icon: Landmark,
    title: "Local Heritage",
    description:
      "Documenting neighbourhoods, villages, historic places, customs, and disappearing traditions.",
  },
  {
    icon: ImageIcon,
    title: "Memory Galleries",
    description:
      "Creating digital exhibitions that celebrate people, places, and moments that shaped our communities.",
  },
];

export const featuredStories = [
  {
    title: "Grandmother's Kitchen",
    category: "Food Heritage",
    year: "1965",
    description:
      "A family's handwritten recipes preserved through stories, photographs, and memories passed across generations.",
  },
  {
    title: "Letters From Home",
    category: "Family Archive",
    year: "1984",
    description:
      "A collection of heartfelt letters exchanged between parents and children working far from home.",
  },
  {
    title: "The Last Village Potter",
    category: "Traditional Craft",
    year: "2025",
    description:
      "Documenting one of the last artisans keeping centuries-old pottery traditions alive.",
  },
];

export const memoryCategories = [
  {
    icon: Users,
    title: "People",
    description:
      "Stories that celebrate individuals, families, and communities.",
  },
  {
    icon: Globe2,
    title: "Culture",
    description:
      "Languages, festivals, customs, rituals, and traditions from across India.",
  },
  {
    icon: Archive,
    title: "Artifacts",
    description:
      "Objects, heirlooms, books, documents, and keepsakes that carry history.",
  },
  {
    icon: MapPinned,
    title: "Places",
    description:
      "Homes, villages, streets, monuments, and landscapes filled with memories.",
  },
];

export const process = [
  {
    step: "01",
    title: "Collect",
    description:
      "Gather memories, photographs, letters, audio recordings, videos, and family stories.",
  },
  {
    step: "02",
    title: "Document",
    description:
      "Verify, organise, digitise, and preserve every contribution with care.",
  },
  {
    step: "03",
    title: "Preserve",
    description:
      "Create a permanent digital archive accessible for future generations.",
  },
  {
    step: "04",
    title: "Inspire",
    description:
      "Share meaningful stories that strengthen empathy, identity, and cultural belonging.",
  },
];

export const impact = [
  {
    number: "10,000+",
    label: "Stories Preserved",
  },
  {
    number: "2,500+",
    label: "Historic Photographs",
  },
  {
    number: "500+",
    label: "Oral Histories",
  },
  {
    number: "100+",
    label: "Communities Connected",
  },
];

export const values = [
  {
    icon: HeartHandshake,
    title: "Respect",
    description:
      "Every memory deserves dignity, authenticity, and care.",
  },
  {
    icon: Archive,
    title: "Preservation",
    description:
      "Protecting stories from being forgotten or lost over time.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building connections through shared histories and lived experiences.",
  },
  {
    icon: Globe2,
    title: "Legacy",
    description:
      "Creating an enduring archive that inspires future generations.",
  },
];

export const faq = [
  {
    question: "Who can contribute?",
    answer:
      "Anyone can contribute memories, photographs, letters, oral histories, or family stories that hold cultural, historical, or personal significance.",
  },
  {
    question: "Can I preserve old photographs?",
    answer:
      "Yes. We encourage digitising old photographs, albums, and family archives while keeping the originals safe.",
  },
  {
    question: "Do you accept audio and video recordings?",
    answer:
      "Absolutely. Interviews, oral histories, home videos, and voice recordings are valuable parts of our living archive.",
  },
  {
    question: "Why is preserving memories important?",
    answer:
      "Every memory contributes to our collective identity. Preserving them ensures future generations understand where they came from and the stories that shaped them.",
  },
];

export const cta = {
  title: "Help Preserve Tomorrow's History Today",
  description:
    "Your memories, photographs, traditions, and stories deserve to live beyond a single generation. Join us in building one of the world's most meaningful living archives.",
  primaryButton: {
    label: "Share Your Story",
    href: "/contact",
  },
  secondaryButton: {
    label: "Become a Contributor",
    href: "/get-involved",
  },
};