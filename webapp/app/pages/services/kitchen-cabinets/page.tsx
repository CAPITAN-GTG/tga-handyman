'use client'
import React from 'react';
import { Box, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function KitchenCabinets() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/kitchen-repairs.jpg"
            alt="Professional kitchen cabinet services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-white mb-4">
              <Box className="h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">Kitchen Cabinets</h1>
            </div>
            <p className="mt-4 text-lg text-green-50 max-w-3xl">
              At TGA Handyman Services LLC we have over 18 years of experience repairing cabinets of any size and type. 
              Our trusted technicians offer premier cabinet repair and refacing services in the Las Vegas and Henderson area.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Cabinet Services</h2>
            <p className="text-gray-600">
              We're aware that the kitchen gets used the most in any home and that's why we make sure your cabinet repairs 
              and installations are built to last. It is this dedication to quality that has earned us a great reputation 
              with our clients over the years. We continue to hold ourselves accountable to the high standard of quality 
              that our clients have come to expect of us with every job.
            </p>
            <p className="text-gray-600">
              A question you might ask yourself before considering a repair or refacing is whether your cabinets are still 
              in a sturdy condition. Accessing the insides of your cabinets is also important, as is determining whether 
              you still like the current layout of your kitchen and countertops. If the answer is yes, then it would be 
              most economical to repair or reface your existing cabinets than it would be to undertake a remodeling project.
            </p>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Cabinet Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cabinet Repairs</h4>
                  <p className="text-gray-600">
                    Are you dealing with peeling laminate, broken hinges, or loose handles? We have the skills and 
                    equipment to get your cabinets functioning and looking great again in no time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cabinet Refacing</h4>
                  <p className="text-gray-600">
                    Refacing cabinets is a great way to freshen your kitchen without going through an expensive remodeling 
                    project that requires replacing cabinets and other surfaces. All you have to do is pick the door, knob, 
                    and pull-out designs for your cabinets/racks and we'll get everything else taken care of for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Lists */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Kitchen Cabinet Installation and Repairs</h3>
              <p className="text-gray-600 mb-4">
                When it comes to our custom kitchen cabinets and racks, we have a complete list of installation 
                and repair capabilities. This includes, but is not limited to:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Wine and Cutlery Racks</li>
                <li>• Custom Spice Racks</li>
                <li>• Lazy Susan Cabinets</li>
                <li>• Recycle Bin and Garbage Roll-out Racks</li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Custom Cabinet Installation & Repair</h3>
              <p className="text-gray-600 mb-4">
                If you're looking for custom cabinet installation or repair services that extend beyond the kitchen 
                then you're in the right place. We also have the tools and knowledge needed to install many types 
                of cabinets including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Entertainment Center Cabinets</li>
                <li>• Library Cabinets</li>
                <li>• Office Cabinets</li>
                <li>• Fireplace Mantels and Hearths</li>
                <li>• Garage Cabinets</li>
                <li>• Vanity Cabinets</li>
                <li>• Soft Close Hinges</li>
                <li>• Glass Door Cabinet Modification</li>
                <li>• Full Extension Roll Outs</li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your cabinets? Contact us for a free consultation and estimate. 
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
    </div>
  );
} 