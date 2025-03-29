"use client";

import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { number: 250, suffix: 'k', label: 'Projects completed' },
  { number: 150, suffix: 'k', label: 'Clients' },
  { number: 15, suffix: '', label: 'Employees' },
  { number: 60, suffix: '+', label: 'Services Offered' },
];

const StatsHero = () => {
  return (
    <section className="relative bg-black py-24">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-2 p-6"
            >
              <div className="flex items-baseline justify-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-green-500">
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHero; 