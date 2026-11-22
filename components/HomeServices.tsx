"use client";

import { useRef, useState } from "react";
import {
  Lightbulb,
  Droplet,
  Lamp,
  Wrench,
  Bath,
  Paintbrush,
  DoorClosed,
  Sparkles,
  Siren,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicePopup from "./ServicePopup";
import { InfiniteMovingServices } from "@/components/ui/infinite-moving-services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
};

const services: Service[] = [
  {
    title: "Electrical & lighting",
    description: "Outlets, GFCIs, fixtures, and bulbs replaced safely and neatly.",
    icon: Lightbulb,
    services: [
      "GFCI replacements",
      "Outlet and switch replacements",
      "Light fixture swaps",
      "Bulb and lamp replacements",
      "Minor electrical repairs",
    ],
  },
  {
    title: "Plumbing & leaks",
    description: "Emergency leaks, shutoffs, and small plumbing repairs before the damage spreads.",
    icon: Droplet,
    services: [
      "Emergency water leaks",
      "Valve replacements",
      "Supply line repairs",
      "Minor plumbing issues",
      "Drip and trap fixes",
    ],
  },
  {
    title: "Fixture installs",
    description: "Fans, lights, faucets, and toilets set, sealed, and working the same visit.",
    icon: Lamp,
    services: [
      "Ceiling fan installation",
      "Light fixture installation",
      "Faucet replacement",
      "Toilet installation",
      "Hardware and accessory mounting",
    ],
  },
  {
    title: "General handyman",
    description: "The punch list of small repairs that keep a home or shop running.",
    icon: Wrench,
    services: [
      "Household repairs",
      "Furniture and shelf assembly",
      "Caulking and weather sealing",
      "Hardware adjustments",
      "Odd jobs done correctly",
    ],
  },
  {
    title: "Kitchen & bath repairs",
    description: "Repair-level kitchen and bath work — not a full remodel crew.",
    icon: Bath,
    services: [
      "Faucet and sink repairs",
      "Cabinet door and hinge fixes",
      "Vanity and toilet repairs",
      "Caulk, trim, and splash repairs",
      "Fixture swaps",
    ],
  },
  {
    title: "Drywall & paint",
    description: "Patches, texture, and paint that disappear into the wall.",
    icon: Paintbrush,
    services: [
      "Hole and crack patching",
      "Water-stain repairs",
      "Texture matching",
      "Spot priming and paint",
      "Trim touch-ups",
    ],
  },
  {
    title: "Doors & hardware",
    description: "Doors that stick, locks that fail, and hardware that needs a proper fit.",
    icon: DoorClosed,
    services: [
      "Door adjustments",
      "Lock and handle replacement",
      "Hinge and closer repairs",
      "New door installation",
      "Threshold and sweep repairs",
    ],
  },
  {
    title: "Cleanup & punch-list",
    description: "After the repair, we haul debris and close the last open items.",
    icon: Sparkles,
    services: [
      "Job-site cleanup",
      "Punch-list walkthroughs",
      "Debris haul-away",
      "Final touch-ups",
      "Move-in ready details",
    ],
  },
  {
    title: "Emergency service",
    description: "Leaks, power issues, and broken fixtures that cannot wait until morning.",
    icon: Siren,
    services: [
      "Active leak response",
      "Shutoff and make-safe",
      "After-hours repairs",
      "Broken fixture replacement",
      "Same-day scheduling",
    ],
  },
];

export default function HomeServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions ?? {};
          const header = section.querySelectorAll("[data-services-reveal='header']");
          const carousel = section.querySelectorAll("[data-services-reveal='carousel']");

          if (reduceMotion) {
            gsap.set([header, carousel], { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set([header, carousel], { autoAlpha: 0, y: 28 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            })
            .to(header, {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.1,
            })
            .to(
              carousel,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
              },
              "-=0.25"
            );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="services"
        className="relative overflow-hidden bg-brand-mist py-16 lg:py-24"
        aria-labelledby="home-services-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              data-services-reveal="header"
              className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green"
            >
              What we fix
            </p>
            <h2
              id="home-services-heading"
              data-services-reveal="header"
              className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-brand-ink"
            >
              Services
            </h2>
            <p
              data-services-reveal="header"
              className="mt-4 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg"
            >
              Electrical, plumbing, fixtures, and everyday repairs — one licensed handyman from
              the first call to the walkthrough.
            </p>
          </div>
        </div>

        <div data-services-reveal="carousel" className="mt-10">
          <InfiniteMovingServices
            items={services}
            speed="slow"
            direction="left"
            onSelect={(item) => {
              const match = services.find((service) => service.title === item.title) ?? null;
              setSelectedService(match);
            }}
          />
        </div>
      </section>

      <ServicePopup
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title ?? ""}
        services={selectedService?.services ?? []}
        icon={selectedService?.icon ?? Wrench}
      />
    </>
  );
}
