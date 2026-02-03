import { AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What type of products does Helixon Labs supply?",
    answer:
      "Helixon Labs supplies synthetic peptides and chemical reagents intended exclusively for laboratory research and experimental purposes. All products are classified as research-grade chemical compounds and are not pharmaceutical products, medicinal products, dietary supplements, or food products.",
  },
  {
    question: "Who can purchase products from Helixon Labs?",
    answer:
      "Our products are available only to qualified purchasers, including accredited research laboratories, universities, R&D centres, and biotechnology companies. All buyers must register an account, provide institutional affiliation, and certify that products will be used exclusively for legitimate research purposes. We do not sell to individual consumers or the general public.",
  },
  {
    question: "What documentation is provided with each product?",
    answer:
      "Every product shipment includes a batch-specific Certificate of Analysis (COA) detailing purity (determined by HPLC), identity confirmation (mass spectrometry), and other relevant analytical data. Safety Data Sheets (SDS/MSDS) compliant with Regulation (EC) No 1272/2008 (CLP) and the Globally Harmonized System (GHS) are also provided for each compound.",
  },
  {
    question: "What purity levels are guaranteed?",
    answer:
      "All peptide products in our catalogue have a minimum purity specification of ≥98% as determined by reversed-phase High-Performance Liquid Chromatography (HPLC). Identity is confirmed by mass spectrometry (LC-MS or MALDI-TOF). Batch-specific purity data is documented in the Certificate of Analysis accompanying each shipment.",
  },
  {
    question: "How are products stored and shipped?",
    answer:
      "Lyophilized peptide products are stored at -20°C in desiccated conditions and protected from light. Shipments are dispatched using appropriate cold-chain logistics to maintain compound integrity during transit. Specific storage conditions for each product are detailed on the product label and in the accompanying SDS documentation.",
  },
  {
    question: "Does Helixon Labs provide guidance on product applications?",
    answer:
      "No. Helixon Labs provides chemical characterisation data, analytical documentation, and safety information for each product. We do not provide advice, guidance, or recommendations regarding biological activity, therapeutic applications, clinical use, or any other application beyond chemical identification and handling. Users are responsible for conducting their own literature review and risk assessment.",
  },
  {
    question:
      "What regulations govern the sale and supply of these products?",
    answer:
      "Our operations are aligned with the REACH Regulation (EC) No 1907/2006, the CLP Regulation (EC) No 1272/2008, and the Globally Harmonized System (GHS) for chemical classification and labelling. In Spain, we comply with the LSSI-CE (Ley 34/2002), GDPR (Regulation EU 2016/679), and the LOPD-GDD (Organic Law 3/2018). All products are supplied with appropriate safety documentation as required by these regulatory frameworks.",
  },
  {
    question: "Can I request a custom synthesis or bulk quantity?",
    answer:
      "Yes. Helixon Labs can accommodate requests for custom peptide synthesis and bulk quantities of existing catalogue compounds, subject to technical feasibility and regulatory compliance. Please contact our technical department at info@helixonlabs.com with your specifications, including desired sequence, purity requirements, and quantity. All custom orders are subject to the same research-use-only restrictions as catalogue products.",
  },
  {
    question:
      "What happens if Helixon Labs suspects misuse of purchased products?",
    answer:
      "Helixon Labs reserves the right to refuse, cancel, or suspend any order where there is reasonable suspicion that the intended use is inconsistent with legitimate laboratory research. In such cases, payment will be refunded and the buyer's account may be terminated. Helixon Labs may also report suspected illegal activity to the relevant authorities, including AEMPS, law enforcement agencies, and other regulatory bodies as required by applicable law.",
  },
  {
    question: "How does Helixon Labs ensure supply chain traceability?",
    answer:
      "Each product lot is assigned a unique batch number that enables full traceability from the point of manufacture through to delivery. Our supplier qualification programme includes periodic audits and quality reviews. Incoming materials undergo quality control checks before being released for distribution. All batch records, including analytical results and release approvals, are maintained in accordance with our document retention policy.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            Technical & Regulatory Information
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            The following questions address common enquiries regarding our
            products, documentation, regulatory compliance, and terms of supply.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-lg border border-helixon-light bg-white px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-helixon-navy hover:text-helixon-blue py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-helixon-slate leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Notice */}
        <div className="mt-10 flex items-start gap-3 max-w-3xl mx-auto rounded-lg border border-helixon-light bg-muted/30 p-4">
          <AlertCircle className="h-4 w-4 text-helixon-slate shrink-0 mt-0.5" />
          <p className="text-xs text-helixon-slate leading-relaxed">
            This FAQ section provides general information about Helixon Labs
            products and operations. It does not constitute legal, medical,
            pharmaceutical, or scientific advice. For specific regulatory
            enquiries, please consult a qualified professional. Helixon Labs does
            not respond to enquiries regarding human or veterinary applications
            of any product.
          </p>
        </div>
      </div>
    </section>
  );
}
