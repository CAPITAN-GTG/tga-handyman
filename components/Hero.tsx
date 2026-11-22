"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

gsap.registerPlugin(useGSAP);

function BookNowBorder() {
  return (
    <MovingBorderButton
      as="div"
      borderRadius="0.25rem"
      containerClassName="h-12 w-auto min-w-[9.5rem]"
      className="border-brand-green/40 bg-brand-green/95 px-6 font-body text-sm font-semibold tracking-wide text-white backdrop-blur-none"
      borderClassName="bg-[radial-gradient(#2f9a56_40%,transparent_60%)]"
      duration={3500}
    >
      Book Now
    </MovingBorderButton>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const reduce = !!ctx.conditions?.reduceMotion;
          const image = rootRef.current?.querySelector<HTMLElement>(".hero-image");
          const veil = rootRef.current?.querySelector<HTMLElement>(".hero-veil");
          const brand = rootRef.current?.querySelector<HTMLElement>(".hero-brand");
          const headline = rootRef.current?.querySelector<HTMLElement>(".hero-headline");
          const ctas = rootRef.current?.querySelector<HTMLElement>(".hero-ctas");
          const rule = rootRef.current?.querySelector<HTMLElement>(".hero-rule");
          const textTargets = [brand, headline, ctas, rule].filter(
            (el): el is HTMLElement => !!el
          );

          if (reduce) {
            gsap.set(textTargets, { autoAlpha: 1, y: 0, scaleX: 1 });
            return;
          }

          if (brand && headline && ctas) {
            gsap.set([brand, headline, ctas], { autoAlpha: 0, y: 32 });
          }
          if (rule) gsap.set(rule, { scaleX: 0, autoAlpha: 1 });
          if (image) gsap.set(image, { scale: 1.12 });
          if (veil) gsap.set(veil, { autoAlpha: 0.35 });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          if (image) {
            tl.to(image, { scale: 1, duration: 2.4, ease: "power2.out" }, 0);
          }
          if (veil) {
            tl.to(veil, { autoAlpha: 1, duration: 1.2 }, 0.15);
          }
          if (brand) {
            tl.to(brand, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.35);
          }
          if (rule) {
            tl.to(rule, { scaleX: 1, duration: 0.7, ease: "power2.out" }, 0.55);
          }
          if (headline) {
            tl.to(headline, { autoAlpha: 1, y: 0, duration: 0.75 }, 0.65);
          }
          if (ctas) {
            tl.to(ctas, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.95);
          }
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-brand-ink"
      aria-label="TGA Handyman introduction"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-site.webp"
          alt="TGA Handyman technician making a repair with a wrench"
          className="hero-image absolute inset-0 h-full w-full object-cover object-center will-change-transform"
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
        <div
          className="hero-veil absolute inset-0 bg-gradient-to-r from-brand-ink/92 via-brand-ink/55 to-brand-ink/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-transparent to-brand-ink/40"
          aria-hidden
        />
      </div>

      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(145, 55%, 40%, .22) 0, hsla(145, 45%, 26%, .07) 50%, hsla(145, 40%, 16%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(145, 50%, 38%, .12) 0, hsla(145, 40%, 22%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(150, 40%, 45%, .08) 0, hsla(150, 35%, 22%, .02) 80%, transparent 100%)"
        duration={9}
        xOffset={80}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="hero-brand font-display text-[clamp(2.75rem,11vw,7rem)] font-bold uppercase leading-[0.9] tracking-[0.04em] text-white">
            TGA{" "}
            <span className="text-brand-silver">Handyman</span>
          </p>

          <div className="hero-rule mt-5 h-0.5 w-24 origin-left bg-brand-green-bright" aria-hidden />

          <h1 className="hero-headline mt-6 font-display text-[clamp(1.35rem,3.6vw,2.35rem)] font-semibold uppercase tracking-[0.06em] text-white">
            The repair you can count on.
          </h1>

          <TextGenerateEffect
            words="Licensed electrical, plumbing, fixtures, and same-day fixes across Las Vegas and Southern Nevada."
            className="mt-5 max-w-xl text-base text-white/80 sm:text-lg"
            duration={0.35}
          />

          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/pages/contact-us" className="inline-flex">
              <BookNowBorder />
            </Link>

            <Link
              href="#services"
              className="inline-flex h-12 items-center border border-white/35 bg-transparent px-6 font-body text-sm font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
