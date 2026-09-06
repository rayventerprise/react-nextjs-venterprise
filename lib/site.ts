import type { ComponentType, SVGProps } from "react";
import { GithubIcon, MediumIcon, LinkedInIcon } from "@/app/components/ui/icons";

// Single source of truth for site-wide identity and links.
export const siteConfig = {
  name: "Raymond Vandenberg",
  shortName: "Ray Vandenberg",
  email: "ray@venterprise.io",
  url: "https://venterprise.io",
  location: "Austin, TX",
  // Positioning. `role` is the headline title; `roleLong` is the version used in
  // <title> tags and structured data, where the AI/ML angle needs to be explicit
  // enough for search and LLM retrieval to pick it up.
  role: "Full Stack Engineer",
  roleLong: "Full Stack & AI/ML Platform Engineer",
  tagline:
    "Full stack engineer building scalable web and mobile products — and, at Amazon, the platform behind large-scale AI/ML workloads.",
  description:
    "Ray Vandenberg is a senior full stack engineer in Austin, TX with 10+ years across startups and enterprise. Ex-Amazon, where he built the internal platform powering large-scale AI/ML workloads. Works in TypeScript, React, Next.js, Node, Laravel, Rails, Python, AWS, and Kubernetes.",
};

// Areas of expertise, in priority order. Consumed by the Person JSON-LD
// `knowsAbout` field, which is the main signal search engines and LLM
// extraction pipelines read to answer "what does this person do?".
export const expertise = [
  "Full Stack Web Development",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Ruby on Rails",
  "Python",
  "AI/ML Platform Engineering",
  "Machine Learning Infrastructure",
  "GPU and CPU Compute Orchestration",
  "LLM Integration and AI-Assisted Development",
  "Kubernetes",
  "AWS",
  "Infrastructure as Code",
  "Cross-Platform Mobile Development",
  "API Design",
  "Distributed Systems",
  "Engineering Leadership",
];

// Employment history. Single source for the About timeline, the Person JSON-LD
// (`worksFor` / `alumniOf`), and the generated plain-text resume.
export interface Role {
  company: string;
  title: string;
  dates: string;
  location?: string;
  description?: string;
  current?: boolean;
}

export const roles: Role[] = [
  {
    company: "BRG",
    title: "Senior Software Engineer",
    dates: "Oct 2025 – Present",
    location: "Remote",
    description:
      "Senior full-stack engineering across the product, working primarily in Ruby on Rails.",
    current: true,
  },
  {
    company: "Amazon",
    title: "Senior Software Development Engineer",
    dates: "Feb 2024 – Oct 2025",
    location: "Austin, TX",
    description:
      "Built the internal workspace platform that let Amazon economists provision customizable compute environments (GPU/CPU configurations, attached data sources) on demand and run large-scale AI/ML workloads and experimentation — with no infrastructure or credentials to manage. Led the front end and contributed to the API and infrastructure (Java, Python, React, AWS CDK, Lambda, EKS).",
  },
  {
    company: "Pizzamico",
    title: "Senior Software Engineer",
    dates: "Jan 2017 – Feb 2024",
    location: "Remote",
    description:
      "Built the full-stack ordering platform from the ground up (Laravel, Python, React), scaling to 500K+ users and millions of restaurant orders. Grew from engineer to team lead, leading a team of 3 engineers.",
  },
  {
    company: "Golevel, LLC",
    title: "Junior Software Engineer",
    dates: "Feb 2015 – Jan 2017",
    location: "Florida",
    description:
      "Built MVPs and production sites for clients in a fast-paced agency environment (Vue, Angular, React, PHP).",
  },
];

// Social profile URLs, referenced everywhere via this object.
export const social = {
  linkedin: "https://www.linkedin.com/in/rayventerprise/",
  github: "https://github.com/rayventerprise",
  medium: "https://medium.com/@rayventerprise",
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// Ordered social links with their icons, for nav/footer rows.
export const socialLinks: { label: string; href: string; Icon: IconComponent }[] = [
  { label: "LinkedIn", href: social.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: social.github, Icon: GithubIcon },
  { label: "Medium", href: social.medium, Icon: MediumIcon },
];

// Primary navigation links (nav + footer).
export const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

// Brand palette. `rgb` is the primary red as an "r, g, b" string for rgba().
export const brand = {
  primary: "#d02b2b",
  secondary: "#ba2020",
  rgb: "208, 43, 43",
};
