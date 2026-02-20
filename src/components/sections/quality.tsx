import { useTranslations } from "next-intl";
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

export function QualitySection() {
  const t = useTranslations("quality");

  const qualityPillars = [
    {
      icon: FileCheck,
      title: t("pillars.coa.title"),
      description: t("pillars.coa.description"),
    },
    {
      icon: FileText,
      title: t("pillars.sds.title"),
      description: t("pillars.sds.description"),
    },
    {
      icon: PackageSearch,
      title: t("pillars.supplier.title"),
      description: t("pillars.supplier.description"),
    },
    {
      icon: ClipboardCheck,
      title: t("pillars.batch.title"),
      description: t("pillars.batch.description"),
    },
    {
      icon: Thermometer,
      title: t("pillars.storage.title"),
      description: t("pillars.storage.description"),
    },
    {
      icon: BarChart3,
      title: t("pillars.analytical.title"),
      description: t("pillars.analytical.description"),
    },
  ];

  const regulations = [
    {
      code: t("regulatory.items.reach.code"),
      name: t("regulatory.items.reach.name"),
      desc: t("regulatory.items.reach.desc"),
    },
    {
      code: t("regulatory.items.clp.code"),
      name: t("regulatory.items.clp.name"),
      desc: t("regulatory.items.clp.desc"),
    },
    {
      code: t("regulatory.items.ghs.code"),
      name: t("regulatory.items.ghs.name"),
      desc: t("regulatory.items.ghs.desc"),
    },
    {
      code: t("regulatory.items.gdp.code"),
      name: t("regulatory.items.gdp.name"),
      desc: t("regulatory.items.gdp.desc"),
    },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white">
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

        <div className="rounded-xl border border-helixon-light bg-gradient-to-r from-helixon-navy to-helixon-blue p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <ShieldCheck className="h-8 w-8 text-helixon-teal-light mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t("regulatory.title")}
              </h3>
              <p className="text-helixon-gray text-sm leading-relaxed">
                {t("regulatory.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regulations.map((reg) => (
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

        <div className="mt-8 flex items-start gap-3 text-xs text-helixon-slate max-w-3xl mx-auto">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p>{t("notice")}</p>
        </div>
      </div>
    </section>
  );
}
