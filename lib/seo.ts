import type { Metadata } from "next";

export const siteConfig = {
  name: "TGA Handyman",
  legalName: "TGA Handyman",
  description:
    "Licensed handyman repairs across Las Vegas and Southern Nevada. Electrical, plumbing, fixtures, and same-day fixes — done cleanly and on schedule.",
  url: "https://tgahandyman.com",
  locale: "en_US",
  phones: [
    { display: "(818) 554-3033", tel: "+18185543033" },
    { display: "(702) 755-3316", tel: "+17027553316" },
  ],
  email: "handymanservicestga@gmail.com",
  licenses: [
    { code: "NV", name: "State business NV 20201930648" },
    { code: "Clark", name: "County license #2005425" },
    { code: "M50", name: "Cabinet #G71-07498" },
    { code: "R25", name: "Handyman #G70-06742" },
  ],
  featuredLicense: "G70-06742",
  address: {
    street: "1857 Citation Cir",
    city: "Las Vegas",
    region: "NV",
    postalCode: "89123",
    country: "US",
  },
  ogImage: "/hero-site.webp",
  logo: "/logo.webp",
  yelp: "https://www.yelp.com/biz/tga-handyman-services-las-vegas",
  sameAs: ["https://www.yelp.com/biz/tga-handyman-services-las-vegas"],
  serviceAreas: [
    "Las Vegas",
    "Henderson",
    "North Las Vegas",
    "Summerlin",
    "Enterprise",
    "Paradise",
    "Spring Valley",
    "Clark County",
    "Southern Nevada",
  ],
} as const;

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/pages/about-us", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/about-us/mission", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/about-us/why-use-us", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pages/gallery", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/pages/reviews", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/pages/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/pages/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/pages/services/areas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/home-improve", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/interior", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/drywall", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/handyman", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pages/services/clean-up", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/kitchen-repairs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/kitchen-cabinets", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/bathroom", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/bathroom-repairs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/construction", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/pages/services/exterior", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/demolitions", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/pages/services/emergency", priority: 0.9, changeFrequency: "monthly" as const },
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = siteConfig.ogImage,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          alt: `${siteConfig.name} — handyman repairs in Las Vegas`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}

export function getLocalBusinessJsonLd() {
  const { address } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phones.map((phone) => phone.tel),
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasCredential: siteConfig.licenses.map((license) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `${license.code} ${license.name}`,
    })),
    knowsAbout: [
      "Electrical repairs",
      "Lighting and fixture installation",
      "Plumbing leak repair",
      "Faucet and toilet installation",
      "Handyman services",
      "Drywall patch and paint",
      "Door and hardware repair",
      "Emergency home repairs",
    ],
  };
}
