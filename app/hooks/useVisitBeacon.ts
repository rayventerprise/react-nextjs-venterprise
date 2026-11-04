"use client";

import { useEffect } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site";

const SEEN_KEY = "visit-notified";
const IGNORE_KEY = "visit-ignore";
const MIN_DWELL_MS = 4000;
const EVENTS = ["pointermove", "scroll", "touchstart", "keydown"];

// Emails a visit notification via Web3Forms once per browser, and only after the visitor has both
// interacted with the page and stayed a few seconds.
export function useVisitBeacon() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (navigator.webdriver) return;

    try {
      if (new URLSearchParams(location.search).get("notify") === "off") {
        localStorage.setItem(IGNORE_KEY, "1");
      }
      if (localStorage.getItem(IGNORE_KEY) || localStorage.getItem(SEEN_KEY)) {
        return;
      }
    } catch {
      return;
    }

    const start = Date.now();

    let interacted = false;

    let timer: number | undefined;

    const cleanup = () => {
      EVENTS.forEach((e) => window.removeEventListener(e, onInteract));

      document.removeEventListener("visibilitychange", maybeSend);

      window.clearTimeout(timer);
    };

    const maybeSend = () => {
      if (!interacted || document.visibilityState !== "visible") return;

      const wait = MIN_DWELL_MS - (Date.now() - start);

      if (wait > 0) {
        window.clearTimeout(timer);
        timer = window.setTimeout(maybeSend, wait);
        return;
      }

      cleanup();

      try {
        localStorage.setItem(SEEN_KEY, "1");
      } catch {
        // do nothing
      }

      send();
    };

    const send = async () => {
      // Location is best-effort; the email still goes out without it.
      const geo: { city?: string; region?: string; country?: string } =
        await fetch("/api/geo")
          .then((r) => r.json())
          .catch(() => ({}));

      const location_ =
        [geo.city, geo.region, geo.country].filter(Boolean).join(", ") ||
        "unknown";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Visitor on venterprise.io (${geo.country || "unknown"})`,
          from_name: "Site visit",
          location: location_,
          page: window.location.pathname,
          referrer: document.referrer || "direct",
          screen: `${window.screen.width}x${window.screen.height}`,
          language: navigator.language,
          user_agent: navigator.userAgent,
        }),
      }).catch(() => {
        // do nothing
      });
    };

    function onInteract() {
      interacted = true;

      maybeSend();
    }

    EVENTS.forEach((e) =>
      window.addEventListener(e, onInteract, { passive: true })
    );

    document.addEventListener("visibilitychange", maybeSend);

    return cleanup;
  }, []);
}
