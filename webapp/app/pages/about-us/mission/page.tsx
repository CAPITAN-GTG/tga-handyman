"use client";

import { Users, Phone } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Reliable Service",
    description: "Providing reliable service at an affordable and fair price."
  },
  {
    title: "Responsibility",
    description: "Taking responsibility for our services and advice."
  },
  {
    title: "Transparency",
    description: "Full transparency in licensing, bonds, and insurance that we hold."
  },
  {
    title: "Quality Assurance",
    description: "Exemplary quality assurance program to ensure satisfactory workmanship."
  }
];

export default function CompanyMission() {
  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Hero Section with Pattern */}
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-green-400">/</span>
              </li>
              <li>
                <Link href="/pages/about-us" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-green-400">/</span>
              </li>
              <li>
                <span className="text-white">Our Mission</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Mission & Values</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Delivering excellence in every project, building trust through quality workmanship, 
            and setting the standard for professional handyman services in Las Vegas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-[1.02] transition-transform border border-green-100"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-green-50 rounded-lg p-8 mb-12 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Our Purpose</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We strive to be Las Vegas's most trusted handyman service provider, delivering 
              exceptional results through our team's expertise and dedication to customer satisfaction.
            </p>
            <p className="text-gray-700">
              Our success is measured by the positive feedback from our clients and the lasting 
              relationships we build within our community.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white border border-green-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Looking Forward</h2>
          <p className="text-gray-700 mb-4">
            We continue to strengthen our reputation in Las Vegas through exceptional service 
            and word-of-mouth recommendations from satisfied clients.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Ready to Work Together?</h3>
              <div className="flex flex-row items-center gap-4">
                <a 
                  href="tel:8185543033" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  (818) 554-3033
                </a>
                <span className="text-green-200">|</span>
                <a 
                  href="tel:7027553316" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  (702) 755-3316
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 