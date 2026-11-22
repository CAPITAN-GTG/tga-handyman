import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Interior Repairs",
  description:
    "Interior handyman repairs in Las Vegas: walls, doors, fixtures, and finish details by TGA Handyman.",
  path: "/pages/services/interior",
});

export default function InteriorRepairs() {
  return (
    <ServicePage
      title="Interior Repairs"
      description="Inside the house or suite: walls, doors, fixtures, and the finish details that get skipped."
      intro={[
        "Interior calls are usually a stack of small items. TGA Handyman works through them in one visit when the list is reasonable.",
        "We repair what is already there. We do not bid commercial interior build-outs.",
      ]}
      image={{ src: "/gallery-42.webp", alt: "Interior handyman repairs" }}
      sections={[
        {
          title: "Inside the space",
          items: [
            "Drywall and paint touch-ups",
            "Door and hardware repairs",
            "Light and fan installs",
            "Shelving and hardware",
            "Caulk and trim",
            "Punch-list items",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
