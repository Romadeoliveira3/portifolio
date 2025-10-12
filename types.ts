import type React from "react";

export enum Language {
  EN = "en",
  PT = "pt",
}

export enum WindowType {
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  CONTACT = "CONTACT",
  EXPERIENCE = "EXPERIENCE",
  EDUCATION = "EDUCATION",
  WEB = "WEB",
}

export interface DesktopIconType {
  id: WindowType | "GITHUB" | "LINKEDIN" | "LATTES";
  // FIX: Changed type to support multilingual labels.
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type: "window" | "link";
  url?: string;
}

export interface WindowInstance {
  id: string;
  type: WindowType;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
  url?: string;
}

export interface Project {
  // FIX: Changed type to support multilingual titles.
  title: string;
  // FIX: Changed type to support multilingual descriptions.
  description: string;
  tech: string[];
  url: string;
}

export interface Experience {
  // FIX: Changed type to support multilingual roles.
  role: string;
  company: string;
  // FIX: Changed type to support multilingual periods.
  period: string;
  // FIX: Changed type to support multilingual descriptions.
  description: string;
}

export interface EducationItem {
  // FIX: Changed type to support multilingual degrees.
  degree: string;
  institution: string;
  period: string;
  // FIX: Changed type to support multilingual descriptions.
  description?: string;
}

export interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  link: string;
}
