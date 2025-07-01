"use client";

import { Clock, Shield, Users, Wrench } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our Customer Care team is available every day of the year, around the clock."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All services are completed by licensed, bonded, and insured professionals."
  },
  {
    icon: Users,
    title: "Background Checked",
    description: "All our employees undergo thorough background checks for your peace of mind."
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description: "Over 18 years of experience in delivering quality handyman services."
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">/</span>
                </li>
                <li>
                  <span className="text-white">About Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-900 leading-relaxed">
            At TGA Handyman, we deliver top-tier commercial construction and facility maintenance 
            services throughout Las Vegas. With over 18 years of experience, our team of skilled 
            professionals handles everything from ground-up construction to routine maintenance, 
            ensuring quality results within budget and established timelines.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-green-500">
          {features.map((feature, index) => (
            <div key={index} className="bg-black p-6 group border-2 border-green-500 hover:bg-green-600 transition-colors duration-300">
              <feature.icon className="h-6 w-6 text-green-500 group-hover:text-white mb-4" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-black p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6">
            Contact us today for professional handyman services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:8185543033" 
              className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
            >
              (818) 554-3033
            </a>
            <a 
              href="tel:7027553316" 
              className="inline-flex items-center px-8 py-3 text-base font-medium text-black bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              (702) 755-3316
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;