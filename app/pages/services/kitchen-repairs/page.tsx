import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Kitchen Repairs",
  description:
    "Repair-level kitchen work in Las Vegas: faucets, cabinet doors, leaks, and fixtures. TGA Handyman.",
  path: "/pages/services/kitchen-repairs",
});

export default function KitchenRepairs() {
  return (
    <ServicePage
      title="Kitchen Repairs"
      description="Faucets, leaks, cabinet doors, and fixtures — kitchen repairs, not a full kitchen build."
      intro={[
        "Kitchens fail in small ways: a faucet that spins, a hinge that will not close, a supply line that weeps under the sink.",
        "TGA Handyman repairs those items in place. We do not tear out kitchens or run commercial kitchen build-outs.",
      ]}
      image={{ src: "/gallery-47.webp", alt: "Kitchen repair details" }}
      sections={[
        {
          title: "Kitchen repairs",
          items: [
            "Faucet and sprayer replacement",
            "Under-sink leak repairs",
            "Cabinet door and drawer adjustments",
            "Hinge and pull replacement",
            "Caulk and backsplash touch-ups",
            "Disposal disconnects for a plumber when the job is larger",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
