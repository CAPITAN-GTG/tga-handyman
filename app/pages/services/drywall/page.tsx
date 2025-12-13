'use client'
import React from 'react';
import { Paintbrush2, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function DrywallRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/drywall.webp"
            alt="Professional drywall repair services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-white mb-4">
              <Paintbrush2 className="h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">Drywall Repairs</h1>
            </div>
            <p className="mt-4 text-lg text-green-50 max-w-3xl">
              In over 18 years of handyman experience, we've seen every size and type of drywall damage. 
              At TGA Handyman Services LLC we are committed to providing value to our clients and a timely 
              service that meets the highest of quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Drywall Repair Services</h2>
            <p className="text-gray-600">
              We've seen cracks from settling homes, doorknob holes, holes made on accident by kids or adults, 
              as well as drywall anchor holes and moisture damage. Different types of drywall damage require 
              different types of repair. After years of experience, we can confidently tackle any drywall repair 
              project except for repairs on a flooded property.
            </p>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">What to Expect</h3>
              <p className="text-gray-600 mb-6">
                Drywall repairs involve cutting out the old drywall, adding struts between the studs to make it 
                possible to attach the new drywall with screws, and taking care of the joints. The joints can be 
                covered with drywall tape or with mudding. When mudding is used, we then have to use a sander so 
                that any imperfections in the mudding is smoothened before the wall is painted over.
              </p>
              <p className="text-gray-600">
                We are capable of matching the color and texture of your existing wall, but as with these types 
                of repairs, there is a chance it won't always come out exactly the same. Our team members will 
                always work with you to explain the specifics of your situation so that you know what to expect.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Important Information</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  In the unfortunate event that your home has recently been flooded we will have to put you in 
                  touch with flood damage specialists that can properly dry the home and validate that it is ready 
                  for repairs before we begin. Replacing drywall in a moist home will lead to it becoming moist 
                  and moldy soon-after, which is why it should never be done.
                </p>
                <p className="text-gray-600">
                  We can also paint an entire wall on which drywall is replaced, if you want to make sure that 
                  it all looks even. Last but not least, we clean up after ourselves by vacuuming and disposing 
                  of any debris that may accumulate in the process of repairing drywall.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Services Include</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Crack Repairs from Settling
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Wall Hole Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Texture Matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Color Matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Complete Wall Repairs
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Need drywall repairs in Las Vegas? Contact us for a free assessment and quote. 
                We'll work with you to explain your options so that you can make the decision 
                that makes the most sense for you and your budget.
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