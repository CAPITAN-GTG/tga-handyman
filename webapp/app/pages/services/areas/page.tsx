'use client'
import React from 'react';
import { MapPin, PhoneIcon, Building2, Home, Wrench, CheckCircle2 } from 'lucide-react';

const serviceLocations = [
  {
    region: "Los Angeles County",
    cities: ["Los Angeles", "San Fernando", "Santa Clarita", "Glendale", "Burbank"],
    icon: Building2
  },
  {
    region: "Surrounding Counties",
    cities: ["Orange County", "San Bernardino County", "Ventura County"],
    icon: Home
  }
];

const benefits = [
  {
    title: "Local Expertise",
    description: "Deep knowledge of local building codes and regulations",
    icon: MapPin
  },
  {
    title: "Quick Response",
    description: "Fast service throughout our coverage area",
    icon: Wrench
  },
  {
    title: "Quality Service",
    description: "Consistent high-quality work across all locations",
    icon: CheckCircle2
  }
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/90">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Coverage Areas</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Serving All of California with Excellence
              </h1>
              
              <p className="text-lg text-gray-300 max-w-xl">
                From Los Angeles to surrounding counties, we provide comprehensive construction 
                and repair services throughout California. Find out if we serve your area.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:7027553316"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors group"
                >
                  <PhoneIcon className="h-5 w-5 group-hover:animate-pulse" />
                  <span>Call (702) 755-3316</span>
                </a>
                <a 
                  href="tel:8185543033"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call (818) 554-3033</span>
                </a>
              </div>
            </div>

            <div className="lg:flex items-center justify-end hidden">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-green-500 rounded-lg blur-lg opacity-30 animate-pulse" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.7797665558164!2d-115.1191397!3d36.0731333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0f4b30d6d03%3A0x9f9c4e0f5b6a246d!2s1857%20Citation%20Cir%2C%20Las%20Vegas%2C%20NV%2089123!5e0!3m2!1sen!2sus!4v1647894768825!5m2!1sen!2sus"
                    className="w-full h-[300px] rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
          <p className="text-lg text-gray-600">
            Our service coverage extends throughout California, with a focus on major metropolitan 
            areas and their surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceLocations.map((location, index) => {
            const Icon = location.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative h-full bg-white p-8 rounded-lg border border-gray-200 hover:border-transparent transition-colors duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {location.region}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {location.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="flex items-center gap-3 text-gray-600">
                        <span className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative h-full bg-white p-6 rounded-lg border border-gray-200 hover:border-transparent transition-colors duration-500">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-black to-black" />
          
          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Check Service Availability
                </h2>
                <p className="text-gray-300">
                  Not sure if we serve your area? Contact us to verify service availability 
                  in your location. We're happy to discuss your project needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.location.href = 'tel:7027553316'}
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call (702) 755-3316
                  </button>
                  <button 
                    onClick={() => window.location.href = 'tel:8185543033'}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call (818) 554-3033
                  </button>
                </div>
              </div>
              
              <div className="lg:flex justify-end hidden">
                <div className="w-full max-w-sm space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                    <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Wide Coverage</h4>
                      <p className="text-gray-400 text-sm">Serving all major areas in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                    <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Service Guarantee</h4>
                      <p className="text-gray-400 text-sm">Quality work in every location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 