import { Clock, Shield, CheckCircle2, BadgeCheck } from "lucide-react";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Use Us",
  description:
    "Why Las Vegas calls TGA Handyman: licensed repairs, clear pricing, and a tech who finishes the job.",
  path: "/pages/about-us/why-use-us",
});

const reasons = [
  {
    icon: Clock,
    title: "Scheduling that fits the problem",
    description: "Small repairs get a time. Emergencies get the next open slot, including after hours.",
  },
  {
    icon: CheckCircle2,
    title: "Straightforward booking",
    description: "Call, email, or send the form. You get a scope and a number, not a sales script.",
  },
  {
    icon: Shield,
    title: "Licensed and insured",
    description: "R25 handyman, Clark County, Nevada state business, and M50 cabinet licenses.",
  },
  {
    icon: BadgeCheck,
    title: "Work we stand behind",
    description: "Skilled trades work, proper tools, and a 12-month defect warranty on our repairs.",
  },
];

export default function WhyUseUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About"
        title="Why Use Us"
        description="Eighteen years of handyman work for homes and small businesses throughout Las Vegas."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/pages/about-us" },
          { label: "Why Use Us" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="max-w-3xl font-body text-lg leading-relaxed text-brand-ink">
          TGA Handyman is the call for outlets, leaks, fans, faucets, doors, drywall, and the
          punch list. Hourly for small jobs. A fixed quote when the work is larger. Always stated
          before we start.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="border border-brand-ink/10 bg-brand-mist/60 p-6">
              <reason.icon className="h-5 w-5 text-brand-green" aria-hidden />
              <h2 className="mt-4 font-display text-xl font-semibold tracking-wide text-brand-ink">
                {reason.title}
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/75">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <PageContact title="Get a repair on the calendar." />
    </main>
  );
}
