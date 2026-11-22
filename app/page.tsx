import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HomeServices from "@/components/HomeServices";
import WorkShowcase from "@/components/WorkShowcase";
import HowWeWork from "@/components/HowWeWork";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: `${siteConfig.name} | Licensed Handyman in Las Vegas`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function FrontPage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <HomeServices />
      <WorkShowcase />
      <HowWeWork />
      <ContactForm />
    </main>
  );
}
