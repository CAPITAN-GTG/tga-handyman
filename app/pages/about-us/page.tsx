import { Clock, Shield, Users, Wrench } from "lucide-react";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "TGA Handyman is a licensed Las Vegas handyman for electrical, plumbing, fixtures, and everyday repairs across Southern Nevada.",
  path: "/pages/about-us",
});

const features = [
  {
    icon: Clock,
    title: "Available when it breaks",
    description: "Emergency leaks and dead fixtures do not wait for business hours. We schedule around the problem.",
  },
  {
    icon: Shield,
    title: "Licensed & insured",
    description: "Nevada R25 handyman, Clark County, state business, and cabinet licenses — bonded and insured.",
  },
  {
    icon: Users,
    title: "One accountable tech",
    description: "You talk to the person doing the work. No handoff between a sales desk and a stranger.",
  },
  {
    icon: Wrench,
    title: "Repair, not a rebuild",
    description: "We fix electrical, plumbing, fixtures, drywall, and hardware. Large commercial build-outs are not the job.",
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="TGA Handyman"
        title="About Us"
        description="Practical repairs for homes and small commercial spaces in Las Vegas — electrical, plumbing, fixtures, and the list that never quite gets finished."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="max-w-3xl">
          <p className="font-body text-lg leading-relaxed text-brand-ink sm:text-xl">
            TGA Handyman works across Las Vegas, Clark County, and Southern Nevada. The job is
            straightforward: diagnose the problem, quote it clearly, and leave the repair finished.
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
            We hold Nevada state business license NV 20201930648, Clark County license #2005425,
            M50 cabinet license #G71-07498, and R25 handyman license #G70-06742. Clients find us
            for outlets, leaks, fans, faucets, patch-and-paint, and the punch list after a bigger job.
          </p>
        </section>

        <ul className="mt-16 grid grid-cols-1 gap-8 border-t border-brand-ink/10 pt-16 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title} className="border-l-2 border-brand-green pl-5">
              <feature.icon className="h-5 w-5 text-brand-green" aria-hidden />
              <h2 className="mt-3 font-display text-xl font-semibold tracking-wide text-brand-ink">
                {feature.title}
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/70">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <PageContact
        title="Need a repair scheduled?"
        description="Call either line or send the details. We'll tell you what it takes to fix it."
      />
    </main>
  );
}
