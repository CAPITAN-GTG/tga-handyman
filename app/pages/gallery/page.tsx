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
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_BLOB_URL;

  // Generate array of 41 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 41 }, (_, i) => ({
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
      images: galleryImages.slice(30, 41)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section - Full Width Separator */}
      {videoUrl && (
        <div className="relative w-full bg-black overflow-hidden">
          {/* Video Container - Edge to Edge with Max Height */}
          <div className="relative w-full aspect-video" style={{ maxHeight: '600px' }}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted={false}
              playsInline
              controls
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
        </div>
      )}

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