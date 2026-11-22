import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Small Repairs",
  description:
    "Small carpentry and general repairs in Las Vegas by TGA Handyman. Repair-level work, not commercial construction.",
  path: "/pages/services/construction",
});

export default function SmallRepairs() {
  return (
    <ServicePage
      title="Small Repairs"
      description="Carpentry-scale fixes: trim, blocking, doors, and the woodwork around a repair."
      intro={[
        "TGA Handyman is a handyman company. When a repair needs a piece of trim, a patched opening, or a door rehung, that work stays with us.",
        "We do not take enterprise construction, facility-wide remodels, or general-contractor build-outs.",
      ]}
      image={{ src: "/gallery-42.webp", alt: "Small carpentry repair" }}
      sections={[
        {
          title: "Repair carpentry",
          items: [
            "Trim repair and replacement",
            "Door hanging and adjustment",
            "Blocking for fixtures and shelves",
            "Small opening repairs",
            "Hardware alignment",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
