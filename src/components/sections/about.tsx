import { useTranslations } from "next-intl";
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

export function AboutSection() {
  const t = useTranslations("about");

  const capabilities = [
    {
      icon: FlaskConical,
      title: t("capabilities.purity.title"),
      description: t("capabilities.purity.description"),
    },
    {
      icon: FileSearch,
      title: t("capabilities.traceability.title"),
      description: t("capabilities.traceability.description"),
    },
    {
      icon: ShieldCheck,
      title: t("capabilities.compliance.title"),
      description: t("capabilities.compliance.description"),
    },
    {
      icon: PackageCheck,
      title: t("capabilities.supply.title"),
      description: t("capabilities.supply.description"),
    },
  ];

  const audiences = [
    { icon: Building2, label: t("audiences.laboratories") },
    { icon: GraduationCap, label: t("audiences.universities") },
    { icon: Microscope, label: t("audiences.rdCentres") },
    { icon: Landmark, label: t("audiences.biotech") },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
              {t("label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-6">
              {t("title")}
            </h2>
            <div className="space-y-4 text-helixon-slate leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-helixon-slate mb-3">
                {t("supplyTo")}
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
