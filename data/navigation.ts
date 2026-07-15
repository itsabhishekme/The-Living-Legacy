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
    label: "About",
    href: "#about",
  },
  {
    id: 3,
    label: "Heritage",
    href: "#heritage",
  },
  {
    id: 4,
    label: "Stories",
    href: "#stories",
  },
  {
    id: 5,
    label: "Humanity",
    href: "#humanity",
  },
  {
    id: 6,
    label: "Mission",
    href: "#mission",
  },
  {
    id: 7,
    label: "Gallery",
    href: "#gallery",
  },
  {
    id: 8,
    label: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@thelivinglegacy",
    icon: "Youtube",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thelivinglegacy",
    icon: "Instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/thelivinglegacy",
    icon: "Facebook",
  },
  {
    name: "X",
    href: "https://x.com/thelivinglegacy",
    icon: "Twitter",
  },
];

export const brand = {
  name: "The Living Legacy",
  tagline: "Stories. Traditions. Humanity.",

  heroTitle: "More Than Recipes. A Living Legacy.",

  heroSubtitle:
    "Preserving India's culinary heritage, documenting authentic human stories, and inspiring communities through compassion, culture, and meaningful change.",

  description:
    "The Living Legacy is a storytelling platform dedicated to preserving timeless recipes, documenting inspiring documentaries, celebrating traditions, and creating social impact through kindness.",

  ctaText: "Watch Our Stories",
  ctaLink: "https://youtube.com/@thelivinglegacy",

  email: "hello@thelivinglegacy.in",
  website: "https://thelivinglegacy.in",

  copyright: `© ${new Date().getFullYear()} The Living Legacy. All Rights Reserved.`,
};

export const stats = [
  {
    value: "500+",
    label: "Traditional Recipes",
  },
  {
    value: "100+",
    label: "Documentary Stories",
  },
  {
    value: "50+",
    label: "Communities Reached",
  },
  {
    value: "1 Mission",
    label: "Preserve Culture & Humanity",
  },
];

export default navigation;