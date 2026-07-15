import {
  BookOpen,
  HeartHandshake,
  Landmark,
  Soup,
  Film,
  Globe,
  Users,
  Sparkles,
  HandPlatter,
} from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: Feature[];
}

export interface Statistic {
  id: number;
  number: string;
  label: string;
}

export interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "Heritage",
    href: "#heritage",
  },
  {
    id: 3,
    label: "Stories",
    href: "#stories",
  },
  {
    id: 4,
    label: "Humanity",
    href: "#humanity",
  },
  {
    id: 5,
    label: "Mission",
    href: "#mission",
  },
];

export const hero = {
  badge: "Preserving Culture • Inspiring Humanity",

  title: "The Living Legacy",

  subtitle:
    "More Than Recipes. More Than Stories. A Living Legacy.",

  description:
    "The Living Legacy preserves India's timeless culinary traditions, documents authentic human stories, and inspires communities through documentaries, culture, compassion, and meaningful action.",

  primaryButton: "Explore Our Journey",

  secondaryButton: "Watch Documentaries",

  image: "/images/hero.jpg",
};

export const heritage: SectionContent = {
  id: "heritage",

  title: "Preserving India's Culinary Heritage",

  subtitle:
    "Every Recipe Carries Generations of Memories",

  description:
    "Traditional recipes are more than ingredients and techniques—they are stories passed from grandparents to grandchildren, carrying culture, identity, festivals, and family traditions. We document regional cuisines, forgotten dishes, handmade spice blends, and authentic cooking methods before they disappear.",

  image: "/images/heritage.jpg",

  features: [
    {
      id: 1,
      title: "Regional Recipes",
      description:
        "Authentic dishes from every corner of India.",
      icon: Soup,
    },
    {
      id: 2,
      title: "Traditional Techniques",
      description:
        "Cooking methods preserved across generations.",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Cultural Heritage",
      description:
        "Food that reflects history, festivals, and family traditions.",
      icon: Landmark,
    },
  ],
};

export const stories: SectionContent = {
  id: "stories",

  title: "Documentaries That Inspire",

  subtitle:
    "Every Story Deserves To Be Remembered",

  description:
    "Through cinematic storytelling we uncover extraordinary lives hidden within ordinary communities. Every documentary captures resilience, identity, hope, culture, and the voices that deserve to be heard by the world.",

  image: "/images/stories.jpg",

  features: [
    {
      id: 1,
      title: "Human Stories",
      description:
        "Real people. Real emotions. Real impact.",
      icon: Film,
    },
    {
      id: 2,
      title: "Cultural Identity",
      description:
        "Celebrating traditions and diverse communities.",
      icon: Globe,
    },
    {
      id: 3,
      title: "Powerful Narratives",
      description:
        "Films that educate, inspire, and create lasting change.",
      icon: Sparkles,
    },
  ],
};

export const humanity: SectionContent = {
  id: "humanity",

  title: "Compassion Creates Change",

  subtitle:
    "Every Great Change Begins With One Small Act Of Kindness",

  description:
    "Beyond storytelling, we believe in taking action. By working with volunteers, organizations, and communities, we aim to fight hunger, encourage empathy, and create opportunities for meaningful social impact.",

  image: "/images/humanity.jpg",

  features: [
    {
      id: 1,
      title: "Fight Hunger",
      description:
        "Helping communities facing food insecurity.",
      icon: HandPlatter,
    },
    {
      id: 2,
      title: "Volunteer Together",
      description:
        "Building stronger communities through collective action.",
      icon: Users,
    },
    {
      id: 3,
      title: "Spread Kindness",
      description:
        "Small acts of compassion create lifelong impact.",
      icon: HeartHandshake,
    },
  ],
};

export const mission = {
  title: "Our Mission",

  description:
    "We believe recipes should never be forgotten, traditions should never fade, stories should never remain untold, and no one should face hunger alone. Through food, documentaries, and community action, we preserve what matters most for future generations.",

  image: "/images/mission.jpg",
};

export const statistics: Statistic[] = [
  {
    id: 1,
    number: "500+",
    label: "Traditional Recipes",
  },
  {
    id: 2,
    number: "100+",
    label: "Documentary Stories",
  },
  {
    id: 3,
    number: "50+",
    label: "Communities Connected",
  },
  {
    id: 4,
    number: "∞",
    label: "Lives To Inspire",
  },
];

export const cta = {
  title: "Become Part Of The Living Legacy",

  description:
    "Watch documentaries, preserve traditions, share your story, volunteer, and help us create a future where culture, compassion, and humanity continue to thrive.",

  primaryButton: "Subscribe on YouTube",

  secondaryButton: "Support Our Mission",
};

export const footer = {
  brand: "The Living Legacy",

  tagline:
    "Stories • Traditions • Humanity",

  copyright:
    `© ${new Date().getFullYear()} The Living Legacy. All Rights Reserved.`,
};