import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Handyman Services",
  description:
    "Licensed handyman repairs in Las Vegas. Electrical, plumbing, fixtures, drywall, doors, and everyday fixes by TGA Handyman.",
  path: "/pages/services/handyman",
});

export default function HandymanServices() {
  return (
    <ServicePage
      title="Handyman Services"
      description="The everyday repairs that keep a Las Vegas home or shop working — done by a licensed handyman."
      intro={[
        "TGA Handyman handles the list that piles up: outlets, leaks, fans, doors, drywall, and the fixture that never got finished.",
        "This is repair work, not a general-contracting build-out. We quote the visit, complete it, and walk it with you.",
      ]}
      image={{ src: "/gallery-43.webp", alt: "Handyman repair completed by TGA Handyman" }}
      sections={[
        {
          title: "Typical calls",
          items: [
            "Minor electrical and lighting",
            "Leak and valve repairs",
            "Fan, faucet, and toilet installs",
            "Door and hardware adjustments",
            "Drywall patch and paint",
            "Shelf and furniture assembly",
            "Caulk, trim, and punch-list items",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
      contactDescription="Tell us the repair. We'll confirm whether it is a same-day fix or a short scheduled visit."
    />
  );
}
