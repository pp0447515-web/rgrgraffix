import type { Metadata } from "next";
import LegalPage, { legalMetadata, type LegalPageData } from "../components/LegalPage";

export const metadata: Metadata = legalMetadata("Cookie Policy", "How cookies and similar technologies may be used on the RGR Graffix website.");

const page: LegalPageData = {
  title: "Cookie Policy",
  updated: "28 October 2026",
  intro: "This policy explains cookies and similar technologies that may be used when you visit the RGR Graffix website.",
  sections: [
    { heading: "1. What cookies are", paragraphs: [
      "Cookies are small text files that a website may store in your browser or device. Similar technologies can remember settings, support site functions, measure performance or help protect a website. Some cookies last only for a session; others remain until they expire or you delete them."
    ]},
    { heading: "2. How cookies may be used", paragraphs: [
      "The cookies and technologies used on this website may change as the site and its service providers change. In general, they may fall into these categories:"
    ], bullets: [
      "Strictly necessary: help deliver core site functions, security, network management or features you have requested. These cannot always be switched off through the website.",
      "Preferences: remember choices such as language or other settings, if those features are enabled.",
      "Analytics and performance: help understand visits and usage so the website can be improved, if an analytics tool is installed.",
      "Marketing or third-party media: support embedded content, social media features or advertising measurement if such integrations are enabled."
    ]},
    { heading: "3. Consent and control", paragraphs: [
      "We do not claim that every category listed above is active on this website. The cookies actually set depend on the website configuration and any third-party services in use. Where applicable law requires consent for non-essential cookies, those cookies should only be used after the required choice has been obtained.",
      "You can usually view, block or delete cookies through your browser settings. Blocking some cookies may affect site features. Browser controls are separate from any consent tool that may be presented on the website."
    ]},
    { heading: "4. Third-party services", paragraphs: [
      "Links to or integrations with services such as social networks, maps, video platforms or WhatsApp may allow those providers to process technical information when you use their features. A third-party website opened from a link is governed by that provider’s own policies. Please review their terms and privacy information before using those services."
    ]},
    { heading: "5. Personal information", paragraphs: [
      "Some cookie identifiers and technical data may be personal information under applicable law when they can identify or be linked to a person. For more information about how we handle personal information, please read our Privacy Policy."
    ]},
    { heading: "6. Changes and contact", paragraphs: [
      "We may update this policy when website technologies or legal requirements change. The latest version will be published on this page with an updated date. For questions, email info@rgrgraffix.co.za or call +27 76 535 2861."
    ]}
  ]
};

export default function CookiePolicyPage() { return <LegalPage page={page} />; }
