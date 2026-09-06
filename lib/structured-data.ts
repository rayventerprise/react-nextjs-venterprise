import { siteConfig, social, expertise, roles } from "@/lib/site";

// Schema.org JSON-LD builders.
//
// Everything is emitted as a single `@graph` per page with stable `@id`s, so
// the Person node is defined once and every other node points at it by
// reference. That is what lets a crawler resolve "who wrote this project page"
// back to the same entity as "who is this site about".

const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const abs = (path: string) => new URL(path, siteConfig.url).toString();
const pageId = (path: string) => `${abs(path)}#webpage`;

const currentRole = roles.find((r) => r.current);
const pastOrganizations = roles
  .filter((r) => !r.current)
  .map((r) => r.company);

/** The Person node — the primary entity of the whole site. */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: abs("/images/ray.jpg"),
    email: `mailto:${siteConfig.email}`,
    jobTitle: [
      "Senior Full Stack Engineer",
      "AI/ML Platform Engineer",
      "Software Engineer",
    ],
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    ...(currentRole && {
      worksFor: { "@type": "Organization", name: currentRole.company },
      hasOccupation: {
        "@type": "Occupation",
        name: currentRole.title,
        occupationLocation: {
          "@type": "City",
          name: siteConfig.location,
        },
        skills: expertise.join(", "),
      },
    }),
    alumniOf: pastOrganizations.map((name) => ({
      "@type": "Organization",
      name,
    })),
    knowsAbout: expertise,
    sameAs: [social.linkedin, social.github, social.medium],
  };
}

/** The WebSite node, so the site itself resolves to a named entity. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.roleLong}`,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

interface PageOptions {
  path: string;
  name: string;
  description: string;
  /** Set for the About page, which is a profile of the Person entity. */
  isProfile?: boolean;
  /** Ancestor crumbs, excluding Home (added automatically) and this page. */
  breadcrumb?: { name: string; path: string }[];
}

/** A WebPage (or ProfilePage) node tied back to the Person and WebSite. */
export function pageSchema({
  path,
  name,
  description,
  isProfile,
  breadcrumb = [],
}: PageOptions) {
  const trail = [
    { name: "Home", path: "/" },
    ...breadcrumb,
    { name, path },
  ];

  return [
    {
      "@type": isProfile ? "ProfilePage" : "WebPage",
      "@id": pageId(path),
      url: abs(path),
      name,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      ...(isProfile && { mainEntity: { "@id": PERSON_ID } }),
      breadcrumb: { "@id": `${abs(path)}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${abs(path)}#breadcrumb`,
      itemListElement: trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: abs(crumb.path),
      })),
    },
  ];
}

interface ProjectOptions {
  path: string;
  name: string;
  description: string;
  /** Technologies used, surfaced as `keywords` for retrieval. */
  stack: string[];
  /** Free-text period, e.g. "Feb 2024 – Oct 2025". */
  dates?: string;
  image?: string;
}

/**
 * A CreativeWork node for a case study. `author` points at the Person, which is
 * what attributes the work — and its keywords — back to Ray.
 */
export function projectSchema({
  path,
  name,
  description,
  stack,
  dates,
  image,
}: ProjectOptions) {
  return {
    "@type": "CreativeWork",
    "@id": `${abs(path)}#project`,
    url: abs(path),
    name,
    headline: name,
    description,
    keywords: stack.join(", "),
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    ...(dates && { temporalCoverage: dates }),
    ...(image && { image: abs(image) }),
  };
}

/** Wrap nodes into a single `@graph` document ready to serialize. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat(),
  };
}
