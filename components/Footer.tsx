import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const linkClass =
  "transition-colors duration-300 hover:text-brand-green-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapQuery = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

  return (
    <footer className="bg-brand-ink font-body text-brand-silver">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Contact info
            </h3>
            <div className="space-y-4">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
                >
                  <Phone className="h-5 w-5 text-brand-green" />
                  <span>{phone.display}</span>
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <Mail className="h-5 w-5 text-brand-green" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-green" />
                <span className="text-center md:text-left">{mapQuery}</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Navigate
            </h3>
            <nav className="space-y-4">
              <Link href="/" className={`block text-center md:text-left ${linkClass}`}>
                Home
              </Link>
              <Link href="/pages/about-us" className={`block text-center md:text-left ${linkClass}`}>
                About Us
              </Link>
              <Link href="/pages/reviews" className={`block text-center md:text-left ${linkClass}`}>
                Reviews
              </Link>
              <Link href="/pages/gallery" className={`block text-center md:text-left ${linkClass}`}>
                Gallery
              </Link>
              <Link href="/pages/contact-us" className={`block text-center md:text-left ${linkClass}`}>
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Resources
            </h3>
            <nav className="space-y-4">
              <Link href="/pages/services/emergency" className={`block text-center md:text-left ${linkClass}`}>
                Emergency service
              </Link>
              <Link href="/pages/services/areas" className={`block text-center md:text-left ${linkClass}`}>
                Service areas
              </Link>
              <Link href="/pages/terms" className={`block text-center md:text-left ${linkClass}`}>
                Terms of Service
              </Link>
              <Link href="/pages/privacy" className={`block text-center md:text-left ${linkClass}`}>
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Licenses
            </h3>
            <ul className="space-y-3 text-center text-sm md:text-left">
              {siteConfig.licenses.map((license) => (
                <li key={license.code}>
                  <span className="font-display tracking-wide text-brand-green-bright">{license.code}</span>
                  <span className="mt-0.5 block text-brand-silver">{license.name}</span>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Reviews on Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-brand-steel">
              © {currentYear} TGA Handyman. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/pages/terms" className={`text-brand-steel ${linkClass}`}>
                Terms of service
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/pages/privacy" className={`text-brand-steel ${linkClass}`}>
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <a
                href="https://grimo-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs text-brand-steel ${linkClass}`}
              >
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
