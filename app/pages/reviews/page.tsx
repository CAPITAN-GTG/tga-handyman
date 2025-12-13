'use client';

import React, { useState } from 'react';
import { Star, ExternalLink, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projectImages = [
    { src: '/projects-1.webp', alt: 'TGA Handyman Project 1' },
    { src: '/projects-2.webp', alt: 'TGA Handyman Project 2' },
    { src: '/projects-3.webp', alt: 'TGA Handyman Project 3' },
    { src: '/projects-4.webp', alt: 'TGA Handyman Project 4' },
    { src: '/projects-5.webp', alt: 'TGA Handyman Project 5' },
  ];

  const handlePreviousImage = () => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex(img => img.src === selectedImage);
    const previousIndex = currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1;
    setSelectedImage(projectImages[previousIndex].src);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex(img => img.src === selectedImage);
    const nextIndex = currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(projectImages[nextIndex].src);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Pattern */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Reviews
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
              See what our valued customers have to say about their experience with TGA Handyman
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Yelp Reviews Section */}
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900">Read Our Reviews on Yelp</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                  We take pride in our work and the satisfaction of our customers. Check out our reviews on Yelp 
                  to see what others are saying about our services.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <a
                    href="https://www.yelp.com/biz/tga-handyman-services-las-vegas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-md shadow-sm"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    View on Yelp
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-green-500" />
                  <div>
                    <p className="font-medium text-lg">Visit us at:</p>
                    <p className="text-lg">1857 Citation Cir,</p>
                    <p className="text-lg">Las Vegas, NV 89123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery Section */}
          <div className="p-8 md:p-12 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recent Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {projectImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative h-48 overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-green-800 rounded-lg shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Experience Our Service?</h2>
            <p className="mt-4 text-lg text-green-100">
              Join our satisfied customers and let us help you with your next project
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/contact-us"
                className="inline-flex items-center px-8 py-3 text-base font-semibold text-green-900 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-md"
              >
                Contact Us
              </Link>
              <Link
                href="/pages/services/areas"
                className="inline-flex items-center px-8 py-3 text-base font-semibold text-white border-2 border-white hover:bg-white/10 transition-colors duration-300 rounded-md"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Left Arrow */}
            <button
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 hidden md:block"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 hidden md:block"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            
            <div className="relative w-full h-full max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Project Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.src)}
                  className={`w-3 h-3 rounded-full ${
                    selectedImage === image.src ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews; 