"use client"
import React, { useRef, useState } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section */}
      <div 
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted={false}
          preload="auto"
        >
          <source src="/video-compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause Button Overlay - Only visible on hover */}
        {isHovering && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        )}
        
        {/* Volume Controls - Always visible in bottom right */}
        <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-lg flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="text-white"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
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