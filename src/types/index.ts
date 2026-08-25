import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MenuItem {
  name: string;
  description: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  credit: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}
