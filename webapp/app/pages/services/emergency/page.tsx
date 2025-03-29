'use client'
import React from 'react';
import { AlertTriangle, PhoneIcon, Clock, Shield, Zap, Wrench } from 'lucide-react';

const emergencyServices = [
  {
    title: "24/7 Rapid Response",
    description: "Our emergency team is available around the clock to handle urgent repair needs.",
    icon: Clock,
  },
  {
    title: "Damage Prevention",
    description: "Quick action to prevent further damage to your property and belongings.",
    icon: Shield,
  },
  {
    title: "Immediate Solutions",
    description: "Professional solutions for urgent situations requiring immediate attention.",
    icon: Zap,
  },
  {
    title: "Expert Team",
    description: "Skilled technicians equipped to handle any emergency repair situation.",
    icon: Wrench,
  },
];

export default function EmergencyServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Emergency CTA */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/90">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Emergency Response</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Emergency Services When You Need Them Most
              </h1>
              
              <p className="text-lg text-gray-300 max-w-xl">
                Don't wait until it's too late. Our emergency response team is available 24/7 
                to handle urgent situations and prevent further damage to your property.
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
              <div className="relative">
                <div className="absolute -inset-1 bg-green-500 rounded-lg blur-lg opacity-30 animate-pulse" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg space-y-6">
                  <h3 className="text-xl font-semibold text-white">Emergency Services Include:</h3>
                  <ul className="space-y-4">
                    {[
                      "Water Damage Response",
                      "Urgent Repairs",
                      "Storm Damage",
                      "Structural Issues",
                      "24/7 Response Team"
                    ].map((service, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <span className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
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
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Contact Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-black to-black" />
          
          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Need Emergency Assistance?
                </h2>
                <p className="text-gray-300">
                  Don't hesitate to contact us for immediate assistance. Our emergency response 
                  team is ready 24/7 to help with your urgent repair needs.
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
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">24/7 Availability</h4>
                      <p className="text-gray-400 text-sm">Round-the-clock emergency response</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                    <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Rapid Response</h4>
                      <p className="text-gray-400 text-sm">Quick arrival to your location</p>
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