'use client'
import React from 'react';
import { Droplets, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function BathroomServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/bathroom.jpg"
            alt="Luxury bathroom renovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-white mb-4">
              <Droplets className="h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">Bathroom Services</h1>
            </div>
            <p className="mt-4 text-lg text-green-50 max-w-3xl">
              If you're looking for the highest quality service to transform your bathroom in the Las Vegas and Henderson area, 
              then you've come to the right place. TGA Handyman Services LLC offers professional and affordable repairs with 
              a proven track record and over 18 years of experience.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Starting a Bathroom Replacement Project</h2>
            <p className="text-gray-600">
              If you're just changing out a toilet or a sink, that's a project that likely doesn't require many decisions 
              or planning on your part. We can help you fix any part of your bathroom, whether it's fixing leaky faucets, 
              plumbing, and or toilets.
            </p>
            <p className="text-gray-600">
              However, if you're adding a bathroom or completely remodeling an existing one, then you might feel overwhelmed 
              with the decisions you need to make in order to realize your vision. Our highly trained team is ready to assist 
              you from start to finish in your bathroom remodeling project. We always work with you to clearly explain your 
              options so that you know what's possible and within your budget.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Services Include</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Cabinet Installation and Refacing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Bathtub and Shower Enclosure Replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Light Fixtures and Wall Sockets
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Granite Countertop & Customized Vanity
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Complete Bathroom Remodeling
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h3>
              <p className="text-gray-600 mb-4">
                We have years of experience in:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Replacing sinks and faucets</li>
                <li>• Renovating walls and ceilings</li>
                <li>• Adding brand new bathrooms</li>
                <li>• Professional plumbing</li>
                <li>• Expert tiling</li>
                <li>• And much more!</li>
              </ul>
              <p className="text-gray-600">
                If you don't see a service that you need, give us a call. Our Customer Care team is ready to answer 
                your questions as they pertain to your specific needs.
              </p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your bathroom? Contact us for a free consultation and estimate. 
                Our team is ready to help bring your vision to life.
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
                      <p className="text-gray-900 font-medium">(747) 303-8403</p>
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
                    onClick={() => window.location.href = 'tel:7473038403'}
                  >
                    Call (747)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 