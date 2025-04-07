import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Clean Up Services | TGA Handyman',
  description: 'Expert clean-up services for residential and commercial properties. We offer post-construction cleanup, deep cleaning, and specialized cleaning solutions. Get a free quote today!',
  keywords: 'clean up services, post construction cleanup, deep cleaning, commercial cleaning, residential cleaning, professional cleaning, construction cleanup, TGA Handyman',
};

export default function CleanUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 