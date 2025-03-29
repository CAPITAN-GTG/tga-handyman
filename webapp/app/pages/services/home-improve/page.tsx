'use client'
import React from 'react';
import { HomeIcon, PhoneIcon, Sparkles, WashingMachine, Home } from 'lucide-react';

export default function HomeImproveServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <HomeIcon className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Home Improve Services</h1>
          </div>
          <p className="mt-4 text-lg text-green-50 max-w-3xl">
            With over 18 years of tradesman experience, TGA Handyman Services LLC can help you achieve your project goals.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Services Description */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-medium text-gray-900">Whole Home Renovations</h3>
              </div>
              <p className="text-gray-600">
                If you have a list of renovation projects to undertake, then you may be considering a project for renovating your entire home. For whole home renovations it's important to consider the design and execution of the entire project in a unified manner, and that's where we can help. We are a reliable partner for assessing renovation requirements, helping you understand build/design options, and providing budget estimates.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <WashingMachine className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-medium text-gray-900">Laundry Room</h3>
              </div>
              <p className="text-gray-600">
                If your home needs a fresh new laundry area or more storage space, then a upgrade could be a great option for you. We can install built-in cabinets and shelves that help you store supplies, laundry materials, coats, boots, and more, so that you don't have to trip over these things ever again.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-medium text-gray-900">Energy Efficient</h3>
              </div>
              <p className="text-gray-600">
                Las Vegas, Nevada is not easy on the utility bills for home and business owners. If you want to 'go green' as part of your next project to save on utility bills through efficient lighting, dual flush toilet kits, and new windows, then an energy efficiency project is likely underway within your home. Not only will you save money on your bills, but you'll also take part in helping the environment, improving the looks of your home, and increasing its value. This is truly a project in which you win on all fronts.
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8 h-fit">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-gray-600 mb-6">
              To get in touch with our Customer Care team for a quote or to schedule a booking, please give us a call.
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