"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type MovingImage = {
  src: string;
  alt: string;
};

export function InfiniteMovingImages({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: MovingImage[];
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

    const duration = speed === "fast" ? "28s" : speed === "normal" ? "48s" : "72s";
    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-2 sm:gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {loopItems.map((item, index) => (
          <li
            key={`${item.src}-${index}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden border border-brand-silver/40 bg-brand-mist sm:h-56 sm:w-80 lg:h-64 lg:w-[22rem]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 352px"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
