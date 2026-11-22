import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Reviews",
  description:
    "Read TGA Handyman reviews on Yelp and see recent repair photos from Las Vegas and Clark County.",
  path: "/pages/reviews",
});

const photos = [43, 45, 47, 49, 51];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="TGA Handyman"
        title="Reviews"
        description="Clients leave feedback on Yelp. The photos below are from recent repair visits."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="grid grid-cols-1 items-center gap-10 border border-brand-ink/10 bg-brand-mist p-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-wide text-brand-ink">
              Read the reviews on Yelp
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              We do not write our own testimonials. The public record is the Yelp page for TGA
              Handyman Services in Las Vegas.
            </p>
            <a
              href={siteConfig.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center bg-brand-green px-6 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-green-bright"
            >
              <Star className="mr-2 h-4 w-4" aria-hidden />
              View on Yelp
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>
          <p className="font-body text-brand-navy/80">
            1857 Citation Cir
            <br />
            Las Vegas, NV 89123
          </p>
        </section>

        <section className="mt-16" aria-labelledby="review-photos">
          <h2 id="review-photos" className="font-display text-2xl font-bold tracking-wide text-brand-ink">
            Recent repair photos
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {photos.map((id) => (
              <div key={id} className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
                <Image
                  src={`/gallery-${id}.webp`}
                  alt={`TGA Handyman project photo ${id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <PageContact title="Want the same kind of visit?" />
    </main>
  );
}
