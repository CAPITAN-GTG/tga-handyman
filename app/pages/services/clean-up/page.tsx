import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Cleanup & Punch-list",
  description:
    "Job cleanup and punch-list repairs in Las Vegas. TGA Handyman closes the last open items and hauls the debris.",
  path: "/pages/services/clean-up",
});

export default function CleanupServices() {
  return (
    <ServicePage
      title="Cleanup & Punch-list"
      description="After the repair — or after someone else's crew left — we close the list and haul the mess."
      intro={[
        "A finished repair includes the floor. TGA Handyman cleans the work area, bags debris, and walks the remaining items with you.",
        "Punch-list visits cover the small misses: a patch, a piece of hardware, a caulk joint, a fixture that was left loose.",
      ]}
      image={{ src: "/gallery-51.webp", alt: "Finished and cleaned repair" }}
      sections={[
        {
          title: "Cleanup work",
          items: [
            "Work-area cleanup",
            "Debris haul-away from the repair",
            "Punch-list walkthroughs",
            "Touch-up paint and caulk",
            "Hardware and fixture corrections",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
