"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type InfiniteCardItem = {
  id: string;
  src: string;
  title: string;
  description?: string;
};

type InfiniteCardGridProps = {
  items: InfiniteCardItem[];
  className?: string;
  gap?: number;
  href?: string;
};

/**
 * Aceternity-style Infinite Card Grid:
 * drag in any direction through an endless tiled grid;
 * hover grows + bold black outline; click navigates (default: gallery).
 */
export function InfiniteCardGrid({
  items,
  className,
  gap = 12,
  href = "/pages/gallery",
}: InfiniteCardGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragStart = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const isDragging = useRef(false);
  const autoPaused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [viewport, setViewport] = useState({ w: 1200, h: 640 });

  const clearResumeTimer = useCallback(() => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const pauseAuto = useCallback(() => {
    autoPaused.current = true;
    clearResumeTimer();
  }, [clearResumeTimer]);

  const scheduleAutoResume = useCallback(() => {
    clearResumeTimer();
    resumeTimer.current = setTimeout(() => {
      autoPaused.current = false;
      resumeTimer.current = null;
    }, 3000);
  }, [clearResumeTimer]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setViewport({
        w: Math.max(320, Math.round(rect.width)),
        h: Math.max(320, Math.round(rect.height)),
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const layout = useMemo(() => {
    const targetCardW = viewport.w < 640 ? 160 : viewport.w < 1024 ? 200 : 240;
    const aspect = 5 / 4;
    const cardW = targetCardW;
    const cardH = Math.round(cardW * aspect);
    const cellW = cardW + gap;
    const cellH = cardH + gap;

    const cols = Math.max(3, Math.ceil((viewport.w + cellW) / cellW) + 1);
    const baseRows = Math.ceil(items.length / Math.min(cols, items.length)) || 1;
    const rows = Math.max(baseRows, Math.ceil((viewport.h + cellH) / cellH) + 1);

    const filled: InfiniteCardItem[] = [];
    const total = cols * rows;
    for (let i = 0; i < total; i++) {
      filled.push(items[i % items.length]);
    }

    const tileW = cols * cellW;
    const tileH = rows * cellH;

    return { cardW, cardH, cellW, cellH, cols, tileW, tileH, filled };
  }, [gap, items, viewport.h, viewport.w]);

  const tiles = useMemo(() => {
    const offsets: { ox: number; oy: number }[] = [];
    for (let oy = -1; oy <= 1; oy++) {
      for (let ox = -1; ox <= 1; ox++) {
        offsets.push({ ox, oy });
      }
    }
    return offsets;
  }, []);

  const wrapDrag = useCallback(() => {
    const { tileW, tileH } = layout;
    let nx = x.get();
    let ny = y.get();
    while (nx > tileW / 2) nx -= tileW;
    while (nx < -tileW / 2) nx += tileW;
    while (ny > tileH / 2) ny -= tileH;
    while (ny < -tileH / 2) ny += tileH;
    x.set(nx);
    y.set(ny);
  }, [layout, x, y]);

  useEffect(() => {
    const unsubX = x.on("change", wrapDrag);
    const unsubY = y.on("change", wrapDrag);
    return () => {
      unsubX();
      unsubY();
    };
  }, [wrapDrag, x, y]);

  // Slow auto-drift; pauses while dragging, resumes ~3s after last drag.
  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;
    let last = performance.now();
    const speedX = 16; // px/s
    const speedY = 9;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (!autoPaused.current && !isDragging.current && document.visibilityState === "visible") {
        x.set(x.get() - speedX * dt);
        y.set(y.get() - speedY * dt);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearResumeTimer();
    };
  }, [clearResumeTimer, reduceMotion, x, y]);

  const { cardW, cardH, cellW, cellH, cols, tileW, tileH, filled } = layout;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[min(72vh,640px)] w-full touch-none overflow-hidden bg-brand-mist select-none sm:h-[min(78vh,720px)] lg:h-[min(80vh,780px)]",
        className
      )}
    >
      <motion.div
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          x,
          y,
          width: tileW * 3,
          height: tileH * 3,
          left: `calc(50% - ${(tileW * 3) / 2}px)`,
          top: `calc(50% - ${(tileH * 3) / 2}px)`,
        }}
        drag={!reduceMotion}
        dragMomentum
        dragElastic={0}
        onDragStart={() => {
          isDragging.current = true;
          pauseAuto();
          moved.current = false;
          dragStart.current = { x: x.get(), y: y.get() };
        }}
        onDrag={() => {
          const dx = Math.abs(x.get() - dragStart.current.x);
          const dy = Math.abs(y.get() - dragStart.current.y);
          if (dx > 6 || dy > 6) moved.current = true;
        }}
        onDragEnd={() => {
          isDragging.current = false;
          wrapDrag();
          scheduleAutoResume();
        }}
      >
        {tiles.map(({ ox, oy }) => (
          <div
            key={`${ox}-${oy}`}
            className="absolute"
            style={{
              left: (ox + 1) * tileW,
              top: (oy + 1) * tileH,
              width: tileW,
              height: tileH,
            }}
          >
            {filled.map((item, index) => {
              const col = index % cols;
              const row = Math.floor(index / cols);

              return (
                <Link
                  key={`${ox}-${oy}-${item.id}-${index}`}
                  href={href}
                  className={cn(
                    "group absolute z-0 overflow-hidden bg-brand-ink",
                    "outline outline-solid outline-0 outline-black outline-offset-0",
                    "transition-[transform,outline-width] duration-200 ease-out",
                    "hover:z-20 hover:outline-4 focus-visible:z-20 focus-visible:outline-4",
                    !reduceMotion && "hover:scale-[1.06]"
                  )}
                  style={{
                    width: cardW,
                    height: cardH,
                    left: col * cellW,
                    top: row * cellH,
                  }}
                  onClick={(e) => {
                    if (moved.current) {
                      e.preventDefault();
                    }
                  }}
                  draggable={false}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={`${cardW}px`}
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 to-transparent px-3 pt-8 pb-2.5">
                    <span className="font-display text-sm font-semibold tracking-wide text-white">
                      {item.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </motion.div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 bg-white/80 px-3 py-1 font-body text-xs tracking-wide text-brand-steel backdrop-blur-sm">
        {reduceMotion
          ? "Click to open gallery"
          : "Drifts slowly · Drag to explore · Click to open gallery"}
      </p>
    </div>
  );
}
