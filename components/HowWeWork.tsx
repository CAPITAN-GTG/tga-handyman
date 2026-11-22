"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "Tell us what broke. We look at the job, ask what matters, and agree on the scope.",
  },
  {
    number: "02",
    title: "Estimate",
    description:
      "You get a clear price and timing before any tools come out of the truck.",
  },
  {
    number: "03",
    title: "Fix",
    description:
      "We repair the electrical, plumbing, fixture, or finish — and protect the space around it.",
  },
  {
    number: "04",
    title: "Walkthrough",
    description:
      "We clean up, walk the work with you, and leave when the repair is actually done.",
  },
];

export default function HowWeWork() {
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
          const header = section.querySelectorAll("[data-process-reveal='header']");
          const stepsEls = section.querySelectorAll("[data-process-reveal='step']");
          const rule = section.querySelector("[data-process-rule]");

          if (reduce) {
            gsap.set([header, stepsEls], { autoAlpha: 1, y: 0 });
            if (rule) gsap.set(rule, { scaleX: 1 });
            return;
          }

          gsap.set(header, { autoAlpha: 0, y: 24 });
          gsap.set(stepsEls, { autoAlpha: 0, y: 28 });
          if (rule) gsap.set(rule, { scaleX: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });

          tl.to(header, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
          });

          if (rule) {
            tl.to(rule, { scaleX: 1, duration: 0.7, ease: "power2.out" }, "-=0.2");
          }

          tl.to(
            stepsEls,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.1,
            },
            "-=0.35"
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
      className="relative isolate overflow-hidden bg-brand-ink"
      aria-labelledby="how-we-work-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-navy/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p
              data-process-reveal="header"
              className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green-bright"
            >
              How we work
            </p>
            <h2
              id="how-we-work-heading"
              data-process-reveal="header"
              className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-white"
            >
              A clear path from call to fix.
            </h2>
            <p
              data-process-reveal="header"
              className="mt-4 max-w-xl font-body text-base leading-relaxed text-white/70 sm:text-lg"
            >
              No guesswork. You know the price, the timing, and who is standing in the room
              when the repair is finished.
            </p>
          </div>

          <div data-process-reveal="header">
            <Link
              href="/pages/contact-us"
              className="inline-flex h-11 items-center border border-white/25 bg-transparent px-5 font-body text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-bright"
            >
              Start with a consult
            </Link>
          </div>
        </div>

        <div
          data-process-rule
          className="mt-12 h-px w-full origin-left bg-white/15 lg:mt-14"
          aria-hidden
        />

        <ol className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.number} data-process-reveal="step">
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-brand-green-bright">
                {step.number}
              </p>
              <div className="mt-3 h-0.5 w-10 bg-brand-green-bright" aria-hidden />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-wide text-white sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/65 sm:text-[0.9375rem]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
