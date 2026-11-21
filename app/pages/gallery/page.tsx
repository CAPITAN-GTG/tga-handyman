"use client"
import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface ProjectCategory {
  category: string;
  description: string;
  images: GalleryImage[];
}

const Gallery: React.FC = () => {
  const mainVideoUrl =
    "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/video.mp4";
  const clipVideos = [
    "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-1.mp4",
    "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-13.mp4",
    "https://v37zcerrkpzwy7ec.public.blob.vercel-storage.com/gallery-26.mp4",
  ];

  // Generate array of 52 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 52 }, (_, i) => ({
    src: `/gallery-${i + 1}.webp`,
    alt: `Gallery Project ${i + 1}`,
    description: `Professional construction and design showcase ${i + 1}`
  }));

  // Organize images into categories with more professional descriptions
  const projects: ProjectCategory[] = [
    {
      category: 'Commercial Projects',
      description: 'Professional commercial renovations and improvements',
      images: galleryImages.slice(0, 10)
    },
    {
      category: 'Residential Work',
      description: 'Quality home improvements and repairs',
      images: galleryImages.slice(10, 20)
    },
    {
      category: 'Maintenance & Repairs',
      description: 'Expert maintenance and repair services',
      images: galleryImages.slice(20, 25)
    },
    {
      category: 'Landscape & Outdoor',
      description: 'Beautiful outdoor spaces and landscaping',
      images: galleryImages.slice(25, 30)
    },
    {
      category: 'General Maintenance',
      description: 'Comprehensive maintenance and repair solutions',
      images: galleryImages.slice(30, 52)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section - main on top, clips as squares */}
      <div className="w-full bg-black overflow-hidden">
        <div className="relative w-full aspect-video" style={{ maxHeight: '600px' }}>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={mainVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-2 py-2 sm:gap-3 sm:px-4 sm:py-3 lg:gap-4 lg:px-8">
          {clipVideos.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-black">
              <video
                className="h-full w-full object-cover"
                src={src}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {projects.map((project, projectIndex) => (
            <section 
              key={projectIndex} 
              className="scroll-mt-16" 
              id={project.category.toLowerCase().replace(/\s+/g, '-')}
            >
              <div className="mb-4 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.category}
                </h2>
                <p className="text-sm text-gray-600">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gray-100"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={projectIndex === 0 && imageIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white/90 text-xs line-clamp-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;