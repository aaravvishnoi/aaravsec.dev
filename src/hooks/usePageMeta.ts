import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
  path?: string;
}

const ORIGIN = "https://aaravsec.dev";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets the document title, description, OG/Twitter tags and canonical link for
 * the current route. This fixes tab titles and link unfurls during client-side
 * navigation. For crawlers that don't run JS, prerendering/SSG is the durable
 * fix — see the README.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    const full = title ? `${title} · AARAVSEC` : "Aarav Vishnoi — Offensive Security Portfolio";
    document.title = full;

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
    upsertMeta("property", "og:title", full);
    upsertMeta("name", "twitter:title", full);

    if (path) {
      const url = `${ORIGIN}${path}`;
      upsertMeta("property", "og:url", url);
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }
  }, [title, description, path]);
}
