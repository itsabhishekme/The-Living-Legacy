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
    "Indian Recipes",
    "Traditional Food",
    "Indian Heritage",
    "Documentary",
    "Storytelling",
    "Culture",
    "Food History",
    "Community",
    "Human Stories",
    "Cooking",
    "Legacy",
    "Whisper with Vihaan",
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