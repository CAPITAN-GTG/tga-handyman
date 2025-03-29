import React from 'react'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  { number: 250, suffix: 'k', label: 'Projects completed' },
  { number: 150, suffix: 'k', label: 'Clients' },
  { number: 15, suffix: '', label: 'Employees' },
  { number: 60, suffix: '+', label: 'Services Offered' },
];

const Dream = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
        style={{ backgroundImage: 'url("/dream.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Dream Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Title Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">You dream it.</span>
                <span className="block mt-2 text-green-500">We can build it.</span>
              </h2>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Building solid foundations for an ever-changing world
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/services/areas"
                className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/pages/contact-us"
                className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-black bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center space-y-2"
                >
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-500">
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm" />
      </div>
    </section>
  )
}

export default Dream