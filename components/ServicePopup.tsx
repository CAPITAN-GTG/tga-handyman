"use client";

import { useEffect, type ElementType } from "react";
import { X } from "lucide-react";

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  services: string[];
  icon: ElementType;
}

export default function ServicePopup({
  isOpen,
  onClose,
  title,
  services,
  icon: Icon,
}: ServicePopupProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-popup-title"
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <button
          type="button"
          className="fixed inset-0 bg-brand-ink/60 transition-opacity"
          aria-label="Close dialog"
          onClick={onClose}
        />

        <div className="relative w-full max-w-lg overflow-hidden border border-brand-silver/50 bg-white shadow-[0_24px_60px_-28px_rgba(10,10,10,0.45)] motion-safe:animate-[modalIn_0.3s_ease-out_forwards]">
          <div className="h-1 w-full bg-brand-green" aria-hidden />

          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-brand-steel transition-colors duration-200 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-6 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8">
            <div className="flex items-start gap-4 pr-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brand-silver/70 bg-brand-mist text-brand-green">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-steel">
                  Service details
                </p>
                <h3
                  id="service-popup-title"
                  className="mt-1 font-display text-2xl font-semibold tracking-wide text-brand-ink"
                >
                  {title}
                </h3>
                <ul className="mt-5 space-y-2.5 border-t border-brand-silver/50 pt-5">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 font-body text-brand-navy/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-green" aria-hidden />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
