import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Crawlers used by AI search and training pipelines. They're allowed by default
// today; listing them explicitly makes the intent durable — a restrictive
// default added later (by a host, a CDN, or a future edit here) won't silently
// drop them.
const aiCrawlers = [
  "GPTBot", // OpenAI — training
  "OAI-SearchBot", // OpenAI — ChatGPT search index
  "ChatGPT-User", // OpenAI — user-initiated browsing
  "ClaudeBot", // Anthropic — training
  "Claude-User", // Anthropic — user-initiated browsing
  "Claude-SearchBot", // Anthropic — search index
  "PerplexityBot", // Perplexity — index
  "Perplexity-User", // Perplexity — user-initiated browsing
  "Google-Extended", // Google — Gemini / AI Overviews grounding
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl — feeds many training sets
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
