import ServicePage from "@/components/ServicePage";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import { repairHighlights } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Service Areas",
  description:
    "TGA Handyman serves Las Vegas, Henderson, North Las Vegas, and Clark County. Licensed repairs across Southern Nevada.",
  path: "/pages/services/areas",
});

export default function ServiceAreas() {
  return (
    <ServicePage
      title="Service Areas"
      description="Las Vegas and Clark County — not a Southern California route."
      intro={[
        "TGA Handyman is based at 1857 Citation Cir, Las Vegas, NV 89123. We schedule repairs across the valley and the rest of Clark County.",
        "If you are just outside the usual loop, call. We will tell you straight whether the drive works for the size of the job.",
      ]}
      sections={[
        {
          title: "Where we work",
          items: [...siteConfig.serviceAreas],
        },
        {
          title: "From the shop",
          body: [
            "Both phone lines reach the same team: (818) 554-3033 and (702) 755-3316. Email handymanservicestga@gmail.com.",
          ],
        },
      ]}
      highlights={repairHighlights}
      contactDescription="Tell us the cross streets or neighborhood and what needs to be fixed."
    >
      <div className="mt-16 border-t border-brand-ink/10 pt-16">
        <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">Shop location</h2>
        <p className="mt-3 font-body text-brand-navy/75">
          1857 Citation Cir, Las Vegas, NV 89123
        </p>
        <iframe
          title="Map of TGA Handyman at 1857 Citation Cir, Las Vegas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.7797665558164!2d-115.1191397!3d36.0731333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0f4b30d6d03%3A0x9f9c4e0f5b6a246d!2s1857%20Citation%20Cir%2C%20Las%20Vegas%2C%20NV%2089123!5e0!3m2!1sen!2sus!4v1647894768825!5m2!1sen!2sus"
          className="mt-6 h-80 w-full border border-brand-ink/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </ServicePage>
  );
}
