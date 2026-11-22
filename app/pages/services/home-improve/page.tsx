import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Electrical & Lighting",
  description:
    "GFCI, outlet, switch, and light fixture repairs in Las Vegas by TGA Handyman. Minor electrical done safely.",
  path: "/pages/services/home-improve",
});

export default function ElectricalServices() {
  return (
    <ServicePage
      title="Electrical & Lighting"
      description="Outlets, GFCIs, switches, and fixtures — minor electrical repairs for homes and small commercial spaces."
      intro={[
        "A dead outlet, a GFCI that will not reset, or a fixture that was never hung correctly is a handyman call, not a remodel.",
        "TGA Handyman replaces plugs, switches, bulbs, and light fixtures and leaves the wall and ceiling looking finished.",
      ]}
      image={{ src: "/gallery-44.webp", alt: "Lighting and electrical repair work" }}
      sections={[
        {
          title: "Electrical work we take",
          items: [
            "GFCI replacements",
            "Outlet and switch replacements",
            "Light fixture installation",
            "Bulb and lamp replacements",
            "Ceiling fan wiring swaps on existing boxes",
            "Minor electrical repairs",
          ],
        },
        {
          title: "What this is not",
          body: [
            "We do not pull new service panels or run whole-house rewires. If the job needs a larger electrical contractor, we will say so before anyone starts.",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
      contactDescription="Describe the outlet, fixture, or room. We'll tell you if it is a handyman visit."
    />
  );
}
