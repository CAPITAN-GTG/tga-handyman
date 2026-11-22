"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryHeroVideoProps = {
  src: string;
  poster?: string;
  title: string;
  className?: string;
};

export default function GalleryHeroVideo({
  src,
  poster,
  title,
  className,
}: GalleryHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.defaultMuted = false;
    video.playsInline = true;

    const play = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can fail until user interacts; mute button still works.
      }
    };

    play();
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    if (!muted) {
      void video.play().catch(() => undefined);
    }
  }, [muted]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-brand-ink", className)}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        poster={poster}
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={() => setMuted((current) => !current)}
        className="absolute right-4 bottom-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-white/30 bg-brand-ink/50 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-brand-ink/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:bottom-6"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
