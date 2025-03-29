'use client';

import React from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';

const Reviews = () => {
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

          {/* Map Section */}
          <div className="w-full h-[500px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.7098530676087!2d-115.1191397!3d36.0741333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0bd693e5389%3A0x6b8f4f6c1a99b882!2s1857%20Citation%20Cir%2C%20Las%20Vegas%2C%20NV%2089123!5e0!3m2!1sen!2sus!4v1710901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
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
    </div>
  );
};

export default Reviews; 