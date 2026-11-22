"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, type LucideIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export type MovingServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function InfiniteMovingServices({
  items,
  onSelect,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: MovingServiceItem[];
  onSelect: (item: MovingServiceItem) => void;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const loopItems = [...items, ...items];

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    const duration = speed === "fast" ? "28s" : speed === "normal" ? "48s" : "70s";
    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_6%,white_94%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {loopItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`${item.title}-${index}`} className="shrink-0">
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="group flex h-full w-[min(84vw,320px)] flex-col border border-brand-silver/50 bg-white p-6 text-left transition-colors hover:border-brand-green/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:w-[340px]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center border border-brand-silver/70 bg-brand-mist text-brand-green transition-colors group-hover:border-brand-green/40 group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-wide text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-brand-steel">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center font-body text-sm font-medium text-brand-green">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
