import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Fixture Installs",
  description:
    "Ceiling fans, lights, faucets, and toilets installed in Las Vegas by licensed handyman TGA Handyman.",
  path: "/pages/services/bathroom",
});

export default function FixtureInstalls() {
  return (
    <ServicePage
      title="Fixture Installs"
      description="Fans, lights, faucets, and toilets set, sealed, and working on the same visit."
      intro={[
        "A fixture sitting in the box is not a remodel. It is an install. TGA Handyman mounts ceiling fans and lights, sets faucets, and replaces toilets.",
        "We connect to the existing box, valve, or flange, check for leaks or wobble, and clean up the packaging.",
      ]}
      image={{ src: "/gallery-46.webp", alt: "Fixture installation by TGA Handyman" }}
      sections={[
        {
          title: "Installs",
          items: [
            "Ceiling fans",
            "Light fixtures",
            "Faucets and sprayers",
            "Toilets",
            "Towel bars, mirrors, and hardware",
            "Vanity accessories",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
    />
  );
}
