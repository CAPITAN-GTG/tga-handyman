"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";



const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={
          className ??
          "cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        }
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_0.8rem)] z-50 -translate-x-1/2 transform pt-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-sm border border-brand-silver/50 bg-white shadow-[0_16px_40px_-20px_rgba(10,10,10,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <motion.div layout className="h-full w-max max-w-[min(100vw-2rem,36rem)] overflow-hidden p-2">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={
        className ??
        "relative flex justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black"
      }
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  className,
  href = "#",
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={
        className ??
        "block px-3 py-2.5 font-body text-sm font-medium tracking-wide text-brand-navy transition-all duration-200 hover:translate-x-0.5 hover:bg-brand-mist hover:text-brand-green"
      }
    >
      {children}
    </Link>
  );
};
