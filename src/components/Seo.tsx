import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://ttmpainting.com";
const DEFAULT_DESCRIPTION =
  "Licensed, bonded & insured house painters serving Evanston and Chicago's North Shore. Interior & exterior painting backed by a 100% satisfaction guarantee and a 1-3 year warranty. Free estimates.";

interface SeoProps {
  title: string;
  description?: string;
  /** Optional path override; defaults to the current route. */
  path?: string;
}

/** Sets a unique <title>, meta description, canonical URL, and Open Graph tags
 *  per page. Works in a single-page app by updating the document head on mount
 *  and whenever the route changes. */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description = DEFAULT_DESCRIPTION, path }: SeoProps) {
  const location = useLocation();
  const url = `${SITE_URL}${path ?? location.pathname}`;

  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, url]);

  return null;
}
