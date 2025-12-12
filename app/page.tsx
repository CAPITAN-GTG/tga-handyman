"use client";

import { Lightbulb, Wrench, DoorClosed, TreePine, ArrowRight, Droplet, Building2, Home, Hammer, HardHat, Ruler, PaintBucket, WrenchIcon, Leaf, Droplets, Construction, Building, HomeIcon, Zap, DoorOpen, Trees, Wind } from 'lucide-react';
import Link from 'next/link';
import Welcome from '../components/Welcome';
import Dream from '../components/Dream';
import ContactForm from '../components/ContactForm';
import ServicePopup from '../components/ServicePopup';
import { useState } from 'react';

const services = [
  {
    title: 'Residential Construction',
    icon: HomeIcon,
    services: [
      'Remodels',
      'Drywall installation',
      'Paint',
      'Water damages',
      'Wall repairs',
      'Framing',
      'Drywall'
    ]
  },
  {
    title: 'Commercial Construction',
    icon: Building,
    services: [
      'Remodels',
      'Drywall installation',
      'Paint',
      'Water damages',
      'Wall repairs',
      'Framing',
      'Drywall',
      'External paint'
    ]
  },
  {
    title: 'Electrical & Lighting',
    icon: Zap,
    services: [
      'Minor Electrical',
      'GFCI replacements',
      'Plug replacements',
      'Light replacements',
      'Light bulbs replacement'
    ]
  },
  {
    title: 'General Maintenance',
    icon: WrenchIcon,
    services: [
      'Handyman services',
      'Cleaning interior buildings',
      'Pest control repairs',
      'Pest control inspections',
      'Building repairs interior and exterior',
      'And more'
    ]
  },
  {
    title: 'Doors & Gates',
    icon: DoorOpen,
    services: [
      'Welding repairs',
      'Doors replacement',
      'New doors installation',
      'Commercial doors installation',
      'Welding',
      'And more'
    ]
  },
  {
    title: 'Landscape Services',
    icon: Trees,
    services: [
      'Landscaping',
      'Tree trimming',
      'Clean yards lots etc.',
      'Paver installation',
      'Landscaping Bedrock conversions',
      'Tree removal'
    ]
  },
  {
    title: 'Plumbing',
    icon: Droplet,
    services: [
      'Emergency water leaks',
      'Minor plumbing issues',
      'Valve replacements'
    ]
  },
  {
    title: 'Demolition',
    icon: Hammer,
    services: [
      'Interior demolition',
      'Exterior demolition',
      'Debris removal',
      'Site clearing',
      'Selective demolition',
      'Full structure demolition'
    ]
  },
  {
    title: 'AC Service',
    icon: Wind,
    services: [
      'Repairs',
      'Fan Replacements',
      'Compressors',
      'Freon R22 410 A',
      'Freon R32',
      'Duct repairs and new installations'
    ]
  }
];

const FrontPage = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter grayscale"
            style={{ backgroundImage: 'url("/bg.png")' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center py-20">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white space-y-4">
                  <span className="block">Professional</span>
                  <span className="block text-green-500">Handyman Services</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                  Expert craftsmanship and reliable solutions for all your home improvement needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pages/contact-us"
                  className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-medium transition-colors duration-300 rounded-md"
                >
                  Get Started
                </Link>
                <Link
                  href="/pages/services/home-improve"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-medium transition-colors duration-300 rounded-md"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-2 gap-1 bg-white/5 backdrop-blur-sm p-1">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden bg-black/40 p-6 hover:bg-green-900/40 transition-colors duration-300 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex flex-col items-center text-center">
                    <service.icon className="h-8 w-8 text-green-500" />
                    <h3 className="mt-4 text-base sm:text-lg font-medium text-white">{service.title}</h3>
                    <div className="mt-4 inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Welcome />
      <Dream />
      <ContactForm />

      {/* Service Popup */}
      {selectedService && (
        <ServicePopup
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          services={selectedService.services}
          icon={selectedService.icon}
        />
      )}
    </main>
  );
};

export default FrontPage;