import { site } from "@/data/portfolio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.siteUrl,
    ...(site.email ? { email: site.email } : {}),
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location,
    },
    sameAs: [site.github, site.linkedin, site.twitter].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
