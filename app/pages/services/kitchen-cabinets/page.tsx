import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Cabinet Repairs",
  description:
    "Cabinet door, hinge, and hardware repairs in Las Vegas. TGA Handyman holds M50 cabinet license G71-07498.",
  path: "/pages/services/kitchen-cabinets",
});

export default function CabinetRepairs() {
  return (
    <ServicePage
      title="Cabinet Repairs"
      description="Doors, hinges, slides, and hardware — cabinet repairs backed by M50 license G71-07498."
      intro={[
        "TGA Handyman holds Nevada M50 cabinet manufacturing license #G71-07498. Most calls are simpler than a new kitchen: a door that sags, a slide that sticks, hardware that was never aligned.",
        "We repair and adjust existing cabinets. A full custom kitchen replacement is a different project, and we will tell you if that is what you actually need.",
      ]}
      image={{ src: "/gallery-48.webp", alt: "Cabinet repair and hardware" }}
      sections={[
        {
          title: "Cabinet work",
          items: [
            "Door and drawer adjustments",
            "Hinge and slide replacement",
            "Pull and knob installation",
            "Soft-close upgrades on existing boxes",
            "Minor face-frame and edge repairs",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
