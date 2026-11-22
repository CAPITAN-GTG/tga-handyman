"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/seo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const assurances = ["Licensed", "Bonded", "Insured", "Southern Nevada"];

export default function TrustStrip() {
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
          const reduce = !!context.conditions?.reduceMotion;
          const reveals = section.querySelectorAll("[data-trust-reveal]");
          const rules = section.querySelectorAll("[data-trust-rule]");

          if (reduce) {
            gsap.set(reveals, { autoAlpha: 1, y: 0 });
            gsap.set(rules, { scaleX: 1 });
            return;
          }

          gsap.set(reveals, { autoAlpha: 0, y: 18 });
          gsap.set(rules, { scaleX: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          });

          tl.to(reveals, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.07,
          }).to(
            rules,
            {
              scaleX: 1,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.08,
            },
            "-=0.4"
          );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-brand-ink/10 bg-white"
      aria-label="Company credentials"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <p
              data-trust-reveal
              className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-green"
            >
              Nevada R25 Handyman
            </p>
            <p
              data-trust-reveal
              className="mt-3 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-none tracking-[0.04em] text-brand-ink"
            >
              {siteConfig.featuredLicense}
            </p>
            <div data-trust-rule className="mt-5 h-0.5 w-14 origin-left bg-brand-green" aria-hidden />
            <p
              data-trust-reveal
              className="mt-5 max-w-sm font-body text-sm leading-relaxed text-brand-navy/70 sm:text-[0.9375rem]"
            >
              Licensed for handyman and cabinet work in Las Vegas and Clark County. We show up,
              fix the problem, and leave the space clean.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              {siteConfig.licenses.slice(0, 3).map((item) => (
                <li key={item.code} data-trust-reveal>
                  <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-steel">
                    License
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold tracking-wide text-brand-ink sm:text-[2rem]">
                    {item.code}
                  </p>
                  <p className="mt-1.5 font-body text-sm text-brand-navy/65">{item.name}</p>
                </li>
              ))}
            </ul>

            <div
              data-trust-rule
              className="mt-8 h-px w-full origin-left bg-brand-ink/10 sm:mt-10"
              aria-hidden
            />

            <ul data-trust-reveal className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-7">
              {assurances.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand-navy/80"
                >
                  {index > 0 ? (
                    <span className="hidden h-3 w-px bg-brand-ink/20 sm:block" aria-hidden />
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
