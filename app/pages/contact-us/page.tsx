import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Call, email, or message TGA Handyman in Las Vegas. Licensed electrical, plumbing, fixture, and repair service across Southern Nevada.",
  path: "/pages/contact-us",
});

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="TGA Handyman"
        title="Contact Us"
        description="Licensed handyman repairs across Las Vegas and Clark County. Call, email, or send a message — we'll respond with a clear next step."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactForm showHeading={false} />
    </main>
  );
}
