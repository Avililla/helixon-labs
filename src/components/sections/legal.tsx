import { useTranslations } from "next-intl";
import { Scale, Ban, FileWarning, Gavel, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LegalSection() {
  const t = useTranslations("legal");

  const prohibitionItems = t.raw("prohibitions.items") as string[];
  const buyerResponsibilityItems = t.raw("buyerResponsibility.items") as string[];
  const rightToRefuseItems = t.raw("rightToRefuse.items") as string[];

  return (
    <section id="legal" className="py-20 lg:py-28 bg-helixon-white bg-molecular">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-blue/10">
                  <Scale className="h-5 w-5 text-helixon-blue" />
                </div>
                <CardTitle className="text-helixon-navy">
                  {t("intendedUse.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>
                {t("intendedUse.p1")}{" "}
                <strong className="text-helixon-navy">
                  {t("intendedUse.p1Highlight")}
                </strong>
              </p>
              <p>{t("intendedUse.p2")}</p>
              <p>
                {t("intendedUse.p3")}{" "}
                <strong className="text-helixon-navy">
                  {t("intendedUse.p3Highlight")}
                </strong>{" "}
                {t("intendedUse.p3End")}
              </p>
              <p>{t("intendedUse.p4")}</p>
            </CardContent>
          </Card>

          <Card className="border-helixon-red/20 bg-helixon-red/[0.02]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-red/10">
                  <Ban className="h-5 w-5 text-helixon-red" />
                </div>
                <CardTitle className="text-helixon-navy">
                  {t("prohibitions.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-helixon-slate leading-relaxed">
              <p className="mb-3">
                {t("prohibitions.intro")}{" "}
                <strong className="text-helixon-red">
                  {t("prohibitions.introHighlight")}
                </strong>
              </p>
              <ul className="space-y-2">
                {prohibitionItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Ban className="h-3.5 w-3.5 text-helixon-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-amber/10">
                  <FileWarning className="h-5 w-5 text-helixon-amber" />
                </div>
                <CardTitle className="text-helixon-navy">
                  {t("buyerResponsibility.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>{t("buyerResponsibility.intro")}</p>
              <ul className="space-y-2 list-disc list-inside">
                {buyerResponsibilityItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-navy/10">
                  <Gavel className="h-5 w-5 text-helixon-navy" />
                </div>
                <CardTitle className="text-helixon-navy">
                  {t("rightToRefuse.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-helixon-slate leading-relaxed">
              <p>{t("rightToRefuse.intro")}</p>
              <ul className="space-y-2 list-disc list-inside">
                {rightToRefuseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12 bg-helixon-light" />

        <div className="max-w-4xl mx-auto">
          <Card className="border-helixon-light">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ScrollText className="h-5 w-5 text-helixon-blue" />
                <CardTitle className="text-helixon-navy">
                  {t("avisoLegal.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-helixon-slate leading-relaxed space-y-4">
              <p>{t("avisoLegal.intro")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-helixon-light p-4 bg-muted/30">
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.companyName")}</p>
                  <p className="font-medium text-helixon-navy">Helixon Labs, S.L.</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.cif")}</p>
                  <p className="font-medium text-helixon-navy">B-XXXXXXXX</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.registeredAddress")}</p>
                  <p className="font-medium text-helixon-navy">[Registered Address], Spain</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.tradeRegister")}</p>
                  <p className="font-medium text-helixon-navy">Registro Mercantil de [City], Tomo X, Folio X, Hoja X</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.contactEmail")}</p>
                  <p className="font-medium text-helixon-navy">info@helixonlabs.com</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.vatNumber")}</p>
                  <p className="font-medium text-helixon-navy">ESB-XXXXXXXX</p>
                </div>
                <div>
                  <p className="text-xs text-helixon-slate">{t("avisoLegal.activity")}</p>
                  <p className="font-medium text-helixon-navy">{t("avisoLegal.activityValue")}</p>
                </div>
              </div>

              <Separator className="bg-helixon-light" />

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  {t("avisoLegal.gdpr.title")}
                </h4>
                <p>
                  {t("avisoLegal.gdpr.p1")}{" "}
                  <span className="font-medium text-helixon-navy">privacy@helixonlabs.com</span>.{" "}
                  {t("avisoLegal.gdpr.p2")}{" "}
                  <span className="font-medium text-helixon-navy">Agencia Española de Protección de Datos (AEPD)</span>{" "}
                  {t("avisoLegal.gdpr.p3")}{" "}
                  <span className="font-medium text-helixon-navy">www.aepd.es</span>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  {t("avisoLegal.cookies.title")}
                </h4>
                <p>{t("avisoLegal.cookies.text")}</p>
              </div>

              <div>
                <h4 className="font-semibold text-helixon-navy mb-2">
                  {t("avisoLegal.jurisdiction.title")}
                </h4>
                <p>{t("avisoLegal.jurisdiction.text")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
