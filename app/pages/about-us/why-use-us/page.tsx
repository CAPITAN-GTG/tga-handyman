"use client";

import { Shield, Clock, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WhyUseUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Pattern */}
      <div className="relative bg-green-700">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-green-100 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-green-300">/</span>
                </li>
                <li>
                  <Link href="/pages/about-us" className="text-green-100 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <span className="text-green-300">/</span>
                </li>
                <li>
                  <span className="text-white">Why Use Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold text-white">Why Choose TGA Handyman</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-800 leading-relaxed">
            With over 18 years of handyman experience, TGA Handyman delivers unmatched quality and reliability 
            to home and business owners throughout Las Vegas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <div className="flex items-start gap-3 mb-2">
              <Clock className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <h3 className="font-semibold text-green-900">24/7 Availability</h3>
            </div>
            <p className="text-sm text-gray-600 ml-8">
              Our Customer Care team is always ready for emergencies.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <div className="flex items-start gap-3 mb-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <h3 className="font-semibold text-green-900">Convenient Booking</h3>
            </div>
            <p className="text-sm text-gray-600 ml-8">
              Easy scheduling that fits your busy lifestyle.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <div className="flex items-start gap-3 mb-2">
              <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <h3 className="font-semibold text-green-900">Safety First</h3>
            </div>
            <p className="text-sm text-gray-600 ml-8">
              COVID-19 conscious team with strict safety protocols.
            </p>
          </div>
        </div>

        {/* Professional Services Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-green-900 mb-4">
            Professional Services, Fair Prices
          </h2>
          <div className="bg-white border border-green-200 rounded-lg p-6">
            <p className="text-gray-700 text-sm">
              High-quality tradesman services with transparent pricing. Hourly rates for small jobs, 
              fixed quotes for larger projects - always fair and competitive.
            </p>
          </div>
        </div>

        {/* Our Guarantee Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-green-900 mb-4">Our Guarantee</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              We employ only skilled tradesmen with proper certifications and equip them with the best tools.
              Our 12-month defect warranty ensures your peace of mind.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-green-600 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-3">Get Started Today</h2>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-green-100 mb-1">Call us at</p>
              <div className="flex flex-row items-center gap-2">
                <a 
                  href="tel:8185543033" 
                  className="text-base font-semibold text-white hover:text-green-100"
                >
                  (818) 554-3033
                </a>
                <span className="text-green-200">|</span>
                <a 
                  href="tel:7027553316" 
                  className="text-base font-semibold text-white hover:text-green-100"
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