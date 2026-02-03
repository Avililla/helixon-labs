import { Scale, ShieldAlert, Ban, FileWarning, Gavel, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LegalSection() {
  return (
    <section id="legal" className="py-20 lg:py-28 bg-helixon-white bg-molecular">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            Legal & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            Regulatory Framework & Terms of Supply
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            Helixon Labs operates in strict compliance with Spanish and European
            Union regulations. The following legal provisions govern the sale and
            supply of all products through this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Intended Use */}
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-blue/10">
                  <Scale className="h-5 w-5 text-helixon-blue" />
                </div>
                <CardTitle className="text-helixon-navy">
                  Intended Use Declaration
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>
                All products offered by Helixon Labs are intended{" "}
                <strong className="text-helixon-navy">
                  exclusively for in-vitro laboratory research and experimental
                  purposes.
                </strong>
              </p>
              <p>
                These products are chemical reagents supplied for use by
                qualified researchers in controlled laboratory environments.
                They are not pharmaceutical products, medicinal products,
                foodstuffs, cosmetics, dietary supplements, medical devices, or
                veterinary products.
              </p>
              <p>
                These products have{" "}
                <strong className="text-helixon-navy">
                  not been evaluated or authorised by the AEMPS (Agencia
                  Espanola de Medicamentos y Productos Sanitarios), the EMA
                  (European Medicines Agency), or any other health authority
                </strong>{" "}
                for use in humans or animals. No claims regarding therapeutic,
                diagnostic, preventive, or curative properties are made or
                implied.
              </p>
              <p>
                This website does not sell medicinal products, medical devices,
                food products, cosmetics, dietary supplements, or products for
                personal use. It is not a pharmacy, parapharmacy, or health
                commerce platform.
              </p>
            </CardContent>
          </Card>

          {/* Prohibitions */}
          <Card className="border-helixon-red/20 bg-helixon-red/[0.02]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-red/10">
                  <Ban className="h-5 w-5 text-helixon-red" />
                </div>
                <CardTitle className="text-helixon-navy">
                  Express Prohibitions
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-helixon-slate leading-relaxed">
              <p className="mb-3">
                The following uses are{" "}
                <strong className="text-helixon-red">
                  strictly prohibited:
                </strong>
              </p>
              <ul className="space-y-2">
                {[
                  "Human consumption or self-administration",
                  "Veterinary use or animal administration outside approved research protocols",
                  "Use as a pharmaceutical ingredient without regulatory authorisation",
                  "Resale as a health supplement, food product, or cosmetic ingredient",
                  "Clinical, therapeutic, or diagnostic application of any kind",
                  "Any use not consistent with legitimate scientific research",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Ban className="h-3.5 w-3.5 text-helixon-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Buyer Responsibility */}
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-amber/10">
                  <FileWarning className="h-5 w-5 text-helixon-amber" />
                </div>
                <CardTitle className="text-helixon-navy">
                  Buyer Responsibility
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>
                By purchasing products from Helixon Labs, the buyer represents
                and warrants that:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  They are a qualified researcher or represent a legitimate
                  research institution, laboratory, or biotechnology company
                </li>
                <li>
                  Products will be used exclusively for lawful research purposes
                  in a controlled laboratory environment
                </li>
                <li>
                  They have the necessary permits, licences, and authorisations
                  required by applicable local, national, and international law
                </li>
                <li>
                  They assume full responsibility for the safe handling, storage,
                  use, and disposal of all products purchased
                </li>
                <li>
                  They will comply with all applicable regulations including
                  REACH, CLP, and local chemical safety requirements
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Right to Cancel */}
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-navy/10">
                  <Gavel className="h-5 w-5 text-helixon-navy" />
                </div>
                <CardTitle className="text-helixon-navy">
                  Right to Refuse & Cancel Orders
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>
                Helixon Labs reserves the right, at its sole discretion, to:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Refuse to process any order where the intended use is
                  suspected to be inconsistent with legitimate research purposes
                </li>
                <li>
                  Cancel any order and refund payment where there is reasonable
                  suspicion of misuse or diversion
                </li>
                <li>
                  Request additional documentation or verification regarding the
                  identity and qualifications of the buyer
                </li>
                <li>
                  Report any suspected illegal activity to the relevant
                  authorities, including AEMPS and law enforcement agencies
                </li>
                <li>
                  Terminate the account of any buyer in violation of these terms
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12 bg-helixon-light" />

        {/* Aviso Legal / Legal Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ScrollText className="h-5 w-5 text-helixon-blue" />
                <CardTitle className="text-helixon-navy">
                  Aviso Legal — Legal Notice (LSSI-CE)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-helixon-slate leading-relaxed space-y-4">
              <p>
                In compliance with Law 34/2002 on Information Society Services
                and Electronic Commerce (LSSI-CE), the following information is
                provided:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-helixon-light p-4 bg-muted/30">
                <div>
                  <p className="text-xs text-helixon-slate">Company Name</p>
                  <p className="font-medium text-helixon-navy">
                    Helixon Labs, S.L.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">CIF</p>
                  <p className="font-medium text-helixon-navy">B-XXXXXXXX</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">
                    Registered Address
                  </p>
                  <p className="font-medium text-helixon-navy">
                    [Registered Address], Spain
                  </p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">
                    Trade Register
                  </p>
                  <p className="font-medium text-helixon-navy">
                    Registro Mercantil de [City], Tomo X, Folio X, Hoja X
                  </p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">Contact Email</p>
                  <p className="font-medium text-helixon-navy">
                    info@helixonlabs.com
                  </p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">
                    VAT Number (NIF-IVA)
                  </p>
                  <p className="font-medium text-helixon-navy">
                    ESB-XXXXXXXX
                  </p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">Activity</p>
                  <p className="font-medium text-helixon-navy">
                    Supply of chemical reagents for research
                  </p>
                </div>
              </div>

              <Separator className="bg-helixon-light" />

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  Data Protection (GDPR / LOPD-GDD)
                </h4>
                <p>
                  In compliance with Regulation (EU) 2016/679 (GDPR) and Organic
                  Law 3/2018 on Personal Data Protection and Digital Rights
                  Guarantee (LOPD-GDD), Helixon Labs processes personal data
                  solely for order management, customer account administration,
                  and regulatory compliance purposes. Data subjects may exercise
                  their rights of access, rectification, erasure, restriction,
                  portability, and objection by writing to{" "}
                  <span className="font-medium text-helixon-navy">
                    privacy@helixonlabs.com
                  </span>
                  . Data subjects also have the right to lodge a complaint with
                  the{" "}
                  <span className="font-medium text-helixon-navy">
                    Agencia Espanola de Proteccion de Datos (AEPD)
                  </span>{" "}
                  at{" "}
                  <span className="font-medium text-helixon-navy">
                    www.aepd.es
                  </span>
                  .
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  Cookie Policy
                </h4>
                <p>
                  This website uses strictly necessary cookies for session
                  management and site functionality. Analytical cookies are used
                  only with explicit user consent, in accordance with Article 22
                  of the LSSI-CE. Users may configure cookie preferences at any
                  time through browser settings or the cookie consent manager.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  Applicable Law & Jurisdiction
                </h4>
                <p>
                  These terms are governed by Spanish law. Any dispute arising
                  from the use of this website or the purchase of products shall
                  be subject to the exclusive jurisdiction of the courts of
                  [City], Spain, except where mandatory consumer protection rules
                  dictate otherwise.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
