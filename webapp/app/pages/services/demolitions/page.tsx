'use client'
import React from 'react';
import { Hammer, PhoneIcon } from 'lucide-react';

export default function DemolitionServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white mb-4">
            <Hammer className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Demolition Services</h1>
          </div>
          <p className="mt-4 text-lg text-green-50 max-w-3xl">
            A demolition service may sound like the type of thing that only takes place on a home or 
            business that can no longer be salvaged. However, the opposite is true. Demolitions can 
            take place in controlled environments so that only a specific area of a property is removed.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Demolition Services</h2>
            <p className="text-gray-600">
              Many homeowners may experience the need to demolition a rotting patio at some point or another. 
              They may also have the need to demolition a shed or other part of the home that no longer meets 
              the Las Vegas or Henderson code. At TGA Handyman Services LLC we have over 18 years of experience 
              and are able to meet your demolition needs.
            </p>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Bathroom Demolition Service</h3>
              <p className="text-gray-600">
                When you need to demolition a bathroom in order to remodel it, we can help you with the 
                entire process. Our company can assist with renting a dumpster, removing cabinets, bathrooms, 
                tubs, shower enclosures, and lighting fixtures. We are also experienced in removing flooring 
                and drywall.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Kitchen Demolition Service</h3>
              <p className="text-gray-600">
                When you need to remodel your kitchen, you're likely looking for a service that is timely, 
                clean, and reliable. At TGA Handyman Services LLC, we are experienced in removing appliances, 
                cabinets, and kitchen islands. Our technicians take great care to finish reliably and on time 
                so that your remodeling project can start as soon as possible. We all know how important the 
                kitchen is and want to make sure that you're able to cook in it and share meals again.
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Deck and Patio Demolition</h3>
              <p className="text-gray-600">
                If your deck's fasteners have started popping, or you're noticing soft or bouncy boards, 
                then it may be time to tear down your deck. At TGA Handyman Services LLC we can inspect 
                your current patio or deck to make sure that it truly is not repairable before we get 
                started with the demolition. If we find that it can be repaired, we will let you know 
                so that you can compare the cost of removing it versus fixing it.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Demolition Services Include</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Bathroom Demolition
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Kitchen Demolition
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Deck and Patio Removal
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Free-standing Garages
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Docks and Gazebos
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Need demolition services in Las Vegas or Henderson? Contact us to learn more about our 
                services or to get started with your project. Our Customer Care team is ready to help 
                assess your needs.
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