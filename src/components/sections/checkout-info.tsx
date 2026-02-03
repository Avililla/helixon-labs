import { ShieldCheck, UserCheck, ClipboardCheck, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Account Registration",
    description:
      "Purchase is restricted to registered users. During registration, buyers must provide institutional affiliation, research purpose, and professional credentials. Individual consumer accounts are not permitted.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Mandatory Research Certification",
    description:
      'Before completing any purchase, buyers must confirm via mandatory checkbox: "I certify that the products purchased will be used exclusively for laboratory research purposes." Acceptance of Terms & Conditions is required.',
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Declared Use Registration",
    description:
      "Each order records the declared use of the products purchased. This information is retained as part of our due diligence and regulatory compliance programme, and may be disclosed to regulatory authorities upon request.",
  },
  {
    icon: Lock,
    step: "04",
    title: "Secure Processing",
    description:
      "Order processing includes verification of buyer credentials. Helixon Labs reserves the right to request additional documentation and to refuse or cancel any order where the intended use cannot be verified as legitimate research.",
  },
];

export function CheckoutInfoSection() {
  return (
    <section id="account" className="py-20 lg:py-28 bg-gradient-to-b from-helixon-navy to-helixon-blue">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal-light mb-3">
            Account & Purchase Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Verified Buyers Only
          </h2>
          <p className="text-helixon-gray leading-relaxed">
            Access to purchase products requires a verified account. Our
            registration and checkout process is designed to ensure that all
            products reach qualified research professionals and institutions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-helixon-teal-light/30">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-teal/20">
                    <item.icon className="h-5 w-5 text-helixon-teal-light" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-helixon-gray leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Checkout Disclaimer */}
        <div className="mt-10 max-w-3xl mx-auto rounded-lg border border-white/10 bg-white/5 p-5 text-center">
          <p className="text-sm text-helixon-gray">
            Mandatory pre-purchase certification required:
          </p>
          <p className="text-white font-medium mt-2 italic">
            &ldquo;I certify that the products purchased will be used
            exclusively for laboratory research purposes. Not for human or
            veterinary use.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
