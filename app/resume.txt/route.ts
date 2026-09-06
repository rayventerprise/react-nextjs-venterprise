import { siteConfig, social, expertise, roles } from "@/lib/site";

// /resume.txt — the résumé as unstyled text. No JS, no images, no layout:
// the single easiest artifact on the site for a crawler or retrieval pipeline
// to ingest whole and quote back accurately. Generated from lib/site.ts.

export const dynamic = "force-static";

const wrap = (text: string, width = 78) =>
  text
    .split("\n")
    .flatMap((line) => {
      const words = line.split(" ");
      const out: string[] = [];
      let cur = "";
      for (const word of words) {
        if (cur && `${cur} ${word}`.length > width) {
          out.push(cur);
          cur = word;
        } else {
          cur = cur ? `${cur} ${word}` : word;
        }
      }
      out.push(cur);
      return out;
    })
    .join("\n");

function body() {
  const heading = (text: string) => `${text}\n${"-".repeat(text.length)}`;

  return `${siteConfig.name}
${siteConfig.roleLong}
${siteConfig.location} · ${siteConfig.email} · ${siteConfig.url}

${heading("SUMMARY")}
${wrap(siteConfig.description)}

${heading("EXPERIENCE")}
${roles
  .map((r) =>
    [
      `${r.title}, ${r.company}`,
      `${r.dates}${r.location ? ` | ${r.location}` : ""}`,
      r.description ? wrap(r.description) : "",
    ]
      .filter(Boolean)
      .join("\n")
  )
  .join("\n\n")}

${heading("SKILLS")}
${wrap(expertise.join(" · "))}

${heading("SELECTED PROJECTS")}
Amazon — AI/ML workspace compute platform (${siteConfig.url}/amazon)
${wrap("Internal platform for provisioning customizable GPU/CPU compute environments on demand, powering large-scale AI/ML workloads and experimentation for Amazon economists. Java, Python, React, AWS CDK, Lambda, Kubernetes/EKS.")}

Pizzamico — restaurant ordering platform (${siteConfig.url}/pizzamico)
${wrap("Branded online ordering platform built from the ground up; scaled to 500K+ users and millions of orders across iOS, Android, and web. Laravel, Python, React, Next.js, Ionic, Node.js.")}

${heading("LINKS")}
LinkedIn: ${social.linkedin}
GitHub:   ${social.github}
Medium:   ${social.medium}
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
