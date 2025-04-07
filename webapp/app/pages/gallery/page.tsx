"use client"
import React, { useRef, useState, useEffect } from 'react';
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

interface Video {
  title: string;
  description: string;
  src: string;
}

const Gallery: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate array of 33 gallery images
  const galleryImages: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
    src: i < 30 ? `/gallery-${i + 1}.png` : `/landscape_${i - 29}.png`,
    alt: i < 30 ? `Gallery Project ${i + 1}` : `Landscape Project ${i - 29}`,
    description: i < 30 ? `Professional construction and design showcase ${i + 1}` : `Stunning landscape design and outdoor spaces ${i - 29}`
  }));

  const videos: Video[] = [
    {
      title: "Our Work in Action",
      description: "Watch our skilled team transform spaces and bring visions to life",
      src: "/video.mp4"
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log('Video can play');
      setIsVideoLoaded(true);
      // Try to play without catching errors here
      video.play();
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setIsVideoLoaded(true);
    };

    const handleLoadStart = () => {
      console.log('Video load started');
    };

    const handleError = (e: Event) => {
      const videoElement = e.target as HTMLVideoElement;
      console.error('Video error:', {
        error: videoElement.error,
        networkState: videoElement.networkState,
        readyState: videoElement.readyState,
        currentSrc: videoElement.currentSrc,
      });
      setVideoError(true);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const retryVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      setVideoError(false);
      setIsVideoLoaded(false);
      
      // Force reload the video
      video.load();
      
      // Try playing after a short delay
      setTimeout(() => {
        video.play().catch(e => {
          console.error('Retry play failed:', e);
          setVideoError(true);
        });
      }, 1000);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

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
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black">
        <div className="relative w-full h-full">
          {videoError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <p className="text-lg">Unable to load video. Please try again.</p>
              <button
                onClick={retryVideo}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <div className="absolute inset-0">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  muted={isMuted}
                  loop
                  controls={false}
                  preload="auto"
                  poster="/video-poster.png"
                >
                  <source 
                    src="/video.mp4" 
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white">Loading video...</div>
                </div>
              )}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  onClick={toggleMute}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12a1 1 0 01-1.707.707L5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
          <div className="absolute inset-0 bg-black/20 pointer-events-none">
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Work in Action</h3>
              <p className="text-lg">Watch our skilled team transform spaces and bring visions to life</p>
            </div>
          </div>
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