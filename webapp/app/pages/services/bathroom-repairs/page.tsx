'use client'
import React from 'react';
import { Droplets, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function BathroomRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/bathroom-repairs.jpg"
            alt="Professional bathroom repair services"
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
              <h1 className="text-3xl font-bold tracking-tight">Bathroom Repairs</h1>
            </div>
            <p className="mt-4 text-lg text-green-50 max-w-3xl">
              Bathrooms are the second most used part of a home, coming in right after the kitchen. 
              At TGA Handyman Services we have the experience, knowledge, and tools to repair any 
              bathroom issue that you may be experiencing.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Bathroom Repair Services</h2>
            <p className="text-gray-600">
              Even though bathrooms get used less than kitchens, they end up having the most wear and tear 
              due to the moisture that they are exposed to on a daily basis. Our experienced team is here 
              to help with any bathroom repair needs you may have.
            </p>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Core Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Recaulking</h4>
                  <p className="text-gray-600">
                    Water can cause caulk to erode or become moldy over time. If your caulk erodes too much, 
                    then water can leak into your walls which can damage wood and lead to even bigger problems. 
                    Our technicians can professionally assess and repair any caulking issue, removing the old 
                    caulk and recaulking shower tiles or tub as needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tile Repairs</h4>
                  <p className="text-gray-600">
                    If you have chipped tiles, then you can give us a call and we'll get it fixed for you as 
                    soon as possible. We're experienced in fixing both bathroom floor tiles and shower tiles.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Shower Door Repairs</h4>
                  <p className="text-gray-600">
                    Need your shower door fixed because the hinges are faulty, or the track no longer protects 
                    against water leakage? We can help repair your shower door or even replace it depending on 
                    your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Shower Head Servicing</h4>
                  <p className="text-gray-600">
                    When you jump in the shower to head off to work and find yourself fighting with a leaking 
                    or clogged shower head, it can be really frustrating. If your shower head is clogged due 
                    to calcification, we can also replace it with one that you pick out.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Plumbing Repairs</h4>
                  <p className="text-gray-600">
                    Let our professional technicians promptly fix your broken faucets, tubs, or toilets so that 
                    you don't have to stress about the potential water damage that comes with leaky plumbing. 
                    We can also install replacement faucets or plumbing fixtures for your bathroom.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Expertise</h3>
              <p className="text-gray-600 mb-4">
                We are also experienced in:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Toilet repairs and installation</li>
                <li>• Drywall repair and finishing</li>
                <li>• Light fixture repairs</li>
                <li>• General bathroom maintenance</li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Need bathroom repairs in Las Vegas or Henderson? Contact us for a free consultation 
                and estimate. Our Customer Care team is ready to help.
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