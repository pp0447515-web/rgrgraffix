import type { Metadata } from "next";
import LegalPage, { legalMetadata, type LegalPageData } from "../components/LegalPage";

export const metadata: Metadata = legalMetadata("Terms & Conditions", "Terms governing quotations, orders, production, payment, delivery and customer-supplied artwork at RGR Graffix.");

const page: LegalPageData = {
  title: "Terms & Conditions",
  updated: "28 October 2026",
  intro: "These terms explain how quotes, orders and supplied work are handled by RGR Graffix Pty (Ltd). Please read them before confirming an order.",
  sections: [
    { heading: "1. About these terms", paragraphs: [
      "These terms apply to quotations, design work, printing, signage, vehicle branding, apparel, installation and related services supplied by RGR Graffix Pty (Ltd) (RGR Graffix, we, us or our). A written quotation or separate written agreement may set additional terms for a particular job. If terms conflict, the specific terms accepted for that job take precedence to the extent of the conflict.",
      "By accepting a quotation or authorising work to begin, you (the customer or you) agree to the applicable terms. If you are ordering for a business or another person, you confirm that you are authorised to do so."
    ]},
    { heading: "2. Quotations and orders", paragraphs: [
      "A quotation describes the work, specifications, price and any known assumptions. Unless the quotation says otherwise, it is an invitation to place an order and not a binding order until RGR Graffix confirms acceptance. Quotations are valid for the period stated on them; if no period is stated, please ask us to reconfirm the price and availability before accepting.",
      "Prices may need to be revised if you change the design, quantity, dimensions, materials, installation conditions or other specifications, or if information supplied for the quote proves inaccurate. Any change to the price or scope should be agreed before the additional work is undertaken."
    ]},
    { heading: "3. Artwork, proofs and approval", paragraphs: [
      "You are responsible for checking names, spelling, telephone numbers, addresses, logos, colours, dimensions, quantities and other details on artwork or proofs. Production will proceed after you approve the final proof or otherwise authorise production in writing. Approval confirms that you have checked the details.",
      "Screens and printed materials can display colours differently. Exact colour matching, material texture, cutting, fit and finish can vary by process and substrate. If an exact match or particular tolerance is essential, it must be agreed in writing before the order is accepted.",
      "Changes requested after approval may incur extra design, material or production costs and may affect the completion date."
    ]},
    { heading: "4. Customer-supplied content and rights", paragraphs: [
      "You confirm that you own or have permission to use all artwork, photographs, logos, wording, fonts and other material you provide. You authorise us to use that material only as needed to quote for and complete your order.",
      "You are responsible for ensuring that your content is lawful and does not infringe another person's intellectual property, privacy or other rights. We may decline content that we reasonably believe is unlawful or infringes another person's rights."
    ]},
    { heading: "5. Payment and production", paragraphs: [
      "The accepted quotation or invoice will state the price, payment requirements and any deposit or balance due. Where a deposit or advance payment is specified, work or procurement may be held until it has been received. Any agreed payment milestones must be met as stated on the quote or invoice.",
      "We will communicate any material issue that is likely to affect the agreed scope or timing. Unless expressly agreed in writing, ownership of supplied physical goods does not pass until the amount due for those goods has been paid in full. This does not limit rights that cannot legally be excluded."
    ]},
    { heading: "6. Lead times, collection, delivery and installation", paragraphs: [
      "Any completion or delivery date is an estimate unless it is expressly confirmed as a fixed date in writing. Lead times may depend on proof approval, payment, supplier availability, weather, access to the site and other factors outside our reasonable control. We will make reasonable efforts to keep you informed of significant delays.",
      "You must provide accurate delivery details and ensure that the site is safe and accessible for agreed installation work. Site preparation, permits, electrical work, removal of old signage, vehicle cleaning, repairs, access equipment or other work is included only if the quotation says so. Any collection, delivery or installation charge will be set out in the quotation or agreed separately."
    ]},
    { heading: "7. Vehicle branding and surface preparation", paragraphs: [
      "For vehicle graphics, wraps, window frosting and similar applications, you must tell us about relevant paintwork, repairs, resprays, rust, damage, coatings, contamination or other surface conditions before work begins. Existing surface condition can affect adhesion, finish and removal. We may recommend preparation or decline application where the surface is unsuitable.",
      "Removal of vinyl or adhesive may expose pre-existing paint defects or affect paint that is weak, damaged, poorly bonded or not properly cured. Any specific durability, care, removal or warranty terms must be agreed for the particular material and job."
    ]},
    { heading: "8. Inspection, defects and remedies", paragraphs: [
      "Please inspect the goods or completed work within a reasonable time and notify us promptly of any apparent issue, with photographs and order details where helpful. We will assess reported issues and, where appropriate, arrange a reasonable remedy in accordance with the quotation and applicable law.",
      "A remedy may not be available for defects caused by incorrect information or approval, misuse, neglect, unsuitable surfaces, unauthorised alterations, ordinary wear, failure to follow care instructions or events outside our control. Nothing in these terms removes any non-waivable consumer rights under South African law."
    ]},
    { heading: "9. Changes, cancellation and returns", paragraphs: [
      "Because many products are customised or made to order, cancellation after design, material procurement or production has begun may result in charges for work completed, committed costs and materials that cannot reasonably be reused, to the extent permitted by law. Please request any cancellation or change in writing; it is effective only once we confirm it.",
      "Customised goods are not automatically returnable simply because you change your mind. This clause does not override any cancellation, return, refund or other rights that apply under the Consumer Protection Act or other applicable law, including any rights relating to defective or non-conforming goods."
    ]},
    { heading: "10. Liability and events outside our control", paragraphs: [
      "We will exercise reasonable care and skill in providing our services. To the extent permitted by law, we are not responsible for indirect loss, loss of profit or delay caused by inaccurate customer information, late approvals, unsuitable customer-supplied materials or events beyond our reasonable control. Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud or wilful misconduct.",
      "If an event outside our reasonable control prevents or delays performance, we will take reasonable steps to reduce the impact and discuss a practical way forward with you."
    ]},
    { heading: "11. Privacy and applicable law", paragraphs: [
      "Personal information supplied with an enquiry or order is handled in accordance with our Privacy Policy and applicable South African data-protection law. These terms are governed by the laws of the Republic of South Africa, subject to any mandatory rights or protections available to a customer."
    ]},
    { heading: "12. Contact", paragraphs: [
      "For questions about a quote, order, delivery or these terms, email info@rgrgraffix.co.za or call +27 76 535 2861. Please include your quotation or invoice reference where possible."
    ]}
  ]
};

export default function TermsAndConditionsPage() { return <LegalPage page={page} />; }
