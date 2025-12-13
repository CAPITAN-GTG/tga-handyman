'use client'
import React from 'react';
import { Utensils, PhoneIcon, Droplet, Hammer, Grid2X2, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function KitchenRepairs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/kitchen-repairs.webp"
            alt="Kitchen with wood cabinetry and island"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-white mb-4">
              <Utensils className="h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">Kitchen Remodeling Services</h1>
            </div>
            <p className="mt-4 text-lg text-green-50 max-w-3xl">
              The kitchen is the heart of many homes. You likely spend a lot of your time in the kitchen cooking and sharing meals, so it's obvious that you deserve the kitchen of your dreams.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Services Description */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <p className="text-gray-600 mb-6">
                At TGA Handyman Services LLC we can help you finish your kitchen from start to finish. We can assist at any stage from discovering what's feasible and within your budget to completing the actual remodeling.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Grid2X2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-medium text-gray-900">Floor Replacement Services</h3>
                  </div>
                  <p className="text-gray-600">
                    We are experienced in installing tile, linoleum, and replacing hardwood floors. The possibilities are endless when you call us for a job.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Hammer className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-medium text-gray-900">Replace or Refinish Countertops</h3>
                  </div>
                  <p className="text-gray-600">
                    Over years of use and tear, countertops can start to show their age. If you're completely remodeling your kitchen, you're likely to replace your countertops altogether. This is something we can help with and have a lot of experience in.
                    <br /><br />
                    If you are not going to replace the cabinets in your kitchen then you might be considering refinishing your countertops which can save up to 50% compared to replacing them. Depending on the existing condition of your countertops, and the material that they are made of, we may be able to refinish them.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Droplet className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-medium text-gray-900">Replace Faucets</h3>
                  </div>
                  <p className="text-gray-600">
                    Faucets can leak for a variety of reasons including loose or damaged O-rings, corroded valve seals, issues with the washer, or worn inlet/outlet seals. If you've been fighting your faucet over the years to stop it from leaking and just want it to work properly, you might be considering a faucet replacement.
                    <br /><br />
                    Our professional handymen are ready to help you take out old faucets and install new ones as soon as possible.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-medium text-gray-900">Add New Sinks</h3>
                  </div>
                  <p className="text-gray-600">
                    Our handymen can also install new sinks. Before you purchase your new sink, be sure to get in touch with us to confirm that the new one will meet your kitchen's specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-sm rounded-lg p-6 lg:mt-0 mt-8 h-fit">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Kitchen Remodeling Services in Las Vegas and Henderson</h3>
            <p className="text-gray-600 mb-6">
              We offer many remodeling services, including but not limited to fixing drywall, replacing appliances, and replacing cabinets. If you're interested in remodeling your kitchen to improve your property, or to increase its value for an upcoming sale, please give us a call to learn more about how we can help.
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