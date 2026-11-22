import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Emergency Service",
  description:
    "Emergency handyman response in Las Vegas for leaks, broken fixtures, and repairs that cannot wait. TGA Handyman.",
  path: "/pages/services/emergency",
});

export default function EmergencyService() {
  return (
    <ServicePage
      title="Emergency Service"
      description="Leaks, failed fixtures, and repairs that should not sit until the next business day."
      intro={[
        "Call when water is running, a fixture failed, or a door will not secure. TGA Handyman answers both lines and schedules the next available visit, including after hours.",
        "Emergency work is make-safe first: shut the water, stabilize the fixture, then complete the repair or tell you what has to wait for parts.",
      ]}
      image={{ src: "/gallery-50.webp", alt: "Emergency repair response" }}
      sections={[
        {
          title: "Emergency calls",
          items: [
            "Active water leaks",
            "Shutoff and make-safe",
            "Broken fixture replacement",
            "Door and lock failures",
            "Same-day scheduling when a tech is open",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={[
        "Call (818) 554-3033 or (702) 755-3316",
        "We confirm what is failing and how soon we can be there",
        "Make the space safe, then complete the repair",
        "Walk the result with you",
      ]}
      contactTitle="Need someone now?"
      contactDescription="Call first for an active leak. Use the form if the repair can wait for a scheduled visit."
    />
  );
}
