"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Volume2 } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate array of 33 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
    src: i < 30 ? `/gallery-${i + 1}.png` : `/landscape_${i - 29}.png`,
    alt: i < 30 ? `Gallery Project ${i + 1}` : `Landscape Project ${i - 29}`,
    description: i < 30 ? `Professional construction and design showcase ${i + 1}` : `Stunning landscape design and outdoor spaces ${i - 29}`
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
      images: galleryImages.slice(25, 33)
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section */}
      <div className="relative w-full bg-black">
        {/* Background Image Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{ 
            backgroundImage: 'url("https://img.youtube.com/vi/kOuZ8d6liro/maxresdefault.jpg")',
            filter: 'blur(8px) brightness(0.5)'
          }}
        />
        
        {/* Video Container with Responsive Padding */}
        <div className="relative max-w-[1920px] mx-auto">
          <div className="w-full">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative pt-[56.25%] lg:pt-[50%] xl:pt-[45%] 2xl:pt-[40%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/kOuZ8d6liro?autoplay=${isPlaying ? '1' : '0'}&loop=1&playlist=kOuZ8d6liro&controls=1&showinfo=0&rel=0`}
                title="TGA Handyman Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer group"
                  onClick={handlePlay}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-6 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Volume2 className="w-5 h-5" />
                      <span className="text-sm">Click to play with sound</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Hero Section with Pattern */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-xl text-gray-100 max-w-3xl mx-auto">
              Browse through our portfolio of completed projects and transformations
            </p>
          </div>
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
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.category}
                </h2>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
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