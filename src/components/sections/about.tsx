import {
  ShieldCheck,
  FlaskConical,
  FileSearch,
  PackageCheck,
  Building2,
  GraduationCap,
  Microscope,
  Landmark,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: FlaskConical,
    title: "High-Purity Compounds",
    description:
      "Synthetic peptides and chemical reagents manufactured to strict quality specifications with documented purity levels.",
  },
  {
    icon: FileSearch,
    title: "Full Traceability",
    description:
      "Every product is supplied with a Certificate of Analysis (COA) and Safety Data Sheet (SDS), ensuring complete batch traceability.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Operations aligned with REACH (EC 1907/2006), CLP (EC 1272/2008), and GHS requirements for chemical handling and classification.",
  },
  {
    icon: PackageCheck,
    title: "Controlled Supply Chain",
    description:
      "Rigorous supplier qualification processes, incoming quality control, and proper storage conditions throughout the distribution chain.",
  },
];

const audiences = [
  { icon: Building2, label: "Laboratories" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Microscope, label: "R&D Centres" },
  { icon: Landmark, label: "Biotech Companies" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
              About Helixon Labs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-6">
              Technical Supplier of Research Reagents
            </h2>
            <div className="space-y-4 text-helixon-slate leading-relaxed">
              <p>
                Helixon Labs is a Spain-based supplier specialising in the
                provision of synthetic peptides and chemical reagents for
                scientific research and experimental purposes. Our operations are
                focused exclusively on the B2B supply of laboratory-grade
                compounds to qualified research institutions.
              </p>
              <p>
                We operate with a commitment to quality assurance, batch
                traceability, and full regulatory compliance. Each product in our
                catalogue is accompanied by comprehensive analytical
                documentation, including Certificates of Analysis (COA) and
                Safety Data Sheets (SDS/MSDS).
              </p>
              <p>
                Our role is strictly limited to the supply of chemical compounds
                for research. We do not provide medical advice, therapeutic
                recommendations, or guidance on clinical applications of any
                kind.
              </p>
            </div>

            {/* Audience Tags */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-helixon-slate mb-3">
                We supply to
              </p>
              <div className="flex flex-wrap gap-3">
                {audiences.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-helixon-light bg-helixon-white px-4 py-2"
                  >
                    <item.icon className="h-4 w-4 text-helixon-teal" />
                    <span className="text-sm font-medium text-helixon-navy">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Capability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <Card
                key={cap.title}
                className="border-helixon-light bg-helixon-white/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-teal/10 mb-3">
                    <cap.icon className="h-5 w-5 text-helixon-teal" />
                  </div>
                  <h3 className="font-semibold text-helixon-navy mb-2 text-sm">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-helixon-slate leading-relaxed">
                    {cap.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
