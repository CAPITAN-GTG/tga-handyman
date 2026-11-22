import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";
import { repairHighlights, repairProcess } from "@/lib/service-shared";

export const metadata = createPageMetadata({
  title: "Plumbing & Leaks",
  description:
    "Emergency leak response, valve replacements, and minor plumbing repairs in Las Vegas by TGA Handyman.",
  path: "/pages/services/bathroom-repairs",
});

export default function PlumbingRepairs() {
  return (
    <ServicePage
      title="Plumbing & Leaks"
      description="Active leaks, bad valves, and small plumbing failures stopped before they soak the room."
      intro={[
        "When water is where it should not be, the first job is to stop it. TGA Handyman responds to emergency leaks, replaces valves, and handles minor plumbing that does not need a full repipe.",
        "Bath and kitchen leaks are the usual calls: supply lines, shutoffs, traps, and fixtures that drip after a repair was skipped.",
      ]}
      image={{ src: "/gallery-45.webp", alt: "Plumbing and leak repair work" }}
      sections={[
        {
          title: "Plumbing we handle",
          items: [
            "Emergency water leaks",
            "Valve and shutoff replacements",
            "Supply line repairs",
            "Trap and drain fixes",
            "Faucet and toilet leak repairs",
            "Minor plumbing issues",
          ],
        },
      ]}
      highlights={repairHighlights}
      process={repairProcess}
      contactTitle="Leak happening now?"
      contactDescription="Call either line. If we can make it safe today, we will."
    />
  );
}
