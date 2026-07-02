export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL ?? "https://southbag.cc";

export const SITE_NAME = "Southbag";

export const DEFAULT_TITLE = "Southbag — Institutional Services";

export const DEFAULT_DESCRIPTION =
  "Southbag provides integrated financial infrastructure, digital network services, and enterprise business software across jurisdictions.";

export const DEFAULT_OG_IMAGE = "/logo.png";

export const ORGANIZATION_NAME = "Southbag Institutional Services Ltd.";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

export function formatTitle(title?: string): string {
  if (!title || title === "Southbag") return DEFAULT_TITLE;
  return `${title} — Southbag`;
}

export function canonicalUrl(pathname: string): string {
  const url = new URL(pathname, SITE_URL);
  url.hash = "";
  url.search = "";
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.href;
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: ["https://identity.southbag.cc"],
  };
}

export function webSiteJsonLd() {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
    },
  };
}

export function webPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const PAGE_SEO = {
  home: {
    title: "Southbag",
    description: DEFAULT_DESCRIPTION,
  },
  financial: {
    title: "Financial Services",
    description:
      "Financial infrastructure, payment systems, investment products, and compliance tooling regulated under Southbag Financial Authority oversight.",
  },
  digital: {
    title: "Digital Services",
    description:
      "Broadband, mobile, security infrastructure, and developer tooling. Network traffic is monitored and retained per Southbag policy SB-NET-2022.",
  },
  business: {
    title: "Business Services",
    description:
      "Enterprise software for regulated environments: identity management, CRM, analytics, data lakes, and ecommerce with ongoing compliance reporting.",
  },
  onboarding: {
    title: "Onboarding",
    description: "Create your Southbag account to access financial, digital, and business services.",
    noindex: true,
  },
} as const;
