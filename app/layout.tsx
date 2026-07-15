import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thelivinglegacy.vercel.app"),

  title: {
    default: "The Living Legacy",
    template: "%s | The Living Legacy",
  },

  description:
    "More Than Recipes. A Living Legacy. Preserving India's culinary heritage, documenting authentic human stories, and inspiring kindness through documentaries, traditions, and community impact.",

  keywords: [
    // Brand
    "The Living Legacy",
    "Living Legacy",
    "The Living Legacy India",
    "More Than Recipes",
    "Stories Traditions Humanity",
    "Living Legacy Project",

    // Indian Food
    "Indian Recipes",
    "Authentic Indian Recipes",
    "Traditional Indian Food",
    "Traditional Recipes",
    "Indian Home Cooking",
    "Regional Indian Cuisine",
    "Indian Culinary Heritage",
    "Indian Food Culture",
    "Indian Kitchen",
    "Indian Cooking",
    "Home Cooked Meals",
    "Grandmother Recipes",
    "Ancient Recipes",
    "Village Cooking",
    "Desi Recipes",
    "Traditional Tadka",
    "Indian Spices",
    "Handmade Spice Blends",
    "Forgotten Recipes",
    "Lost Indian Recipes",
    "Heritage Cooking",
    "Traditional Techniques",
    "Indian Street Food",
    "Festive Recipes",
    "Seasonal Recipes",
    "Healthy Traditional Food",
    "Indian Vegetarian Recipes",
    "Indian Regional Food",
    "Indian Food Documentary",

    // Heritage
    "Indian Heritage",
    "Indian Traditions",
    "Cultural Heritage",
    "Living Heritage",
    "Traditional Lifestyle",
    "Indian History",
    "Food History",
    "Ancient Traditions",
    "Heritage Preservation",
    "Cultural Preservation",
    "Folk Traditions",
    "Indian Villages",
    "Craftsmanship",
    "Local Communities",

    // Documentary
    "Documentary",
    "Short Documentary",
    "Documentary Film",
    "Independent Documentary",
    "Human Documentary",
    "Social Documentary",
    "Indian Documentary",
    "Documentary Series",
    "Visual Storytelling",
    "Real Stories",
    "Real People",
    "True Stories",
    "Life Stories",
    "Stories That Matter",
    "Powerful Stories",

    // Storytelling
    "Storytelling",
    "Authentic Storytelling",
    "Creative Storytelling",
    "Visual Stories",
    "Narrative Films",
    "Cinematic Stories",
    "Story Driven Content",
    "Purpose Driven Storytelling",
    "Emotional Stories",

    // Humanity
    "Human Stories",
    "Humanity",
    "Hope",
    "Compassion",
    "Kindness",
    "Volunteer",
    "Food Donation",
    "Fight Hunger",
    "Zero Hunger",
    "Community Kitchen",
    "Helping People",
    "Social Impact",
    "Community Support",
    "Nonprofit Stories",
    "Acts of Kindness",
    "Inspiring Change",

    // Culture
    "Indian Culture",
    "Cultural Stories",
    "Traditional Living",
    "Local Culture",
    "Folk Culture",
    "People and Places",
    "Travel Stories",
    "Hidden India",
    "Rural India",
    "Cultural Documentary",

    // Creator
    "Whisper with Vihaan",
    "Vihaan",
    "Vihaan Stories",
    "Vihaan Documentary",
    "Vihaan Films",
    "Vihaan Writes",
    "NextGrid Style",

    // YouTube SEO
    "Indian Documentary Channel",
    "Traditional Food Channel",
    "Documentary YouTube",
    "Indian Storytelling",
    "Food and Culture",
    "Stories of India",
    "Legacy",
    "Inspiring Stories",
    "Culture and Heritage",
    "Purpose Driven Content",
    "Educational Content",
    "Documentary Creator",
    "Indian Creator",
    "Authentic India",
    "Timeless Traditions",
    "Heritage Films",
    "Cinematic Documentary",
    "Community Stories",
    "Preserving Traditions",
    "Stories That Feed the Soul",
    "Traditions That Feed the Future",
  ],

  authors: [
    {
      name: "Abhishek Shrivastava",
    },
  ],

  creator: "Abhishek Shrivastava",

  publisher: "The Living Legacy",

  applicationName: "The Living Legacy",

  category: "Food & Documentary",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thelivinglegacy.vercel.app",
    title: "The Living Legacy",
    description:
      "Stories. Traditions. Humanity. Preserving authentic recipes, documenting meaningful stories, and inspiring positive change.",
    siteName: "The Living Legacy",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "The Living Legacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Living Legacy",
    description:
      "Stories. Traditions. Humanity. More Than Recipes. A Living Legacy.",
    images: ["/images/og-cover.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-stone-50 text-stone-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}