"use client";

import { Wrench, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  "Interior and exterior painting",
  "Kitchen and bathroom repairs",
  "Drywall repairs and installation",
  "Door installation and repair",
  "Window repairs",
  "Flooring installation and repairs",
  "Cabinet installation and repairs",
  "Furniture assembly",
  "Shelving installation",
  "Light fixture installation",
  "Minor electrical repairs",
  "Minor plumbing repairs",
  "General household repairs"
];

export default function HandymanServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-white mb-4">
            <Wrench className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Professional Handyman Services</h1>
          </div>
          <p className="mt-4 text-lg text-green-50 max-w-3xl">
            With over 18 years of experience, TGA Handyman provides comprehensive handyman services 
            for both residential and commercial properties in Las Vegas. Our skilled technicians are 
            equipped to handle a wide range of repairs and improvements.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Expert Handyman Services for Your Home
              </h2>
              <p className="text-gray-600">
                Whether you need minor repairs or larger home improvements, our experienced handymen 
                are here to help. We take pride in delivering quality workmanship and ensuring your 
                complete satisfaction with every project we undertake.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services Include</h3>
              <ul className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Handyman Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Experienced Professionals</p>
                    <p className="text-gray-600">
                      Our handymen have extensive experience in all aspects of home repair and maintenance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Quality Workmanship</p>
                    <p className="text-gray-600">
                      We take pride in our work and ensure every job is completed to the highest standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Timely Service</p>
                    <p className="text-gray-600">
                      We respect your time and work efficiently to complete projects on schedule.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Clean and Professional</p>
                    <p className="text-gray-600">
                      Our team always cleans up after completing work and treats your property with respect.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  1. Initial consultation to understand your needs
                </p>
                <p className="text-gray-600">
                  2. Detailed assessment of the work required
                </p>
                <p className="text-gray-600">
                  3. Clear pricing and timeline provided
                </p>
                <p className="text-gray-600">
                  4. Professional execution of the work
                </p>
                <p className="text-gray-600">
                  5. Final inspection and cleanup
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your handyman service needs. We offer free estimates and 
              can help you plan your home improvement or repair project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Call us at</p>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-medium">(702) 755-3316</p>
                    <p className="text-gray-900 font-medium">(818) 554-3033</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
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