"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    animate(
      "span",
      {
        opacity: 1,
        filter: filter && !reduce ? "blur(0px)" : "none",
      },
      {
        duration: reduce ? 0 : duration || 1,
        delay: reduce ? 0 : stagger(0.12),
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-body font-normal", className)}>
      <motion.div ref={scope} className="leading-relaxed tracking-wide">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 motion-reduce:opacity-100 motion-reduce:blur-none"
            style={{
              filter: filter ? "blur(8px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
