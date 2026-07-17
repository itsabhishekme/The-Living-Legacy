import { LucideIcon } from "lucide-react";

export interface MemoryCategory {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  color: string;
}

export interface MemoryStory {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content?: string;
  author: string;
  location: string;
  category: string;
  image: string;
  gallery?: string[];
  tags: string[];
  featured: boolean;
  publishedAt: string;
  readingTime: string;
}

export interface OralHistory {
  id: string;
  personName: string;
  age?: number;
  location: string;
  occupation?: string;
  storyTitle: string;
  storySummary: string;
  audioUrl?: string;
  videoUrl?: string;
  transcript?: string;
  recordedAt: string;
}

export interface FamilyArchive {
  id: string;
  familyName: string;
  title: string;
  description: string;
  coverImage: string;
  members: number;
  generation: string;
  createdAt: string;
}

export interface MemoryCollection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  totalStories: number;
  curator: string;
  featured: boolean;
}

export interface HistoricPhoto {
  id: string;
  title: string;
  image: string;
  location: string;
  year: string;
  description: string;
  photographer?: string;
}

export interface LegacyLetter {
  id: string;
  title: string;
  sender: string;
  receiver: string;
  year: string;
  excerpt: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface SubmissionForm {
  fullName: string;
  email: string;
  phone?: string;
  city: string;
  state: string;
  country: string;
  storyTitle: string;
  category: string;
  description: string;
  photos?: string[];
  video?: string;
  audio?: string;
  consent: boolean;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface PartnerOrganization {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  city: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}