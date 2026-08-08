import type { ComponentType, SVGProps } from "react";
import { GithubIcon, MediumIcon, LinkedInIcon } from "@/app/components/ui/icons";

// Single source of truth for site-wide identity and links.
export const siteConfig = {
  name: "Raymond Vandenberg",
  email: "ray@venterprise.io",
  url: "https://venterprise.io",
  location: "Austin, TX",
};

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
