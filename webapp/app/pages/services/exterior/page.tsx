'use client'
import React from 'react';
import { Building, PhoneIcon } from 'lucide-react';

export default function ExteriorServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <Building className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Exterior Services</h1>
          </div>
          <p className="mt-4 text-lg text-green-50 max-w-3xl">
            Enhance your property's curb appeal and protect it from the elements with our 
            comprehensive exterior services. We deliver quality workmanship for all exterior needs.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Professional Exterior Services</h2>
            <p className="text-gray-600">
              Our experienced team provides a full range of exterior services to maintain and 
              improve your property's appearance and structural integrity. We use high-quality 
              materials and proven techniques for lasting results.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Exterior Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Siding Installation & Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Window & Door Installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Exterior Painting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Deck & Patio Construction
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Weatherproofing
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              Ready to improve your property's exterior? Contact us for a detailed consultation 
              and estimate. Our team is ready to enhance your home's curb appeal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-medium">(702) 755-3316</p>
                    <p className="text-gray-900 font-medium">(818) 554-3033</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  onClick={() => window.location.href = 'tel:7027553316'}
                >
                  Call (702)
                </button>
                <button 
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  onClick={() => window.location.href = 'tel:8185543033'}
                >
                  Call (818)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 