import {
  FileCheck,
  ShieldCheck,
  PackageSearch,
  ClipboardCheck,
  Thermometer,
  BarChart3,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const qualityPillars = [
  {
    icon: FileCheck,
    title: "Certificate of Analysis (COA)",
    description:
      "Every batch is accompanied by a COA detailing purity (HPLC), identity confirmation (MS), molecular weight verification, and residual solvent analysis. COAs are generated per lot number and available upon request.",
  },
  {
    icon: FileText,
    title: "Safety Data Sheets (SDS/MSDS)",
    description:
      "All products include SDS documentation in accordance with Regulation (EC) No 1272/2008 (CLP) and the Globally Harmonized System (GHS). Sheets detail hazard classification, handling precautions, and emergency measures.",
  },
  {
    icon: PackageSearch,
    title: "Supplier Qualification",
    description:
      "Raw materials and finished compounds are sourced exclusively from qualified manufacturers with documented quality management systems. Supplier audits and qualification reviews are conducted periodically.",
  },
  {
    icon: ClipboardCheck,
    title: "Batch Management",
    description:
      "Each product lot is assigned a unique batch number enabling full traceability from origin to delivery. Batch records include manufacturing date, analytical results, and release approval status.",
  },
  {
    icon: Thermometer,
    title: "Storage & Handling",
    description:
      "Products are stored under controlled conditions (-20°C for peptides) with temperature monitoring. Shipping is performed with appropriate cold-chain logistics to maintain compound integrity.",
  },
  {
    icon: BarChart3,
    title: "Analytical Methods",
    description:
      "Purity is determined by reversed-phase HPLC. Identity is confirmed by LC-MS or MALDI-TOF mass spectrometry. Amino acid composition analysis is performed where applicable.",
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            Quality & Traceability
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            Documentation & Analytical Standards
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            Helixon Labs maintains comprehensive quality documentation for every
            product. Our commitment to traceability ensures that each compound
            can be tracked from its origin through to delivery, with complete
            analytical characterisation available for every batch.
          </p>
        </div>

        {/* Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {qualityPillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-helixon-light hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-helixon-navy/5 mb-4">
                  <pillar.icon className="h-5 w-5 text-helixon-blue" />
                </div>
                <h3 className="font-semibold text-helixon-navy mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-helixon-slate leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regulatory Compliance Banner */}
        <div className="rounded-xl border border-helixon-light bg-gradient-to-r from-helixon-navy to-helixon-blue p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <ShieldCheck className="h-8 w-8 text-helixon-teal-light mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Regulatory Framework Alignment
              </h3>
              <p className="text-helixon-gray text-sm leading-relaxed">
                Our operations are aligned with the principal European regulatory
                frameworks governing the supply and handling of chemical
                substances for research purposes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  code: "REACH",
                  name: "Regulation (EC) 1907/2006",
                  desc: "Registration, Evaluation, Authorisation and Restriction of Chemicals",
                },
                {
                  code: "CLP",
                  name: "Regulation (EC) 1272/2008",
                  desc: "Classification, Labelling and Packaging of Substances and Mixtures",
                },
                {
                  code: "GHS",
                  name: "UN GHS Rev. 10",
                  desc: "Globally Harmonized System of Classification and Labelling",
                },
                {
                  code: "GDP",
                  name: "Good Distribution Practice",
                  desc: "Guidelines for proper storage, transport and traceability",
                },
              ].map((reg) => (
                <div
                  key={reg.code}
                  className="rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-sm font-bold text-helixon-teal-light">
                    {reg.code}
                  </p>
                  <p className="text-xs text-helixon-gray mt-0.5">
                    {reg.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 flex items-start gap-3 text-xs text-helixon-slate max-w-3xl mx-auto">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p>
            Helixon Labs provides products for research use only. The quality
            documentation referenced above pertains to chemical characterisation
            and does not constitute evidence of suitability for any therapeutic,
            diagnostic, or clinical application.
          </p>
        </div>
      </div>
    </section>
  );
}
