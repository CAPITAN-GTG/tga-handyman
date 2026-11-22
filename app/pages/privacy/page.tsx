import PageHero from "@/components/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How TGA Handyman uses information submitted through this website.",
  path: "/pages/privacy",
});

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective from 21 February 2021. This page explains how TGA Handyman handles information you send us."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-16 font-body text-base leading-relaxed text-brand-navy/80 sm:px-6 lg:py-24">
        <p>
          This privacy policy sets out how TGA Handyman uses and protects any information that you
          give TGA Handyman when you use this website. TGA Handyman is committed to ensuring that
          your privacy is protected. Should we ask you to provide certain information by which you
          can be identified when using this website, then you can be assured that it will only be
          used in accordance with this privacy statement.
        </p>
        <p>
          TGA Handyman may change this policy from time to time by updating this page. You should
          check this page from time to time to ensure that you are happy with any changes.
        </p>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">What we collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Name</li>
          <li>Contact information including email address and phone number</li>
          <li>Details you include about the repair</li>
        </ul>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">
          What we do with the information
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your inquiry and schedule the repair.</li>
          <li>Keep an internal record of the request.</li>
          <li>Improve how we describe and deliver the service.</li>
        </ul>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">Security</h2>
        <p>
          We are committed to ensuring that your information is secure. In order to prevent
          unauthorized access or disclosure we have put in place suitable physical, electronic, and
          managerial procedures to safeguard the information we collect online.
        </p>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">Cookies</h2>
        <p>
          A cookie is a small file which asks permission to be placed on your computer. Cookies
          help analyze web traffic or remember preferences. We use traffic information to see which
          pages are useful. A cookie does not give us access to your computer or any information
          other than the data you choose to share. You can accept or decline cookies in your browser.
        </p>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">
          Links to other websites
        </h2>
        <p>
          Our website may contain links to other websites, including Yelp. Once you leave this
          site we do not control that website, and this privacy statement no longer applies.
        </p>
        <h2 className="pt-4 font-display text-2xl font-bold tracking-wide text-brand-ink">
          Controlling your personal information
        </h2>
        <p>
          We will not sell, distribute, or lease your personal information to third parties unless
          we have your permission or are required by law to do so. To review or correct information
          we hold, email {siteConfig.email}.
        </p>
      </div>
    </main>
  );
}
