import type { Metadata } from "next";
import LegalPage, { legalMetadata, type LegalPageData } from "../components/LegalPage";

export const metadata: Metadata = legalMetadata("Terms of Use", "Rules for accessing and using the RGR Graffix website and its content.");

const page: LegalPageData = {
  title: "Terms of Use",
  updated: "28 October 2026",
  intro: "These terms apply to your access to and use of the RGR Graffix website.",
  sections: [
    { heading: "1. Website owner and acceptance", paragraphs: [
      "This website is operated by RGR Graffix Pty (Ltd) (RGR Graffix, we, us or our). By accessing or using the website, you agree to these Terms of Use. If you do not agree, please do not use the website.",
      "These website terms are separate from the Terms & Conditions that apply to quotations, orders and services."
    ]},
    { heading: "2. Website information", paragraphs: [
      "We aim to keep website information accurate and current, but descriptions, examples, images, availability, prices and turnaround information may be indicative and may change. Website content is general information and is not a binding quotation or guarantee of a particular result. A specific order is governed by the quotation or agreement accepted for that order.",
      "Colours and details shown on a screen may differ from the final printed or installed product. Please request a written quotation and confirm specifications before relying on them."
    ]},
    { heading: "3. Acceptable use", paragraphs: [
      "You may use this website for lawful personal or business enquiries. You must not misuse the website, attempt to gain unauthorised access, interfere with its operation, introduce malicious code, scrape or harvest personal information, or use the site in a way that violates applicable law or the rights of others."
    ]},
    { heading: "4. Intellectual property", paragraphs: [
      "Unless otherwise stated, website text, branding, layout, graphics and other materials are owned by RGR Graffix or used with permission. You may view the website and share links to it for lawful purposes. You may not reproduce, modify, republish, sell or commercially exploit website content without prior written permission, except where the law allows it.",
      "Project photographs may feature customer brands or third-party marks. Those marks remain the property of their respective owners and are displayed for illustrative purposes; their appearance does not imply endorsement."
    ]},
    { heading: "5. Enquiries and third-party links", paragraphs: [
      "Submitting an enquiry does not create a contract or guarantee acceptance of an order. A contract is formed only when an order or quotation is accepted as described in the applicable Terms & Conditions.",
      "The website may link to third-party platforms, such as social networks or WhatsApp. Those services operate under their own terms and privacy practices. We do not control third-party websites and are not responsible for their content or availability."
    ]},
    { heading: "6. Availability, disclaimers and liability", paragraphs: [
      "We may update, suspend or remove website features or content when reasonably necessary. We do not guarantee uninterrupted or error-free access. The website is provided on an “as available” basis to the extent permitted by law.",
      "Nothing in these terms excludes or limits a right or liability that cannot be excluded under South African law. Subject to that, we are not liable for losses caused by reliance on general website information, third-party websites or temporary unavailability."
    ]},
    { heading: "7. Privacy and cookies", paragraphs: [
      "Use of personal information and cookies is described in our Privacy Policy and Cookie Policy. Please review those policies for details and choices."
    ]},
    { heading: "8. Changes and governing law", paragraphs: [
      "We may update these terms by publishing a revised version on this page. The updated version applies from its stated effective or updated date. These terms are governed by the laws of the Republic of South Africa, subject to mandatory legal protections."
    ]},
    { heading: "9. Contact", paragraphs: [
      "Questions about this website can be sent to info@rgrgraffix.co.za or raised by calling +27 76 535 2861."
    ]}
  ]
};

export default function TermsOfUsePage() { return <LegalPage page={page} />; }
