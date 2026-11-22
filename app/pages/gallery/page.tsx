import Image from "next/image";
import GalleryHeroVideo from "@/components/GalleryHeroVideo";
import GalleryClipVideo from "@/components/GalleryClipVideo";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Project Gallery",
  description:
    "Photos and clips of handyman repairs by TGA Handyman in Las Vegas and Clark County.",
  path: "/pages/gallery",
});

const images = Array.from({ length: 11 }, (_, index) => {
  const id = 42 + index;
  return {
    src: `/gallery-${id}.webp`,
    alt: `TGA Handyman repair photo ${id}`,
  };
});

const groups = [
  {
    category: "Fixtures & finishes",
    description: "Lights, hardware, and the finished side of a repair.",
    images: images.slice(0, 4),
  },
  {
    category: "Walls & interiors",
    description: "Patches, paint, and interior work around the valley.",
    images: images.slice(4, 8),
  },
  {
    category: "Recent jobs",
    description: "A few more visits from the current gallery set.",
    images: images.slice(8),
  },
];

const clipVideos = [
  {
    title: "Project clip 1",
    src: "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-1.mp4",
  },
  {
    title: "Project clip 2",
    src: "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-13.mp4",
  },
  {
    title: "Project clip 3",
    src: "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-26.mp4",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-brand-mist">
      <section className="relative w-full overflow-hidden bg-brand-ink" aria-label="Gallery highlight reel">
        <div className="relative h-[min(70vh,520px)] w-full sm:h-[min(75vh,600px)] lg:h-[min(80vh,680px)]">
          <GalleryHeroVideo src="/video.mp4" poster="/gallery-43.webp" title="TGA Handyman work in action" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-20">
          {groups.map((project, projectIndex) => (
            <section key={project.category} aria-labelledby={`gallery-${projectIndex}`}>
              <div className="max-w-2xl">
                <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  Gallery
                </p>
                <h2
                  id={`gallery-${projectIndex}`}
                  className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
                >
                  {project.category}
                </h2>
                <p className="mt-3 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
                {project.images.map((image, imageIndex) => (
                  <div key={image.src} className="relative aspect-[4/3] overflow-hidden border border-brand-silver/40 bg-white">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={projectIndex === 0 && imageIndex < 2}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="project-videos-heading">
            <div className="max-w-2xl">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                On site
              </p>
              <h2
                id="project-videos-heading"
                className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
              >
                Project clips
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-brand-navy/75">
                Short loops from recent work. Unmute a clip to hear audio.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {clipVideos.map((video) => (
                <div key={video.src} className="border border-brand-silver/40 bg-white">
                  <GalleryClipVideo src={video.src} title={video.title} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
