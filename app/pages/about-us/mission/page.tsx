import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Mission",
  description:
    "TGA Handyman's mission is reliable, fairly priced repair work for Las Vegas homes and small businesses.",
  path: "/pages/about-us/mission",
});

const values = [
  {
    title: "Reliable service",
    description: "Show up when we say we will, and finish the repair we quoted.",
  },
  {
    title: "Responsibility",
    description: "If the diagnosis or the advice is ours, we stand behind it.",
  },
  {
    title: "Transparency",
    description: "Licenses, pricing, and what is included are stated before the work starts.",
  },
  {
    title: "Workmanship",
    description: "A patch, a fixture, or a valve should look like it belongs there.",
  },
];

export default function CompanyMission() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About"
        title="Our Mission"
        description="Be the Las Vegas handyman people call again — because the leak stopped, the light works, and the room was left clean."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/pages/about-us" },
          { label: "Our Mission" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="border-t-2 border-brand-green pt-5">
              <h2 className="font-display text-xl font-semibold tracking-wide text-brand-ink">
                {value.title}
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/75">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-16 max-w-3xl border-t border-brand-ink/10 pt-16">
          <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">Our purpose</h2>
          <p className="mt-5 font-body text-base leading-relaxed text-brand-navy/75">
            We want to be the handyman Las Vegas calls for electrical, plumbing, fixtures, and
            everyday repairs. Success is a finished job and a client who recommends the next one.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
            That reputation is built one visit at a time across Clark County — not by taking on
            work that belongs to a general contractor.
          </p>
        </section>
      </div>

      <PageContact />
    </main>
  );
}
