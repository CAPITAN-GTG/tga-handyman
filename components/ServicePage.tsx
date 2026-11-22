import Image from "next/image";
import type { ReactNode } from "react";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type ServiceSection = {
  title: string;
  body?: string[];
  items?: string[];
};

type ServicePageProps = {
  title: string;
  eyebrow?: string;
  description: string;
  intro: string[];
  sections?: ServiceSection[];
  highlights?: ServiceHighlight[];
  process?: string[];
  image?: { src: string; alt: string };
  contactTitle?: string;
  contactDescription?: string;
  children?: ReactNode;
};

export default function ServicePage({
  title,
  eyebrow = "Services",
  description,
  intro,
  sections = [],
  highlights = [],
  process = [],
  image,
  contactTitle,
  contactDescription,
  children,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: title },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className={image ? "grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16" : ""}>
          <section className="max-w-3xl" aria-labelledby="service-intro">
            <h2 id="service-intro" className="sr-only">
              Overview
            </h2>
            {intro.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "font-body text-lg leading-relaxed text-brand-ink sm:text-xl"
                    : "mt-5 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </section>

          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          ) : null}
        </div>

        {sections.length > 0 ? (
          <section
            className="mt-16 grid grid-cols-1 gap-12 border-t border-brand-ink/10 pt-16 lg:grid-cols-2 lg:gap-16"
            aria-label="Service details"
          >
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
                  {section.title}
                </h2>
                <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
                {section.body?.map((paragraph, index) => (
                  <p key={index} className="mt-5 font-body text-base leading-relaxed text-brand-navy/75">
                    {paragraph}
                  </p>
                ))}
                {section.items && section.items.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-base text-brand-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        {highlights.length > 0 ? (
          <section className="mt-16 border-t border-brand-ink/10 pt-16" aria-labelledby="why-choose">
            <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
              Why call us
            </p>
            <h2
              id="why-choose"
              className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
            >
              A licensed handyman, not a runaround.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="border-l-2 border-brand-green pl-5">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {process.length > 0 ? (
          <section className="mt-16 border-t border-brand-ink/10 pt-16" aria-labelledby="our-process">
            <h2 id="our-process" className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Our Process
            </h2>
            <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, index) => (
                <li key={step} className="border-t-2 border-brand-green pt-4">
                  <p className="font-display text-sm font-semibold tracking-[0.14em] text-brand-steel">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brand-ink">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {children}
      </div>

      <PageContact title={contactTitle} description={contactDescription} />
    </main>
  );
}
