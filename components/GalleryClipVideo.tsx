"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type GalleryClipVideoProps = {
  src: string;
  title: string;
};

export default function GalleryClipVideo({ src, title }: GalleryClipVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
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
    <div className="relative aspect-[4/3] overflow-hidden bg-brand-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
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
        className="absolute right-3 bottom-3 z-10 inline-flex h-9 w-9 items-center justify-center border border-white/30 bg-brand-ink/50 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-brand-ink/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
