import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Doors & Exterior Repairs",
  description:
    "Door, hardware, and small exterior repairs in Las Vegas by TGA Handyman.",
  path: "/pages/services/exterior",
});

export default function ExteriorRepairs() {
  return (
    <ServicePage
      title="Doors & Exterior"
      description="Doors that stick, hardware that fails, and small exterior repairs around the opening."
      intro={[
        "Most exterior calls start at a door: it drags, the closer failed, or the lock no longer catches.",
        "TGA Handyman adjusts, replaces, and installs doors and hardware. We are not a commercial envelope or landscaping contractor.",
      ]}
      image={{ src: "/gallery-52.webp", alt: "Door and exterior repair work" }}
      sections={[
        {
          title: "Exterior repairs",
          items: [
            "Door adjustments and replacements",
            "Locks, handles, and closers",
            "Threshold and sweep repairs",
            "Exterior hardware",
            "Small trim and caulk repairs at openings",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
