import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms of use for the TGA Handyman website.",
  path: "/pages/terms",
});

const terms = [
  "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
  "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
  "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.",
  "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
  "All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.",
  "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.",
  "From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
  "Your use of this website and any dispute arising out of such use of the website is subject to the laws of the United States of America.",
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="font-body text-base leading-relaxed text-brand-navy/80">
          Welcome to our website. If you continue to browse and use this website you are agreeing
          to comply with and be bound by the following terms and conditions of use, which together
          with our privacy policy govern TGA Handyman&apos;s relationship with you in relation to this
          website.
        </p>
        <p className="mt-5 font-body text-base leading-relaxed text-brand-navy/80">
          The term &apos;TGA Handyman&apos; or &apos;us&apos; or &apos;we&apos; refers to the owner of the website whose
          registered office is in the United States of America. The term &apos;you&apos; refers to the user
          or viewer of our website.
        </p>
        <ul className="mt-8 space-y-4">
          {terms.map((term) => (
            <li key={term} className="font-body text-base leading-relaxed text-brand-navy/80">
              {term}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
