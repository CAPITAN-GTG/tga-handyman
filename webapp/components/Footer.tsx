import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+18185543033" className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>(818) 554-3033</span>
              </a>
              <a href="tel:+17027553316" className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>(702) 755-3316</span>
              </a>
              <a href="mailto:handymanservicestga@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span>handymanservicestga@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=1857 citation cir, Las Vegas, NV 89123" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-300 hover:text-green-500 transition-colors duration-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>1857 Citation Cir, Las Vegas, NV 89123</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-green-500 transition-colors duration-300">Home</Link>
              <Link href="/pages/about-us" className="block text-gray-300 hover:text-green-500 transition-colors duration-300">About Us</Link>
              <Link href="/pages/reviews" className="block text-gray-300 hover:text-green-500 transition-colors duration-300">Reviews</Link>
              <Link href="/pages/gallery" className="block text-gray-300 hover:text-green-500 transition-colors duration-300">Gallery</Link>
              <Link href="/pages/contact-us" className="block text-gray-300 hover:text-green-500 transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* License Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">License</h3>
            <div className="space-y-3 text-gray-300">
              <p>Nevada State Business License: NV 20201930648</p>
              <p>Clark County Business License: #2005425</p>
              <p>M50 - Cabinet Manufacturing: #G71-07498</p>
              <p>R25 - Handyman License: #G70-06742</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} TGA Handyman. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/pages/terms" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Terms
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/pages/privacy" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Privacy
              </Link>
              <span className="text-gray-600">|</span>
              <a href="https://grimo-dev.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors duration-300 text-xs">
                Powered by GrimoDev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 