/**
 * The Living Legacy
 * Global Utility Helper Functions
 */

/* ---------------------------------------------
 * Class Name Utility
 * ------------------------------------------- */

export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}

/* ---------------------------------------------
 * Slug Generator
 * ------------------------------------------- */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ---------------------------------------------
 * Title Case
 * ------------------------------------------- */

export function titleCase(text: string): string {
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  });
}

/* ---------------------------------------------
 * Capitalize First Letter
 * ------------------------------------------- */

export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* ---------------------------------------------
 * Truncate Text
 * ------------------------------------------- */

export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "...";
}

/* ---------------------------------------------
 * Reading Time
 * ------------------------------------------- */

export function readingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}

/* ---------------------------------------------
 * Format Date
 * ------------------------------------------- */

export function formatDate(
  date: string | Date,
  locale = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/* ---------------------------------------------
 * Format Number
 * ------------------------------------------- */

export function formatNumber(
  value: number,
  locale = "en-IN"
): string {
  return new Intl.NumberFormat(locale).format(value);
}

/* ---------------------------------------------
 * Currency
 * ------------------------------------------- */

export function formatCurrency(
  amount: number,
  currency = "INR",
  locale = "en-IN"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ---------------------------------------------
 * Random ID
 * ------------------------------------------- */

export function randomId(length = 10): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
}

/* ---------------------------------------------
 * Random Integer
 * ------------------------------------------- */

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ---------------------------------------------
 * Delay
 * ------------------------------------------- */

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/* ---------------------------------------------
 * Scroll To Top
 * ------------------------------------------- */

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* ---------------------------------------------
 * Scroll To Element
 * ------------------------------------------- */

export function scrollToId(id: string): void {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* ---------------------------------------------
 * Copy Text
 * ------------------------------------------- */

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------
 * Share API
 * ------------------------------------------- */

export async function sharePage(
  title: string,
  text: string,
  url: string
): Promise<boolean> {
  if (!navigator.share) return false;

  try {
    await navigator.share({
      title,
      text,
      url,
    });

    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------
 * Email Validator
 * ------------------------------------------- */

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------------------------------------------
 * Phone Validator (India)
 * ------------------------------------------- */

export function isValidIndianPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone);
}

/* ---------------------------------------------
 * YouTube Thumbnail
 * ------------------------------------------- */

export function youtubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/* ---------------------------------------------
 * YouTube Embed
 * ------------------------------------------- */

export function youtubeEmbed(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

/* ---------------------------------------------
 * Image Placeholder
 * ------------------------------------------- */

export function placeholder(width = 1200, height = 800): string {
  return `https://placehold.co/${width}x${height}`;
}

/* ---------------------------------------------
 * Debounce
 * ------------------------------------------- */

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

/* ---------------------------------------------
 * Clamp
 * ------------------------------------------- */

export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

/* ---------------------------------------------
 * Percentage
 * ------------------------------------------- */

export function percentage(
  value: number,
  total: number
): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/* ---------------------------------------------
 * Greeting
 * ------------------------------------------- */

export function greeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";

  return "Good Night";
}

/* ---------------------------------------------
 * Footer Year
 * ------------------------------------------- */

export function currentYear(): number {
  return new Date().getFullYear();
}