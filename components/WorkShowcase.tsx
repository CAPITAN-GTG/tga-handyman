"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const featuredWork = [
  { src: "/gallery-43.webp", alt: "Handyman repair completed by TGA Handyman", title: "Fixture repair" },
  { src: "/gallery-45.webp", alt: "Interior finish work by TGA Handyman", title: "Interior finish" },
  { src: "/gallery-47.webp", alt: "Detail repair work by TGA Handyman", title: "Detail work" },
  { src: "/gallery-49.webp", alt: "Wall repair by TGA Handyman", title: "Patch & paint" },
  { src: "/gallery-51.webp", alt: "Completed repair by TGA Handyman", title: "Finished repair" },
  { src: "/gallery-52.webp", alt: "Recent Las Vegas handyman project", title: "Recent job" },
];

export default function WorkShowcase() {
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
          const items = section.querySelectorAll("[data-work-reveal]");

          if (reduce) {
            gsap.set(items, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(items, { autoAlpha: 0, y: 24 });
          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 lg:py-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p
              data-work-reveal
              className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green"
            >
              Recent work
            </p>
            <h2
              id="work-heading"
              data-work-reveal
              className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-brand-ink"
            >
              Fixed to last.
            </h2>
            <p
              data-work-reveal
              className="mt-3 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg"
            >
              Recent repairs and fixture work across Las Vegas and Clark County.
            </p>
          </div>

          <div data-work-reveal>
            <Link
              href="/pages/gallery"
              className="inline-flex h-11 items-center border border-brand-navy/20 bg-white px-5 font-body text-sm font-semibold text-brand-navy transition-colors hover:border-brand-green hover:bg-brand-mist hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              View gallery
            </Link>
          </div>
        </div>
      </div>

      <div
        data-work-reveal
        className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-2 px-4 sm:gap-3 sm:px-6 md:grid-cols-3 lg:mt-10 lg:px-8"
      >
        {featuredWork.map((item, index) => (
          <Link
            key={item.src}
            href="/pages/gallery"
            className={`group relative block aspect-[4/3] overflow-hidden bg-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green md:aspect-[5/4] ${
              index >= 4 ? "max-md:hidden" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
            <span className="absolute inset-x-0 bottom-0 px-3 pb-3 font-display text-sm font-semibold tracking-wide text-white sm:px-4 sm:pb-4 sm:text-base">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
