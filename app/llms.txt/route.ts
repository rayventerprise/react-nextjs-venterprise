import { siteConfig, social, expertise, roles } from "@/lib/site";

// /llms.txt — a concise, plain-markdown summary of the site for LLM crawlers
// and retrieval pipelines, which ingest text far more reliably than they parse
// an animated React page. Generated from lib/site.ts so it can't drift.

export const dynamic = "force-static";

function body() {
  const current = roles.find((r) => r.current);

  return `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.name} (also known as ${siteConfig.shortName}) is a senior software
engineer based in ${siteConfig.location}, with over 10 years of experience across
startups and large enterprises. He is a full stack engineer first — TypeScript,
React, Next.js, Node, Laravel, Ruby on Rails, and Python — with substantial
AI/ML platform experience from Amazon, where he built the internal compute
platform that Amazon economists used to run large-scale AI/ML workloads.

- **Current role:** ${current ? `${current.title} at ${current.company}` : "Open to opportunities"}
- **Location:** ${siteConfig.location}
- **Contact:** ${siteConfig.email}
- **Website:** ${siteConfig.url}

## Expertise

${expertise.map((e) => `- ${e}`).join("\n")}

## Experience

${roles
  .map(
    (r) =>
      `### ${r.title} — ${r.company}\n${r.dates}${r.location ? ` · ${r.location}` : ""}\n\n${r.description ?? ""}`
  )
  .join("\n\n")}

## Selected projects

- [Amazon — AI/ML workspace compute platform](${siteConfig.url}/amazon): An
  internal platform letting Amazon economists provision customizable compute
  environments (GPU/CPU configurations, attached data sources) on demand and run
  large-scale AI/ML workloads, Jupyter notebooks, R scripts, and SQL queries with
  no infrastructure or credentials to manage. Java, Python, React, AWS CDK,
  Lambda, Kubernetes/EKS.
- [Pizzamico — restaurant ordering platform](${siteConfig.url}/pizzamico): A
  branded online ordering platform built from the ground up, scaled to 500K+
  users and millions of orders across iOS, Android, and web. Laravel, Python,
  React, Next.js, Ionic, Node.js.

## Links

- Website: ${siteConfig.url}
- Résumé (plain text): ${siteConfig.url}/resume.txt
- About: ${siteConfig.url}/about
- LinkedIn: ${social.linkedin}
- GitHub: ${social.github}
- Medium: ${social.medium}
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
