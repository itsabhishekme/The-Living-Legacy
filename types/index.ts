// ======================================================
// The Living Legacy
// Global TypeScript Types
// File: /types/index.ts
// ======================================================

/* -------------------------------------------------------------------------- */
/*                                   Common                                   */
/* -------------------------------------------------------------------------- */

export type ID = string;

export type ISODate = string;

export type Theme = "light" | "dark";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type SocialPlatform =
  | "youtube"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "x"
  | "github";

/* -------------------------------------------------------------------------- */
/*                                 Navigation                                 */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  id: ID;
  label: string;
  href: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */

export interface ButtonProps {
  text: string;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButton: ButtonProps;
  secondaryButton?: ButtonProps;
}

/* -------------------------------------------------------------------------- */
/*                                   About                                    */
/* -------------------------------------------------------------------------- */

export interface AboutContent {
  title: string;
  description: string;
  image: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Heritage                                  */
/* -------------------------------------------------------------------------- */

export interface HeritageItem {
  id: ID;
  title: string;
  description: string;
  image: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Stories                                  */
/* -------------------------------------------------------------------------- */

export interface StoryItem {
  id: ID;
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                 Documentary                                */
/* -------------------------------------------------------------------------- */

export interface Documentary {
  id: ID;
  title: string;
  slug: string;
  description: string;
  poster: string;
  trailer?: string;
  releaseDate?: ISODate;
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                   Recipe                                   */
/* -------------------------------------------------------------------------- */

export interface Recipe {
  id: ID;
  title: string;
  slug: string;
  image: string;
  region: string;
  category: string;
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Gallery                                  */
/* -------------------------------------------------------------------------- */

export interface GalleryImage {
  id: ID;
  title: string;
  image: string;
  alt: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Humanity                                  */
/* -------------------------------------------------------------------------- */

export interface HumanityProject {
  id: ID;
  title: string;
  description: string;
  image: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Mission                                  */
/* -------------------------------------------------------------------------- */

export interface MissionPoint {
  id: ID;
  title: string;
  description: string;
  icon: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Features                                  */
/* -------------------------------------------------------------------------- */

export interface FeatureCard {
  id: ID;
  title: string;
  description: string;
  icon: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Statistics                                */
/* -------------------------------------------------------------------------- */

export interface Statistic {
  id: ID;
  label: string;
  value: number;
  suffix?: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Testimonial                               */
/* -------------------------------------------------------------------------- */

export interface Testimonial {
  id: ID;
  name: string;
  designation: string;
  image: string;
  quote: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Partners                                 */
/* -------------------------------------------------------------------------- */

export interface Partner {
  id: ID;
  name: string;
  logo: string;
  website?: string;
}

/* -------------------------------------------------------------------------- */
/*                                    Team                                    */
/* -------------------------------------------------------------------------- */

export interface TeamMember {
  id: ID;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: SocialLink[];
}

/* -------------------------------------------------------------------------- */
/*                                   Social                                   */
/* -------------------------------------------------------------------------- */

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

/* -------------------------------------------------------------------------- */
/*                                   Contact                                  */
/* -------------------------------------------------------------------------- */

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

/* -------------------------------------------------------------------------- */
/*                                    SEO                                     */
/* -------------------------------------------------------------------------- */

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  image: string;
}

/* -------------------------------------------------------------------------- */
/*                               Newsletter Form                              */
/* -------------------------------------------------------------------------- */

export interface NewsletterForm {
  email: string;
}

/* -------------------------------------------------------------------------- */
/*                                Contact Form                                */
/* -------------------------------------------------------------------------- */

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* -------------------------------------------------------------------------- */
/*                                   API                                      */
/* -------------------------------------------------------------------------- */

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/* -------------------------------------------------------------------------- */
/*                                 Site Config                                */
/* -------------------------------------------------------------------------- */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  website: string;
  youtube: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  github?: string;
}

/* -------------------------------------------------------------------------- */
/*                              Complete Website                              */
/* -------------------------------------------------------------------------- */

export interface WebsiteData {
  seo: SEO;
  hero: HeroContent;
  about: AboutContent;
  heritage: HeritageItem[];
  recipes: Recipe[];
  documentaries: Documentary[];
  stories: StoryItem[];
  humanity: HumanityProject[];
  mission: MissionPoint[];
  gallery: GalleryImage[];
  statistics: Statistic[];
  testimonials: Testimonial[];
  partners: Partner[];
  footer: FooterSection[];
  contact: ContactInfo;
  socials: SocialLink[];
}