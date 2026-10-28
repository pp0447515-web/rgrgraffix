import type { Metadata } from "next";
import LegalPage, { legalMetadata, type LegalPageData } from "../components/LegalPage";

export const metadata: Metadata = legalMetadata("Privacy Policy", "How RGR Graffix handles personal information in line with South Africa's POPIA.");

const page: LegalPageData = {
  title: "Privacy Policy",
  updated: "28 October 2026",
  intro: "We respect your privacy and aim to handle personal information responsibly in accordance with South Africa’s Protection of Personal Information Act (POPIA).",
  sections: [
    { heading: "1. Who we are", paragraphs: [
      "This policy explains how RGR Graffix Pty (Ltd) (RGR Graffix, we, us or our) collects, uses, stores and shares personal information when you visit our website, contact us, request a quotation or purchase our services.",
      "For privacy questions or requests, contact info@rgrgraffix.co.za or +27 76 535 2861. If you contact us about personal information, please provide enough detail for us to identify and respond to your request safely."
    ]},
    { heading: "2. Information we may collect", paragraphs: [
      "Depending on how you interact with us, we may collect contact and identity details such as your name, email address, telephone number, business name and address; enquiry and order information such as requested services, specifications, artwork, communications, quotations and invoices; and information you choose to include in messages or files.",
      "When you use the website, technical information may also be processed by the website host or service providers, such as IP address, browser and device information, pages requested, timestamps and basic security logs. Cookies or similar technologies may be used as explained in our Cookie Policy."
    ]},
    { heading: "3. Why we use personal information", paragraphs: [
      "We use personal information only for appropriate purposes connected with our business, including:",
    ], bullets: [
      "Responding to questions, enquiries and quotation requests.",
      "Preparing designs, proofs, quotations and orders; producing, delivering or installing requested products and services.",
      "Communicating about approvals, changes, payments, collection, delivery, after-sales support or complaints.",
      "Maintaining business, accounting and tax records and meeting legal obligations.",
      "Protecting our website, preventing fraud or misuse, and resolving disputes.",
      "Sending marketing communications only where permitted by law; you may ask us to stop direct marketing at any time."
    ]},
    { heading: "4. Lawful grounds and consent", paragraphs: [
      "Depending on the circumstances, processing may be necessary to take steps at your request before entering a contract, perform a contract, comply with a legal obligation, pursue a legitimate business interest that does not override your rights, or act on consent where consent is required or relied upon.",
      "Where processing is based on consent, you may withdraw that consent, subject to legal or contractual restrictions and reasonable notice. Withdrawal does not make earlier lawful processing unlawful."
    ]},
    { heading: "5. Sharing information", paragraphs: [
      "We do not sell personal information. We may share information with service providers who help operate our website or business, such as hosting, email, communications, payment, delivery, printing or IT providers, where relevant and subject to appropriate safeguards. We may also disclose information when required by law, to protect rights or safety, or in connection with a lawful business transaction.",
      "Third-party services may process information under their own privacy terms. Where information is transferred or accessed across borders, we will take steps required by applicable law."
    ]},
    { heading: "6. Retention and security", paragraphs: [
      "We keep personal information only for as long as reasonably necessary for the purposes described in this policy, including fulfilling orders, maintaining business records, resolving disputes and meeting statutory retention requirements. The appropriate period depends on the type of information and why it was collected.",
      "We use reasonable organisational and technical safeguards designed to protect information against loss, misuse, unauthorised access, disclosure or alteration. No website, email transmission or storage system can be guaranteed completely secure."
    ]},
    { heading: "7. Your rights", paragraphs: [
      "Subject to applicable law and any lawful limitations, you may ask us to confirm whether we hold personal information about you, request access to it, correct or update inaccurate information, request deletion or destruction where appropriate, object to certain processing, withdraw consent where applicable, or raise a complaint about how information is handled.",
      "We may need to verify your identity and clarify your request before acting. We will respond within the timeframes required by law. You may also complain to the South African Information Regulator if you believe your personal information has been handled unlawfully."
    ]},
    { heading: "8. Children", paragraphs: [
      "Our services and website are directed at customers and businesses generally and are not intentionally designed to collect children's personal information. Please contact us if you believe a child has provided personal information to us without the required authority."
    ]},
    { heading: "9. Links and updates", paragraphs: [
      "Our website may link to third-party websites or platforms. Their privacy practices are governed by their own policies. We may update this Privacy Policy from time to time; the revised version will be posted on this page with an updated date."
    ]},
    { heading: "10. Contact and complaints", paragraphs: [
      "For privacy requests, email info@rgrgraffix.co.za or call +27 76 535 2861. If you are not satisfied with our response, you may contact the Information Regulator of South Africa using the contact details published on its official website."
    ]}
  ]
};

export default function PrivacyPolicyPage() { return <LegalPage page={page} />; }
