import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Drywall & Paint",
  description:
    "Drywall patches, texture matching, and spot paint in Las Vegas by TGA Handyman.",
  path: "/pages/services/drywall",
});

export default function DrywallRepairs() {
  return (
    <ServicePage
      title="Drywall & Paint"
      description="Holes, cracks, and water stains patched and painted so the wall reads as one surface."
      intro={[
        "After a leak, a doorknob, or a moved TV, the wall is the part people still see. TGA Handyman patches drywall, matches texture as closely as the existing finish allows, and spots in paint.",
        "This is patch-and-paint, not a whole-home repaint or a commercial framing package.",
      ]}
      image={{ src: "/gallery-49.webp", alt: "Drywall patch and paint repair" }}
      sections={[
        {
          title: "Wall repairs",
          items: [
            "Hole and crack patching",
            "Water-stain repairs after the leak is fixed",
            "Texture matching",
            "Spot prime and paint",
            "Trim touch-ups",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
