"use client";

import { Disclosure, Transition, Menu } from '@headlessui/react';
import { 
  Menu as MenuIcon, 
  X,
  Home,
  Users,
  Wrench,
  Star,
  Image as ImageIcon,
  PhoneCall,
  ChevronDown,
  Home as HomeIcon,
  Utensils,
  Droplets,
  Box,
  Paintbrush2,
  Hammer,
  PaintBucket,
  Building,
  Building2,
  AlertTriangle,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';
import React, { useEffect, useState } from 'react';

const aboutUsOptions = [
  { name: 'Our Company Mission', href: '/pages/about-us/mission', icon: Users, category: 'about' },
  { name: 'Why Use Us', href: '/pages/about-us/why-use-us', icon: Star, category: 'about' },
];

const serviceOptions = [
  // Home & Interior Services
  { name: 'Home Improve Services', href: '/pages/services/home-improve', icon: HomeIcon, category: 'interior' },
  { name: 'Interior Services', href: '/pages/services/interior', icon: PaintBucket, category: 'interior' },
  { name: 'Drywall Repairs', href: '/pages/services/drywall', icon: Paintbrush2, category: 'interior' },
  { name: 'Handyman Services', href: '/pages/services/handyman', icon: Wrench, category: 'interior' },
  
  // Kitchen & Bathroom
  { name: 'Kitchen Repairs', href: '/pages/services/kitchen-repairs', icon: Utensils, category: 'kitchen' },
  { name: 'Kitchen Cabinets', href: '/pages/services/kitchen-cabinets', icon: Box, category: 'kitchen' },
  { name: 'Bathroom', href: '/pages/services/bathroom', icon: Droplets, category: 'bathroom' },
  { name: 'Bathroom Repairs', href: '/pages/services/bathroom-repairs', icon: Droplets, category: 'bathroom' },
  
  // Construction & Exterior
  { name: 'Construction Services', href: '/pages/services/construction', icon: Building2, category: 'construction' },
  { name: 'Exterior Services', href: '/pages/services/exterior', icon: Building, category: 'construction' },
  { name: 'Demolitions', href: '/pages/services/demolitions', icon: Hammer, category: 'construction' },
  
  // Additional Services
  { name: 'Emergency Services', href: '/pages/services/emergency', icon: AlertTriangle, category: 'additional' },
  { name: 'Service Areas', href: '/pages/services/areas', icon: MapPin, category: 'additional' }
];

type NavigationItem = {
  name: string;
  shortName?: string;
  href: string;
  icon: React.ElementType;
  isDropdown?: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', shortName: 'About', href: '#', icon: Users, isDropdown: true },
  { name: 'Services', href: '#', icon: Wrench, isDropdown: true },
  { name: 'Reviews', href: '/pages/reviews', icon: Star },
  { name: 'Gallery', href: '/pages/gallery', icon: ImageIcon },
  { name: 'Contact Us', shortName: 'Contact', href: '/pages/contact-us', icon: PhoneCall },
];

const Navbar: FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [pathname]);

  const isCurrentPath = (path: string): boolean => pathname === path;
  
  const toggleMobileDropdown = (name: string) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  return (
    <div className={`sticky top-0 z-50 w-full ${scrolled ? 'shadow-lg shadow-black/10' : ''} transition-all duration-300`}>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-white text-black py-1.5 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6">
            <a href="tel:8185543033" className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>(818) 554-3033</span>
            </a>
            <a href="tel:7027553316" className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>(702) 755-3316</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo.PNG" 
                  alt="TGA Handyman Logo" 
                  className={`transition-all duration-300 ${scrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-14'}`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigation.map((item) => {
                // About Dropdown
                if (item.name === 'About Us') {
                  return (
                    <Menu as="div" className="relative" key={item.name}>
                      {({ open }) => (
                        <>
                          <Menu.Button
                            className={`
                              flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md
                              text-sm font-medium transition-all relative
                              group hover:bg-gray-800
                              ${open ? 'text-green-400' : 'text-gray-300'}
                            `}
                          >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span>{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-green-400' : ''}`} />
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 ${open ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                          </Menu.Button>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute right-0 mt-1 w-64 origin-top-right rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-800">
                              {aboutUsOptions.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <Link
                                      href={option.href}
                                      className={`
                                        flex items-center gap-3 px-4 py-3 text-sm border-l-2
                                        ${active ? 'bg-gray-800 text-green-400 border-l-green-500' : 'text-gray-300 border-l-transparent'}
                                      `}
                                    >
                                      <option.icon className="h-5 w-5 flex-shrink-0" />
                                      <span>{option.name}</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  );
                }

                // Services Dropdown
                if (item.name === 'Services') {
                  return (
                    <Menu as="div" className="relative" key={item.name}>
                      {({ open }) => (
                        <>
                          <Menu.Button
                            className={`
                              flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md
                              text-sm font-medium transition-all relative
                              group hover:bg-gray-800
                              ${open ? 'text-green-400' : 'text-gray-300'}
                            `}
                          >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span>{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-green-400' : ''}`} />
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 ${open ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                          </Menu.Button>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute right-0 mt-1 w-72 origin-top-right rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {/* Interior Services */}
                              <div className="p-2">
                                <div className="px-3 py-1.5 text-sm font-semibold text-green-400 uppercase tracking-wide">
                                  Home & Interior
                                </div>
                                {serviceOptions
                                  .filter(option => option.category === 'interior')
                                  .map((option) => (
                                    <Menu.Item key={option.name}>
                                      {({ active }) => (
                                        <Link
                                          href={option.href}
                                          className={`
                                            flex items-center gap-3 px-3 py-2 text-sm rounded-md
                                            ${active ? 'bg-gray-800 text-green-400' : 'text-gray-300'}
                                          `}
                                        >
                                          <option.icon className="h-5 w-5 flex-shrink-0" />
                                          <span>{option.name}</span>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                              </div>

                              <div className="border-t border-gray-800" />

                              {/* Kitchen & Bathroom */}
                              <div className="p-2">
                                <div className="px-3 py-1.5 text-sm font-semibold text-green-400 uppercase tracking-wide">
                                  Kitchen & Bathroom
                                </div>
                                {serviceOptions
                                  .filter(option => option.category === 'kitchen' || option.category === 'bathroom')
                                  .map((option) => (
                                    <Menu.Item key={option.name}>
                                      {({ active }) => (
                                        <Link
                                          href={option.href}
                                          className={`
                                            flex items-center gap-3 px-3 py-2 text-sm rounded-md
                                            ${active ? 'bg-gray-800 text-green-400' : 'text-gray-300'}
                                          `}
                                        >
                                          <option.icon className="h-5 w-5 flex-shrink-0" />
                                          <span>{option.name}</span>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                              </div>

                              <div className="border-t border-gray-800" />

                              {/* Construction & Additional */}
                              <div className="p-2">
                                <div className="px-3 py-1.5 text-sm font-semibold text-green-400 uppercase tracking-wide">
                                  Construction & More
                                </div>
                                {serviceOptions
                                  .filter(option => option.category === 'construction' || option.category === 'additional')
                                  .map((option) => (
                                    <Menu.Item key={option.name}>
                                      {({ active }) => (
                                        <Link
                                          href={option.href}
                                          className={`
                                            flex items-center gap-3 px-3 py-2 text-sm rounded-md
                                            ${active ? 'bg-gray-800 text-green-400' : 'text-gray-300'}
                                          `}
                                        >
                                          <option.icon className="h-5 w-5 flex-shrink-0" />
                                          <span>{option.name}</span>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  );
                }

                // Standard Navigation Items
                const isExternalLink = item.href.startsWith('http');
                const LinkComponent = isExternalLink ? 
                  ({ children, className }: { children: React.ReactNode, className: string }) => (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {children}
                    </a>
                  ) : 
                  ({ children, className }: { children: React.ReactNode, className: string }) => (
                    <Link href={item.href} className={className}>
                      {children}
                    </Link>
                  );

                return (
                  <LinkComponent
                    key={item.name}
                    className={`
                      flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md
                      text-sm font-medium transition-all duration-200 relative
                      group ${isCurrentPath(item.href)
                        ? 'bg-green-500 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-green-400'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.name}</span>
                    {!isCurrentPath(item.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </LinkComponent>
                );
              })}

              {/* Contact Button - Special Treatment */}
              <Link
                href="/pages/contact-us"
                className="hidden lg:flex items-center gap-1.5 px-5 py-2.5 ml-2
                  text-sm font-medium bg-green-500 text-white rounded-md
                  transition-all duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/20
                  transform hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4 flex-shrink-0" />
                <span>Get a Quote</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-400 hover:bg-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden bg-gray-900 border-b border-gray-800 shadow-xl">
          <div className="divide-y divide-gray-800">
            {navigation.map((item) => {
              // About Us Mobile Dropdown
              if (item.name === 'About Us') {
                return (
                  <div key={item.name} className="py-1.5">
                    <button
                      onClick={() => toggleMobileDropdown('about')}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-gray-300"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 flex-shrink-0 text-green-400" />
                        <span>About Us</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-green-400 transition-transform duration-200 ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                    </button>
                    <Transition
                      show={activeMobileDropdown === 'about'}
                      enter="transition-all duration-300 ease-out"
                      enterFrom="max-h-0 opacity-0"
                      enterTo="max-h-96 opacity-100"
                      leave="transition-all duration-200 ease-in"
                      leaveFrom="max-h-96 opacity-100"
                      leaveTo="max-h-0 opacity-0"
                    >
                      <div className="overflow-hidden bg-gray-800/50">
                        {aboutUsOptions.map((option) => (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="flex items-center gap-3 w-full px-4 py-3 pl-10 text-sm text-gray-300 hover:bg-gray-800 hover:text-green-400"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <option.icon className="h-4 w-4 flex-shrink-0" />
                            <span>{option.name}</span>
                          </Link>
                        ))}
                      </div>
                    </Transition>
                  </div>
                );
              }

              // Services Mobile Dropdown
              if (item.name === 'Services') {
                return (
                  <div key={item.name} className="py-1.5">
                    <button
                      onClick={() => toggleMobileDropdown('services')}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-gray-300"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 flex-shrink-0 text-green-400" />
                        <span>Services</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-green-400 transition-transform duration-200 ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                    <Transition
                      show={activeMobileDropdown === 'services'}
                      enter="transition-all duration-300 ease-out"
                      enterFrom="max-h-0 opacity-0"
                      enterTo="max-h-[1000px] opacity-100"
                      leave="transition-all duration-200 ease-in"
                      leaveFrom="max-h-[1000px] opacity-100"
                      leaveTo="max-h-0 opacity-0"
                    >
                      <div className="overflow-hidden bg-gray-800/50">
                        {['interior', 'kitchen', 'bathroom', 'construction', 'additional'].map((category) => {
                          const categoryServices = serviceOptions.filter(opt => opt.category === category);
                          if (categoryServices.length === 0) return null;
                          
                          return (
                            <div key={category}>
                              <div className="px-10 pt-3 pb-1 text-sm font-semibold text-green-400 uppercase">
                                {category === 'interior' ? 'Home & Interior' : 
                                 category === 'kitchen' ? 'Kitchen' :
                                 category === 'bathroom' ? 'Bathroom' :
                                 category === 'construction' ? 'Construction' : 'Additional Services'}
                              </div>
                              {categoryServices.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-center gap-3 w-full px-4 py-2.5 pl-10 text-sm text-gray-300 hover:bg-gray-800 hover:text-green-400"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <service.icon className="h-4 w-4 flex-shrink-0" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </Transition>
                  </div>
                );
              }

              // Standard Mobile Links
              const isExternalLink = item.href.startsWith('http');
              
              if (isExternalLink) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center gap-3 px-4 py-3.5 text-sm font-medium
                      ${isCurrentPath(item.href) ? 'bg-green-500 text-white' : 'text-gray-300'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3.5 text-sm font-medium
                    ${isCurrentPath(item.href) ? 'bg-green-500 text-white' : 'text-gray-300'}
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile Contact Info */}
            <div className="py-3 px-4 bg-gray-800/50">
              <p className="text-sm font-semibold text-green-400 uppercase mb-2">Contact Us</p>
              <div className="space-y-2">
                <a href="tel:8185543033" className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span>(818) 554-3033</span>
                </a>
                <a href="tel:7027553316" className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span>(702) 755-3316</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;