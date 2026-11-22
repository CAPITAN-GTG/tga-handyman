import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Selective Removal",
  description:
    "Selective removal and haul-away for handyman repairs in Las Vegas. TGA Handyman — not full-structure demolition.",
  path: "/pages/services/demolitions",
});

export default function SelectiveRemoval() {
  return (
    <ServicePage
      title="Selective Removal"
      description="Remove the damaged piece so the repair can start. Not a full building demolition."
      intro={[
        "Some repairs start by taking something out: a ruined cabinet door, soaked drywall, a fixture that failed.",
        "TGA Handyman does that selective removal and hauls the debris. We do not demolish structures or clear commercial sites.",
      ]}
      image={{ src: "/gallery-50.webp", alt: "Selective removal before a repair" }}
      sections={[
        {
          title: "What we remove",
          items: [
            "Damaged drywall sections",
            "Failed fixtures and hardware",
            "Cabinet doors and drawers being replaced",
            "Debris from the repair itself",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
